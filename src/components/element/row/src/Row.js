export default {
    name: 'ElRow',
    props: {
      gutter: {
        type: Number,
        default: 0,
      },
      type: String,
      justify: {
        type: String,
        default: 'start',
        validator: val => ['start', 'end', 'center', 'space-around', 'space-between'].includes(
          val,
        ),
      },
      align: {
        type: String,
        default: 'top',
        validator: val => ['top', 'middle', 'bottom'].includes(val),
      },
      tag:{
          type:String,
          default:'div'
      }
    },
    computed: {
      style() {
        const style = {};
        if (this.gutter) {
          style.marginLeft = `${-this.gutter / 2}px`;
          style.marginRight = style.marginLeft;
        }
        return style;
      },
    },
    render(createElement){
        // this.$slots.default 获取到默认插槽 sloat
        return createElement(this.tag, {
            class:['el-row',
                {'el-row--flex':this.type ==='flex'},
                this.justify !== 'start' && `is-justify-${this.justify}`,
                this.align !== 'top' && `is-align-${this.align}`
            ],
            type:this.type
        }, this.$slots.default);
    }
  };