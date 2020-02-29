import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Spring } from 'react-spring/renderprops';

const FadeInComponent = ({ delay, fromY, toY, children }) => {
    return (
        <VisibilitySensor partialVisibility offset={{ bottom: toY / 2 }}>
            {({ isVisible }) =>
                <Spring
                    delay={delay}
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? `translateY(${toY}px)` : `translateY(${fromY}px)`
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