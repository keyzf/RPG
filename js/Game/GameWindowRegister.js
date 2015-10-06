/*

A-RPG Game, Built using JavaScript ES6
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

(function () {
  "use strict";

  var win = Game.windows.register = Game.Window.create("registerWindow");

  win.html = "\n    <div style=\"overflow-y: scroll; height: 100%; position: fixed; width: 100%;\">\n      <div>\n        <label>\n        性别\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"sex\" class=\"\">\n          <option value=\"male\">男性</option>\n          <option value=\"female\">女性</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        皮肤\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"body\" class=\"\">\n          <option value=\"light\">粉白</option>\n          <option value=\"dark\">深色</option>\n          <option value=\"dark2\">更深</option>\n          <option value=\"tanned\">黄白</option>\n          <option value=\"tanned2\">黄灰</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        眼睛\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"eyes\" class=\"\">\n          <option value=\"blue\">蓝色</option>\n          <option value=\"brown\">棕色</option>\n          <option value=\"gray\">灰色</option>\n          <option value=\"green\">绿色</option>\n          <option value=\"orange\">橙色</option>\n          <option value=\"purple\">紫色</option>\n          <option value=\"red\">红色</option>\n          <option value=\"yellow\">黄色</option>\n        </select>\n      </div>\n\n      <div id=\"customMaleHair\">\n        <label>\n        头发\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"hair\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"bedhead\">Bedhead</option>\n          <option value=\"long\">Long</option>\n          <option value=\"longhawk\">Longhawk</option>\n          <option value=\"messy1\">messy1</option>\n          <option value=\"messy2\">messy2</option>\n          <option value=\"mohawk\">Mohawk</option>\n          <option value=\"page\">Page</option>\n          <option value=\"parted\">Parted</option>\n          <option value=\"plain\">Plain</option>\n          <option value=\"shorthawk\">Shorthawk</option>\n        </select>\n      </div>\n\n      <div id=\"customFemaleHair\" style=\"display: none;\">\n        <label>\n        头发\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"hair\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"bangs\">bangs</option>\n          <option value=\"bangslong\">bangslong</option>\n          <option value=\"bangslong2\">bangslong2</option>\n          <option value=\"bunches\">bunches</option>\n          <option value=\"loose\">loose</option>\n          <option value=\"pixie\">pixie</option>\n          <option value=\"ponytail\">ponytail</option>\n          <option value=\"ponytail2\">ponytail2</option>\n          <option value=\"princess\">princess</option>\n          <option value=\"shoulderl\">shoulderl</option>\n          <option value=\"shoulderr\">shoulderr</option>\n          <option value=\"swoop\">swoop</option>\n          <option value=\"unkempt\">unkempt</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        发色\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"haircolor\" class=\"\">\n          <option value=\"black\">Black</option>\n          <option value=\"blonde\">Blonde</option>\n          <option value=\"blonde2\">blonde2</option>\n          <option value=\"blue\">blue</option>\n          <option value=\"blue2\">blue2</option>\n          <option value=\"brown\">brown</option>\n          <option value=\"brown2\">brown2</option>\n          <option value=\"brunette\">brunette</option>\n          <option value=\"brunette2\">brunette2</option>\n          <option value=\"dark-blonde\">dark-blonde</option>\n          <option value=\"gold\">gold</option>\n          <option value=\"gray\">gray</option>\n          <option value=\"gray2\">gray2</option>\n          <option value=\"green\">green</option>\n          <option value=\"green2\">green2</option>\n          <option value=\"light-blonde\">light-blonde</option>\n          <option value=\"light-blonde2\">light-blonde2</option>\n          <option value=\"pink\">pink</option>\n          <option value=\"pink2\">pink2</option>\n          <option value=\"purple\">purple</option>\n          <option value=\"raven\">raven</option>\n          <option value=\"raven2\">raven2</option>\n          <option value=\"redhead\">redhead</option>\n          <option value=\"redhead2\">redhead2</option>\n          <option value=\"ruby-red\">ruby-red</option>\n          <option value=\"white\">white</option>\n          <option value=\"white-blonde\">white-blonde</option>\n          <option value=\"white-blonde2\">white-blonde2</option>\n          <option value=\"white.centerYan\">white.centerYan</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        帽子\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"head\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"chainhat\">chainhat</option>\n          <option value=\"chain_hood\">chain_hood</option>\n          <option value=\"cloth_hood\">cloth_hood</option>\n          <option value=\"leather_cap\">leather_cap</option>\n          <option value=\"red\">red</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        上衣\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"shirts\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"brown\">brown</option>\n          <option value=\"maroon\">maroon</option>\n          <option value=\"teal\">teal</option>\n          <option value=\"white\">white</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        裤子\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"pants\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"magenta\">magenta</option>\n          <option value=\"red\">red</option>\n          <option value=\"teal\">teal</option>\n          <option value=\"white\">white</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        鞋子\n        </label>\n        <select onchange=\"SelectHero(event)\"  data-type=\"shoes\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"black\">black</option>\n          <option value=\"brown\">brown</option>\n          <option value=\"maroon\">maroon</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        头盔\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"armorhelms\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"golden\">黄金</option>\n          <option value=\"metal\">白银</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        胸甲\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"armorchest\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"golden\">黄金</option>\n          <option value=\"metal\">白银</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        臂甲\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"armorarm\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"golden\">黄金</option>\n          <option value=\"metal\">白银</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        腿甲\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"armorlegs\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"golden\">黄金</option>\n          <option value=\"metal\">白银</option>\n        </select>\n      </div>\n\n      <div>\n        <label>\n        足甲\n        </label>\n        <select onchange=\"SelectHero(event)\" data-type=\"armorfeet\" class=\"\">\n          <option value=\"\">无</option>\n          <option value=\"golden\">黄金</option>\n          <option value=\"metal\">白银</option>\n        </select>\n      </div>\n\n      <hr>\n\n      <div>\n        <label>\n        信仰\n        </label>\n        <select id=\"registerWindowBeliefChoice\" onchange=\"ChoiceHero(event)\" data-type=\"belief\">\n          <option value=\"None\">无信仰</option>\n          <option value=\"Elen\">艾琳 - 知识女神</option>\n          <option value=\"Enlon\">恩朗 - 死亡主宰</option>\n          <option value=\"Minare\">密娜 - 丰收女神</option>\n          <option value=\"Achiel\">阿切奥 - 保护之神</option>\n          <option value=\"Racha\">拉克 - 魔法女神</option>\n          <option value=\"Aestor\">阿斯托 - 盗贼之神</option>\n          <option value=\"Hielach\">赫拉克 - 财富之神</option>\n          <option value=\"Alik\">阿丽克 - 治愈女神</option>\n          <option value=\"Amarien\">阿玛恩 - 力量之神</option>\n        </select>\n        <div id=\"registerWindowBelief\"></div>\n      </div>\n\n      <div>\n        <label>\n        职业\n        </label>\n        <select id=\"registerWindowClassChoice\" onchange=\"ChoiceHero(event)\" data-type=\"class\">\n          <option value=\"warrior\">战士</option>\n          <option value=\"archer\">弓箭手</option>\n          <option value=\"wizard\">魔法师</option>\n          <option value=\"priest\">牧师</option>\n          <option value=\"bard\">吟游诗人</option>\n          <option value=\"thief\">盗贼</option>\n          <option value=\"business\">商人</option>\n        </select>\n        <div id=\"registerWindowClass\"></div>\n      </div>\n\n      <div>\n        <input id=\"registerHeroName\" placeholder=\"名字\" type=\"text\">\n      </div>\n\n      <div style=\"padding-bottom: 20px; padding-top: 10px;\">\n        <button id=\"registerWindowSubmit\" class=\"brownButton\">完成</button>\n        <button id=\"registerWindowBack\" class=\"brownButton\">返回</button>\n      </div>\n\n    </div>\n\n    <div style=\"position: fixed; height: 250px; width: 64px; left: 50px; top: 70px;\">\n      <label id=\"loading\">正在载入预览</label>\n      <br>\n      <canvas id=\"registerPreview\" width=\"64\" height=\"250\"></canvas>\n    </div>\n  ";

  win.css = "\n\n    #registerWindowBelief, #registerWindowClass {\n      text-align: left;\n      margin-left: 310px;\n      width: 400px;\n    }\n\n    .registerWindow table, .registerWindow tbody, .registerWindow tr {\n      width: 100%;\n      height: 100%;\n      margin: 0;\n      padding: 0;\n    }\n\n    #registerWindowSubmit, #registerWindowBack {\n      width: 100px;\n      height: 60px;\n    }\n\n    .registerWindow {\n      text-align: center;\n      height: 412px;\n      background-color: rgba(240, 217, 194, 0.85);\n      border: 20px solid rgba(134, 93, 52, 0.85);\n    }\n\n    .registerWindow input {\n      width: 240px;\n      height: 40px;\n      -webkit-border-radius: 5px;\n      -moz-border-radius: 5px;\n      border-radius: 5px;\n      text-align: center;\n      font-size: 16px;\n      background-color: #d5ab63;\n      margin: 10px;\n    }\n\n    .registerWindow label {\n      font-size: 20px;\n      color: white;\n    }\n\n    .registerWindow select {\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      width: 200px;\n      height: 40px;\n      -webkit-border-radius: 5px;\n      -moz-border-radius: 5px;\n      border-radius: 5px;\n      text-align: center;\n      font-size: 16px;\n      background-color: #d5ab63;\n      margin: 10px;\n    }\n  ";

  var registerWindowSubmit = win.querySelector("#registerWindowSubmit");
  var registerWindowBack = win.querySelector("#registerWindowBack");

  registerWindowSubmit.addEventListener("click", function () {
    Game.register.submit();
  });

  registerWindowBack.addEventListener("click", function () {
    win.hide();
    Game.windows.main.show();
  });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9HYW1lL0dhbWVXaW5kb3dSZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLENBQUMsWUFBWTtBQUNYLGNBQVksQ0FBQzs7QUFFYixNQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUV2RSxLQUFHLENBQUMsSUFBSSxnMVRBdVJQLENBQUM7O0FBRUYsS0FBRyxDQUFDLEdBQUcsc3lDQTBETixDQUFDOztBQUVGLE1BQUksb0JBQW9CLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3RFLE1BQUksa0JBQWtCLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztBQUVsRSxzQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtBQUN6RCxRQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQ3hCLENBQUMsQ0FBQzs7QUFFSCxvQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBWTtBQUN2RCxPQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWCxRQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FHSixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJzcmMvR2FtZS9HYW1lV2luZG93UmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5BLVJQRyBHYW1lLCBCdWlsdCB1c2luZyBKYXZhU2NyaXB0IEVTNlxuQ29weXJpZ2h0IChDKSAyMDE1IHFoZHVhbihodHRwOi8vcWhkdWFuLmNvbSlcblxuVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbml0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG50aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cblxuVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG5idXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cblxuWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbmFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG4qL1xuXG4oZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBsZXQgd2luID0gR2FtZS53aW5kb3dzLnJlZ2lzdGVyID0gR2FtZS5XaW5kb3cuY3JlYXRlKFwicmVnaXN0ZXJXaW5kb3dcIik7XG5cbiAgd2luLmh0bWwgPSBgXG4gICAgPGRpdiBzdHlsZT1cIm92ZXJmbG93LXk6IHNjcm9sbDsgaGVpZ2h0OiAxMDAlOyBwb3NpdGlvbjogZml4ZWQ7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICDmgKfliKtcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBvbmNoYW5nZT1cIlNlbGVjdEhlcm8oZXZlbnQpXCIgZGF0YS10eXBlPVwic2V4XCIgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWFsZVwiPueUt+aApzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmZW1hbGVcIj7lpbPmgKc8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICDnmq7ogqRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBvbmNoYW5nZT1cIlNlbGVjdEhlcm8oZXZlbnQpXCIgZGF0YS10eXBlPVwiYm9keVwiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0XCI+57KJ55m9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRhcmtcIj7mt7HoibI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFyazJcIj7mm7Tmt7E8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGFubmVkXCI+6buE55m9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRhbm5lZDJcIj7pu4TngbA8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICDnnLznnZtcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBvbmNoYW5nZT1cIlNlbGVjdEhlcm8oZXZlbnQpXCIgZGF0YS10eXBlPVwiZXllc1wiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsdWVcIj7ok53oibI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYnJvd25cIj7mo5XoibI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3JheVwiPueBsOiJsjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJncmVlblwiPue7v+iJsjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJvcmFuZ2VcIj7mqZnoibI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHVycGxlXCI+57Sr6ImyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZFwiPue6ouiJsjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5ZWxsb3dcIj7pu4ToibI8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cImN1c3RvbU1hbGVIYWlyXCI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAg5aS05Y+RXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3Qgb25jaGFuZ2U9XCJTZWxlY3RIZXJvKGV2ZW50KVwiIGRhdGEtdHlwZT1cImhhaXJcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7ml6A8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmVkaGVhZFwiPkJlZGhlYWQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG9uZ1wiPkxvbmc8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG9uZ2hhd2tcIj5Mb25naGF3azwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXNzeTFcIj5tZXNzeTE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVzc3kyXCI+bWVzc3kyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vaGF3a1wiPk1vaGF3azwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYWdlXCI+UGFnZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwYXJ0ZWRcIj5QYXJ0ZWQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGxhaW5cIj5QbGFpbjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzaG9ydGhhd2tcIj5TaG9ydGhhd2s8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBpZD1cImN1c3RvbUZlbWFsZUhhaXJcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAg5aS05Y+RXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3Qgb25jaGFuZ2U9XCJTZWxlY3RIZXJvKGV2ZW50KVwiIGRhdGEtdHlwZT1cImhhaXJcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7ml6A8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFuZ3NcIj5iYW5nczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJiYW5nc2xvbmdcIj5iYW5nc2xvbmc8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFuZ3Nsb25nMlwiPmJhbmdzbG9uZzI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYnVuY2hlc1wiPmJ1bmNoZXM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG9vc2VcIj5sb29zZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaXhpZVwiPnBpeGllPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBvbnl0YWlsXCI+cG9ueXRhaWw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9ueXRhaWwyXCI+cG9ueXRhaWwyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW5jZXNzXCI+cHJpbmNlc3M8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2hvdWxkZXJsXCI+c2hvdWxkZXJsPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNob3VsZGVyclwiPnNob3VsZGVycjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzd29vcFwiPnN3b29wPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInVua2VtcHRcIj51bmtlbXB0PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAg5Y+R6ImyXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3Qgb25jaGFuZ2U9XCJTZWxlY3RIZXJvKGV2ZW50KVwiIGRhdGEtdHlwZT1cImhhaXJjb2xvclwiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsYWNrXCI+QmxhY2s8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmxvbmRlXCI+QmxvbmRlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsb25kZTJcIj5ibG9uZGUyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsdWVcIj5ibHVlPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsdWUyXCI+Ymx1ZTI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYnJvd25cIj5icm93bjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJicm93bjJcIj5icm93bjI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYnJ1bmV0dGVcIj5icnVuZXR0ZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJicnVuZXR0ZTJcIj5icnVuZXR0ZTI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGFyay1ibG9uZGVcIj5kYXJrLWJsb25kZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnb2xkXCI+Z29sZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJncmF5XCI+Z3JheTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJncmF5MlwiPmdyYXkyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+Z3JlZW48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ3JlZW4yXCI+Z3JlZW4yPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpZ2h0LWJsb25kZVwiPmxpZ2h0LWJsb25kZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaWdodC1ibG9uZGUyXCI+bGlnaHQtYmxvbmRlMjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaW5rXCI+cGluazwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaW5rMlwiPnBpbmsyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1cnBsZVwiPnB1cnBsZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyYXZlblwiPnJhdmVuPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJhdmVuMlwiPnJhdmVuMjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWRoZWFkXCI+cmVkaGVhZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWRoZWFkMlwiPnJlZGhlYWQyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJ1YnktcmVkXCI+cnVieS1yZWQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2hpdGVcIj53aGl0ZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3aGl0ZS1ibG9uZGVcIj53aGl0ZS1ibG9uZGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2hpdGUtYmxvbmRlMlwiPndoaXRlLWJsb25kZTI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2hpdGUuY2VudGVyWWFuXCI+d2hpdGUuY2VudGVyWWFuPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAg5bi95a2QXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3Qgb25jaGFuZ2U9XCJTZWxlY3RIZXJvKGV2ZW50KVwiIGRhdGEtdHlwZT1cImhlYWRcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7ml6A8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2hhaW5oYXRcIj5jaGFpbmhhdDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjaGFpbl9ob29kXCI+Y2hhaW5faG9vZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjbG90aF9ob29kXCI+Y2xvdGhfaG9vZDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZWF0aGVyX2NhcFwiPmxlYXRoZXJfY2FwPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJlZFwiPnJlZDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIOS4iuiho1xuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG9uY2hhbmdlPVwiU2VsZWN0SGVybyhldmVudClcIiBkYXRhLXR5cGU9XCJzaGlydHNcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7ml6A8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYnJvd25cIj5icm93bjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXJvb25cIj5tYXJvb248L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGVhbFwiPnRlYWw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2hpdGVcIj53aGl0ZTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIOijpOWtkFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG9uY2hhbmdlPVwiU2VsZWN0SGVybyhldmVudClcIiBkYXRhLXR5cGU9XCJwYW50c1wiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuaXoDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYWdlbnRhXCI+bWFnZW50YTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWRcIj5yZWQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGVhbFwiPnRlYWw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2hpdGVcIj53aGl0ZTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIOmei+WtkFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG9uY2hhbmdlPVwiU2VsZWN0SGVybyhldmVudClcIiAgZGF0YS10eXBlPVwic2hvZXNcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7ml6A8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmxhY2tcIj5ibGFjazwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJicm93blwiPmJyb3duPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hcm9vblwiPm1hcm9vbjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIOWktOeblFxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG9uY2hhbmdlPVwiU2VsZWN0SGVybyhldmVudClcIiBkYXRhLXR5cGU9XCJhcm1vcmhlbG1zXCIgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+5pegPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdvbGRlblwiPum7hOmHkTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPueZvemTtjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIOiDuOeUslxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG9uY2hhbmdlPVwiU2VsZWN0SGVybyhldmVudClcIiBkYXRhLXR5cGU9XCJhcm1vcmNoZXN0XCIgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+5pegPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdvbGRlblwiPum7hOmHkTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPueZvemTtjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIOiHgueUslxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG9uY2hhbmdlPVwiU2VsZWN0SGVybyhldmVudClcIiBkYXRhLXR5cGU9XCJhcm1vcmFybVwiIGNsYXNzPVwiXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuaXoDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnb2xkZW5cIj7pu4Tph5E8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0YWxcIj7nmb3pk7Y8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICDohb/nlLJcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBvbmNoYW5nZT1cIlNlbGVjdEhlcm8oZXZlbnQpXCIgZGF0YS10eXBlPVwiYXJtb3JsZWdzXCIgY2xhc3M9XCJcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+5pegPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdvbGRlblwiPum7hOmHkTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRhbFwiPueZvemTtjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgIOi2s+eUslxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IG9uY2hhbmdlPVwiU2VsZWN0SGVybyhldmVudClcIiBkYXRhLXR5cGU9XCJhcm1vcmZlZXRcIiBjbGFzcz1cIlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7ml6A8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ29sZGVuXCI+6buE6YeRPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1ldGFsXCI+55m96ZO2PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxocj5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICDkv6Hku7BcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cInJlZ2lzdGVyV2luZG93QmVsaWVmQ2hvaWNlXCIgb25jaGFuZ2U9XCJDaG9pY2VIZXJvKGV2ZW50KVwiIGRhdGEtdHlwZT1cImJlbGllZlwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJOb25lXCI+5peg5L+h5LuwPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVsZW5cIj7oib7nkLMgLSDnn6Xor4blpbPnpZ48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRW5sb25cIj7mganmnJcgLSDmrbvkuqHkuLvlrrA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWluYXJlXCI+5a+G5aicIC0g5Liw5pS25aWz56WePC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFjaGllbFwiPumYv+WIh+WlpSAtIOS/neaKpOS5i+elnjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJSYWNoYVwiPuaLieWFiyAtIOmtlOazleWls+elnjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBZXN0b3JcIj7pmL/mlq/miZggLSDnm5fotLzkuYvnpZ48L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGllbGFjaFwiPui1q+aLieWFiyAtIOi0ouWvjOS5i+elnjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGlrXCI+6Zi/5Li95YWLIC0g5rK75oSI5aWz56WePC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFtYXJpZW5cIj7pmL/njpvmgakgLSDlipvph4/kuYvnpZ48L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxkaXYgaWQ9XCJyZWdpc3RlcldpbmRvd0JlbGllZlwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAg6IGM5LiaXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJyZWdpc3RlcldpbmRvd0NsYXNzQ2hvaWNlXCIgb25jaGFuZ2U9XCJDaG9pY2VIZXJvKGV2ZW50KVwiIGRhdGEtdHlwZT1cImNsYXNzXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndhcnJpb3JcIj7miJjlo6s8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXJjaGVyXCI+5byT566t5omLPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndpemFyZFwiPumtlOazleW4iDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmllc3RcIj7niafluIg8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYmFyZFwiPuWQn+a4uOivl+S6ujwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0aGllZlwiPuebl+i0vDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJidXNpbmVzc1wiPuWVhuS6ujwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGRpdiBpZD1cInJlZ2lzdGVyV2luZG93Q2xhc3NcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgaWQ9XCJyZWdpc3Rlckhlcm9OYW1lXCIgcGxhY2Vob2xkZXI9XCLlkI3lrZdcIiB0eXBlPVwidGV4dFwiPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMjBweDsgcGFkZGluZy10b3A6IDEwcHg7XCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJyZWdpc3RlcldpbmRvd1N1Ym1pdFwiIGNsYXNzPVwiYnJvd25CdXR0b25cIj7lrozmiJA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cInJlZ2lzdGVyV2luZG93QmFja1wiIGNsYXNzPVwiYnJvd25CdXR0b25cIj7ov5Tlm548L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDI1MHB4OyB3aWR0aDogNjRweDsgbGVmdDogNTBweDsgdG9wOiA3MHB4O1wiPlxuICAgICAgPGxhYmVsIGlkPVwibG9hZGluZ1wiPuato+WcqOi9veWFpemihOiniDwvbGFiZWw+XG4gICAgICA8YnI+XG4gICAgICA8Y2FudmFzIGlkPVwicmVnaXN0ZXJQcmV2aWV3XCIgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjI1MFwiPjwvY2FudmFzPlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIHdpbi5jc3MgPSBgXG5cbiAgICAjcmVnaXN0ZXJXaW5kb3dCZWxpZWYsICNyZWdpc3RlcldpbmRvd0NsYXNzIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW4tbGVmdDogMzEwcHg7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyV2luZG93IHRhYmxlLCAucmVnaXN0ZXJXaW5kb3cgdGJvZHksIC5yZWdpc3RlcldpbmRvdyB0ciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgI3JlZ2lzdGVyV2luZG93U3VibWl0LCAjcmVnaXN0ZXJXaW5kb3dCYWNrIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG5cbiAgICAucmVnaXN0ZXJXaW5kb3cge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA0MTJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMTcsIDE5NCwgMC44NSk7XG4gICAgICBib3JkZXI6IDIwcHggc29saWQgcmdiYSgxMzQsIDkzLCA1MiwgMC44NSk7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyV2luZG93IGlucHV0IHtcbiAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVhYjYzO1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cblxuICAgIC5yZWdpc3RlcldpbmRvdyBsYWJlbCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLnJlZ2lzdGVyV2luZG93IHNlbGVjdCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNWFiNjM7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuICBgO1xuXG4gIGxldCByZWdpc3RlcldpbmRvd1N1Ym1pdCA9IHdpbi5xdWVyeVNlbGVjdG9yKFwiI3JlZ2lzdGVyV2luZG93U3VibWl0XCIpO1xuICBsZXQgcmVnaXN0ZXJXaW5kb3dCYWNrID0gd2luLnF1ZXJ5U2VsZWN0b3IoXCIjcmVnaXN0ZXJXaW5kb3dCYWNrXCIpO1xuXG4gIHJlZ2lzdGVyV2luZG93U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgR2FtZS5yZWdpc3Rlci5zdWJtaXQoKTtcbiAgfSk7XG5cbiAgcmVnaXN0ZXJXaW5kb3dCYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgd2luLmhpZGUoKTtcbiAgICBHYW1lLndpbmRvd3MubWFpbi5zaG93KCk7XG4gIH0pO1xuXG5cbn0pKCk7XG4iXX0=