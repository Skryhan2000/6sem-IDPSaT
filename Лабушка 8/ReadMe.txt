1. Какие средства используются для работы с БД под MongoDB?

MongoDB - документоориентированная система управления базами данных (СУБД) 
с открытым исходным кодом, не требующая описания схемы таблиц. 
Классифицирована как NoSQL, использует JSON-подобные документы и схему базы 
данных. 
Система поддерживает ad-hoc-запросы: они могут возвращать конкретные поля 
документов и пользовательские JavaScript-функции.Поддерживается поиск по 
регулярным выражениям. Также можно настроить запрос на возвращение случайного 
набора результатов. Имеется поддержка индексов.
Поддерживается JavaScript в запросах, функциях агрегации (например, в MapReduce).
Есть несколько сайтов дающих доступ к хранилищам MongoDB, есть decstop-приложение,
можно работать через командную строку.
Пример документа:
{
   _id: ObjectId(7bf78ad8902c)
   title: 'MongoDB', 
   description: 'Simple MongoDB Database',
   by: 'proselyte',
   url: 'proselyte.net',
   tags: ['proselyte tutorials', 'NoSQL', 'MongoDB'], 
   developers: [	
      {
         developer:'developer1',
         specialty: 'Java Developer'
      },
      {
         developer: 'developer2'
         specialty: 'C++ Developer'
         }
   ]
}

Структура- ключ-значение

2. Что такое схема данных?

Объекты в MongoDB использует JSON-подобные документы, в Монго структура 
объекта не декларируется схемой. Наборы объектов хранятся в виде коллекций 
и каждый объект может иметь собственную структуру, но данный подход редко 
встречается на практике. 
схема же выступает как правила организации данных в объектах, что создаются 
внутри приложения и только потом записываются в БД. 
В ней прописаны названия полей и типы данных, допускается как примитивные типы, 
так и более сложные (списки и тд.). 
Для создание схемы (на примпере работы с NodeJS) устанавливаем пакет mongoose,
из которого будем использовать Schema, пример схемы:

const mongoose=require('mongoose') //Подключение пакета JS для MDB
const Schema = mongoose.Schema; //Создание инициализация пользовательского типа 
//тип из пакета
const categorySchema = new Schema ({ //Создание объекта
//Инициализация полей(3) объекта с миграцее поля user из другой коллекции
    name:{ 
        type: String,
        required: true
    },
    imagePath:{
        type: String,
        default:''
    },
    user:{
        ref:'users',
        type: Schema.Types.ObjectId
    }
})

module.exports=mongoose.model('category', categorySchema) //Экспорт созданной 
//схемы

Далее в коде для работы с Монго мы дублируем названия из схемы для с этими 
данными.


3. Особенности получения доступа к БД?

Каждый раз для получения доступа мы авторизируемся. Можно сделать это автоматич.
Файл config:
mongoURI:'mongodb+srv://Логин:Пароль@cluster0-zbpsz.mongodb.net/fullstack',
//Состоит из логина пользователя, пароля, названия кластера(хранилище 
коллекций) в составе адреса по которому лежит кластер
Файл app.js (основной для управления приложением):
const keys= require('./config/keys')  //Инициализируем объект данными файла

mongoose.connect(keys.mongoURI) //Подключаемся к Монго с помощью разрешающего
//URL
.then(()=>console.log('MongoDB connected.')) //Прописываем отклики
.catch(error=>console.log(error))

В случае работы с облачными хранилищами требуется подключения интернета, так
же в зависимости от ресурса есть дополнительный контроль получения доступа
в виде ограничений на подключение по IP-адресу, пользователю кластера.

4. Какие преимущества в использовании Mongo?

Нет потребности в сценария, т. к. есть много встроенных функций. Можно хранить
больше информации благодаря горизонтального масштабирования данных. Содержимое
документа, а именно JSON/BSON легче кодируется.
Т. е. выделим характеристики:
1. Гибкость (JSON) 
2. Мощность (Характеристики RDBMS связаны с данными, похоже на map в ООП)
3. Скорость и масштабируемость (Связанная информация в одном документе
как на примере схему(2 вопрос). Минус дублирование данных=> больше объем, 
кроме того не является решением для организации сложных, неоднозначных задач )
4. Легкость использования

5. Какая есть альтернатива внешним ключам в Монго?

В MongoDB также можно устанавливать ссылки. Два способа ручная установка ссылок
и автоматическое связывание.
Ручная установка ссылок сводится к присвоению значения поля _id одного документа 
полю другого документа.
Пример: 
db.companies.insert({"_id" : "microsoft", year: 1974})
db.users.insert({name: "Tom", age: 28, company: "microsoft"})

Действия происходят в одном кластере. Сначала добавляем значение в коллекцию
companies, затем через id связываем объекты коллекций. 

db.companies.findOne({_id: user.company})

По данной команде получим вывод: {"_id" : "microsoft", year: 1974}

Автоматическое связывание использует функциональность DBRef.
Пример:
apple=({"name" : "apple", "year": 1976})
db.companies.save(apple)

Метод save при добавлении нового документа генерирует _id, в отличае от 
прошлого примера.

steve = ({"name": "Steve", "age": 25, company: new DBRef('companies', apple._id)})
db.users.save(steve)
 Для связывания с документом apple использовалось следующее выражение company: new DBRef('companies', apple._id)}). Формальный синтаксис DBRef следующий:

1
{ "$ref" : название_коллекции, "$id": значение [, "$db" : название_бд ]}

Первый параметр $ref указывает на коллекцию, где хранится связанный документ. 
Второй параметр указывает на значение, которое и будет представлять что-то типа 
внешнего ключа. Третий необязательный параметр указывает на базу данных.

6. Какие есть операторы выборки?

Условные операторы:
$eq (равно)
$ne (не равно)
$gt (больше чем)
$lt (меньше чем)
$gte (больше или равно)
$lte (меньше или равно)
$in определяет массив значений, одно из которых должно иметь поле документа
$nin определяет массив значений, которые не должно иметь поле документа
Логические операторы:
$or: соединяет два условия, и документ должен соответствовать одному из этих условий
$and: соединяет два условия, и документ должен соответствовать обоим условиям
$not: документ должен НЕ соответствовать условию
$nor: соединяет два условия, и документ должен НЕ соответстовать обоим условиям
Поиск по массивам:
$all: определяет набор значений, которые должны иметься в массиве
$size: определяет количество элементов, которые должны быть в массиве
$elemMatch: определяет условие, которым должны соответствовать элемены в массиве
Другие операторы:
$exists: позволяет извлечь только те документы, в которых определенный ключ 
присутствует или отсутствует (задается булем)
$type: задает регулярное выражение, которому должно соответствовать значение поля
$regex: задает регулярное выражение, которому должно соответствовать значение поля

7. Какой инструмент может упростить выборку по определенному полю в миллионной 
коллекции?

В этом случае нам могут помочь индексы.

db.users.createIndex({"name" : 1})

Таким образом с помощью метода createIndex устанавливается индекс по полю name. 
MongoDB позволяет установить до 64 индексов на одну коллекцию.

Чтобы в коллекцию можно было добавлять документ с одним и тем же значением 
ключа только один раз, мы можем установить флаг unique:
db.users.createIndex({"name" : 1}, {"unique" : true})

Также можно задать уникальный индекс сразу для двух полей:
db.users.createIndex({"name" : 1, "age" : 1}, {"unique" : true})
Однако в этом случае все добавляемые документы должны иметь уникальные значения 
для обоих полей.
Кроме того, тут есть свои ограничения. Например, значение поля, по которому идет 
индексация, не должно быть больше 1024 байт.