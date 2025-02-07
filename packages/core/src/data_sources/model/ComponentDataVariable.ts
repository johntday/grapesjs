import Component from '../../dom_components/model/Component';
import { toLowerCase } from '../../utils/mixins';
import { DataVariableType } from './DataVariable';

export default class ComponentDataVariable extends Component {
  get defaults() {
    return {
      // @ts-ignore
      ...super.defaults,
      type: DataVariableType,
      path: '',
      defaultValue: '',
    };
  }

  getDataValue() {
    const { path, defaultValue } = this.attributes;
    return this.em.DataSources.getValue(path, defaultValue);
  }

  getInnerHTML() {
    return this.getDataValue();
  }

  static isComponent(el: HTMLElement) {
    return toLowerCase(el.tagName) === DataVariableType;
  }
}
