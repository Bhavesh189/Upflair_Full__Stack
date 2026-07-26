import React from 'react'
import Background from './Background'
import '../css/Timing.css'

const Timing = () => {
    return (
        <>
            <Background>


                    <div className="sc">
                        <h2>Resturant Schedule</h2>


                        <table>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Timing</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Sunday</td>
                                    <td>10:00 AM - 20:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Monday</td>
                                    <td>10:00 AM - 20:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>10:00 AM - 20:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>10:00 AM - 20:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Thrusday</td>
                                    <td>10:00 AM - 20:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>10:00 AM - 20:00 PM</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>10:00 AM - 20:00 PM</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

            </Background>
        </>
    )
}

export default Timing