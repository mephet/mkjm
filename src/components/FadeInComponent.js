import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Spring } from 'react-spring/renderprops';

const FadeInComponent = ({ delay, fromY, toY, children }) => {
    return (
        <VisibilitySensor partialVisibility offset={{ bottom: fromY }}>
            {({ isVisible }) =>
                <Spring
                    delay={delay}
                    to={{
                        opacity: isVisible ? 1 : 0.5,
                        transform: isVisible ? `translateY(${toY})` : `translateY(${fromY})`
                    }}>
                    {springProps => {
                        return (
                            <div style={springProps}>{children}</div>
                        )
                    }}

                </Spring>
            }
        </VisibilitySensor>
    )
}

export default FadeInComponent;