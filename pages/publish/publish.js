// pages/publish/publish.js
var sourceType = [['camrea'], ['album'], ['camera', 'album']]
var sizeType = [['compressed'], ['original'], ['compressed', 'original']]
Page({
  data: {
    DeleteArray: [],
    imageList: [],
    DeleteArry: [],
    previewImage: [],
    Delete: false,

  },
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed', 'original'],
      sourceType: ['camera', 'album'],
      success: function (res) {
        // console.log(res)
        // new_list = [
        //   {
        //     index:"",
        //     image:new_image,
        //      choose:false;
        //   }
        // ]
        var List = that.data.imageList
        var new_image = res.tempFilePaths //new_image是数组
        var previewImage = List.concat(new_image);
        var n = List.length;
        for (var i in new_image) {
          n++;
          var temp = {
            index: n,
            image: new_image[i],
            choose: false
          }
          List.push(temp)
        }
        that.setData({
          imageList: List,
          previewImage: previewImage
        })
      },
      fail: function () {
        console.log('获取图片错误')
      },
      complete: function () {
        console.log('complete')
      }
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src
    wx.previewImage({
      current: current,
      urls: this.data.previewImage
    })
  },
  deletewindow: function () {
    var imageList = this.data.imageList;
    if (imageList == 0) {
      return
    } else {
      this.setData({
        Delete: true
      })
    }
  },
  deleteImage: function (e) {
    var list = this.data.DeleteArry
    var imageList = this.data.imageList
    function del(list, imageList) {
      // console.log(list)
      // console.log(imageList)
      if (list.length < 1) {
        return imageList
      }
      for (var i in imageList) {
        if (list[0] == imageList[i].index) {
          imageList.splice(i, 1);
          list.splice(0, 1);
          return del(list, imageList);
        }
      }
    }
    // console.log(del(list, imageList))
    this.setData({
      imageList: del(list, imageList),
      Delete: false,
      DeleteArray: []
    })
  },
  chooseitem: function (e) {
    var index = e.target.dataset.index
    var DeleteArray = this.data.DeleteArray
    var imageList = this.data.imageList
    DeleteArray.push(index)
    for (let j = 0; j < imageList.length; j++) {
      for (let i = 0; i < DeleteArray.length; i++) {
        if (DeleteArray[i] == imageList[j].index) {
          imageList[j].choose = true;
        }
      }
    }

    console.log('要删除的对象：' + DeleteArray)
    this.setData({
      DeleteArry: DeleteArray,
      imageList: imageList
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },

})