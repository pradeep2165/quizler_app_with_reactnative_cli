import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const Quiz = ({navigation}) => {
  const data = require('../data.json');
  const [question, setQuestion] = useState(null);
  const [allOptions, setAllOptions] = useState(null);
  const [qNum, setQNum] = useState(0);
  const [result, setResult] = useState(0);
  const getQuiz = () => {
    try {
      setQuestion(data.results[qNum]);
      setAllOptions(
        shuffle([
          ...data.results[qNum].incorrect_answers,
          ...[data.results[qNum].correct_answer],
        ]),
      );
    } catch (error) {
      console.log('Api call error');
    }
  };

  useEffect(() => {
    setAllOptions(null);
    setQuestion(null);
    getQuiz();
  }, []);

  useEffect(() => {
    setAllOptions(null);
    setQuestion(null);
    getQuiz();
  }, [qNum]);

  const nextQuestion = () => {
    setQNum(qNum + 1);
  };
  const resultHandler = answer => {
    if (question.correct_answer === answer) {
      setResult(result + 1);
    }
    if (qNum !== 9) {
      nextQuestion();
    } else {
      navigation.navigate('Result', {result: result});
    }
  };
  // console.log(allOptions + ' from shuffel');
  return (
    question && (
      <View style={style.container}>
        <View style={style.top}>
          <Text style={style.question}>
            Q{qNum + 1}. {question.question}
          </Text>
        </View>

        {/* <View style={style.option}>
          <TouchableOpacity style={style.optionButton}>
            <Text style={style.options}>{question.correct_answer} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton}>
            <Text style={style.options}> {question.incorrect_answers[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton}>
            <Text style={style.options}>{question.incorrect_answers[1]} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionButton}>
            <Text style={style.options}>{question.incorrect_answers[2]} </Text>
          </TouchableOpacity>
        </View> */}
        {allOptions && (
          <View style={style.option}>
            <TouchableOpacity
              style={style.optionButton}
              onPress={() => resultHandler(allOptions[0])}>
              <Text style={style.options}>{allOptions[0]} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.optionButton}
              onPress={() => resultHandler(allOptions[1])}>
              <Text style={style.options}> {allOptions[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.optionButton}
              onPress={() => resultHandler(allOptions[2])}>
              <Text style={style.options}>{allOptions[2]} </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.optionButton}
              onPress={() => resultHandler(allOptions[3])}>
              <Text style={style.options}>{allOptions[3]} </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={style.buttom}>
          {qNum !== 9 && (
            <TouchableOpacity style={style.button} onPress={nextQuestion}>
              <Text style={style.buttonText}> Skip </Text>
            </TouchableOpacity>
          )}
          {qNum !== 9 && (
            <TouchableOpacity
              style={style.button}
              onPress={() => alert('Please Select any option')}>
              <Text style={style.buttonText}> Next </Text>
            </TouchableOpacity>
          )}
          {qNum === 9 && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Result', {result: result})}
              style={style.button}>
              <Text style={style.buttonText}> Complete </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    padding: 16,
    marginVertical: 12,
  },
  option: {
    padding: 16,
    marginVertical: 12,
    flex: 1,
  },
  buttom: {
    justifyContent: 'space-between',
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1a75af',
    padding: 12,
    borderRadius: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
    fontWeight: '600',
    color: 'gray',
  },
  options: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#34a0a4',
    borderRadius: 12,
  },
});
export default Quiz;
