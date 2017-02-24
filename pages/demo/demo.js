Page({
  data: {
    tempFilePaths: '',
    IsAct: false
  },
  onLoad: function (options) {
  },
  onTap: function (event) {
    wx.showActionSheet({
      itemList: ["拍照", "从相册中获取"],
      success: function (res) {
        if (res.tapIndex == 0) {
          this.changeImg("camera");
        } else if (res.tapIndex == 1) {
          this.changeImg("album");
        }
      }.bind(this)
    })
  },
  changeImg: function (val) {
    wx.chooseImage({
      sizeType: 'compressed',
      sourceType: val,
      success: function (res) {
        this.save(res);
        if (this.data.IsAct) {
          wx.getSavedFileList({
            success: function (res) {
              console.log(res);
              this.data.IsAct=false;
              var tempFilePaths = res.fileList;
              this.setData({
                tempFilePaths: tempFilePaths[tempFilePaths.length - 1].filePath
              });
              if (res.fileList.length > 0) {
                wx.removeSavedFile({
                  filePath: res.fileList[0].filePath,
                })
              }
            }.bind(this)
          })
        }
      }.bind(this)
    })
  },
  save: function (res) {
    this.data.IsAct=true;
    wx.saveFile({
      tempFilePath: res.tempFilePaths[0],
      success: function (res) {
        var savedFilePath = res.savedFilePath;
      }
    })
  }
})