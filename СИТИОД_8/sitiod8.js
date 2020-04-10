db = connect("localhost:27017/sitiod8");

function show(query) {
    cursor = query;
    if (Array.isArray(cursor)) {
        printjson(cursor);
    } else {
        while (cursor.hasNext()) {
            printjson(cursor.next());
        }
    }
}
print("1) Выдать упорядоченный список URL ресурсов.");
show(db.logs.distinct("URL"))

print("2) Выдать упорядоченный список IP-адресов пользователей, посетивших ресурс с заданным URL (https://www.youtube.com).");
show(db.logs.find({ "URL": "https://www.youtube.com" }, { IP: 1 }))

print("3) Выдать упорядоченный список URL ресурсов, посещенных в заданный временной период (2020-04-10T10:00:00.992Z - 2020-04-10T22:00:00.992Z).");
show(db.logs.distinct("URL", { timeStamp: { $gt: ISODate("2020-04-10T10:00:00.992Z"), $lt: ISODate("2020-04-10T22:00:00.992Z") } }))

print("4) Выдать упорядоченный список URL ресурсов, посещенных пользовате-лем с заданным IP-адресом (172.217.21.238).");
show(db.logs.find({ "IP": "172.217.21.238" }, { URL: 1 }))


print("5) Выдать список URL ресурсов с указанием суммарной длительности посещения каждого ресурса, упорядоченный по убыванию.");
var emit1 = function () { emit(this.URL, this.timeSpent); }
var red1 = function (key, values) { return Array.sum(values) }
db.logs.mapReduce(emit1, red1, { out: "map" });
show(db.map.find())

print("6) Выдать список URL ресурсов с указанием суммарного количества посещений каждого ресурса, упорядоченный по убыванию.");
var emit2 = function () { emit(this.URL, 1); }
var red2 = function (key, values) { return Array.sum(values) }
db.logs.mapReduce(emit2, red2, { out: "map" });
show(db.map.find())

print("7) Выдать список URL ресурсов с указанием количества посещений каждого ресурса в день за заданный период, упорядоченный URL ресурса и убыванию количества посещений.")
var emit3 = function () { emit(this.URL, 1); }
var red3 = function (key, values) { return Array.sum(values) }
db.logs.mapReduce(emit3, red3, { query: { timeStamp: { $gt: ISODate("2020-04-10T10:00:00.992Z"), $lt: ISODate("2020-04-10T22:00:00.992Z") } }, out: "map" });
show(db.map.find().sort({ "pos": -1 }))


print("8) Выдать список IP-адресов c указанием суммарного количества и суммар-ной длительности посещений ресурсов, упорядоченный по адресу, убы-ванию количества и убыванию длительности.");
var emit4 = function () { emit(this.URL, { connections: 1, timeSpent: this.timeSpent }); }
var red4 = function (key, values) {
    connections_val = 0;
    time_val = 0;
    for (i = 0; i < values.length; i++) {
        connections_val += values[i].connections;
        time_val += values[i].timeSpent;
    }
    return { connections: connections_val, time: time_val };
}
db.logs.mapReduce(emit4, red4, { out: "map" });
show(db.map.find().sort({ "value.connections": -1, "value.timeSpent": -1 }))