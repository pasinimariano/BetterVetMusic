import React, { useState, useEffect } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import { Button } from '../../commons/button';


export const Alphabet = ({
    wordState,
    setWord,
    Styles
}) => {

    const wordsPerPage = 6
    const [page, setPage] = useState([]);
    const [initialWord, setInitialWord] = useState(0);
    const [lastWord, setLastWord] = useState(wordsPerPage)

    const words = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const alphabet = words.split('');

    const handlePrev = () => {
        if (initialWord > 0) {
            setInitialWord(initialWord - wordsPerPage)
            setLastWord(lastWord - wordsPerPage)
        }
    };

    const handleNext = () => {
        if (lastWord < alphabet.length) {
            setInitialWord(lastWord)
            setLastWord(lastWord + wordsPerPage)
        }
    };

    const handleClick = (word) => {
        setWord(word)
    };

    useEffect(() => {
        const wordsPerPage = alphabet.slice(initialWord, lastWord)

        setPage(wordsPerPage)
    }, [initialWord])

    return (
        <View style= {Styles.alphabetContainer}>
            <Button
                press= {handlePrev}
                text= {`<`}
                Styles= {Styles}
            />
            {
                page.length !== 0
                ?
                (
                   page.map(word => {
                        return (
                            <Button
                                key={word}
                                press= {() => handleClick(word)}
                                text= {word}
                                Styles= {Styles}
                                wordState= {wordState}
                            />
                        )
                   })
                )
                : null
            }
            <Button
                press= {handleNext}
                text= {`>`}
                Styles= {Styles}
            />
        </View>
    )
}