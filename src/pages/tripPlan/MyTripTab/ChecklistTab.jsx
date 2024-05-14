import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import color from '../../../styles/colorPalette';
import fontStyles from '../../../styles/fontStyles';
import { AddIcon } from '../../../assets/index';

export const ChecklistTab = () => {
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();

  const handleAddList = () => {
    setShow(false);
    if (todo) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.checklistContainer}>
        <View style={styles.addTodoButton}>
          <Text style={[fontStyles.basicFont01, { color: color.BLUE_500 }]}>체크리스트</Text>
          <TouchableOpacity onPress={() => setShow(true)}>
            <AddIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
        <View>
          {show && (
            <View style={styles.todoInputWrapper}>
              <View style={styles.blankCheckbox} />
              <View style={styles.todoInput}>
                <TextInput
                  placeholder="체크리스트 항목을 입력하세요."
                  placeholderTextColor={color.BLUE_200}
                  onEndEditing={handleAddList}
                  onChangeText={text => setTodo(text)}
                  autoCapitalize="none"
                  autoComplete="none"
                  autoCorrect={false}
                />
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.todoElementWrapper}>
        {todos.map((item, index) => (
          <View key={index} style={styles.todoElement}>
            <BouncyCheckbox
              size={16}
              fillColor={color.BLUE_500}
              unFillColor={color.WHITE}
              iconStyle={{ borderColor: color.BLUE_500, borderRadius: 2 }}
              innerIconStyle={{ borderRadius: 2 }}
              onPress={isChecked => {
                console.log(isChecked);
              }}
            />
            <Text style={styles.todoText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#FFF' },
  checklistContainer: {
    marginLeft: 20,
    marginTop: 24,
  },
  addTodoButton: {
    flexDirection: 'row',
    backgroundColor: color.BLUE_30,
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 36,
    width: 124,
  },
  todoInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 8,
    marginRight: 30,
    gap: 12,
  },
  blankCheckbox: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: color.GRAY_50,
    width: 16,
    height: 16,
  },
  todoInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: color.BLUE_500,
    paddingVertical: 5,
  },
  todoElementWrapper: { marginLeft: 24, marginTop: 12, gap: 4 },
  todoElement: { flexDirection: 'row' },
  todoText: [fontStyles.basicFont01, { color: color.BLUE_500 }],
});
