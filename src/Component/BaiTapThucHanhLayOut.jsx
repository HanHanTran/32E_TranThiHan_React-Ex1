import React, { Component } from 'react'
import './style.css'

export default class BaiTapThucHanhLayOut extends Component {
    render() {
        return (
            <div>

                <header>
                    <div className='container'>
                        <div id='nav_bars'>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <nav>
                            <div>
                                <h3>Start Bootstrap</h3>
                            </div>

                            <div>
                                <a href="#" className='active'>Home</a>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
                            </div>


                        </nav>
                    </div>


                </header>
                <div className='container'>
                    <div className='carousel d-flex'>
                        <h1>
                            A warm welcome!
                        </h1>
                        <p>
                            Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?


                        </p>
                        <button className='btn btn-primary'>
                            Call to action
                        </button>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-xl-4 col-md-12'>
                            <div className='cart'>
                                <i class="fa-solid fa-laptop-code"></i>
                                <h3>Fresh new layout</h3>
                                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>

                            </div>

                        </div>
                        <div className='col col-xl-4 col-sm-12 col-md-12'>
                            <div className='cart'>
                                <i class="fa-solid fa-cloud"></i>
                                <h3>Fresh new layout</h3>
                                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>

                        </div><div className='col col-xl-4 col-sm-12 col-md-12'>
                            <div className='cart'>
                                <i class="fa-solid fa-book"></i>
                                <h3>Jumbotron hero header</h3>
                                <p>The heroic part of this template is the jumbotron hero header!</p>

                            </div>

                        </div><div className='col col-xl-4 col-sm-12 col-md-12'>
                            <div className='cart'>
                                <i class="fa-brands fa-bootstrap"></i>
                                <h3>Feature boxes</h3>
                                <p>We've created some custom feature boxes using Bootstrap icons!</p>

                            </div>

                        </div><div className='col col-xl-4 col-sm-12 col-md-12'>
                            <div className='cart'>
                                <i class="fa-solid fa-gauge-simple"></i>
                                <h3>Simple clean code</h3>
                                <p>We keep our dependencies up to date and squash bugs as they come!</p>

                            </div>

                        </div><div className='col col-xl-4 col-sm-12 col-md-12'>
                            <div className='cart'>
                                <i class="fa-solid fa-circle-check"></i>
                                <h3>A name you trust</h3>
                                <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>

                            </div>

                        </div>
                    </div>
                </div>
                <footer className='footer bg-dark'>
                    <p>Copyright © Your Website 2022</p>
                </footer>
            </div>
        )
    }
}
