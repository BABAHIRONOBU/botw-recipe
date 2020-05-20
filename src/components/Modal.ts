import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {
  protected emitHiding() {
    this.$emit('hide');
  }
}