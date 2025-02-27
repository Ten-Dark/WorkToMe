import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

const tasks = [
  {
    id: 1,
    title: 'Купить продукты',
    description: 'Купить молоко, хлеб и фрукты',
    status: 'в ожидании',
    priority: 'средний',
    dueDate: '2025-02-20',
  },
  {
    id: 2,
    title: 'Закончить проект',
    description: 'Доработать финальные правки перед сдачей',
    status: 'в работе',
    priority: 'высокий',
    dueDate: '2025-02-22',
  },
  {
    id: 3,
    title: 'Позвонить клиенту',
    description: 'Обсудить детали контракта',
    status: 'завершено',
    priority: 'средний',
    dueDate: '2025-02-18',
  },
  {
    id: 4,
    title: 'Записаться к стоматологу',
    description: 'Назначить визит на проверку зубов',
    status: 'в ожидании',
    priority: 'низкий',
    dueDate: '2025-02-25',
  },
  {
    id: 5,
    title: 'Прочитать книгу',
    description: 'Дочитать последние 3 главы',
    status: 'в работе',
    priority: 'низкий',
    dueDate: '2025-02-28',
  },
]

app.get('/', (req, res) => {
  res.send(tasks)
})
app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
