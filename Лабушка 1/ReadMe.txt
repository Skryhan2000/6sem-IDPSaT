1. Что такое консолидация данных?

КОНСОЛИДАЦИЯ ДАННЫХ - это способ получения итоговой информации, 
при котором данные могут быть расположены в разных областях
(тот же лист,другие листы книги, другие книги) в соответствии 
с выбранной функцией обработки. Обработанные данные отобразятся 
в одной итоговой таблице.

Два способа консолидации данных: по расположению и по категориям.
ПО РАСПОЛОЖЕНИЮ:
Когда используется: Когда данные исходных областей имеют 
одинаковые порядок и заголовки.
Требования:
Заранее создается область назначения.
Размерность всех обрабатываемых массивов должна быть одинаковой.
ПО КАТЕГОРИЯМ:
Когда используется: Когда данные не упорядочены, но заголовки
одинаковые
Требования:
Указать в диалоговом окне, какие элементы использовать как имена
данных.
Перед включением в диапазон консолидации новых данных из него 
необходимо удалить ссылки, использовавшиеся ранее.

2. Что значит аббревиатура ETL?

ETL(Extract, Transform, Load)- процесс в управлении хранилищами
данных состоящий из извлечения данных из внешних источников,
трансформации для соответствия бизнес-модели, загрузки их
в хранилище.

Архитектура хранилища: источник данных - данные могут быть в 
таблицах, их совокупности и просто файлах, промежуточная 
область - здесь данные организуются во временных таблицах, 
получатель данных - итоговое хранилище.

3. Для чего используется приложение Talend?

TOS это Open Source решение для интеграции данных, т. е. сбор
данных из различных источников, преобразование для удобства и 
сохранение в хранилище. Благодаря 2 шагу может использовать 
разные виды хранилищ. 

4. Какие есть особенности CSV-файлов?

CSV - текстовый формат для представления в табличном виде -
(1,желтый, Redmi Note 5, 300 -строка текста при трансформации
строка таблицы из 4 столбцов) - запятая стандартный разделитель, 
но в некоторых средах можно выбрать самостоятельно, например,
при работе через powershell. Формат не полностью по стандартам, 
т. к. это помогает избегать некоторых ошибочных состояний(проблема 
переноса, наличия кавычек и тд.). Во втором случае используют 
двойные кавычки.

5. Что такое сценарии в ТОS? 

Это совокупность настроенных связанных элементов, в результате 
работы которых происходит консолидация данных(Не тестовые). 
Элементами могут быть представленые компоненты в зоне Palette,
скрипты и тд.
Тестовые: проверка структуры, состояния документа, ограничений 
и тд.

6. Благодаря чему происходит конверция cvg в Exel?

Благодаря элементу tMap. В настройках которого мы указываем 
связь строк разных таблиц. Т. е. Данные извлекаются из csv
файла, трансформируются и кладутся в соответсвии с маршрутом
прописанным в tMap, так же можно положить несколько элементов
В одну ячейку исходной таблицы, объеденив их таким образом 
(Фамилия,Имя,Отчество- ФамиляИмяОтчества) 

7. Функция ETL Tool?

Промежуточный уровень – промежуточный слой или промежуточная 
база данных используются для хранения данных, извлеченных из 
различных систем исходных данных.

Уровень интеграции данных – уровень интеграции преобразует 
данные из промежуточного уровня и перемещает данные в базу 
данных, где данные объединяются в иерархические группы, часто 
называемые измерениями , в факты и агрегируют факты. 
Комбинация таблиц фактов и измерений в системе DW называется 
схемой .

Уровень доступа. Уровень доступа используется конечными 
пользователями для получения данных для аналитических отчетов 
и информации.

8. Какие есть практики тестирования ETL?

Практики:
-анализировать данные, 
-исправить неверные данные в исходной системе,
-найти совместимый инструмент ETL,
-мониторинг рабочих мест ETL (планирование, аудит и 
мониторинг заданий),
-интегрировать инкрементные данные (внесение только 
измененных записей, а не всей исходный таблицы),
-масштабируемость решения.

9. Почему Excel 2016 задает вопрос о целесообразности открытия
   файлов в формате XLS?

До 2007 этот форма был основным для Excel, Расширение файла XLS, 
может хранить в себе различные изображения. Подобный файл формата, 
имеет возможность хранения диаграмм, которые были построены на 
основе данных в тех или иных ячейках документа. В 2007 было 
выпущено обновление и формат изменился .xlsx. Сейчас старй формат
Excel считает опасным, поврежденным. 
Кроме основной утилиты, можно открыть в Google Drive, браузерах.

