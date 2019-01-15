//把路由封装成模块
const express = require('express');
const bodyparser = require('body-parser');

const mongodb = require('mongodb');

//获取mongo客户端
const MongoClient = mongodb.MongoClient;

// 引入单独路由模块
// const checknameRouter = require('./checkname');
// const goodsRouter = require('./goods')
// const categoryRouter = require('./category')
// const uploadRouter = require('./upload')

let Router = express.Router();

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});
// 关于检查用户是否存在的路由
// Router.use('/checkname',checknameRouter);
Router.get('/checkname',(req,res)=>{
  // console.log(req);
  // res.send('hello world');
  // 获取传来的用户名
  let {username} = req.query;
  //连接数据库
  MongoClient.connect('mongodb://localhost:27017',(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('lizi');

      //使用数据库里面的集合（表）
      let user = db.collection('user');

      //查询是否存在数据
      user.findOne({user:username},(err,result)=>{
          if(err) throw err;
          // console.log(result);//若存在，则出现信息，如不存在则出现null
          if( result ){
              //已有用户名，不可注册
              res.send({
                  code:1,
                  data:[],
                  msg:'该账户已注册'
              })
          }else{
              //可以注册
              res.send({
                  code:0,
                  data:[],
                  msg:'该账户可注册'
              })
          }
      })
      //关闭数据库,避免资源浪费
      database.close();
  })
})

// 关于用户注册的路由
Router.post('/reg',bodyparser.urlencoded({extended:false}),(req,res)=>{
  console.log(req);
  // res.send('hello world');
  // 获取传来的用户名
  let {username,password} = req.body;
  //连接数据库
  MongoClient.connect('mongodb://localhost:27017',(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('lizi');

      //使用数据库里面的集合（表）
      let user = db.collection('user');

      //添加数据
      user.insert({user:username,password,thetime:Date.now()},(err,result)=>{
        console.log(result);
        if(err){
            res.send({
                code:0,
                data:err,
                msg:'err'
            })
        }else{
            res.send({
                code:1,
                data:result,
                msg:'注册成功!'
            })
        }
    })
    
      //关闭数据库,避免资源浪费
      database.close();
  })
})

// 关于用户登录的路由
Router.post('/login',bodyparser.urlencoded({extended:false}),(req,res)=>{
  console.log(req);
  // res.send('hello world');
  // 获取传来的用户名
  let {username,password} = req.body;
  //连接数据库
  MongoClient.connect('mongodb://localhost:27017',(err,database)=>{
      //连接成功后执行回调函数
      //如果有错误就抛出错误
      if(err) throw err;

      //使用某个数据库，没有就自动创建一个
      let db = database.db('lizi');

      //使用数据库里面的集合（表）
      let user = db.collection('user');

      //登录
      user.findOne({user:username,password:password},(err,result)=>{
        if(err) throw err;
        if( result ){
            //有账号
            res.send({
                code:1,
                data:[],
                msg:'ok'
            })
        }else{
            //没有账号
            res.send({
                code:0,
                data:[],
                msg:'no'
            })
        }
      })
    
      //关闭数据库,避免资源浪费
      database.close();
  })
})

// 上传
// Router.use('/upload',uploadRouter)

module.exports = Router;
// console.log(Router)