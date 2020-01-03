import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection = () => (
  <div style={styleFooter}>
    <p>
      [<Link to='/privacyPolicy'>プライバシーポリシー</Link>]
      [<Link to='/termsOfUse'>利用規約</Link>]
    </p>
  </div>
)

const styleFooter = {
    backgroundColor: 'orange',
    color: 'white',
    padding: 8
  }

export default FooterSection