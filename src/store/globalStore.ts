import { ITodo } from '../entities/ITodo';
import { IUser } from '../entities/IUser';

import { createStore } from './createStore';

interface IGlobalStore {
  user: IUser | null;
  todos: ITodo[];
  login(): void;
  logout(): void;
  // addTodo(title: string, author?: string): void;
  // toggleTodoDone(todoId: number): void;
  // removeTodo(todoId: number): void;
}

export const globalStore = createStore<IGlobalStore>((setState) => ({
  user: null,
  todos: [],
  login: () =>
    setState({
      user: {
        email: 'gui@globalhitss.com.br',
        name: 'guiljerme',
      },
    }),
  logout: () => setState({ user: null }),
}));
