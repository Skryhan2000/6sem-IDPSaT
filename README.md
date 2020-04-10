Список вопросов на лабы 2,3,4,8
=====================
Вопросы и ответы на лабу 2:
-----------------------------------
**1) Что такое Tableau?**
***
Tableau — это система интерактивной аналитики, которая позволяет в очень быстрые сроки делать точный, глубокий и разносторонний анализ большого количества информации и которая не требует специального обучения пользователей и дорогостоящего оборудования.
*** 
**2) Преимущества Tableau?**
***
1. Небольшая цена
2. Простота использования
3. Быстрая установка на ОС
4. Понятный для нового пользователя интерфейс
5. Визуализация данных
6. Карты
7. Можно обрабатывать информацию разных форматов 
*** 
**3) Недостатки Tableau**
***
1. Нет глобального поиска
2. Невозможно использовать динамические параметры, формулы для расчета значений, динамически названия формул, изменять значение одного параметра при смене другого и тд.
3. Нельзя сравнивать агрегированные и не агрегированные данные
4. Не обрабатывает иерархические связи, исключение только для дат
5. Оптимизация производительности 
*** 
**4) Принцип работы Tableau**
***
Алгоритм работы с данными в Tableau состоит из трех главных этапов: выбор источника данных, визуализация данных и публикация результата. 
*** 
**5) Какие источники данных поддерживает Tableau?**
*** 
Tableau поддерживает большое количество источников данных, такие как: таблицы, статистические файлы, БД, многомерные кубы и даже онлайн-источники, включая Google Analytics, Amazon Redshift и Salesforce. 
*** 
Вопросы и ответы на лабу 3:
-----------------------------------
**1) Сколько видов видов подключений в Tablau?**
***
2 
*** 
**2) Как называется виды подключения?**
***
Live и Extract 
*** 
**3) Что они означают?**
***
При прямом подключении, данные в Tableau будут обновляться при каждом изменении источника.
Экстракт — это одномоментный сжатый снимок имеющихся данных в источнике, который хранится локально на компьютере и подгружается в память программы.
Обновление экстракта может происходить каждые 15 минут. При этом, можно выполнять как полное обновление экстракта с нуля, так и инкрементальное обновление, которое добавляет только новые строки. 
*** 
**4) Как это влияет на работу программы?**
***
Прямое подключение доступно не ко всем источникам данных в Tableau, а также не всегда удобно в использовании. Так как прямое подключение увеличивает нагрузку на вычислительную мощность и может замедлять процесс работы с данными в Tableau.
Если Ваш компьютер "слабый", то на помощь приходит экстракт, т.к. при его создании можно оптимизировать, применив фильтры и агрегацию. Тем самым снизится объем данных и повысится скорость работы.
***
**5) Какую технологию использует Extract?**
***
Технологию Data Engine — это поколоночная in-memory СУБД, которая при использовании очень ускоряет работу с аналитическими запросами для больших источников данных.
***
Вопросы и ответы на лабу 4:
-----------------------------------
**1) Типы данных таблицы в Tableau**
***
Tableau классифицирует каждый фрагмент данных в одну из четырех категорий, а именно: String, Number, Boolean и datetime. 
***
**2) Функция Show me**
***
Функцию show me можно использовать для применения требуемого представления к существующим данным на листе. Эти виды, на пример, могут быть круговой диаграммой, линейной диаграммой или точечной диаграммой.
***
**3) Рабочие листы в Tableau**
***
Рабочий лист на экране Таблицы – это область, где Вы можете сделать представления для анализа данных(по дефолту стоит 3 листа).
*** 
**4) Виды фильтров в таблице?**
***
Фильтрация – это удаление определенных значений или диапазона значений из набора результатов.
В Таблице есть три основных типа фильтров:
1.Размеры фильтра – это фильтры, которые применяются к полям измерений.
2.Фильтр мер – это фильтры, которые применяются к полям мер.
3.Даты фильтра – это фильтры, которые применяются к полям даты. 
*** 
**5) Линия тренда в Tableau**
***
Линии тренда используются для прогнозирования продолжения определенного тренда переменной. Помимо этого, она помогает определить корреляцию между двумя переменными, наблюдая тенденцию в обеих из них одновременно.
***
Вопросы и ответы на лабу 8:
-----------------------------------
**1) Что такое MongoDB?**
***
MongoDB — это документо-ориентированная СУБД.
***
**2) В чем хранятся данные в MongoDB?**
***
Данные в MongoDB хранятся в документах, объединенных в коллекции. Каждый документ представляет собой JSON-подобную структуру.
*** 
**3) Преимущества MongoDB:**
1. Документо-ориентированное хранилище
2. Гибкий язык формирования запросов
3. Поддержка индексов
4. Быстрые live обновления
5. Профилирования запросов 
*** 
**4) Недостатки MongoDB:**
***
1. Требует большого количества ресурсов
2. Отсутствует транзакция
3. Нет изоляции (это значит, что любые данные, которые считываются одним клиентом, могут параллельно изменяться другим клиентом.)
4. Отсутствует оператор join
*** 
**5) Понятие индекс в MongoDB**
***
Индексы - это особая структура данных, хранящая небольшую часть набора данных. Индекс сохраняет значение конкретного поля или набора полей, которые упорядочены по величине поля, как указано в индексе.
*** 
**6) Сколько индексов создается по умолчанию для новой коллекции?**
***
MongoDB создает только _id для каждой коллекции.
***
