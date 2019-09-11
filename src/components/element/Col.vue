<template>
  <div :class="['el-col', classList]" :style="style">
    <slot></slot>
  </div>
</template>
<style  lang="scss">
@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i/24 * 100%;
  }
  .el-col-offset-#{$i} {
    margin-left: $i/24 * 100%;
  }
  .el-col-push-#{$i} {
    position: relative;
    left: $i/24 * 100%;
  }
  .el-col-pull-#{$i} {
    position: relative;
    right: $i/24 * 100%;
  }
}
// xs
@media only screen and (max-width: 767px) {
  @for $i from 0 through 24 {
    .el-col-xs-0 {
      display: none;
    }
    .el-col-xs-#{$i} {
      width: $i/24 * 100%;
    }
    .el-col-xs-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .el-col-xs-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .el-col-xs-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}
// sm
@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .el-col-sm-0 {
      display: none;
    }
    .el-col-sm-#{$i} {
      width: $i/24 * 100%;
    }
    .el-col-sm-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .el-col-sm-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .el-col-sm-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

// md
@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .el-col-md-0 {
      display: none;
    }
    .el-col-md-#{$i} {
      width: $i/24 * 100%;
    }
    .el-col-md-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .el-col-md-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .el-col-md-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}

// lg
@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .el-col-lg-0 {
      display: none;
    }
    .el-col-lg-#{$i} {
      width: $i/24 * 100%;
    }
    .el-col-lg-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .el-col-lg-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .el-col-lg-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}
// xl
@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .el-col-xl-0 {
      display: none;
    }
    .el-col-xl-#{$i} {
      width: $i/24 * 100%;
    }
    .el-col-xl-offset-#{$i} {
      margin-left: $i/24 * 100%;
    }
    .el-col-xl-push-#{$i} {
      position: relative;
      left: $i/24 * 100%;
    }
    .el-col-xl-pull-#{$i} {
      position: relative;
      right: $i/24 * 100%;
    }
  }
}
</style>
<script>
export default {
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object],
  },
  // gutter 实现 使用计算属性， 首先的先找到判断找到ElRow，使用computed方法
  // ElCol的父级不一定是ElRow, 所以要多级判断寻找拿到ElRow的gutter
  computed: {
    gutter() {
      const parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    style() {
      // 作为注册变量style的值
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    classList() {
      const classList = [];
      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          classList.push(
            prop === 'span'
              ? `el-col-${this[prop]}`
              : `el-col-${prop}-${this[prop]} `,
          );
        }
      });
      //   console.log(classList);
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            classList.push(
              prop === 'span'
                ? `el-col-${size}-${props[prop]}`
                : `el-col-${size}-${prop}-${props[prop]}`,
            );
            console.log(this[prop]);
          });
        }
      });
      return classList;
    },
  },
};
</script>
