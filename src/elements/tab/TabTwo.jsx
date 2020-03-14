import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Education",
        tab2 = "Experience",
        tab3 = "Awards",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">University of Illinois at Chicago | Chicago, Illinois<span> - 05/2021</span></a> Masteer of Science in Computer Science
                                                   <ul>
                                                       <li>Relevant Coursework: Data Structures, Algorithms, Software Engineering (OOP and agile design, UML modeling), Database Systems, Software Development for Mobile Platforms, Object-Oriented Languages, and Environments</li>
                                                   </ul>
                                               </li>
                                               <li>
                                                   <a href="/service">National Tsing Hua University | Hsinchu, Taiwan<span> - 08/2018</span></a> Master of Science in Mechanical Engineering | GPA 3.92
                                               </li>
                                               <li>
                                                   <a href="/service">National Tsing Hua University | Hsinchu, Taiwan<span> - 06/2016</span></a> Bachelor of Science in Mechanical Engineering | GPA 3.44
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Research Assistant / Teaching Assistant<span> - Engineering Design Lab</span></a> 2016-2018
                                               </li>
                                               <li>
                                                   <a href="/service">Research Intern<span> - Precision Motion Industries, Inc.</span></a> 2015-2015
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">User experience design <span> - UI/UX</span></a>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <a href="/service">Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, ...
                                                </li>
                                                <li>
                                                    <a href="/service">Interaction design <span> - Animation</span></a>
                                                    I like to move it move it.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;