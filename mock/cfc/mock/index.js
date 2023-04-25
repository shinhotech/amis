/*
 * @description:
 * @Author:
 * @Date: 2023-04-24 16:11:09
 */
const path = require('path');
const fs = require('fs');
const DIRNAME = path.dirname(__filename);

module.exports = function (req, res) {
  const subpath = (req.originalUrl || req.url).replace(/^\/(api\/shMock|mock2|api)\/|\?.*$/g, '');
  // json 中定义的 api 接口可能存在带有 .json 后缀的情况，因此增加一层过滤操作防止出现多个 .json 导致文件加载失败
  const jsonFile = subpath.replace(/\.json/, '') + '.json';
  const jsFile = subpath + '.js';


  if (subpath == 'options/users') {
    let json = readJson(jsonFile);
    let term = req.query.term;

    if (term) {
      json.data = json.data.filter(item => item.label.substring(0, term.length) === term);
    }

    return res.json(json);
  } else if (/^sample/.test(subpath)) {
    let file = require.resolve(path.join(DIRNAME, 'sample.js'));
    delete require.cache[file];
    return require(file)(req, res);
  } else if (exist(jsFile)) {
    let file = require.resolve(path.join(DIRNAME, jsFile));
    delete require.cache[file];

    if (req.query.waitSeconds) {
      return setTimeout(function () {
        require(file)(req, res);
      }, parseInt(req.query.waitSeconds, 10) * 1000);
    }

    return require(file)(req, res);
  }
  if (exist(jsonFile)) {
    if (req.query.waitSeconds) {
      return setTimeout(function () {
        res.json(readJson(jsonFile));
      }, parseInt(req.query.waitSeconds, 10) * 1000);
    }

    return res.json(readJson(jsonFile, req.originalUrl || req.url));
  } else if (/crud\/\d+$/.test(subpath) && req.method === 'DELETE') {
    return res.json({
      status: 0,
      msg: '删除成功'
    })
  }

  res.json(readJson('notFound.json'));
}

function exist(subpath) {
  return fs.existsSync(path.join(DIRNAME, subpath));
}

function readJson(subpath, url) {
  console.log('路径====', subpath, url)
  const content = fs.readFileSync(path.join(DIRNAME, subpath), 'utf8');
  return JSON.parse(content);
}
