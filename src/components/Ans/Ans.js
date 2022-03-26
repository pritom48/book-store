import React from 'react';

const Ans = () => {
    return (
        <div className='container'>
            <h3>1. props vs state!!</h3>
            <p>
                ##props <br />
                1. props are immutable. <br />
                2. which lets React do fast reference checks. <br />
                3. are used to pass data down from your  brview-controller. <br />
                4. your top level component. <br />
                5. have better performance. <br />
                6. use this to pass data to child components. <br />


                ##state <br />
                1. should be managed in your view-controller. <br />
                2. state is mutable. <br />
                3. should not be accessed from child components. <br />
                4. pass it down with props instead. <br />
            </p>
            <h3>2. How useState Works??</h3>
            <p>
                A state can be updated to event handlers, server responses, or prop changes. This is done using setState method.

                setState() method enqueues all the updates made to the component state and instructs React to re-render the component and its children with the updated state.

                Consider the scenario where the subscribe button is clicked. On clicking the button, the display message must change. To implement this, you make use of the setState() method.
            </p>
        </div>
    );
};

export default Ans;