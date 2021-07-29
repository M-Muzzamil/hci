import './App.css';
import header from './images/header.png'
import initial from './images/initial.png'
import stageBack from './images/stageBackground.png'
import stageSofa from './images/stageSofa.png'
import stageFloor from './images/stageFloor.png'



function App() {
  return (
    <div className="App">
      <h1>
      Wedding Planner
      </h1>
      <h2>Muhammad Muzzamil BSCS17065
      </h2>
      <h2>Muhammad Muzzammil BSCS17073
      </h2>
      <h3>
        Project Problem
      </h3>
      <p>
      In Pakistan, there are very few wedding planners that provide A to Z wedding
solutions which includes bridal and groom dresses, their makeover, styling, event setup, decor,
food and venue. Even if there are some companies that provide such services, they don’t have
any good website where you can choose/select different wedding plans and different items as per
your needs. For example, if I want a certain type of stage decor or wedding card or a specific
food item, there is no wedding planner’s website where I can do that and get a quote instantly.
      </p>
      <h3>
        Solution:
      </h3>
      <p>The solution to the above mentioned problem that we are proposing is that there
should be a website where the user can select the services as per his needs. The user can decor
his stage from scratch or select from the samples/templates that are available and make necessary
changes if needed. Similarly, the user can design his card if he wants to or select from the
templates provided and he can see the changes at run time on his screen so he knows what will
be the final look. Moreover, the user can select food items from the provided menu and make
changes according to his needs. Furthermore, the user can select from provided DJs and
Photography packages. While the user is selecting services and making changes, he can see the
quote(pricing) at run time which will be easier for him to decide what to add or remove because

in Pakistan the deciding factor for more than 90% of the families is the price of the
product/service they are getting. This solution is needed to save the user from the hassle of
visiting different wedding planners’ offices, burning fuel and taking out special time for it. The
added benefit for the user is that he can choose from different wedding planners sitting on his
couch and compare prices easily just like we do it while ordering grocery items online. The only
thing that has been done already in this regard is that you can see the services and all but you
don’t get a quote instantly and you have to submit the form or message/email them and then the
company replies accordingly. But as I mentioned above the deciding factor is pricing so the
major USP of our solution is that you’ll be getting the quote at run time.</p>
<h3>
  Target Audience
</h3>
<p>
The target audience for our project will be the upper middle class and elite class of
Pakistan. The reason for this choice is that lower middle class people will obviously not be
interested in hiring a special wedding planner because they do not have sufficient technical
knowledge and mostly their weddings are planned by their uncles and aunt. On the basis of age
will be targeting the people from 18 years above because 18 years is the legal age to marry in
Pakistan and there is no above limit as parents can also use this website to plan their children’s
wedding. The marital status can be both single or married as someone's parents, siblings, family
members and friends can also plan the wedding for them. We will not take occupation and living
apartments as a constraint to measure our target audience because it will not affect the use of the
services that we are providing, as stated in the solution it will be a simple drag and drop
application. The target audience is not very different from us in the usage perspective but we
expect that the user knows how to use computers and surf websites.
</p>

<h2>
  Initial Prototype
</h2>
<img src={initial} alt='initial - prototype' height='300'/>
  <h2>
    Final Prototype
  </h2>  
  <img src={header} alt='initial - prototype' height='300'/>
  <img src={stageBack} alt='Stage back' height='300'/>
  <img src={stageSofa} alt='Stage Sofa' height='300'/>
  <img src={stageFloor} alt='Stage floor' height='300'/>
  </div>
  );
}

export default App;
