import './yunLoading.styl'

class yunLoading {

  constructor(parentDom) {
    if (parentDom === false) {
      this.parentDom = parentDom;
    } else {
      this.parentDom = parentDom || 'body';
    }
    this.id = Date.parse(new Date()) / 1000 + Math.floor(Math.random() * (1 - 1000) + 1000);
  }

  init() {
    let loadingImgUrl = pubImgUrl + 'loading.gif';
    if (this.parentDom !== 'body') {
      this.dom = $(
        `<div class="wrapLoadingTip" data-key="${this.id}">
          <img src=${loadingImgUrl} />
        </div>`);
    } else {
      this.dom = $(
        `<div class="maxLoadingTip" data-key="${this.id}">
          <img src=${loadingImgUrl} />
        </div>`);
    }
    if (this.parentDom && $(this.parentDom).length === 0) {
      console.error('未找到dom：' + this.parentDom);
      return false;
    }
    if ($(this.parentDom).length !== 0 && this.parentDom !== 'body' && $(this.parentDom).css('position') === 'static') {
      console.error('请设置 "' + this.parentDom + '" 的样式属性：position');
      return false;
    }
    if (this.parentDom === false) {
      return false;
    }
    $(this.parentDom).append(this.dom);
  }

  remove() {
    this.dom.remove();
  }

}

export default yunLoading