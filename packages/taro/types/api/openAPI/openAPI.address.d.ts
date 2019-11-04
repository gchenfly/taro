declare namespace Taro {
  namespace chooseAddress {
    type Promised = {
      /**
       * 调用结果
       */
      errMsg: string
      /**
       * 收货人姓名
       */
      userName: string
      /**
       * 邮编
       */
      postalCode: string
      /**
       * 国标收货地址第一级地址
       */
      provinceName: string
      /**
       * 国标收货地址第二级地址
       */
      cityName: string
      /**
       * 国标收货地址第三级地址
       */
      countyName: string
      /**
       * 详细收货地址信息
       */
      detailInfo: string
      /**
       * 收货地址国家码
       */
      nationalCode: string
      /**
       * 收货人手机号码
       */
      telNumber: string
    }
    type Param = {}
  }
  /**
   * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
   *
   * 需要[用户授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) scope.address
   * @since 1.1.0
   * @example
   ```javascript
   Taro.chooseAddress({
     success: function (res) {
       console.log(res.userName)
       console.log(res.postalCode)
       console.log(res.provinceName)
       console.log(res.cityName)
       console.log(res.countyName)
       console.log(res.detailInfo)
       console.log(res.nationalCode)
       console.log(res.telNumber)
     }
   })
   ```
   * @see https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html
   */
  function chooseAddress(OBJECT?: chooseAddress.Param): Promise<chooseAddress.Promised>
}
