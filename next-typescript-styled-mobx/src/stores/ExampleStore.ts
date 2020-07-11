import { action, observable } from 'mobx'

export class ExampleStore {
  @observable num: number = 0

  @action add() {
    this.num += 1
  }

  @action reset() {
    this.num = 0
  }
}
