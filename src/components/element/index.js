import Col from  '@element/col';
import Row from '@element/row';

const componets = [Col, Row];
const install = (Vue) => {
    componets.forEach((component)=>{
        Vue.component(component.name, component);
    })
   
}

// 使用两种到处方式
export default {
        install,
        Col,
        Row
};

export {
    install,
    Col,
    Row
}