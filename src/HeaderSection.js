import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSection = () => (
  <div>
    <h3 style={styleHeader}>駄菓子屋付きシェアハウス</h3>
    <p>
      [<Link to='/'>TOP</Link>]
      [<Link to='/vacancy'>空室情報</Link>]
      [<Link to='/news'>最新情報</Link>]
      [<Link to='/inquiry'>お問い合わせ</Link>]
    </p>
  </div>
)

const styleHeader = {
    backgroundColor: 'orange',
    color: 'white',
    padding: 8
  }

export default HeaderSection