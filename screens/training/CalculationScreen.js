import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, Button, Surface } from "@react-native-material/core";
import Generator from '../../lib/generator';
import { storeData, readData } from '../../lib/storage';

export default function CalculationScreen({route}) {
  const {operation, questionCount = 10 } = route.params;
  const [question, setQuestion] = useState(new Generator().generate(operation))
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)

  console.log("This Screen: ", operation, questionCount)
  const generate = () => {
    setQuestion(new Generator().generate(operation))
    setResult(null)
  }

  const solve = async (solution) => {
    console.log(solution === question.answer, solution, question.anwser)
    const solvedResult = solution === question.answer
    setAnswers([...answers, solvedResult]);
    setResult(solvedResult)
    console.log([...answers, solvedResult].length)
    if ([...answers, solvedResult].length === questionCount) await saveResult()
  }

  const saveResult = async () => {
    const results = await readData('user_results') || []
    const correct = answers.filter(a => a).length;
    console.log(results)
    results.push({questions: questionCount, correct, result: correct * questionCount})
    await storeData('user_results', results)
    console.log("Saved results: ", results)
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {result !== null
          ?
          <Stack spacing={2} style={{ margin: 16 }}>
            <Text>Result {result ? 'Correct!' : 'Incorrect'}</Text>
            { 
              answers.length < questionCount 
              ?
              <Stack spacing={2} style={{ margin: 16 }}>
                <Button
                  title="More"
                  onPress={() => generate()}
                />
                <Text>{answers.filter(a => a).length + '/' + questionCount}</Text>
              </Stack>
              :
              <Stack fill center spacing={4}>
                <Surface
                  elevation={2}
                  category="medium"
                  style={{ width: 70, height: 70, color: 'green' }}
                >
                <Text>{(answers.filter(a => a).length * questionCount) + "%"}</Text>
                </Surface>
                <Surface
                  elevation={2}
                  category="medium"
                  style={{ width: 70, height: 70, color: 'green' }}
                >
                <Text>{answers.filter(a => a).length}</Text>
                </Surface>
                <Surface
                  elevation={4}
                  category="medium"
                  style={{ width: 70, height: 70, color: 'red' }}
                  >
                  <Text>{answers.filter(a => !a).length}</Text>
                </Surface>
              </Stack>
            }

          </Stack>
          :
          <Stack spacing={2} style={{ margin: 16 }}>
            <Text>{question.question}</Text>
            {question.fakeAnswers.map((answer, i) =>
              <Button
                key={i}
                title={`${answer}`}
                onPress={() => solve(answer)}
              />
            )}
          </Stack>
        }

      </View>
    );
  }