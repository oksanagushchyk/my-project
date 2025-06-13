import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Pomodoro() {
  const WORK_TIME = 25 * 60; // 25 minutes
  const BREAK_TIME = 5 * 60; // 5 minutes

  const [secondsLeft, setSecondsLeft] = useState<number>(WORK_TIME);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [onBreak, setOnBreak] = useState<boolean>(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((sec) => {
          if (sec === 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (!onBreak) {
              setSecondsLeft(BREAK_TIME);
              setOnBreak(true);
              setIsRunning(true);
            } else {
              setSecondsLeft(WORK_TIME);
              setOnBreak(false);
              setIsRunning(false);
            }
            return 0;
          }
          return sec - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, onBreak]);

  const formatTime = (secs: number) => {
    const min = Math.floor(secs / 60).toString().padStart(2, '0');
    const sec = (secs % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{onBreak ? 'Break Time' : 'Work Time'}</Text>
      <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
      <View style={styles.buttons}>
        <Button title={isRunning ? 'Pause' : 'Start'} onPress={() => setIsRunning(!isRunning)} />
        <Button
          title="Reset"
          onPress={() => {
            setIsRunning(false);
            setOnBreak(false);
            setSecondsLeft(WORK_TIME);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  timer: { fontSize: 48, fontWeight: 'bold', marginBottom: 20 },
  buttons: { flexDirection: 'row', gap: 20 },
});
