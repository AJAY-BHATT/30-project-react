import React from 'react'
import './styles.css'

function RechargePlan() {
  return (
    <div class="container">
        <h1>Phone Recharge Plans</h1>
        <ul class="recharge-plans">
            <li>
                <span class="speed">4G</span>
                <span class="price">1000</span>
            </li>
            <li>
                <span class="speed">5G</span>
                <span class="price">2000</span>
            </li>
            <li>
                <span class="speed">4G</span>
                <span class="price">2500</span>
            </li>
            <li>
                <span class="speed">5G</span>
                <span class="price">3000</span>
            </li>
            
        </ul>
        <button>Next</button>
    </div>
  )
}

export default RechargePlan