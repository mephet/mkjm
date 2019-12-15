import React from 'react';
import AES from './AES';

class Encryption extends React.Component {

    constructor(props) {
        super(props)

        let exampleText = "aa";
        
        let hexConvertedText = AES.toByteArray(exampleText);

        this.state = {
            exampleText: exampleText,
            hexConvertedText: hexConvertedText
        }
    }

    render() {
        let styles = {
            containerStyle: {
                display: "flex",
                width: "600px",
                flexWrap: "wrap"
            },
            itemStyle: {
                minWidth: `${100 / 4}%`,
                textAlign: "center",
                border: "1px solid black",
                boxSizing: "border-box"
            }
        }

        return (
            <div>
                <h1>Encryption Page</h1>
                <h3>Example Text: {this.state.exampleText}</h3>
                <h3>Byte Array: {this.state.hexConvertedText}</h3>
                {/* <div style={styles.containerStyle}>
                    {data.map(elem => <div style={styles.itemStyle}>{elem}</div>)}
                </div> */}
            </div >
        )
    }

}

export default Encryption;