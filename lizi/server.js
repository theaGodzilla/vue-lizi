const express = require("express");
const request = require("request");
// 代理
let app = express();

let apiProxy = '/proxy/';
let mlapiProxy = '/mlproxy/';
let jmapiProxy = '/jmproxy/';
let mjmapiProxy = '/mjmproxy/';
let apiMap = {
    Circledatas: "/search/index", // baobei
    Homedatas: "/getIndexNavigator", // 
    HomeLiList: "/recItems", // lizi
    HgetItemDetailList: "/getItemDetailList",//top
    Classifys: "/msapi/mall/allcategories.json", //classify
    CBrand:"/search/index", // pinpai
    DynamicDetail:"/product/ajaxDynamicDetail", // detail01
    StaticDetail:"/product/ajaxStaticDetail", //detail02
    // HomeSearch: "/bd-product/api/delivery/searchList",//https://m.bd-ego.com/bd-product/api/item/searchItemList
    // HomeSearch: "/bd-product/api/item/searchItemList"
};
app.get(apiProxy + "*",(req,res)=>{
        // cors
        res.append("Access-Control-Allow-Origin","*");
        res.append("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.append("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        var reqUrl = req.url.replace(apiProxy,'');
        var index = reqUrl.search(/\/|\?/);
        var api = reqUrl;
        var data = '';
        if(index){
            api = reqUrl.slice(0,index);
            data = reqUrl.slice(index);
        }
        var url = 'http://h5.jumei.com' + apiMap[api] + data;
        // console.log('apiProxy',url)
        request.get(url,(err,response,body)=>{
            res.send(body);
            // console.log(1,url);
        })
});

app.get(mlapiProxy + "*",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
    res.append("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.append("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    var mlreqUrl = req.url.replace(mlapiProxy,'');
    var index = mlreqUrl.search(/\/|\?/);
    var mlapi = mlreqUrl;
    var mldata = '';
    if(index){
        mlapi = mlreqUrl.slice(0,index);
        mldata = mlreqUrl.slice(index);
    }
    if(mlapi || mldata){
        var url = 'http://m.lizi.com/newIndex' + apiMap[mlapi] + mldata;
        console.log('mlapiProxy',url)
        request.get(url,(err,response,body)=>{

        res.send(body);
        // console.log(1,url);
        })
    }else{
        var url = 'http://m.lizi.com/newIndex';
        console.log('mlapiProxy',url);
        request.get(url,(err,response,body)=>{

        res.send(body);
        // console.log(1,url);
        })
    }
        
    
});

app.get(jmapiProxy + "*",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
    res.append("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.append("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    var jmreqUrl = req.url.replace(jmapiProxy,'');
    var index = jmreqUrl.search(/\/|\?/);
    var jmapi = jmreqUrl;
    var jmdata = '';

    if(jmapi){
        var url = 'http://mobile.jumei.com' + apiMap[jmreqUrl];
        console.log('jmapiProxy',url);
        request.get(url,(err,response,body)=>{
        res.send(body);
        // console.log(1,url);
        })
    }else{
        var url = 'http://mobile.jumei.com';
        console.log('jmapiProxy',url);
        request.get(url,(err,response,body)=>{
        res.send(body);
        // console.log(1,url);
    })
    }
    
});

app.get(mjmapiProxy + "*",(req,res)=>{
    // cors
    res.append("Access-Control-Allow-Origin","*");
    res.append("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.append("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    var mjmreqUrl = req.url.replace(mjmapiProxy,'');
    var index = mjmreqUrl.search(/\/|\?/);
    var mjmapi = mjmreqUrl;
    var mjmdata = '';
    if(index){
        mjmapi = mjmreqUrl.slice(0,index);
        mjmdata = mjmreqUrl.slice(index);
    }
    if(mjmapi || mjmdata){
        var url = 'http://m.jumei.com' + apiMap[mjmapi] + mjmdata;
        console.log('mjmapiProxy',url);
        request.get(url,(err,response,body)=>{
        res.send(body);
        // console.log(1,url);
        })
    }else{
        var url = 'http://m.jumei.com';
        console.log('mjmapiProxy',url);
        request.get(url,(err,response,body)=>{
        res.send(body);
        // console.log(1,url);
        })
    }
        
});

// post请求============================================
    // const bodyParser=require('body-parser')
    // app.use(bodyParser.urlencoded({ extended: false}));
    // var apiPost = '/proxyPost/';
    // var proxyApi = {
    //     HomeSearch: "/bd-product/api/item/searchItemList"
    // }
    // app.post(apiPost + "*",(req,res)=>{
    //     console.log(3333,req.url)
    //     // cors
    //     res.append("Access-Control-Allow-Origin","*");
    //     var reqUrl = req.url.replace(apiPost,'');
    //     console.log(reqUrl)
    //     var index = reqUrl.search(/\/|\?/);
    //     var api = reqUrl;
    //     var data = '';
    //     if(index){
    //         api = reqUrl.slice(0,index);
    //         data = reqUrl.slice(index);
    //     }
    //     // console.log(proxyApi[api],data)
    //     var url = 'https://m.bd-ego.com/' + proxyApi[api] + data;
    //     console.log(222222222222,proxyApi[api],data)
    //     // console.log('11111111111111111',url)
    //     request.post(url,(err,response,body)=>{                                       
    //         console.log(1111111111111,url);
    //         res.send(body);
    //         // console.log(1,url);
    //     })
    // })
// app.post('/post',function(req,res){
//     res.append("Access-Control-Allow-Origin", "*");
//     console.log(111111111111111,req);
//     var url = "https://m.bd-ego.com/bd-product/api/item/searchItemList";
//     request.post(url,(err,response,body)=>{
//         console.log(req.url);
//         res.send(body);
//     })
// })
// =====================================================================

//路由//连接数据库
// const db = require('./mongo/mongoose.js')
// const goods = require('./mongo/router/changeGoods')
// const search = require('./mongo/router/searchGoods')
// const uploadRouter=require('./src/router/upload.js')
// const goodsRouter=require('./src/router/goods.js')

// 路由分发
// app.use('/changeGoods',goods)
// app.use('/searchGoods',search)
// app.use('/upload',uploadRouter)
// app.use('/goods',goodsRouter)

//引入模块

const mongodb = require('mongodb');
const bodyparser = require('body-parser');
// const thmail = require ('./js/theemail');

//获取mongo客户端
const MongoClient = mongodb.MongoClient;


//静态资源服务器
app.use(express.static('./'));

app.all('*', function(req, res, next) {
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

// 关于检查用户是否存在
app.get('/checkname',(req,res)=>{
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
});



// 关于用户注册
app.post('/reg',bodyparser.urlencoded({extended:false}),(req,res)=>{
    console.log(req);
    // res.send('hello world');
    // 获取传来的用户名
    let {username,password} = req.query;
    let nickname = Math.random().toString(36).substr(2);
      console.log("nickname",nickname)
  
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
        user.insertOne({user:username,password,nickname,headerphoto:'photo.jpg',thetime:Date.now()},(err,result)=>{
          // console.log(result);
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
  });
  
  // 关于用户登录
  app.post('/login',bodyparser.urlencoded({extended:false}),(req,res)=>{
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
  });
  
  // 关于查找昵称
  app.get('/checknickname',(req,res)=>{
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
    
          //查询
          user.findOne({user:username},(err,result)=>{
              if(err) throw err;
              // console.log(result);//若存在，则出现信息，如不存在则出现null
              if( result ){
                  //已有
                  res.send({
                      code:1,
                      data:{
                          nickname:result.nickname,
                          headerphoto:result.headerphoto
                      },
                      msg:'成功'
                  })
              }else{
                  // 错误
                  res.send({
                      code:0,
                      data:[],
                      msg:'失败'
                  })
              }
          })
          //关闭数据库,避免资源浪费
          database.close();
      })
  });

    // 关于添加购物车
  app.get('/addcarts',(req,res)=>{
      // console.log(req);
      // res.send('hello world');
      // 获取传来的用户名
      let {uid,title,size,num,price,imgurl} = req.query;
      //连接数据库
      MongoClient.connect('mongodb://localhost:27017',(err,database)=>{
          //连接成功后执行回调函数
          //如果有错误就抛出错误
          if(err) throw err;
    
          //使用某个数据库，没有就自动创建一个
          let db = database.db('lizi');
    
          //使用数据库里面的集合（表）
          let cart = db.collection('cart');
    
          //查询
          cart.insertOne({uid,title,price,num,size,imgurl},(err,result)=>{
              if(err) throw err;
              // console.log(result);//若存在，则出现信息，如不存在则出现null
              if( result ){
                  //插入成功
                  res.send({
                      code:1,
                      data:result,
                      msg:'成功'
                  })
              }else{
                  // 错误
                  res.send({
                      code:0,
                      data:[],
                      msg:'失败'
                  })
              }
          })
          //关闭数据库,避免资源浪费
          database.close();
      })
  });
  




app.listen("17171",()=>{
    console.log(17171);
})


// https://m.bd-ego.com/bd-marketing/api/activity/querySeckillActivity?activityId=1706230925400028&_t=1546839897752
// https://m.bd-ego.com/bd-marketing/api/activity/getProductList?activityId=1701031131360001&startNum=0&_t=1546859442537 goods