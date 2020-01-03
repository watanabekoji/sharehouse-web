import React from 'react'
import FormInput from './FormInput' 

export default class InquiryPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      tel: '',
      inquiry: '',
      allok: false
    }
    this.oks = {}
  }
  handleChange (e) {
    // すべての項目がOKになったか?
    this.oks[e.name] = e.isOK
    this.setState({
      [e.name]: e.value,
      allok: (this.oks['name'] && this.oks['email'] && this.oks['tel'] && this.oks['inquiry'])
    })
  }
  handleSubmit (e) {
    window.alert(JSON.stringify(this.state))
    e.preventDefault()
  }
  render () {
    const doChange = e => this.handleChange(e)
    const doSubmit = e => this.handleSubmit(e)
    // Eメールを表すパターン
    const emailPat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // TELを表すパターン
    const telPat = /^([0-9]{3}-?[0-9]{4}-?[0-9]{4})$/
    // ASCII文字以外全部
    const asciiFilter = /[^\u0020-\u007e]+/g
    return (
      <form onSubmit={doSubmit}>
        <FormInput name='name' label='お名前'
          value={this.state.name}
          pattern={/^.+$/}
          onChange={doChange} />
        <FormInput name='email' label='メールアドレス'
          value={this.state.email}
          filter={asciiFilter}
          pattern={emailPat}
          onChange={doChange} />
        <FormInput name='tel' label='電話番号'
          value={this.state.tel}
          filter={/[^0-9-()+]/g}
          pattern={telPat}
          onChange={doChange} />
        <FormInput name='inquiry' label='お問い合わせ内容'
          value={this.state.inquiry}
          pattern={/^.+$/}
          onChange={doChange} />
        <input type='submit' value='送信'
          disabled={!this.state.allok} />
      </form>
    )
  }
}