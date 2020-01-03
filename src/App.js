import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import HeaderSection from './HeaderSection'
import FooterSection from './FooterSection'
import TopPage from './TopPage'
import VacancyPage from './VacancyPage'
import NewsPage from './NewsPage'
import InquiryPage from './InquiryPage'
import PrivacyPolicyPage from './PrivacyPolicyPage'
import TermsOfUsePage from './TermsOfUsePage'

const App = () => (
  <Router>
    <div style={{margin: 20}}>
      <HeaderSection />
      <div>
        <Switch>
          <Route path='/vacancy' component={VacancyPage} />
          <Route path='/news' component={NewsPage} />
          <Route path='/inquiry' component={InquiryPage} />
          <Route path='/privacyPolicy' component={PrivacyPolicyPage} />
          <Route path='/termsOfUse' component={TermsOfUsePage} />
          <Route component={TopPage} />
        </Switch>
      </div>
      <FooterSection />
    </div>
  </Router>
)

export default App