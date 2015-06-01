/*

Online A-RPG Game, Built using Node.js + createjs
Copyright (C) 2015 qhduan(http://qhduan.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
"use strict";

var fs = require("fs");

var SpellModule = require("./spell");

var ACTORS = {};

(function LoadActor () {
  var path = global.DATA_DIR + "/actor";
  var files = fs.readdirSync(path);

  files.forEach(function (element) {
    if (element.indexOf(".json") == -1)
      return;

    var id = element.substr(0, element.length - 5);

    var actorFile = fs.readFileSync(path + "/" + element, {encoding: "utf8"});

    var actorData = JSON.parse(actorFile);

    // 读取角色图片
    actorData.image = "/actor/" + actorData.image;

    // 读取角色技能
    actorData.spells = SpellModule.get(actorData.spells);

    actorData._hp = actorData.hp;
    actorData._sp = actorData.sp;

    ACTORS[actorData.id] = actorData;
  });

  console.log("Actors loaded ", Object.keys(ACTORS).length);
})();

function GetActor(id) {
  if (typeof id == "string") {
    return ACTORS[id];
  } else if (id instanceof Array) {
    var ret = {};
    for (var i = 0; i < id.length; i++) {
      ret[id[i]] = ACTORS[id[i]];
    }
    return ret;
  } else {
    throw "GetActor Invalid Argument";
  }
}

function ListActor () {
  return Object.keys(ACTORS);
}

exports.get = GetActor;
exports.list = ListActor;
