// @bun
var Uz=Object.create;var{getPrototypeOf:Vz,defineProperty:sX,getOwnPropertyNames:Fz}=Object;var Ez=Object.prototype.hasOwnProperty;var G$=($,X,Y)=>{Y=$!=null?Uz(Vz($)):{};let G=X||!$||!$.__esModule?sX(Y,"default",{value:$,enumerable:!0}):Y;for(let H of Fz($))if(!Ez.call(G,H))sX(G,H,{get:()=>$[H],enumerable:!0});return G};var I=($,X)=>()=>(X||$((X={exports:{}}).exports,X),X.exports);var Az=($,X)=>{for(var Y in X)sX($,Y,{get:X[Y],enumerable:!0,configurable:!0,set:(G)=>X[Y]=()=>G})};var k2=I((Dv,YL)=>{YL.exports={acl:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},append:{arity:3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},asking:{arity:1,flags:["fast"],keyStart:0,keyStop:0,step:0},auth:{arity:-2,flags:["noscript","loading","stale","fast","no_auth","allow_busy"],keyStart:0,keyStop:0,step:0},bgrewriteaof:{arity:1,flags:["admin","noscript","no_async_loading"],keyStart:0,keyStop:0,step:0},bgsave:{arity:-1,flags:["admin","noscript","no_async_loading"],keyStart:0,keyStop:0,step:0},bitcount:{arity:-2,flags:["readonly"],keyStart:1,keyStop:1,step:1},bitfield:{arity:-2,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},bitfield_ro:{arity:-2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},bitop:{arity:-4,flags:["write","denyoom"],keyStart:2,keyStop:-1,step:1},bitpos:{arity:-3,flags:["readonly"],keyStart:1,keyStop:1,step:1},blmove:{arity:6,flags:["write","denyoom","noscript","blocking"],keyStart:1,keyStop:2,step:1},blmpop:{arity:-5,flags:["write","blocking","movablekeys"],keyStart:0,keyStop:0,step:0},blpop:{arity:-3,flags:["write","noscript","blocking"],keyStart:1,keyStop:-2,step:1},brpop:{arity:-3,flags:["write","noscript","blocking"],keyStart:1,keyStop:-2,step:1},brpoplpush:{arity:4,flags:["write","denyoom","noscript","blocking"],keyStart:1,keyStop:2,step:1},bzmpop:{arity:-5,flags:["write","blocking","movablekeys"],keyStart:0,keyStop:0,step:0},bzpopmax:{arity:-3,flags:["write","noscript","blocking","fast"],keyStart:1,keyStop:-2,step:1},bzpopmin:{arity:-3,flags:["write","noscript","blocking","fast"],keyStart:1,keyStop:-2,step:1},client:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},cluster:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},command:{arity:-1,flags:["loading","stale"],keyStart:0,keyStop:0,step:0},config:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},copy:{arity:-3,flags:["write","denyoom"],keyStart:1,keyStop:2,step:1},dbsize:{arity:1,flags:["readonly","fast"],keyStart:0,keyStop:0,step:0},debug:{arity:-2,flags:["admin","noscript","loading","stale"],keyStart:0,keyStop:0,step:0},decr:{arity:2,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},decrby:{arity:3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},del:{arity:-2,flags:["write"],keyStart:1,keyStop:-1,step:1},discard:{arity:1,flags:["noscript","loading","stale","fast","allow_busy"],keyStart:0,keyStop:0,step:0},dump:{arity:2,flags:["readonly"],keyStart:1,keyStop:1,step:1},echo:{arity:2,flags:["fast"],keyStart:0,keyStop:0,step:0},eval:{arity:-3,flags:["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],keyStart:0,keyStop:0,step:0},eval_ro:{arity:-3,flags:["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],keyStart:0,keyStop:0,step:0},evalsha:{arity:-3,flags:["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],keyStart:0,keyStop:0,step:0},evalsha_ro:{arity:-3,flags:["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],keyStart:0,keyStop:0,step:0},exec:{arity:1,flags:["noscript","loading","stale","skip_slowlog"],keyStart:0,keyStop:0,step:0},exists:{arity:-2,flags:["readonly","fast"],keyStart:1,keyStop:-1,step:1},expire:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},expireat:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},expiretime:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},failover:{arity:-1,flags:["admin","noscript","stale"],keyStart:0,keyStop:0,step:0},fcall:{arity:-3,flags:["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],keyStart:0,keyStop:0,step:0},fcall_ro:{arity:-3,flags:["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],keyStart:0,keyStop:0,step:0},flushall:{arity:-1,flags:["write"],keyStart:0,keyStop:0,step:0},flushdb:{arity:-1,flags:["write"],keyStart:0,keyStop:0,step:0},function:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},geoadd:{arity:-5,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},geodist:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},geohash:{arity:-2,flags:["readonly"],keyStart:1,keyStop:1,step:1},geopos:{arity:-2,flags:["readonly"],keyStart:1,keyStop:1,step:1},georadius:{arity:-6,flags:["write","denyoom","movablekeys"],keyStart:1,keyStop:1,step:1},georadius_ro:{arity:-6,flags:["readonly"],keyStart:1,keyStop:1,step:1},georadiusbymember:{arity:-5,flags:["write","denyoom","movablekeys"],keyStart:1,keyStop:1,step:1},georadiusbymember_ro:{arity:-5,flags:["readonly"],keyStart:1,keyStop:1,step:1},geosearch:{arity:-7,flags:["readonly"],keyStart:1,keyStop:1,step:1},geosearchstore:{arity:-8,flags:["write","denyoom"],keyStart:1,keyStop:2,step:1},get:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},getbit:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},getdel:{arity:2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},getex:{arity:-2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},getrange:{arity:4,flags:["readonly"],keyStart:1,keyStop:1,step:1},getset:{arity:3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},hdel:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},hello:{arity:-1,flags:["noscript","loading","stale","fast","no_auth","allow_busy"],keyStart:0,keyStop:0,step:0},hexists:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},hget:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},hgetall:{arity:2,flags:["readonly"],keyStart:1,keyStop:1,step:1},hincrby:{arity:4,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},hincrbyfloat:{arity:4,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},hkeys:{arity:2,flags:["readonly"],keyStart:1,keyStop:1,step:1},hlen:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},hmget:{arity:-3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},hmset:{arity:-4,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},hrandfield:{arity:-2,flags:["readonly"],keyStart:1,keyStop:1,step:1},hscan:{arity:-3,flags:["readonly"],keyStart:1,keyStop:1,step:1},hset:{arity:-4,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},hsetnx:{arity:4,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},hstrlen:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},hvals:{arity:2,flags:["readonly"],keyStart:1,keyStop:1,step:1},incr:{arity:2,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},incrby:{arity:3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},incrbyfloat:{arity:3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},info:{arity:-1,flags:["loading","stale"],keyStart:0,keyStop:0,step:0},keys:{arity:2,flags:["readonly"],keyStart:0,keyStop:0,step:0},lastsave:{arity:1,flags:["loading","stale","fast"],keyStart:0,keyStop:0,step:0},latency:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},lcs:{arity:-3,flags:["readonly"],keyStart:1,keyStop:2,step:1},lindex:{arity:3,flags:["readonly"],keyStart:1,keyStop:1,step:1},linsert:{arity:5,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},llen:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},lmove:{arity:5,flags:["write","denyoom"],keyStart:1,keyStop:2,step:1},lmpop:{arity:-4,flags:["write","movablekeys"],keyStart:0,keyStop:0,step:0},lolwut:{arity:-1,flags:["readonly","fast"],keyStart:0,keyStop:0,step:0},lpop:{arity:-2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},lpos:{arity:-3,flags:["readonly"],keyStart:1,keyStop:1,step:1},lpush:{arity:-3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},lpushx:{arity:-3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},lrange:{arity:4,flags:["readonly"],keyStart:1,keyStop:1,step:1},lrem:{arity:4,flags:["write"],keyStart:1,keyStop:1,step:1},lset:{arity:4,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},ltrim:{arity:4,flags:["write"],keyStart:1,keyStop:1,step:1},memory:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},mget:{arity:-2,flags:["readonly","fast"],keyStart:1,keyStop:-1,step:1},migrate:{arity:-6,flags:["write","movablekeys"],keyStart:3,keyStop:3,step:1},module:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},monitor:{arity:1,flags:["admin","noscript","loading","stale"],keyStart:0,keyStop:0,step:0},move:{arity:3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},mset:{arity:-3,flags:["write","denyoom"],keyStart:1,keyStop:-1,step:2},msetnx:{arity:-3,flags:["write","denyoom"],keyStart:1,keyStop:-1,step:2},multi:{arity:1,flags:["noscript","loading","stale","fast","allow_busy"],keyStart:0,keyStop:0,step:0},object:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},persist:{arity:2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},pexpire:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},pexpireat:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},pexpiretime:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},pfadd:{arity:-2,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},pfcount:{arity:-2,flags:["readonly"],keyStart:1,keyStop:-1,step:1},pfdebug:{arity:3,flags:["write","denyoom","admin"],keyStart:2,keyStop:2,step:1},pfmerge:{arity:-2,flags:["write","denyoom"],keyStart:1,keyStop:-1,step:1},pfselftest:{arity:1,flags:["admin"],keyStart:0,keyStop:0,step:0},ping:{arity:-1,flags:["fast"],keyStart:0,keyStop:0,step:0},psetex:{arity:4,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},psubscribe:{arity:-2,flags:["pubsub","noscript","loading","stale"],keyStart:0,keyStop:0,step:0},psync:{arity:-3,flags:["admin","noscript","no_async_loading","no_multi"],keyStart:0,keyStop:0,step:0},pttl:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},publish:{arity:3,flags:["pubsub","loading","stale","fast"],keyStart:0,keyStop:0,step:0},pubsub:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},punsubscribe:{arity:-1,flags:["pubsub","noscript","loading","stale"],keyStart:0,keyStop:0,step:0},quit:{arity:-1,flags:["noscript","loading","stale","fast","no_auth","allow_busy"],keyStart:0,keyStop:0,step:0},randomkey:{arity:1,flags:["readonly"],keyStart:0,keyStop:0,step:0},readonly:{arity:1,flags:["loading","stale","fast"],keyStart:0,keyStop:0,step:0},readwrite:{arity:1,flags:["loading","stale","fast"],keyStart:0,keyStop:0,step:0},rename:{arity:3,flags:["write"],keyStart:1,keyStop:2,step:1},renamenx:{arity:3,flags:["write","fast"],keyStart:1,keyStop:2,step:1},replconf:{arity:-1,flags:["admin","noscript","loading","stale","allow_busy"],keyStart:0,keyStop:0,step:0},replicaof:{arity:3,flags:["admin","noscript","stale","no_async_loading"],keyStart:0,keyStop:0,step:0},reset:{arity:1,flags:["noscript","loading","stale","fast","no_auth","allow_busy"],keyStart:0,keyStop:0,step:0},restore:{arity:-4,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},"restore-asking":{arity:-4,flags:["write","denyoom","asking"],keyStart:1,keyStop:1,step:1},role:{arity:1,flags:["noscript","loading","stale","fast"],keyStart:0,keyStop:0,step:0},rpop:{arity:-2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},rpoplpush:{arity:3,flags:["write","denyoom"],keyStart:1,keyStop:2,step:1},rpush:{arity:-3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},rpushx:{arity:-3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},sadd:{arity:-3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},save:{arity:1,flags:["admin","noscript","no_async_loading","no_multi"],keyStart:0,keyStop:0,step:0},scan:{arity:-2,flags:["readonly"],keyStart:0,keyStop:0,step:0},scard:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},script:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},sdiff:{arity:-2,flags:["readonly"],keyStart:1,keyStop:-1,step:1},sdiffstore:{arity:-3,flags:["write","denyoom"],keyStart:1,keyStop:-1,step:1},select:{arity:2,flags:["loading","stale","fast"],keyStart:0,keyStop:0,step:0},set:{arity:-3,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},setbit:{arity:4,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},setex:{arity:4,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},setnx:{arity:3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},setrange:{arity:4,flags:["write","denyoom"],keyStart:1,keyStop:1,step:1},shutdown:{arity:-1,flags:["admin","noscript","loading","stale","no_multi","allow_busy"],keyStart:0,keyStop:0,step:0},sinter:{arity:-2,flags:["readonly"],keyStart:1,keyStop:-1,step:1},sintercard:{arity:-3,flags:["readonly","movablekeys"],keyStart:0,keyStop:0,step:0},sinterstore:{arity:-3,flags:["write","denyoom"],keyStart:1,keyStop:-1,step:1},sismember:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},slaveof:{arity:3,flags:["admin","noscript","stale","no_async_loading"],keyStart:0,keyStop:0,step:0},slowlog:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},smembers:{arity:2,flags:["readonly"],keyStart:1,keyStop:1,step:1},smismember:{arity:-3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},smove:{arity:4,flags:["write","fast"],keyStart:1,keyStop:2,step:1},sort:{arity:-2,flags:["write","denyoom","movablekeys"],keyStart:1,keyStop:1,step:1},sort_ro:{arity:-2,flags:["readonly","movablekeys"],keyStart:1,keyStop:1,step:1},spop:{arity:-2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},spublish:{arity:3,flags:["pubsub","loading","stale","fast"],keyStart:1,keyStop:1,step:1},srandmember:{arity:-2,flags:["readonly"],keyStart:1,keyStop:1,step:1},srem:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},sscan:{arity:-3,flags:["readonly"],keyStart:1,keyStop:1,step:1},ssubscribe:{arity:-2,flags:["pubsub","noscript","loading","stale"],keyStart:1,keyStop:-1,step:1},strlen:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},subscribe:{arity:-2,flags:["pubsub","noscript","loading","stale"],keyStart:0,keyStop:0,step:0},substr:{arity:4,flags:["readonly"],keyStart:1,keyStop:1,step:1},sunion:{arity:-2,flags:["readonly"],keyStart:1,keyStop:-1,step:1},sunionstore:{arity:-3,flags:["write","denyoom"],keyStart:1,keyStop:-1,step:1},sunsubscribe:{arity:-1,flags:["pubsub","noscript","loading","stale"],keyStart:1,keyStop:-1,step:1},swapdb:{arity:3,flags:["write","fast"],keyStart:0,keyStop:0,step:0},sync:{arity:1,flags:["admin","noscript","no_async_loading","no_multi"],keyStart:0,keyStop:0,step:0},time:{arity:1,flags:["loading","stale","fast"],keyStart:0,keyStop:0,step:0},touch:{arity:-2,flags:["readonly","fast"],keyStart:1,keyStop:-1,step:1},ttl:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},type:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},unlink:{arity:-2,flags:["write","fast"],keyStart:1,keyStop:-1,step:1},unsubscribe:{arity:-1,flags:["pubsub","noscript","loading","stale"],keyStart:0,keyStop:0,step:0},unwatch:{arity:1,flags:["noscript","loading","stale","fast","allow_busy"],keyStart:0,keyStop:0,step:0},wait:{arity:3,flags:["noscript"],keyStart:0,keyStop:0,step:0},watch:{arity:-2,flags:["noscript","loading","stale","fast","allow_busy"],keyStart:1,keyStop:-1,step:1},xack:{arity:-4,flags:["write","fast"],keyStart:1,keyStop:1,step:1},xadd:{arity:-5,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},xautoclaim:{arity:-6,flags:["write","fast"],keyStart:1,keyStop:1,step:1},xclaim:{arity:-6,flags:["write","fast"],keyStart:1,keyStop:1,step:1},xdel:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},xgroup:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},xinfo:{arity:-2,flags:[],keyStart:0,keyStop:0,step:0},xlen:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},xpending:{arity:-3,flags:["readonly"],keyStart:1,keyStop:1,step:1},xrange:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},xread:{arity:-4,flags:["readonly","blocking","movablekeys"],keyStart:0,keyStop:0,step:0},xreadgroup:{arity:-7,flags:["write","blocking","movablekeys"],keyStart:0,keyStop:0,step:0},xrevrange:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},xsetid:{arity:-3,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},xtrim:{arity:-4,flags:["write"],keyStart:1,keyStop:1,step:1},zadd:{arity:-4,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},zcard:{arity:2,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},zcount:{arity:4,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},zdiff:{arity:-3,flags:["readonly","movablekeys"],keyStart:0,keyStop:0,step:0},zdiffstore:{arity:-4,flags:["write","denyoom","movablekeys"],keyStart:1,keyStop:1,step:1},zincrby:{arity:4,flags:["write","denyoom","fast"],keyStart:1,keyStop:1,step:1},zinter:{arity:-3,flags:["readonly","movablekeys"],keyStart:0,keyStop:0,step:0},zintercard:{arity:-3,flags:["readonly","movablekeys"],keyStart:0,keyStop:0,step:0},zinterstore:{arity:-4,flags:["write","denyoom","movablekeys"],keyStart:1,keyStop:1,step:1},zlexcount:{arity:4,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},zmpop:{arity:-4,flags:["write","movablekeys"],keyStart:0,keyStop:0,step:0},zmscore:{arity:-3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},zpopmax:{arity:-2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},zpopmin:{arity:-2,flags:["write","fast"],keyStart:1,keyStop:1,step:1},zrandmember:{arity:-2,flags:["readonly"],keyStart:1,keyStop:1,step:1},zrange:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},zrangebylex:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},zrangebyscore:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},zrangestore:{arity:-5,flags:["write","denyoom"],keyStart:1,keyStop:2,step:1},zrank:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},zrem:{arity:-3,flags:["write","fast"],keyStart:1,keyStop:1,step:1},zremrangebylex:{arity:4,flags:["write"],keyStart:1,keyStop:1,step:1},zremrangebyrank:{arity:4,flags:["write"],keyStart:1,keyStop:1,step:1},zremrangebyscore:{arity:4,flags:["write"],keyStart:1,keyStop:1,step:1},zrevrange:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},zrevrangebylex:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},zrevrangebyscore:{arity:-4,flags:["readonly"],keyStart:1,keyStop:1,step:1},zrevrank:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},zscan:{arity:-3,flags:["readonly"],keyStart:1,keyStop:1,step:1},zscore:{arity:3,flags:["readonly","fast"],keyStart:1,keyStop:1,step:1},zunion:{arity:-3,flags:["readonly","movablekeys"],keyStart:0,keyStop:0,step:0},zunionstore:{arity:-4,flags:["write","denyoom","movablekeys"],keyStart:1,keyStop:1,step:1}}});var E6=I((v0)=>{var GL=v0&&v0.__importDefault||function($){return $&&$.__esModule?$:{default:$}};Object.defineProperty(v0,"__esModule",{value:!0});v0.getKeyIndexes=v0.hasFlag=v0.exists=v0.list=void 0;var i8=GL(k2());v0.list=Object.keys(i8.default);var O9={};v0.list.forEach(($)=>{O9[$]=i8.default[$].flags.reduce(function(X,Y){return X[Y]=!0,X},{})});function HL($){return Boolean(i8.default[$])}v0.exists=HL;function QL($,X){if(!O9[$])throw new Error("Unknown command "+$);return Boolean(O9[$][X])}v0.hasFlag=QL;function JL($,X,Y){let G=i8.default[$];if(!G)throw new Error("Unknown command "+$);if(!Array.isArray(X))throw new Error("Expect args to be an array");let H=[],Q=Boolean(Y&&Y.parseExternalKey),J=(w,B)=>{let U=[],V=Number(w[B]);for(let F=0;F<V;F++)U.push(F+B+1);return U},W=(w,B,U)=>{for(let V=B;V<w.length-1;V+=1)if(String(w[V]).toLowerCase()===U.toLowerCase())return V+1;return null};switch($){case"zunionstore":case"zinterstore":case"zdiffstore":H.push(0,...J(X,1));break;case"eval":case"evalsha":case"eval_ro":case"evalsha_ro":case"fcall":case"fcall_ro":case"blmpop":case"bzmpop":H.push(...J(X,1));break;case"sintercard":case"lmpop":case"zunion":case"zinter":case"zmpop":case"zintercard":case"zdiff":{H.push(...J(X,0));break}case"georadius":{H.push(0);let w=W(X,5,"STORE");if(w)H.push(w);let B=W(X,5,"STOREDIST");if(B)H.push(B);break}case"georadiusbymember":{H.push(0);let w=W(X,4,"STORE");if(w)H.push(w);let B=W(X,4,"STOREDIST");if(B)H.push(B);break}case"sort":case"sort_ro":H.push(0);for(let w=1;w<X.length-1;w++){let B=X[w];if(typeof B!=="string")continue;let U=B.toUpperCase();if(U==="GET"){if(w+=1,B=X[w],B!=="#")if(Q)H.push([w,x2(B)]);else H.push(w)}else if(U==="BY")if(w+=1,Q)H.push([w,x2(X[w])]);else H.push(w);else if(U==="STORE")w+=1,H.push(w)}break;case"migrate":if(X[2]==="")for(let w=5;w<X.length-1;w++){let B=X[w];if(typeof B==="string"&&B.toUpperCase()==="KEYS"){for(let U=w+1;U<X.length;U++)H.push(U);break}}else H.push(2);break;case"xreadgroup":case"xread":for(let w=$==="xread"?0:3;w<X.length-1;w++)if(String(X[w]).toUpperCase()==="STREAMS"){for(let B=w+1;B<=w+(X.length-1-w)/2;B++)H.push(B);break}break;default:if(G.step>0){let w=G.keyStart-1,B=G.keyStop>0?G.keyStop:X.length+G.keyStop+1;for(let U=w;U<B;U+=G.step)H.push(U)}break}return H}v0.getKeyIndexes=JL;function x2($){if(typeof $!=="string")$=String($);let X=$.indexOf("->");return X===-1?$.length:X}});var h2=I((v2)=>{Object.defineProperty(v2,"__esModule",{value:!0});v2.tryCatch=v2.errorObj=void 0;v2.errorObj={e:{}};var R9;function WL($,X){try{let Y=R9;return R9=null,Y.apply(this,arguments)}catch(Y){return v2.errorObj.e=Y,v2.errorObj}}function wL($){return R9=$,WL}v2.tryCatch=wL});var a$=I((b2)=>{Object.defineProperty(b2,"__esModule",{value:!0});var A6=h2();function y2($){setTimeout(function(){throw $},0)}function BL($,X,Y){if(typeof X==="function")$.then((G)=>{let H;if(Y!==void 0&&Object(Y).spread&&Array.isArray(G))H=A6.tryCatch(X).apply(void 0,[null].concat(G));else H=G===void 0?A6.tryCatch(X)(null):A6.tryCatch(X)(null,G);if(H===A6.errorObj)y2(H.e)},(G)=>{if(!G){let Q=new Error(G+"");Object.assign(Q,{cause:G}),G=Q}let H=A6.tryCatch(X)(G);if(H===A6.errorObj)y2(H.e)});return $}b2.default=BL});var u2=I((Mv,m2)=>{var g2=import.meta.require("assert"),D5=import.meta.require("util");function K6($){Object.defineProperty(this,"message",{value:$||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}D5.inherits(K6,Error);Object.defineProperty(K6.prototype,"name",{value:"RedisError",configurable:!0,writable:!0});function _9($,X,Y){g2(X),g2.strictEqual(typeof Y,"number"),Object.defineProperty(this,"message",{value:$||"",configurable:!0,writable:!0});let G=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=G,this.offset=Y,this.buffer=X}D5.inherits(_9,K6);Object.defineProperty(_9.prototype,"name",{value:"ParserError",configurable:!0,writable:!0});function N9($){Object.defineProperty(this,"message",{value:$||"",configurable:!0,writable:!0});let X=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=X}D5.inherits(N9,K6);Object.defineProperty(N9.prototype,"name",{value:"ReplyError",configurable:!0,writable:!0});function n8($){Object.defineProperty(this,"message",{value:$||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}D5.inherits(n8,K6);Object.defineProperty(n8.prototype,"name",{value:"AbortError",configurable:!0,writable:!0});function q9($){Object.defineProperty(this,"message",{value:$||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}D5.inherits(q9,n8);Object.defineProperty(q9.prototype,"name",{value:"InterruptError",configurable:!0,writable:!0});m2.exports={RedisError:K6,ParserError:_9,ReplyError:N9,AbortError:n8,InterruptError:q9}});var n2=I((Zv,i2)=>{var p2=import.meta.require("assert");class _5 extends Error{get name(){return this.constructor.name}}class c2 extends _5{constructor($,X,Y){p2(X),p2.strictEqual(typeof Y,"number");let G=Error.stackTraceLimit;Error.stackTraceLimit=2;super($);Error.stackTraceLimit=G,this.offset=Y,this.buffer=X}get name(){return this.constructor.name}}class d2 extends _5{constructor($){let X=Error.stackTraceLimit;Error.stackTraceLimit=2;super($);Error.stackTraceLimit=X}get name(){return this.constructor.name}}class M9 extends _5{get name(){return this.constructor.name}}class l2 extends M9{get name(){return this.constructor.name}}i2.exports={RedisError:_5,ParserError:c2,ReplyError:d2,AbortError:M9,InterruptError:l2}});var Z4=I((Pv,r2)=>{var VL=process.version.charCodeAt(1)<55&&process.version.charCodeAt(2)===46?u2():n2();r2.exports=VL});var r8=I((Sv,Z9)=>{var s2=[0,4129,8258,12387,16516,20645,24774,28903,33032,37161,41290,45419,49548,53677,57806,61935,4657,528,12915,8786,21173,17044,29431,25302,37689,33560,45947,41818,54205,50076,62463,58334,9314,13379,1056,5121,25830,29895,17572,21637,42346,46411,34088,38153,58862,62927,50604,54669,13907,9842,5649,1584,30423,26358,22165,18100,46939,42874,38681,34616,63455,59390,55197,51132,18628,22757,26758,30887,2112,6241,10242,14371,51660,55789,59790,63919,35144,39273,43274,47403,23285,19156,31415,27286,6769,2640,14899,10770,56317,52188,64447,60318,39801,35672,47931,43802,27814,31879,19684,23749,11298,15363,3168,7233,60846,64911,52716,56781,44330,48395,36200,40265,32407,28342,24277,20212,15891,11826,7761,3696,65439,61374,57309,53244,48923,44858,40793,36728,37256,33193,45514,41451,53516,49453,61774,57711,4224,161,12482,8419,20484,16421,28742,24679,33721,37784,41979,46042,49981,54044,58239,62302,689,4752,8947,13010,16949,21012,25207,29270,46570,42443,38312,34185,62830,58703,54572,50445,13538,9411,5280,1153,29798,25671,21540,17413,42971,47098,34713,38840,59231,63358,50973,55100,9939,14066,1681,5808,26199,30326,17941,22068,55628,51565,63758,59695,39368,35305,47498,43435,22596,18533,30726,26663,6336,2273,14466,10403,52093,56156,60223,64286,35833,39896,43963,48026,19061,23124,27191,31254,2801,6864,10931,14994,64814,60687,56684,52557,48554,44427,40424,36297,31782,27655,23652,19525,15522,11395,7392,3265,61215,65342,53085,57212,44955,49082,36825,40952,28183,32310,20053,24180,11923,16050,3793,7920],FL=function $(X){var Y,G=0,H=0,Q=[],J=X.length;for(;G<J;G++)if(Y=X.charCodeAt(G),Y<128)Q[H++]=Y;else if(Y<2048)Q[H++]=Y>>6|192,Q[H++]=Y&63|128;else if((Y&64512)===55296&&G+1<X.length&&(X.charCodeAt(G+1)&64512)===56320)Y=65536+((Y&1023)<<10)+(X.charCodeAt(++G)&1023),Q[H++]=Y>>18|240,Q[H++]=Y>>12&63|128,Q[H++]=Y>>6&63|128,Q[H++]=Y&63|128;else Q[H++]=Y>>12|224,Q[H++]=Y>>6&63|128,Q[H++]=Y&63|128;return Q},o2=Z9.exports=function $(X){var Y,G=0,H=-1,Q=0,J=0,W=typeof X==="string"?FL(X):X,w=W.length;while(G<w){if(Y=W[G++],H===-1){if(Y===123)H=G}else if(Y!==125)J=s2[(Y^J>>8)&255]^J<<8;else if(G-1!==H)return J&16383;Q=s2[(Y^Q>>8)&255]^Q<<8}return Q&16383};Z9.exports.generateMulti=function $(X){var Y=1,G=X.length,H=o2(X[0]);while(Y<G)if(o2(X[Y++])!==H)return-1;return H}});var H3=I((Iv,G3)=>{var t2=9007199254740991,EL="[object Arguments]",AL="[object Function]",KL="[object GeneratorFunction]",zL=/^(?:0|[1-9]\d*)$/;function e2($,X,Y){switch(Y.length){case 0:return $.call(X);case 1:return $.call(X,Y[0]);case 2:return $.call(X,Y[0],Y[1]);case 3:return $.call(X,Y[0],Y[1],Y[2])}return $.apply(X,Y)}function LL($,X){var Y=-1,G=Array($);while(++Y<$)G[Y]=X(Y);return G}var N5=Object.prototype,q5=N5.hasOwnProperty,$3=N5.toString,OL=N5.propertyIsEnumerable,a2=Math.max;function RL($,X){var Y=CL($)||IL($)?LL($.length,String):[],G=Y.length,H=!!G;for(var Q in $)if((X||q5.call($,Q))&&!(H&&(Q=="length"||Y3(Q,G))))Y.push(Q);return Y}function DL($,X,Y,G){if($===void 0||P9($,N5[Y])&&!q5.call(G,Y))return X;return $}function _L($,X,Y){var G=$[X];if(!(q5.call($,X)&&P9(G,Y))||Y===void 0&&!(X in $))$[X]=Y}function NL($){if(!I9($))return SL($);var X=PL($),Y=[];for(var G in $)if(!(G=="constructor"&&(X||!q5.call($,G))))Y.push(G);return Y}function X3($,X){return X=a2(X===void 0?$.length-1:X,0),function(){var Y=arguments,G=-1,H=a2(Y.length-X,0),Q=Array(H);while(++G<H)Q[G]=Y[X+G];G=-1;var J=Array(X+1);while(++G<X)J[G]=Y[G];return J[X]=Q,e2($,this,J)}}function qL($,X,Y,G){Y||(Y={});var H=-1,Q=X.length;while(++H<Q){var J=X[H],W=G?G(Y[J],$[J],J,Y,$):void 0;_L(Y,J,W===void 0?$[J]:W)}return Y}function ML($){return X3(function(X,Y){var G=-1,H=Y.length,Q=H>1?Y[H-1]:void 0,J=H>2?Y[2]:void 0;if(Q=$.length>3&&typeof Q=="function"?(H--,Q):void 0,J&&ZL(Y[0],Y[1],J))Q=H<3?void 0:Q,H=1;X=Object(X);while(++G<H){var W=Y[G];if(W)$(X,W,G,Q)}return X})}function Y3($,X){return X=X==null?t2:X,!!X&&(typeof $=="number"||zL.test($))&&($>-1&&$%1==0&&$<X)}function ZL($,X,Y){if(!I9(Y))return!1;var G=typeof X;if(G=="number"?S9(Y)&&Y3(X,Y.length):G=="string"&&(X in Y))return P9(Y[X],$);return!1}function PL($){var X=$&&$.constructor,Y=typeof X=="function"&&X.prototype||N5;return $===Y}function SL($){var X=[];if($!=null)for(var Y in Object($))X.push(Y);return X}function P9($,X){return $===X||$!==$&&X!==X}function IL($){return jL($)&&q5.call($,"callee")&&(!OL.call($,"callee")||$3.call($)==EL)}var CL=Array.isArray;function S9($){return $!=null&&kL($.length)&&!TL($)}function jL($){return xL($)&&S9($)}function TL($){var X=I9($)?$3.call($):"";return X==AL||X==KL}function kL($){return typeof $=="number"&&$>-1&&$%1==0&&$<=t2}function I9($){var X=typeof $;return!!$&&(X=="object"||X=="function")}function xL($){return!!$&&typeof $=="object"}var vL=ML(function($,X,Y,G){qL(X,hL(X),$,G)}),fL=X3(function($){return $.push(void 0,DL),e2(vL,void 0,$)});function hL($){return S9($)?RL($,!0):NL($)}G3.exports=fL});var W3=I((Cv,J3)=>{var yL=9007199254740991,bL="[object Arguments]",gL="[object Function]",mL="[object GeneratorFunction]",C9=Object.prototype,uL=C9.hasOwnProperty,Q3=C9.toString,pL=C9.propertyIsEnumerable;function cL($){return lL($)&&uL.call($,"callee")&&(!pL.call($,"callee")||Q3.call($)==bL)}function dL($){return $!=null&&nL($.length)&&!iL($)}function lL($){return sL($)&&dL($)}function iL($){var X=rL($)?Q3.call($):"";return X==gL||X==mL}function nL($){return typeof $=="number"&&$>-1&&$%1==0&&$<=yL}function rL($){var X=typeof $;return!!$&&(X=="object"||X=="function")}function sL($){return!!$&&typeof $=="object"}J3.exports=cL});var s8=I((w3)=>{Object.defineProperty(w3,"__esModule",{value:!0});w3.isArguments=w3.defaults=w3.noop=void 0;var oL=H3();w3.defaults=oL;var aL=W3();w3.isArguments=aL;function tL(){}w3.noop=tL});var V3=I((Tv,U3)=>{var z6=1000,L6=z6*60,O6=L6*60,P4=O6*24,XO=P4*7,YO=P4*365.25;U3.exports=function($,X){X=X||{};var Y=typeof $;if(Y==="string"&&$.length>0)return GO($);else if(Y==="number"&&isFinite($))return X.long?QO($):HO($);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify($))};function GO($){if($=String($),$.length>100)return;var X=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec($);if(!X)return;var Y=parseFloat(X[1]),G=(X[2]||"ms").toLowerCase();switch(G){case"years":case"year":case"yrs":case"yr":case"y":return Y*YO;case"weeks":case"week":case"w":return Y*XO;case"days":case"day":case"d":return Y*P4;case"hours":case"hour":case"hrs":case"hr":case"h":return Y*O6;case"minutes":case"minute":case"mins":case"min":case"m":return Y*L6;case"seconds":case"second":case"secs":case"sec":case"s":return Y*z6;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return Y;default:return}}function HO($){var X=Math.abs($);if(X>=P4)return Math.round($/P4)+"d";if(X>=O6)return Math.round($/O6)+"h";if(X>=L6)return Math.round($/L6)+"m";if(X>=z6)return Math.round($/z6)+"s";return $+"ms"}function QO($){var X=Math.abs($);if(X>=P4)return o8($,X,P4,"day");if(X>=O6)return o8($,X,O6,"hour");if(X>=L6)return o8($,X,L6,"minute");if(X>=z6)return o8($,X,z6,"second");return $+" ms"}function o8($,X,Y,G){var H=X>=Y*1.5;return Math.round($/Y)+" "+G+(H?"s":"")}});var j9=I((kv,F3)=>{function JO($){Y.debug=Y,Y.default=Y,Y.coerce=w,Y.disable=Q,Y.enable=H,Y.enabled=J,Y.humanize=V3(),Y.destroy=B,Object.keys($).forEach((U)=>{Y[U]=$[U]}),Y.names=[],Y.skips=[],Y.formatters={};function X(U){let V=0;for(let F=0;F<U.length;F++)V=(V<<5)-V+U.charCodeAt(F),V|=0;return Y.colors[Math.abs(V)%Y.colors.length]}Y.selectColor=X;function Y(U){let V,F=null,E,K;function A(...P){if(!A.enabled)return;let _=A,C=Number(new Date),b=C-(V||C);if(_.diff=b,_.prev=V,_.curr=C,V=C,P[0]=Y.coerce(P[0]),typeof P[0]!=="string")P.unshift("%O");let T=0;P[0]=P[0].replace(/%([a-zA-Z%])/g,(k,x)=>{if(k==="%%")return"%";T++;let S=Y.formatters[x];if(typeof S==="function"){let d=P[T];k=S.call(_,d),P.splice(T,1),T--}return k}),Y.formatArgs.call(_,P),(_.log||Y.log).apply(_,P)}if(A.namespace=U,A.useColors=Y.useColors(),A.color=Y.selectColor(U),A.extend=G,A.destroy=Y.destroy,Object.defineProperty(A,"enabled",{enumerable:!0,configurable:!1,get:()=>{if(F!==null)return F;if(E!==Y.namespaces)E=Y.namespaces,K=Y.enabled(U);return K},set:(P)=>{F=P}}),typeof Y.init==="function")Y.init(A);return A}function G(U,V){let F=Y(this.namespace+(typeof V==="undefined"?":":V)+U);return F.log=this.log,F}function H(U){Y.save(U),Y.namespaces=U,Y.names=[],Y.skips=[];let V,F=(typeof U==="string"?U:"").split(/[\s,]+/),E=F.length;for(V=0;V<E;V++){if(!F[V])continue;if(U=F[V].replace(/\*/g,".*?"),U[0]==="-")Y.skips.push(new RegExp("^"+U.slice(1)+"$"));else Y.names.push(new RegExp("^"+U+"$"))}}function Q(){let U=[...Y.names.map(W),...Y.skips.map(W).map((V)=>"-"+V)].join(",");return Y.enable(""),U}function J(U){if(U[U.length-1]==="*")return!0;let V,F;for(V=0,F=Y.skips.length;V<F;V++)if(Y.skips[V].test(U))return!1;for(V=0,F=Y.names.length;V<F;V++)if(Y.names[V].test(U))return!0;return!1}function W(U){return U.toString().substring(2,U.toString().length-2).replace(/\.\*\?$/,"*")}function w(U){if(U instanceof Error)return U.stack||U.message;return U}function B(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return Y.enable(Y.load()),Y}F3.exports=JO});var A3=I((E3,t8)=>{E3.formatArgs=wO;E3.save=BO;E3.load=UO;E3.useColors=WO;E3.storage=VO();E3.destroy=(()=>{let $=!1;return()=>{if(!$)$=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}})();E3.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function WO(){if(typeof window!=="undefined"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator!=="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let $;return typeof document!=="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!=="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!=="undefined"&&navigator.userAgent&&($=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt($[1],10)>=31||typeof navigator!=="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function wO($){if($[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+$[0]+(this.useColors?"%c ":" ")+"+"+t8.exports.humanize(this.diff),!this.useColors)return;let X="color: "+this.color;$.splice(1,0,X,"color: inherit");let Y=0,G=0;$[0].replace(/%[a-zA-Z%]/g,(H)=>{if(H==="%%")return;if(Y++,H==="%c")G=Y}),$.splice(G,0,X)}E3.log=console.debug||console.log||(()=>{});function BO($){try{if($)E3.storage.setItem("debug",$);else E3.storage.removeItem("debug")}catch(X){}}function UO(){let $;try{$=E3.storage.getItem("debug")}catch(X){}if(!$&&typeof process!=="undefined"&&"env"in process)$=process.env.DEBUG;return $}function VO(){try{return localStorage}catch($){}}t8.exports=j9()(E3);var{formatters:FO}=t8.exports;FO.j=function($){try{return JSON.stringify($)}catch(X){return"[UnexpectedJSONParseError]: "+X.message}}});var O3=I((z3,$7)=>{var DO=import.meta.require("tty"),e8=import.meta.require("util");z3.init=SO;z3.log=MO;z3.formatArgs=NO;z3.save=ZO;z3.load=PO;z3.useColors=_O;z3.destroy=e8.deprecate(()=>{},"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");z3.colors=[6,2,3,4,5,1];try{let $=(()=>{throw new Error(`Cannot require module "supports-color"`);})();if($&&($.stderr||$).level>=2)z3.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221]}catch($){}z3.inspectOpts=Object.keys(process.env).filter(($)=>{return/^debug_/i.test($)}).reduce(($,X)=>{let Y=X.substring(6).toLowerCase().replace(/_([a-z])/g,(H,Q)=>{return Q.toUpperCase()}),G=process.env[X];if(/^(yes|on|true|enabled)$/i.test(G))G=!0;else if(/^(no|off|false|disabled)$/i.test(G))G=!1;else if(G==="null")G=null;else G=Number(G);return $[Y]=G,$},{});function _O(){return"colors"in z3.inspectOpts?Boolean(z3.inspectOpts.colors):DO.isatty(process.stderr.fd)}function NO($){let{namespace:X,useColors:Y}=this;if(Y){let G=this.color,H="\x1B[3"+(G<8?G:"8;5;"+G),Q=`  ${H};1m${X} \x1B[0m`;$[0]=Q+$[0].split("\n").join("\n"+Q),$.push(H+"m+"+$7.exports.humanize(this.diff)+"\x1B[0m")}else $[0]=qO()+X+" "+$[0]}function qO(){if(z3.inspectOpts.hideDate)return"";return new Date().toISOString()+" "}function MO(...$){return process.stderr.write(e8.formatWithOptions(z3.inspectOpts,...$)+"\n")}function ZO($){if($)process.env.DEBUG=$;else delete process.env.DEBUG}function PO(){return process.env.DEBUG}function SO($){$.inspectOpts={};let X=Object.keys(z3.inspectOpts);for(let Y=0;Y<X.length;Y++)$.inspectOpts[X[Y]]=z3.inspectOpts[X[Y]]}$7.exports=j9()(z3);var{formatters:K3}=$7.exports;K3.o=function($){return this.inspectOpts.colors=this.useColors,e8.inspect($,this.inspectOpts).split("\n").map((X)=>X.trim()).join(" ")};K3.O=function($){return this.inspectOpts.colors=this.useColors,e8.inspect($,this.inspectOpts)}});var R3=I((fv,T9)=>{if(typeof process==="undefined"||process.type==="renderer"||!1||process.__nwjs)T9.exports=A3();else T9.exports=O3()});var M3=I((N3)=>{Object.defineProperty(N3,"__esModule",{value:!0});N3.genRedactedString=N3.getStringValue=N3.MAX_ARGUMENT_LENGTH=void 0;var fO=R3(),k9=200;N3.MAX_ARGUMENT_LENGTH=k9;var hO="ioredis";function D3($){if($===null)return;switch(typeof $){case"boolean":return;case"number":return;case"object":if(Buffer.isBuffer($))return $.toString("hex");if(Array.isArray($))return $.join(",");try{return JSON.stringify($)}catch(X){return}case"string":return $}}N3.getStringValue=D3;function _3($,X){let{length:Y}=$;return Y<=X?$:$.slice(0,X)+' ... <REDACTED full-length="'+Y+'">'}N3.genRedactedString=_3;function yO($){let X=fO.default(`${hO}:${$}`);function Y(...G){if(!X.enabled)return;for(let H=1;H<G.length;H++){let Q=D3(G[H]);if(typeof Q==="string"&&Q.length>k9)G[H]=_3(Q,k9)}return X.apply(null,G)}return Object.defineProperties(Y,{namespace:{get(){return X.namespace}},enabled:{get(){return X.enabled}},destroy:{get(){return X.destroy}},log:{get(){return X.log},set(G){X.log=G}}}),Y}N3.default=yO});var S3=I((P3)=>{Object.defineProperty(P3,"__esModule",{value:!0});var Z3=`-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`,uO={RedisCloudFixed:{ca:Z3},RedisCloudFlexible:{ca:Z3}};P3.default=uO});var Y0=I((X7)=>{Object.defineProperty(X7,"__esModule",{value:!0});X7.noop=X7.defaults=X7.Debug=X7.zipMap=X7.CONNECTION_CLOSED_ERROR_MSG=X7.shuffle=X7.sample=X7.resolveTLSProfile=X7.parseURL=X7.optimizeErrorStack=X7.toArg=X7.convertMapToArray=X7.convertObjectToArray=X7.timeout=X7.packObject=X7.isInt=X7.wrapMultiResult=X7.convertBufferToString=void 0;var I3=import.meta.require("url"),x9=s8();Object.defineProperty(X7,"defaults",{enumerable:!0,get:function(){return x9.defaults}});Object.defineProperty(X7,"noop",{enumerable:!0,get:function(){return x9.noop}});var cO=M3();X7.Debug=cO.default;var dO=S3();function C3($,X){if($ instanceof Buffer)return $.toString(X);if(Array.isArray($)){let Y=$.length,G=Array(Y);for(let H=0;H<Y;++H)G[H]=$[H]instanceof Buffer&&X==="utf8"?$[H].toString():C3($[H],X);return G}return $}X7.convertBufferToString=C3;function lO($){if(!$)return null;let X=[],Y=$.length;for(let G=0;G<Y;++G){let H=$[G];if(H instanceof Error)X.push([H]);else X.push([null,H])}return X}X7.wrapMultiResult=lO;function j3($){let X=parseFloat($);return!isNaN($)&&(X|0)===X}X7.isInt=j3;function iO($){let X={},Y=$.length;for(let G=1;G<Y;G+=2)X[$[G-1]]=$[G];return X}X7.packObject=iO;function nO($,X){let Y=null,G=function(){if(Y)clearTimeout(Y),Y=null,$.apply(this,arguments)};return Y=setTimeout(G,X,new Error("timeout")),G}X7.timeout=nO;function rO($){let X=[],Y=Object.keys($);for(let G=0,H=Y.length;G<H;G++)X.push(Y[G],$[Y[G]]);return X}X7.convertObjectToArray=rO;function sO($){let X=[],Y=0;return $.forEach(function(G,H){X[Y]=H,X[Y+1]=G,Y+=2}),X}X7.convertMapToArray=sO;function oO($){if($===null||typeof $==="undefined")return"";return String($)}X7.toArg=oO;function aO($,X,Y){let G=X.split("\n"),H="",Q;for(Q=1;Q<G.length;++Q)if(G[Q].indexOf(Y)===-1)break;for(let J=Q;J<G.length;++J)H+="\n"+G[J];if($.stack){let J=$.stack.indexOf("\n");$.stack=$.stack.slice(0,J)+H}return $}X7.optimizeErrorStack=aO;function tO($){if(j3($))return{port:$};let X=I3.parse($,!0,!0);if(!X.slashes&&$[0]!=="/")$="//"+$,X=I3.parse($,!0,!0);let Y=X.query||{},G={};if(X.auth){let H=X.auth.indexOf(":");G.username=H===-1?X.auth:X.auth.slice(0,H),G.password=H===-1?"":X.auth.slice(H+1)}if(X.pathname)if(X.protocol==="redis:"||X.protocol==="rediss:"){if(X.pathname.length>1)G.db=X.pathname.slice(1)}else G.path=X.pathname;if(X.host)G.host=X.hostname;if(X.port)G.port=X.port;if(typeof Y.family==="string"){let H=Number.parseInt(Y.family,10);if(!Number.isNaN(H))G.family=H}return x9.defaults(G,Y),G}X7.parseURL=tO;function eO($){let X=$===null||$===void 0?void 0:$.tls;if(typeof X==="string")X={profile:X};let Y=dO.default[X===null||X===void 0?void 0:X.profile];if(Y)X=Object.assign({},Y,X),delete X.profile,$=Object.assign({},$,{tls:X});return $}X7.resolveTLSProfile=eO;function $R($,X=0){let Y=$.length;if(X>=Y)return null;return $[X+Math.floor(Math.random()*(Y-X))]}X7.sample=$R;function XR($){let X=$.length;while(X>0){let Y=Math.floor(Math.random()*X);X--,[$[X],$[Y]]=[$[Y],$[X]]}return $}X7.shuffle=XR;X7.CONNECTION_CLOSED_ERROR_MSG="Connection is closed.";function YR($,X){let Y=new Map;return $.forEach((G,H)=>{Y.set(G,X[H])}),Y}X7.zipMap=YR});var v$=I((f3)=>{var __dirname="/mnt/Master Disk/CodeLab/MERN Stack/xRush/dokanify-server/node_modules/ioredis/built";Object.defineProperty(f3,"__esModule",{value:!0});var T3=E6(),DR=r8(),_R=a$(),I4=Y0();class f0{constructor($,X=[],Y={},G){if(this.name=$,this.inTransaction=!1,this.isResolved=!1,this.transformed=!1,this.replyEncoding=Y.replyEncoding,this.errorStack=Y.errorStack,this.args=X.flat(),this.callback=G,this.initPromise(),Y.keyPrefix){let H=Y.keyPrefix instanceof Buffer,Q=H?Y.keyPrefix:null;this._iterateKeys((J)=>{if(J instanceof Buffer){if(Q===null)Q=Buffer.from(Y.keyPrefix);return Buffer.concat([Q,J])}else if(H)return Buffer.concat([Y.keyPrefix,Buffer.from(String(J))]);return Y.keyPrefix+J})}if(Y.readOnly)this.isReadOnly=!0}static checkFlag($,X){return!!this.getFlagMap()[$][X]}static setArgumentTransformer($,X){this._transformer.argument[$]=X}static setReplyTransformer($,X){this._transformer.reply[$]=X}static getFlagMap(){if(!this.flagMap)this.flagMap=Object.keys(f0.FLAGS).reduce(($,X)=>{return $[X]={},f0.FLAGS[X].forEach((Y)=>{$[X][Y]=!0}),$},{});return this.flagMap}getSlot(){if(typeof this.slot==="undefined"){let $=this.getKeys()[0];this.slot=$==null?null:DR($)}return this.slot}getKeys(){return this._iterateKeys()}toWritable($){let X,Y="*"+(this.args.length+1)+"\r\n$"+Buffer.byteLength(this.name)+"\r\n"+this.name+"\r\n";if(this.bufferMode){let G=new v3;G.push(Y);for(let H=0;H<this.args.length;++H){let Q=this.args[H];if(Q instanceof Buffer)if(Q.length===0)G.push("$0\r\n\r\n");else G.push("$"+Q.length+"\r\n"),G.push(Q),G.push("\r\n");else G.push("$"+Buffer.byteLength(Q)+"\r\n"+Q+"\r\n")}X=G.toBuffer()}else{X=Y;for(let G=0;G<this.args.length;++G){let H=this.args[G];X+="$"+Buffer.byteLength(H)+"\r\n"+H+"\r\n"}}return X}stringifyArguments(){for(let $=0;$<this.args.length;++$){let X=this.args[$];if(typeof X==="string");else if(X instanceof Buffer)this.bufferMode=!0;else this.args[$]=I4.toArg(X)}}transformReply($){if(this.replyEncoding)$=I4.convertBufferToString($,this.replyEncoding);let X=f0._transformer.reply[this.name];if(X)$=X($);return $}setTimeout($){if(!this._commandTimeoutTimer)this._commandTimeoutTimer=setTimeout(()=>{if(!this.isResolved)this.reject(new Error("Command timed out"))},$)}initPromise(){let $=new Promise((X,Y)=>{if(!this.transformed){this.transformed=!0;let G=f0._transformer.argument[this.name];if(G)this.args=G(this.args);this.stringifyArguments()}if(this.resolve=this._convertValue(X),this.errorStack)this.reject=(G)=>{Y(I4.optimizeErrorStack(G,this.errorStack.stack,__dirname))};else this.reject=Y});this.promise=_R.default($,this.callback)}_iterateKeys($=(X)=>X){if(typeof this.keys==="undefined"){if(this.keys=[],T3.exists(this.name)){let X=T3.getKeyIndexes(this.name,this.args);for(let Y of X)this.args[Y]=$(this.args[Y]),this.keys.push(this.args[Y])}}return this.keys}_convertValue($){return(X)=>{try{let Y=this._commandTimeoutTimer;if(Y)clearTimeout(Y),delete this._commandTimeoutTimer;$(this.transformReply(X)),this.isResolved=!0}catch(Y){this.reject(Y)}return this.promise}}}f3.default=f0;f0.FLAGS={VALID_IN_SUBSCRIBER_MODE:["subscribe","psubscribe","unsubscribe","punsubscribe","ssubscribe","sunsubscribe","ping","quit"],VALID_IN_MONITOR_MODE:["monitor","auth"],ENTER_SUBSCRIBER_MODE:["subscribe","psubscribe","ssubscribe"],EXIT_SUBSCRIBER_MODE:["unsubscribe","punsubscribe","sunsubscribe"],WILL_DISCONNECT:["quit"]};f0._transformer={argument:{},reply:{}};var k3=function($){if($.length===1){if($[0]instanceof Map)return I4.convertMapToArray($[0]);if(typeof $[0]==="object"&&$[0]!==null)return I4.convertObjectToArray($[0])}return $},x3=function($){if($.length===2){if($[1]instanceof Map)return[$[0]].concat(I4.convertMapToArray($[1]));if(typeof $[1]==="object"&&$[1]!==null)return[$[0]].concat(I4.convertObjectToArray($[1]))}return $};f0.setArgumentTransformer("mset",k3);f0.setArgumentTransformer("msetnx",k3);f0.setArgumentTransformer("hset",x3);f0.setArgumentTransformer("hmset",x3);f0.setReplyTransformer("hgetall",function($){if(Array.isArray($)){let X={};for(let Y=0;Y<$.length;Y+=2){let G=$[Y],H=$[Y+1];if(G in X)Object.defineProperty(X,G,{value:H,configurable:!0,enumerable:!0,writable:!0});else X[G]=H}return X}return $});class v3{constructor(){this.length=0,this.items=[]}push($){this.length+=Buffer.byteLength($),this.items.push($)}toBuffer(){let $=Buffer.allocUnsafe(this.length),X=0;for(let Y of this.items){let G=Buffer.byteLength(Y);Buffer.isBuffer(Y)?Y.copy($,X):$.write(Y,X,G),X+=G}return $}}});var y3=I((h3)=>{Object.defineProperty(h3,"__esModule",{value:!0});var qR=Z4();class v9 extends qR.RedisError{constructor($,X){super($);this.lastNodeError=X,Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}h3.default=v9;v9.defaultMessage="Failed to refresh slots cache."});var Y7=I((g3)=>{Object.defineProperty(g3,"__esModule",{value:!0});var ZR=import.meta.require("stream");class b3 extends ZR.Readable{constructor($){super($);this.opt=$,this._redisCursor="0",this._redisDrained=!1}_read(){if(this._redisDrained){this.push(null);return}let $=[this._redisCursor];if(this.opt.key)$.unshift(this.opt.key);if(this.opt.match)$.push("MATCH",this.opt.match);if(this.opt.type)$.push("TYPE",this.opt.type);if(this.opt.count)$.push("COUNT",String(this.opt.count));this.opt.redis[this.opt.command]($,(X,Y)=>{if(X){this.emit("error",X);return}if(this._redisCursor=Y[0]instanceof Buffer?Y[0].toString():Y[0],this._redisCursor==="0")this._redisDrained=!0;this.push(Y[1])})}close(){this._redisDrained=!0}}g3.default=b3});var r3=I((l3)=>{Object.defineProperty(l3,"__esModule",{value:!0});l3.executeWithAutoPipelining=l3.getFirstValueInFlattenedArray=l3.shouldUseAutoPipelining=l3.notAllowedAutoPipelineCommands=l3.kCallbacks=l3.kExec=void 0;var u3=s8(),SR=r8(),m3=a$();l3.kExec=Symbol("exec");l3.kCallbacks=Symbol("callbacks");l3.notAllowedAutoPipelineCommands=["auth","info","script","quit","cluster","pipeline","multi","subscribe","psubscribe","unsubscribe","unpsubscribe","select"];function p3($,X){if($._runningAutoPipelines.has(X))return;if(!$._autoPipelines.has(X))return;$._runningAutoPipelines.add(X);let Y=$._autoPipelines.get(X);$._autoPipelines.delete(X);let G=Y[l3.kCallbacks];Y[l3.kCallbacks]=null,Y.exec(function(H,Q){if($._runningAutoPipelines.delete(X),H)for(let J=0;J<G.length;J++)process.nextTick(G[J],H);else for(let J=0;J<G.length;J++)process.nextTick(G[J],...Q[J]);if($._autoPipelines.has(X))p3($,X)})}function IR($,X,Y){return X&&$.options.enableAutoPipelining&&!$.isPipeline&&!l3.notAllowedAutoPipelineCommands.includes(Y)&&!$.options.autoPipeliningIgnoredCommands.includes(Y)}l3.shouldUseAutoPipelining=IR;function c3($){for(let X=0;X<$.length;X++){let Y=$[X];if(typeof Y==="string")return Y;else if(Array.isArray(Y)||u3.isArguments(Y)){if(Y.length===0)continue;return Y[0]}let G=[Y].flat();if(G.length>0)return G[0]}return}l3.getFirstValueInFlattenedArray=c3;function d3($,X,Y,G,H){if($.isCluster&&!$.slots.length){if($.status==="wait")$.connect().catch(u3.noop);return m3.default(new Promise(function(B,U){$.delayUntilReady((V)=>{if(V){U(V);return}d3($,X,Y,G,null).then(B,U)})}),H)}let Q=$.options.keyPrefix||"",J=$.isCluster?$.slots[SR(`${Q}${c3(G)}`)].join(","):"main";if(!$._autoPipelines.has(J)){let B=$.pipeline();B[l3.kExec]=!1,B[l3.kCallbacks]=[],$._autoPipelines.set(J,B)}let W=$._autoPipelines.get(J);if(!W[l3.kExec])W[l3.kExec]=!0,setImmediate(p3,$,J);let w=new Promise(function(B,U){if(W[l3.kCallbacks].push(function(V,F){if(V){U(V);return}B(F)}),X==="call")G.unshift(Y);W[X](...G)});return m3.default(w,H)}l3.executeWithAutoPipelining=d3});var a3=I((o3)=>{Object.defineProperty(o3,"__esModule",{value:!0});var TR=import.meta.require("crypto"),kR=v$(),xR=a$();class s3{constructor($,X=null,Y="",G=!1){this.lua=$,this.numberOfKeys=X,this.keyPrefix=Y,this.readOnly=G,this.sha=TR.createHash("sha1").update($).digest("hex");let H=this.sha,Q=new WeakSet;this.Command=class J extends kR.default{toWritable(W){let w=this.reject;if(this.reject=(B)=>{if(B.message.indexOf("NOSCRIPT")!==-1)Q.delete(W);w.call(this,B)},!Q.has(W))Q.add(W),this.name="eval",this.args[0]=$;else if(this.name==="eval")this.name="evalsha",this.args[0]=H;return super.toWritable(W)}}}execute($,X,Y,G){if(typeof this.numberOfKeys==="number")X.unshift(this.numberOfKeys);if(this.keyPrefix)Y.keyPrefix=this.keyPrefix;if(this.readOnly)Y.readOnly=!0;let H=new this.Command("evalsha",[this.sha,...X],Y);return H.promise=H.promise.catch((Q)=>{if(Q.message.indexOf("NOSCRIPT")===-1)throw Q;let J=new this.Command("evalsha",[this.sha,...X],Y);return($.isPipeline?$.redis:$).sendCommand(J)}),xR.default(H.promise,G),$.sendCommand(H)}}o3.default=s3});var Q7=I((e3)=>{Object.defineProperty(e3,"__esModule",{value:!0});var fR=E6(),H7=r3(),hR=v$(),yR=a3();class e${constructor(){this.options={},this.scriptsSet={},this.addedBuiltinSet=new Set}getBuiltinCommands(){return f9.slice(0)}createBuiltinCommand($){return{string:t$(null,$,"utf8"),buffer:t$(null,$,null)}}addBuiltinCommand($){this.addedBuiltinSet.add($),this[$]=t$($,$,"utf8"),this[$+"Buffer"]=t$($+"Buffer",$,null)}defineCommand($,X){let Y=new yR.default(X.lua,X.numberOfKeys,this.options.keyPrefix,X.readOnly);this.scriptsSet[$]=Y,this[$]=t3($,$,Y,"utf8"),this[$+"Buffer"]=t3($+"Buffer",$,Y,null)}sendCommand($,X,Y){throw new Error('"sendCommand" is not implemented')}}var f9=fR.list.filter(($)=>$!=="monitor");f9.push("sentinel");f9.forEach(function($){e$.prototype[$]=t$($,$,"utf8"),e$.prototype[$+"Buffer"]=t$($+"Buffer",$,null)});e$.prototype.call=t$("call","utf8");e$.prototype.callBuffer=t$("callBuffer",null);e$.prototype.send_command=e$.prototype.call;function t$($,X,Y){if(typeof Y==="undefined")Y=X,X=null;return function(...G){let H=X||G.shift(),Q=G[G.length-1];if(typeof Q==="function")G.pop();else Q=void 0;let J={errorStack:this.options.showFriendlyErrorStack?new Error:void 0,keyPrefix:this.options.keyPrefix,replyEncoding:Y};if(!H7.shouldUseAutoPipelining(this,$,H))return this.sendCommand(new hR.default(H,G,J,Q));return H7.executeWithAutoPipelining(this,$,H,G,Q)}}function t3($,X,Y,G){return function(...H){let Q=typeof H[H.length-1]==="function"?H.pop():void 0,J={replyEncoding:G};if(this.options.showFriendlyErrorStack)J.errorStack=new Error;if(!H7.shouldUseAutoPipelining(this,$,X))return Y.execute(this,H,J,Q);return H7.executeWithAutoPipelining(this,$,X,H,Q)}}e3.default=e$});var y9=I((GQ)=>{Object.defineProperty(GQ,"__esModule",{value:!0});var h9=r8(),$Q=E6(),XQ=a$(),gR=import.meta.require("util"),mR=v$(),uR=Y0(),pR=Q7();function cR($,X){let Y=h9(X[0]),G=$._groupsBySlot[Y];for(let H=1;H<X.length;H++)if($._groupsBySlot[h9(X[H])]!==G)return-1;return Y}class C4 extends pR.default{constructor($){super();this.redis=$,this.isPipeline=!0,this.replyPending=0,this._queue=[],this._result=[],this._transactions=0,this._shaToScript={},this.isCluster=this.redis.constructor.name==="Cluster"||this.redis.isCluster,this.options=$.options,Object.keys($.scriptsSet).forEach((Y)=>{let G=$.scriptsSet[Y];this._shaToScript[G.sha]=G,this[Y]=$[Y],this[Y+"Buffer"]=$[Y+"Buffer"]}),$.addedBuiltinSet.forEach((Y)=>{this[Y]=$[Y],this[Y+"Buffer"]=$[Y+"Buffer"]}),this.promise=new Promise((Y,G)=>{this.resolve=Y,this.reject=G});let X=this;Object.defineProperty(this,"length",{get:function(){return X._queue.length}})}fillResult($,X){if(this._queue[X].name==="exec"&&Array.isArray($[1])){let G=$[1].length;for(let H=0;H<G;H++){if($[1][H]instanceof Error)continue;let Q=this._queue[X-(G-H)];try{$[1][H]=Q.transformReply($[1][H])}catch(J){$[1][H]=J}}}if(this._result[X]=$,--this.replyPending)return;if(this.isCluster){let G=!0,H;for(let Q=0;Q<this._result.length;++Q){let J=this._result[Q][0],W=this._queue[Q];if(J){if(W.name==="exec"&&J.message==="EXECABORT Transaction discarded because of previous errors.")continue;if(!H)H={name:J.name,message:J.message};else if(H.name!==J.name||H.message!==J.message){G=!1;break}}else if(!W.inTransaction){if(!($Q.exists(W.name)&&$Q.hasFlag(W.name,"readonly"))){G=!1;break}}}if(H&&G){let Q=this,J=H.message.split(" "),W=this._queue,w=!1;this._queue=[];for(let F=0;F<W.length;++F){if(J[0]==="ASK"&&!w&&W[F].name!=="asking"&&(!W[F-1]||W[F-1].name!=="asking")){let E=new mR.default("asking");E.ignore=!0,this.sendCommand(E)}W[F].initPromise(),this.sendCommand(W[F]),w=W[F].inTransaction}let B=!0;if(typeof this.leftRedirections==="undefined")this.leftRedirections={};let U=function(){Q.exec()},V=this.redis;if(V.handleError(H,this.leftRedirections,{moved:function(F,E){Q.preferKey=E,V.slots[J[1]]=[E],V._groupsBySlot[J[1]]=V._groupsIds[V.slots[J[1]].join(";")],V.refreshSlotsCache(),Q.exec()},ask:function(F,E){Q.preferKey=E,Q.exec()},tryagain:U,clusterDown:U,connectionClosed:U,maxRedirections:()=>{B=!1},defaults:()=>{B=!1}}),B)return}}let Y=0;for(let G=0;G<this._queue.length-Y;++G){if(this._queue[G+Y].ignore)Y+=1;this._result[G]=this._result[G+Y]}this.resolve(this._result.slice(0,this._result.length-Y))}sendCommand($){if(this._transactions>0)$.inTransaction=!0;let X=this._queue.length;return $.pipelineIndex=X,$.promise.then((Y)=>{this.fillResult([null,Y],X)}).catch((Y)=>{this.fillResult([Y],X)}),this._queue.push($),this}addBatch($){let X,Y,G;for(let H=0;H<$.length;++H)X=$[H],Y=X[0],G=X.slice(1),this[Y].apply(this,G);return this}}GQ.default=C4;var dR=C4.prototype.multi;C4.prototype.multi=function(){return this._transactions+=1,dR.apply(this,arguments)};var YQ=C4.prototype.execBuffer;C4.prototype.execBuffer=gR.deprecate(function(){if(this._transactions>0)this._transactions-=1;return YQ.apply(this,arguments)},"Pipeline#execBuffer: Use Pipeline#exec instead");C4.prototype.exec=function($){if(this.isCluster&&!this.redis.slots.length){if(this.redis.status==="wait")this.redis.connect().catch(uR.noop);if($&&!this.nodeifiedPromise)this.nodeifiedPromise=!0,XQ.default(this.promise,$);return this.redis.delayUntilReady((H)=>{if(H){this.reject(H);return}this.exec($)}),this.promise}if(this._transactions>0)return this._transactions-=1,YQ.apply(this,arguments);if(!this.nodeifiedPromise)this.nodeifiedPromise=!0,XQ.default(this.promise,$);if(!this._queue.length)this.resolve([]);let X;if(this.isCluster){let H=[];for(let Q=0;Q<this._queue.length;Q++){let J=this._queue[Q].getKeys();if(J.length)H.push(J[0]);if(J.length&&h9.generateMulti(J)<0)return this.reject(new Error("All the keys in a pipeline command should belong to the same slot")),this.promise}if(H.length){if(X=cR(this.redis,H),X<0)return this.reject(new Error("All keys in the pipeline should belong to the same slots allocation group")),this.promise}else X=Math.random()*16384|0}let Y=this;return G(),this.promise;function G(){let H=Y.replyPending=Y._queue.length,Q;if(Y.isCluster)Q={slot:X,redis:Y.redis.connectionPool.nodes.all[Y.preferKey]};let J="",W,w={isPipeline:!0,destination:Y.isCluster?Q:{redis:Y.redis},write(B){if(typeof B!=="string"){if(!W)W=[];if(J)W.push(Buffer.from(J,"utf8")),J="";W.push(B)}else J+=B;if(!--H){if(W){if(J)W.push(Buffer.from(J,"utf8"));w.destination.redis.stream.write(Buffer.concat(W))}else w.destination.redis.stream.write(J);H=Y._queue.length,J="",W=void 0}}};for(let B=0;B<Y._queue.length;++B)Y.redis.sendCommand(Y._queue[B],w,Q);return Y.promise}}});var m9=I((QQ)=>{Object.defineProperty(QQ,"__esModule",{value:!0});QQ.addTransactionSupport=void 0;var b9=Y0(),g9=a$(),HQ=y9();function iR($){$.pipeline=function(G){let H=new HQ.default(this);if(Array.isArray(G))H.addBatch(G);return H};let{multi:X}=$;$.multi=function(G,H){if(typeof H==="undefined"&&!Array.isArray(G))H=G,G=null;if(H&&H.pipeline===!1)return X.call(this);let Q=new HQ.default(this);if(Q.multi(),Array.isArray(G))Q.addBatch(G);let J=Q.exec;Q.exec=function(w){if(this.isCluster&&!this.redis.slots.length){if(this.redis.status==="wait")this.redis.connect().catch(b9.noop);return g9.default(new Promise((U,V)=>{this.redis.delayUntilReady((F)=>{if(F){V(F);return}this.exec(Q).then(U,V)})}),w)}if(this._transactions>0)J.call(Q);if(this.nodeifiedPromise)return J.call(Q);let B=J.call(Q);return g9.default(B.then(function(U){let V=U[U.length-1];if(typeof V==="undefined")throw new Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");if(V[0]){V[0].previousErrors=[];for(let F=0;F<U.length-1;++F)if(U[F][0])V[0].previousErrors.push(U[F][0]);throw V[0]}return b9.wrapMultiResult(V[1])}),w)};let{execBuffer:W}=Q;return Q.execBuffer=function(w){if(this._transactions>0)W.call(Q);return Q.exec(w)},Q};let{exec:Y}=$;$.exec=function(G){return g9.default(Y.call(this).then(function(H){if(Array.isArray(H))H=b9.wrapMultiResult(H);return H}),G)}}QQ.addTransactionSupport=iR});var u9=I((WQ)=>{Object.defineProperty(WQ,"__esModule",{value:!0});function nR($,X){Object.getOwnPropertyNames(X.prototype).forEach((Y)=>{Object.defineProperty($.prototype,Y,Object.getOwnPropertyDescriptor(X.prototype,Y))})}WQ.default=nR});var VQ=I((BQ)=>{Object.defineProperty(BQ,"__esModule",{value:!0});BQ.DEFAULT_CLUSTER_OPTIONS=void 0;var wQ=import.meta.require("dns");BQ.DEFAULT_CLUSTER_OPTIONS={clusterRetryStrategy:($)=>Math.min(100+$*2,2000),enableOfflineQueue:!0,enableReadyCheck:!0,scaleReads:"master",maxRedirections:16,retryDelayOnMoved:0,retryDelayOnFailover:100,retryDelayOnClusterDown:100,retryDelayOnTryAgain:100,slotsRefreshTimeout:1000,useSRVRecords:!1,resolveSrv:wQ.resolveSrv,dnsLookup:wQ.lookup,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[]}});var J7=I((EQ)=>{Object.defineProperty(EQ,"__esModule",{value:!0});EQ.getConnectionName=EQ.weightSrvRecords=EQ.groupSrvRecords=EQ.getUniqueHostnamesFromOptions=EQ.normalizeNodeOptions=EQ.nodeKeyToRedisOptions=EQ.getNodeKey=void 0;var FQ=Y0(),sR=import.meta.require("net");function oR($){return $.port=$.port||6379,$.host=$.host||"127.0.0.1",$.host+":"+$.port}EQ.getNodeKey=oR;function aR($){let X=$.lastIndexOf(":");if(X===-1)throw new Error(`Invalid node key ${$}`);return{host:$.slice(0,X),port:Number($.slice(X+1))}}EQ.nodeKeyToRedisOptions=aR;function tR($){return $.map((X)=>{let Y={};if(typeof X==="object")Object.assign(Y,X);else if(typeof X==="string")Object.assign(Y,FQ.parseURL(X));else if(typeof X==="number")Y.port=X;else throw new Error("Invalid argument "+X);if(typeof Y.port==="string")Y.port=parseInt(Y.port,10);if(delete Y.db,!Y.port)Y.port=6379;if(!Y.host)Y.host="127.0.0.1";return FQ.resolveTLSProfile(Y)})}EQ.normalizeNodeOptions=tR;function eR($){let X={};return $.forEach((Y)=>{X[Y.host]=!0}),Object.keys(X).filter((Y)=>!sR.isIP(Y))}EQ.getUniqueHostnamesFromOptions=eR;function $D($){let X={};for(let Y of $)if(!X.hasOwnProperty(Y.priority))X[Y.priority]={totalWeight:Y.weight,records:[Y]};else X[Y.priority].totalWeight+=Y.weight,X[Y.priority].records.push(Y);return X}EQ.groupSrvRecords=$D;function XD($){if($.records.length===1)return $.totalWeight=0,$.records.shift();let X=Math.floor(Math.random()*($.totalWeight+$.records.length)),Y=0;for(let[G,H]of $.records.entries())if(Y+=1+H.weight,Y>X)return $.totalWeight-=H.weight,$.records.splice(G,1),H}EQ.weightSrvRecords=XD;function YD($,X){let Y=`ioredis-cluster(${$})`;return X?`${Y}:${X}`:Y}EQ.getConnectionName=YD});var OQ=I((LQ)=>{Object.defineProperty(LQ,"__esModule",{value:!0});var KQ=J7(),p9=Y0(),BD=$4(),D$=p9.Debug("cluster:subscriber");class zQ{constructor($,X){this.connectionPool=$,this.emitter=X,this.started=!1,this.subscriber=null,this.onSubscriberEnd=()=>{if(!this.started){D$("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.");return}D$("subscriber has disconnected, selecting a new one..."),this.selectSubscriber()},this.connectionPool.on("-node",(Y,G)=>{if(!this.started||!this.subscriber)return;if(KQ.getNodeKey(this.subscriber.options)===G)D$("subscriber has left, selecting a new one..."),this.selectSubscriber()}),this.connectionPool.on("+node",()=>{if(!this.started||this.subscriber)return;D$("a new node is discovered and there is no subscriber, selecting a new one..."),this.selectSubscriber()})}getInstance(){return this.subscriber}start(){this.started=!0,this.selectSubscriber(),D$("started")}stop(){if(this.started=!1,this.subscriber)this.subscriber.disconnect(),this.subscriber=null;D$("stopped")}selectSubscriber(){let $=this.lastActiveSubscriber;if($)$.off("end",this.onSubscriberEnd),$.disconnect();if(this.subscriber)this.subscriber.off("end",this.onSubscriberEnd),this.subscriber.disconnect();let X=p9.sample(this.connectionPool.getNodes());if(!X){D$("selecting subscriber failed since there is no node discovered in the cluster yet"),this.subscriber=null;return}let{options:Y}=X;D$("selected a subscriber %s:%s",Y.host,Y.port),this.subscriber=new BD.default({port:Y.port,host:Y.host,username:Y.username,password:Y.password,enableReadyCheck:!0,connectionName:KQ.getConnectionName("subscriber",Y.connectionName),lazyConnect:!0,tls:Y.tls,retryStrategy:null}),this.subscriber.on("error",p9.noop),this.subscriber.once("end",this.onSubscriberEnd);let G={subscribe:[],psubscribe:[],ssubscribe:[]};if($){let H=$.condition||$.prevCondition;if(H&&H.subscriber)G.subscribe=H.subscriber.channels("subscribe"),G.psubscribe=H.subscriber.channels("psubscribe"),G.ssubscribe=H.subscriber.channels("ssubscribe")}if(G.subscribe.length||G.psubscribe.length||G.ssubscribe.length){let H=0;for(let Q of["subscribe","psubscribe","ssubscribe"]){let J=G[Q];if(J.length)H+=1,D$("%s %d channels",Q,J.length),this.subscriber[Q](J).then(()=>{if(!--H)this.lastActiveSubscriber=this.subscriber}).catch(()=>{D$("failed to %s %d channels",Q,J.length)})}}else this.lastActiveSubscriber=this.subscriber;for(let H of["message","messageBuffer","smessage","smessageBuffer"])this.subscriber.on(H,(Q,J)=>{this.emitter.emit(H,Q,J)});for(let H of["pmessage","pmessageBuffer"])this.subscriber.on(H,(Q,J,W)=>{this.emitter.emit(H,Q,J,W)})}}LQ.default=zQ});var NQ=I((_Q)=>{Object.defineProperty(_Q,"__esModule",{value:!0});var VD=import.meta.require("events"),W7=Y0(),RQ=J7(),FD=$4(),Z5=W7.Debug("cluster:connectionPool");class DQ extends VD.EventEmitter{constructor($){super();this.redisOptions=$,this.nodes={all:{},master:{},slave:{}},this.specifiedOptions={}}getNodes($="all"){let X=this.nodes[$];return Object.keys(X).map((Y)=>X[Y])}getInstanceByKey($){return this.nodes.all[$]}getSampleInstance($){let X=Object.keys(this.nodes[$]),Y=W7.sample(X);return this.nodes[$][Y]}findOrCreate($,X=!1){let Y=RQ.getNodeKey($);if(X=Boolean(X),this.specifiedOptions[Y])Object.assign($,this.specifiedOptions[Y]);else this.specifiedOptions[Y]=$;let G;if(this.nodes.all[Y]){if(G=this.nodes.all[Y],G.options.readOnly!==X)if(G.options.readOnly=X,Z5("Change role of %s to %s",Y,X?"slave":"master"),G[X?"readonly":"readwrite"]().catch(W7.noop),X)delete this.nodes.master[Y],this.nodes.slave[Y]=G;else delete this.nodes.slave[Y],this.nodes.master[Y]=G}else Z5("Connecting to %s as %s",Y,X?"slave":"master"),G=new FD.default(W7.defaults({retryStrategy:null,enableOfflineQueue:!0,readOnly:X},$,this.redisOptions,{lazyConnect:!0})),this.nodes.all[Y]=G,this.nodes[X?"slave":"master"][Y]=G,G.once("end",()=>{if(this.removeNode(Y),this.emit("-node",G,Y),!Object.keys(this.nodes.all).length)this.emit("drain")}),this.emit("+node",G,Y),G.on("error",function(H){this.emit("nodeError",H,Y)});return G}reset($){Z5("Reset with %O",$);let X={};$.forEach((Y)=>{let G=RQ.getNodeKey(Y);if(!(Y.readOnly&&X[G]))X[G]=Y}),Object.keys(this.nodes.all).forEach((Y)=>{if(!X[Y])Z5("Disconnect %s because the node does not hold any slot",Y),this.nodes.all[Y].disconnect(),this.removeNode(Y)}),Object.keys(X).forEach((Y)=>{let G=X[Y];this.findOrCreate(G,G.readOnly)})}removeNode($){let{nodes:X}=this;if(X.all[$])Z5("Remove %s from the pool",$),delete X.all[$];delete X.master[$],delete X.slave[$]}}_Q.default=DQ});var w7=I((ev,qQ)=>{function p1($,Y){var Y=Y||{};if(this._capacity=Y.capacity,this._head=0,this._tail=0,Array.isArray($))this._fromArray($);else this._capacityMask=3,this._list=new Array(4)}p1.prototype.peekAt=function $(X){var Y=X;if(Y!==(Y|0))return;var G=this.size();if(Y>=G||Y<-G)return;if(Y<0)Y+=G;return Y=this._head+Y&this._capacityMask,this._list[Y]};p1.prototype.get=function $(X){return this.peekAt(X)};p1.prototype.peek=function $(){if(this._head===this._tail)return;return this._list[this._head]};p1.prototype.peekFront=function $(){return this.peek()};p1.prototype.peekBack=function $(){return this.peekAt(-1)};Object.defineProperty(p1.prototype,"length",{get:function $(){return this.size()}});p1.prototype.size=function $(){if(this._head===this._tail)return 0;if(this._head<this._tail)return this._tail-this._head;else return this._capacityMask+1-(this._head-this._tail)};p1.prototype.unshift=function $(X){if(arguments.length===0)return this.size();var Y=this._list.length;if(this._head=this._head-1+Y&this._capacityMask,this._list[this._head]=X,this._tail===this._head)this._growArray();if(this._capacity&&this.size()>this._capacity)this.pop();if(this._head<this._tail)return this._tail-this._head;else return this._capacityMask+1-(this._head-this._tail)};p1.prototype.shift=function $(){var X=this._head;if(X===this._tail)return;var Y=this._list[X];if(this._list[X]=void 0,this._head=X+1&this._capacityMask,X<2&&this._tail>1e4&&this._tail<=this._list.length>>>2)this._shrinkArray();return Y};p1.prototype.push=function $(X){if(arguments.length===0)return this.size();var Y=this._tail;if(this._list[Y]=X,this._tail=Y+1&this._capacityMask,this._tail===this._head)this._growArray();if(this._capacity&&this.size()>this._capacity)this.shift();if(this._head<this._tail)return this._tail-this._head;else return this._capacityMask+1-(this._head-this._tail)};p1.prototype.pop=function $(){var X=this._tail;if(X===this._head)return;var Y=this._list.length;this._tail=X-1+Y&this._capacityMask;var G=this._list[this._tail];if(this._list[this._tail]=void 0,this._head<2&&X>1e4&&X<=Y>>>2)this._shrinkArray();return G};p1.prototype.removeOne=function $(X){var Y=X;if(Y!==(Y|0))return;if(this._head===this._tail)return;var G=this.size(),H=this._list.length;if(Y>=G||Y<-G)return;if(Y<0)Y+=G;Y=this._head+Y&this._capacityMask;var Q=this._list[Y],J;if(X<G/2){for(J=X;J>0;J--)this._list[Y]=this._list[Y=Y-1+H&this._capacityMask];this._list[Y]=void 0,this._head=this._head+1+H&this._capacityMask}else{for(J=G-1-X;J>0;J--)this._list[Y]=this._list[Y=Y+1+H&this._capacityMask];this._list[Y]=void 0,this._tail=this._tail-1+H&this._capacityMask}return Q};p1.prototype.remove=function $(X,Y){var G=X,H,Q=Y;if(G!==(G|0))return;if(this._head===this._tail)return;var J=this.size(),W=this._list.length;if(G>=J||G<-J||Y<1)return;if(G<0)G+=J;if(Y===1||!Y)return H=new Array(1),H[0]=this.removeOne(G),H;if(G===0&&G+Y>=J)return H=this.toArray(),this.clear(),H;if(G+Y>J)Y=J-G;var w;H=new Array(Y);for(w=0;w<Y;w++)H[w]=this._list[this._head+G+w&this._capacityMask];if(G=this._head+G&this._capacityMask,X+Y===J){this._tail=this._tail-Y+W&this._capacityMask;for(w=Y;w>0;w--)this._list[G=G+1+W&this._capacityMask]=void 0;return H}if(X===0){this._head=this._head+Y+W&this._capacityMask;for(w=Y-1;w>0;w--)this._list[G=G+1+W&this._capacityMask]=void 0;return H}if(G<J/2){this._head=this._head+X+Y+W&this._capacityMask;for(w=X;w>0;w--)this.unshift(this._list[G=G-1+W&this._capacityMask]);G=this._head-1+W&this._capacityMask;while(Q>0)this._list[G=G-1+W&this._capacityMask]=void 0,Q--;if(X<0)this._tail=G}else{this._tail=G,G=G+Y+W&this._capacityMask;for(w=J-(Y+X);w>0;w--)this.push(this._list[G++]);G=this._tail;while(Q>0)this._list[G=G+1+W&this._capacityMask]=void 0,Q--}if(this._head<2&&this._tail>1e4&&this._tail<=W>>>2)this._shrinkArray();return H};p1.prototype.splice=function $(X,Y){var G=X;if(G!==(G|0))return;var H=this.size();if(G<0)G+=H;if(G>H)return;if(arguments.length>2){var Q,J,W,w=arguments.length,B=this._list.length,U=2;if(!H||G<H/2){J=new Array(G);for(Q=0;Q<G;Q++)J[Q]=this._list[this._head+Q&this._capacityMask];if(Y===0){if(W=[],G>0)this._head=this._head+G+B&this._capacityMask}else W=this.remove(G,Y),this._head=this._head+G+B&this._capacityMask;while(w>U)this.unshift(arguments[--w]);for(Q=G;Q>0;Q--)this.unshift(J[Q-1])}else{J=new Array(H-(G+Y));var V=J.length;for(Q=0;Q<V;Q++)J[Q]=this._list[this._head+G+Y+Q&this._capacityMask];if(Y===0){if(W=[],G!=H)this._tail=this._head+G+B&this._capacityMask}else W=this.remove(G,Y),this._tail=this._tail-V+B&this._capacityMask;while(U<w)this.push(arguments[U++]);for(Q=0;Q<V;Q++)this.push(J[Q])}return W}else return this.remove(G,Y)};p1.prototype.clear=function $(){this._list=new Array(this._list.length),this._head=0,this._tail=0};p1.prototype.isEmpty=function $(){return this._head===this._tail};p1.prototype.toArray=function $(){return this._copyArray(!1)};p1.prototype._fromArray=function $(X){var Y=X.length,G=this._nextPowerOf2(Y);this._list=new Array(G),this._capacityMask=G-1,this._tail=Y;for(var H=0;H<Y;H++)this._list[H]=X[H]};p1.prototype._copyArray=function $(X,Y){var G=this._list,H=G.length,Q=this.length;if(Y=Y|Q,Y==Q&&this._head<this._tail)return this._list.slice(this._head,this._tail);var J=new Array(Y),W=0,w;if(X||this._head>this._tail){for(w=this._head;w<H;w++)J[W++]=G[w];for(w=0;w<this._tail;w++)J[W++]=G[w]}else for(w=this._head;w<this._tail;w++)J[W++]=G[w];return J};p1.prototype._growArray=function $(){if(this._head!=0){var X=this._copyArray(!0,this._list.length<<1);this._tail=this._list.length,this._head=0,this._list=X}else this._tail=this._list.length,this._list.length<<=1;this._capacityMask=this._capacityMask<<1|1};p1.prototype._shrinkArray=function $(){this._list.length>>>=1,this._capacityMask>>>=1};p1.prototype._nextPowerOf2=function $(X){var Y=Math.log(X)/Math.log(2),G=1<<Y+1;return Math.max(G,4)};qQ.exports=p1});var PQ=I((ZQ)=>{Object.defineProperty(ZQ,"__esModule",{value:!0});var AD=Y0(),KD=w7(),zD=AD.Debug("delayqueue");class MQ{constructor(){this.queues={},this.timeouts={}}push($,X,Y){let G=Y.callback||process.nextTick;if(!this.queues[$])this.queues[$]=new KD;if(this.queues[$].push(X),!this.timeouts[$])this.timeouts[$]=setTimeout(()=>{G(()=>{this.timeouts[$]=null,this.execute($)})},Y.timeout)}execute($){let X=this.queues[$];if(!X)return;let{length:Y}=X;if(!Y)return;zD("send %d commands in %s queue",Y,$),this.queues[$]=null;while(X.length>0)X.shift()()}}ZQ.default=MQ});var d9=I((xQ)=>{Object.defineProperty(xQ,"__esModule",{value:!0});var SQ=E6(),kQ=import.meta.require("events"),B7=Z4(),IQ=a$(),CQ=v$(),c9=y3(),OD=$4(),RD=Y7(),DD=m9(),h0=Y0(),_D=u9(),ND=Q7(),qD=VQ(),MD=OQ(),ZD=NQ(),PD=PQ(),R6=J7(),jQ=w7(),s1=h0.Debug("cluster"),TQ=new WeakSet;class P5 extends ND.default{constructor($,X={}){super();if(this.slots=[],this._groupsIds={},this._groupsBySlot=Array(16384),this.isCluster=!0,this.retryAttempts=0,this.delayQueue=new PD.default,this.offlineQueue=new jQ,this.isRefreshing=!1,this._refreshSlotsCacheCallbacks=[],this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this._readyDelayedCallbacks=[],this.connectionEpoch=0,kQ.EventEmitter.call(this),this.startupNodes=$,this.options=h0.defaults({},X,qD.DEFAULT_CLUSTER_OPTIONS,this.options),this.options.redisOptions&&this.options.redisOptions.keyPrefix&&!this.options.keyPrefix)this.options.keyPrefix=this.options.redisOptions.keyPrefix;if(typeof this.options.scaleReads!=="function"&&["all","master","slave"].indexOf(this.options.scaleReads)===-1)throw new Error('Invalid option scaleReads "'+this.options.scaleReads+'". Expected "all", "master", "slave" or a custom function');if(this.connectionPool=new ZD.default(this.options.redisOptions),this.connectionPool.on("-node",(Y,G)=>{this.emit("-node",Y)}),this.connectionPool.on("+node",(Y)=>{this.emit("+node",Y)}),this.connectionPool.on("drain",()=>{this.setStatus("close")}),this.connectionPool.on("nodeError",(Y,G)=>{this.emit("node error",Y,G)}),this.subscriber=new MD.default(this.connectionPool,this),this.options.scripts)Object.entries(this.options.scripts).forEach(([Y,G])=>{this.defineCommand(Y,G)});if(this.options.lazyConnect)this.setStatus("wait");else this.connect().catch((Y)=>{s1("connecting failed: %s",Y)})}connect(){return new Promise(($,X)=>{if(this.status==="connecting"||this.status==="connect"||this.status==="ready"){X(new Error("Redis is already connecting/connected"));return}let Y=++this.connectionEpoch;this.setStatus("connecting"),this.resolveStartupNodeHostnames().then((G)=>{if(this.connectionEpoch!==Y){s1("discard connecting after resolving startup nodes because epoch not match: %d != %d",Y,this.connectionEpoch),X(new B7.RedisError("Connection is discarded because a new connection is made"));return}if(this.status!=="connecting"){s1("discard connecting after resolving startup nodes because the status changed to %s",this.status),X(new B7.RedisError("Connection is aborted"));return}this.connectionPool.reset(G);let H=()=>{this.setStatus("ready"),this.retryAttempts=0,this.executeOfflineCommands(),this.resetNodesRefreshInterval(),$()},Q=void 0,J=()=>{if(this.invokeReadyDelayedCallbacks(void 0),this.removeListener("close",Q),this.manuallyClosing=!1,this.setStatus("connect"),this.options.enableReadyCheck)this.readyCheck((W,w)=>{if(W||w){if(s1("Ready check failed (%s). Reconnecting...",W||w),this.status==="connect")this.disconnect(!0)}else H()});else H()};Q=()=>{let W=new Error("None of startup nodes is available");this.removeListener("refresh",J),this.invokeReadyDelayedCallbacks(W),X(W)},this.once("refresh",J),this.once("close",Q),this.once("close",this.handleCloseEvent.bind(this)),this.refreshSlotsCache((W)=>{if(W&&W.message===c9.default.defaultMessage)OD.default.prototype.silentEmit.call(this,"error",W),this.connectionPool.reset([])}),this.subscriber.start()}).catch((G)=>{this.setStatus("close"),this.handleCloseEvent(G),this.invokeReadyDelayedCallbacks(G),X(G)})})}disconnect($=!1){let X=this.status;if(this.setStatus("disconnecting"),!$)this.manuallyClosing=!0;if(this.reconnectTimeout&&!$)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null,s1("Canceled reconnecting attempts");if(this.clearNodesRefreshInterval(),this.subscriber.stop(),X==="wait")this.setStatus("close"),this.handleCloseEvent();else this.connectionPool.reset([])}quit($){let X=this.status;if(this.setStatus("disconnecting"),this.manuallyClosing=!0,this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;if(this.clearNodesRefreshInterval(),this.subscriber.stop(),X==="wait"){let Y=IQ.default(Promise.resolve("OK"),$);return setImmediate(function(){this.setStatus("close"),this.handleCloseEvent()}.bind(this)),Y}return IQ.default(Promise.all(this.nodes().map((Y)=>Y.quit().catch((G)=>{if(G.message===h0.CONNECTION_CLOSED_ERROR_MSG)return"OK";throw G}))).then(()=>"OK"),$)}duplicate($=[],X={}){let Y=$.length>0?$:this.startupNodes.slice(0),G=Object.assign({},this.options,X);return new P5(Y,G)}nodes($="all"){if($!=="all"&&$!=="master"&&$!=="slave")throw new Error('Invalid role "'+$+'". Expected "all", "master" or "slave"');return this.connectionPool.getNodes($)}delayUntilReady($){this._readyDelayedCallbacks.push($)}get autoPipelineQueueSize(){let $=0;for(let X of this._autoPipelines.values())$+=X.length;return $}refreshSlotsCache($){if($)this._refreshSlotsCacheCallbacks.push($);if(this.isRefreshing)return;this.isRefreshing=!0;let X=this,Y=(J)=>{this.isRefreshing=!1;for(let W of this._refreshSlotsCacheCallbacks)W(J);this._refreshSlotsCacheCallbacks=[]},G=h0.shuffle(this.connectionPool.getNodes()),H=null;function Q(J){if(J===G.length){let B=new c9.default(c9.default.defaultMessage,H);return Y(B)}let W=G[J],w=`${W.options.host}:${W.options.port}`;s1("getting slot cache from %s",w),X.getInfoFromNode(W,function(B){switch(X.status){case"close":case"end":return Y(new Error("Cluster is disconnected."));case"disconnecting":return Y(new Error("Cluster is disconnecting."))}if(B)X.emit("node error",B,w),H=B,Q(J+1);else X.emit("refresh"),Y()})}Q(0)}sendCommand($,X,Y){if(this.status==="wait")this.connect().catch(h0.noop);if(this.status==="end")return $.reject(new Error(h0.CONNECTION_CLOSED_ERROR_MSG)),$.promise;let G=this.options.scaleReads;if(G!=="master"){if(!($.isReadOnly||SQ.exists($.name)&&SQ.hasFlag($.name,"readonly")))G="master"}let H=Y?Y.slot:$.getSlot(),Q={},J=this;if(!Y&&!TQ.has($)){TQ.add($);let w=$.reject;$.reject=function(B){let U=W.bind(null,!0);J.handleError(B,Q,{moved:function(V,F){if(s1("command %s is moved to %s",$.name,F),H=Number(V),J.slots[V])J.slots[V][0]=F;else J.slots[V]=[F];J._groupsBySlot[V]=J._groupsIds[J.slots[V].join(";")],J.connectionPool.findOrCreate(J.natMapper(F)),W(),s1("refreshing slot caches... (triggered by MOVED error)"),J.refreshSlotsCache()},ask:function(V,F){s1("command %s is required to ask %s:%s",$.name,F);let E=J.natMapper(F);J.connectionPool.findOrCreate(E),W(!1,`${E.host}:${E.port}`)},tryagain:U,clusterDown:U,connectionClosed:U,maxRedirections:function(V){w.call($,V)},defaults:function(){w.call($,B)}})}}W();function W(w,B){if(J.status==="end"){$.reject(new B7.AbortError("Cluster is ended."));return}let U;if(J.status==="ready"||$.name==="cluster"){if(Y&&Y.redis)U=Y.redis;else if(CQ.default.checkFlag("ENTER_SUBSCRIBER_MODE",$.name)||CQ.default.checkFlag("EXIT_SUBSCRIBER_MODE",$.name)){if(U=J.subscriber.getInstance(),!U){$.reject(new B7.AbortError("No subscriber for the cluster"));return}}else{if(!w){if(typeof H==="number"&&J.slots[H]){let V=J.slots[H];if(typeof G==="function"){let F=V.map(function(E){return J.connectionPool.getInstanceByKey(E)});if(U=G(F,$),Array.isArray(U))U=h0.sample(U);if(!U)U=F[0]}else{let F;if(G==="all")F=h0.sample(V);else if(G==="slave"&&V.length>1)F=h0.sample(V,1);else F=V[0];U=J.connectionPool.getInstanceByKey(F)}}if(B)U=J.connectionPool.getInstanceByKey(B),U.asking()}if(!U)U=(typeof G==="function"?null:J.connectionPool.getSampleInstance(G))||J.connectionPool.getSampleInstance("all")}if(Y&&!Y.redis)Y.redis=U}if(U)U.sendCommand($,X);else if(J.options.enableOfflineQueue)J.offlineQueue.push({command:$,stream:X,node:Y});else $.reject(new Error("Cluster isn't ready and enableOfflineQueue options is false"))}return $.promise}sscanStream($,X){return this.createScanStream("sscan",{key:$,options:X})}sscanBufferStream($,X){return this.createScanStream("sscanBuffer",{key:$,options:X})}hscanStream($,X){return this.createScanStream("hscan",{key:$,options:X})}hscanBufferStream($,X){return this.createScanStream("hscanBuffer",{key:$,options:X})}zscanStream($,X){return this.createScanStream("zscan",{key:$,options:X})}zscanBufferStream($,X){return this.createScanStream("zscanBuffer",{key:$,options:X})}handleError($,X,Y){if(typeof X.value==="undefined")X.value=this.options.maxRedirections;else X.value-=1;if(X.value<=0){Y.maxRedirections(new Error("Too many Cluster redirections. Last error: "+$));return}let G=$.message.split(" ");if(G[0]==="MOVED"){let H=this.options.retryDelayOnMoved;if(H&&typeof H==="number")this.delayQueue.push("moved",Y.moved.bind(null,G[1],G[2]),{timeout:H});else Y.moved(G[1],G[2])}else if(G[0]==="ASK")Y.ask(G[1],G[2]);else if(G[0]==="TRYAGAIN")this.delayQueue.push("tryagain",Y.tryagain,{timeout:this.options.retryDelayOnTryAgain});else if(G[0]==="CLUSTERDOWN"&&this.options.retryDelayOnClusterDown>0)this.delayQueue.push("clusterdown",Y.connectionClosed,{timeout:this.options.retryDelayOnClusterDown,callback:this.refreshSlotsCache.bind(this)});else if($.message===h0.CONNECTION_CLOSED_ERROR_MSG&&this.options.retryDelayOnFailover>0&&this.status==="ready")this.delayQueue.push("failover",Y.connectionClosed,{timeout:this.options.retryDelayOnFailover,callback:this.refreshSlotsCache.bind(this)});else Y.defaults()}resetOfflineQueue(){this.offlineQueue=new jQ}clearNodesRefreshInterval(){if(this.slotsTimer)clearTimeout(this.slotsTimer),this.slotsTimer=null}resetNodesRefreshInterval(){if(this.slotsTimer||!this.options.slotsRefreshInterval)return;let $=()=>{this.slotsTimer=setTimeout(()=>{s1('refreshing slot caches... (triggered by "slotsRefreshInterval" option)'),this.refreshSlotsCache(()=>{$()})},this.options.slotsRefreshInterval)};$()}setStatus($){s1("status: %s -> %s",this.status||"[empty]",$),this.status=$,process.nextTick(()=>{this.emit($)})}handleCloseEvent($){if($)s1("closed because %s",$);let X;if(!this.manuallyClosing&&typeof this.options.clusterRetryStrategy==="function")X=this.options.clusterRetryStrategy.call(this,++this.retryAttempts,$);if(typeof X==="number")this.setStatus("reconnecting"),this.reconnectTimeout=setTimeout(()=>{this.reconnectTimeout=null,s1("Cluster is disconnected. Retrying after %dms",X),this.connect().catch(function(Y){s1("Got error %s when reconnecting. Ignoring...",Y)})},X);else this.setStatus("end"),this.flushQueue(new Error("None of startup nodes is available"))}flushQueue($){let X;while(X=this.offlineQueue.shift())X.command.reject($)}executeOfflineCommands(){if(this.offlineQueue.length){s1("send %d commands in offline queue",this.offlineQueue.length);let $=this.offlineQueue;this.resetOfflineQueue();let X;while(X=$.shift())this.sendCommand(X.command,X.stream,X.node)}}natMapper($){if(this.options.natMap&&typeof this.options.natMap==="object"){let X=typeof $==="string"?$:`${$.host}:${$.port}`,Y=this.options.natMap[X];if(Y)return s1("NAT mapping %s -> %O",X,Y),Object.assign({},Y)}return typeof $==="string"?R6.nodeKeyToRedisOptions($):$}getInfoFromNode($,X){if(!$)return X(new Error("Node is disconnected"));let Y=$.duplicate({enableOfflineQueue:!0,enableReadyCheck:!1,retryStrategy:null,connectionName:R6.getConnectionName("refresher",this.options.redisOptions&&this.options.redisOptions.connectionName)});Y.on("error",h0.noop),Y.cluster("SLOTS",h0.timeout((G,H)=>{if(Y.disconnect(),G)return X(G);if(this.status==="disconnecting"||this.status==="close"||this.status==="end"){s1("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s",H.length,this.status),X();return}let Q=[];s1("cluster slots result count: %d",H.length);for(let W=0;W<H.length;++W){let w=H[W],B=w[0],U=w[1],V=[];for(let F=2;F<w.length;F++){if(!w[F][0])continue;let E=this.natMapper({host:w[F][0],port:w[F][1]});E.readOnly=F!==2,Q.push(E),V.push(E.host+":"+E.port)}s1("cluster slots result [%d]: slots %d~%d served by %s",W,B,U,V);for(let F=B;F<=U;F++)this.slots[F]=V}this._groupsIds=Object.create(null);let J=0;for(let W=0;W<16384;W++){let w=(this.slots[W]||[]).join(";");if(!w.length){this._groupsBySlot[W]=void 0;continue}if(!this._groupsIds[w])this._groupsIds[w]=++J;this._groupsBySlot[W]=this._groupsIds[w]}this.connectionPool.reset(Q),X()},this.options.slotsRefreshTimeout))}invokeReadyDelayedCallbacks($){for(let X of this._readyDelayedCallbacks)process.nextTick(X,$);this._readyDelayedCallbacks=[]}readyCheck($){this.cluster("INFO",(X,Y)=>{if(X)return $(X);if(typeof Y!=="string")return $();let G,H=Y.split("\r\n");for(let Q=0;Q<H.length;++Q){let J=H[Q].split(":");if(J[0]==="cluster_state"){G=J[1];break}}if(G==="fail")s1("cluster state not ok (%s)",G),$(null,G);else $()})}resolveSrv($){return new Promise((X,Y)=>{this.options.resolveSrv($,(G,H)=>{if(G)return Y(G);let Q=this,J=R6.groupSrvRecords(H),W=Object.keys(J).sort((B,U)=>parseInt(B)-parseInt(U));function w(B){if(!W.length)return Y(B);let U=W[0],V=J[U],F=R6.weightSrvRecords(V);if(!V.records.length)W.shift();Q.dnsLookup(F.name).then((E)=>X({host:E,port:F.port}),w)}w()})})}dnsLookup($){return new Promise((X,Y)=>{this.options.dnsLookup($,(G,H)=>{if(G)s1("failed to resolve hostname %s to IP: %s",$,G.message),Y(G);else s1("resolved hostname %s to IP %s",$,H),X(H)})})}async resolveStartupNodeHostnames(){if(!Array.isArray(this.startupNodes)||this.startupNodes.length===0)throw new Error("`startupNodes` should contain at least one node.");let $=R6.normalizeNodeOptions(this.startupNodes),X=R6.getUniqueHostnamesFromOptions($);if(X.length===0)return $;let Y=await Promise.all(X.map((this.options.useSRVRecords?this.resolveSrv:this.dnsLookup).bind(this))),G=h0.zipMap(X,Y);return $.map((H)=>{let Q=G.get(H.host);if(!Q)return H;if(this.options.useSRVRecords)return Object.assign({},H,Q);return Object.assign({},H,{host:Q})})}createScanStream($,{key:X,options:Y={}}){return new RD.default({objectMode:!0,key:X,redis:this,command:$,...Y})}}_D.default(P5,kQ.EventEmitter);DD.addTransactionSupport(P5.prototype);xQ.default=P5});var U7=I((fQ)=>{Object.defineProperty(fQ,"__esModule",{value:!0});var ID=Y0(),CD=ID.Debug("AbstractConnector");class vQ{constructor($){this.connecting=!1,this.disconnectTimeout=$}check($){return!0}disconnect(){if(this.connecting=!1,this.stream){let $=this.stream,X=setTimeout(()=>{CD("stream %s:%s still open, destroying it",$.remoteAddress,$.remotePort),$.destroy()},this.disconnectTimeout);$.on("close",()=>clearTimeout(X)),$.end()}}}fQ.default=vQ});var bQ=I((yQ)=>{Object.defineProperty(yQ,"__esModule",{value:!0});var TD=import.meta.require("net"),kD=import.meta.require("tls"),xD=Y0(),vD=U7();class hQ extends vD.default{constructor($){super($.disconnectTimeout);this.options=$}connect($){let{options:X}=this;this.connecting=!0;let Y;if("path"in X&&X.path)Y={path:X.path};else{if(Y={},"port"in X&&X.port!=null)Y.port=X.port;if("host"in X&&X.host!=null)Y.host=X.host;if("family"in X&&X.family!=null)Y.family=X.family}if(X.tls)Object.assign(Y,X.tls);return new Promise((G,H)=>{process.nextTick(()=>{if(!this.connecting){H(new Error(xD.CONNECTION_CLOSED_ERROR_MSG));return}try{if(X.tls)this.stream=kD.connect(Y);else this.stream=TD.createConnection(Y)}catch(Q){H(Q);return}this.stream.once("error",(Q)=>{this.firstError=Q}),G(this.stream)})})}}yQ.default=hQ});var uQ=I((mQ)=>{Object.defineProperty(mQ,"__esModule",{value:!0});function hD($,X){return($.host||"127.0.0.1")===(X.host||"127.0.0.1")&&($.port||26379)===(X.port||26379)}class gQ{constructor($){this.cursor=0,this.sentinels=$.slice(0)}next(){let $=this.cursor>=this.sentinels.length;return{done:$,value:$?void 0:this.sentinels[this.cursor++]}}reset($){if($&&this.sentinels.length>1&&this.cursor!==1)this.sentinels.unshift(...this.sentinels.splice(this.cursor-1));this.cursor=0}add($){for(let X=0;X<this.sentinels.length;X++)if(hD($,this.sentinels[X]))return!1;return this.sentinels.push($),!0}toString(){return`${JSON.stringify(this.sentinels)} @${this.cursor}`}}mQ.default=gQ});var iQ=I((dQ)=>{Object.defineProperty(dQ,"__esModule",{value:!0});dQ.FailoverDetector=void 0;var bD=Y0(),l9=bD.Debug("FailoverDetector"),pQ="+switch-master";class cQ{constructor($,X){this.isDisconnected=!1,this.connector=$,this.sentinels=X}cleanup(){this.isDisconnected=!0;for(let $ of this.sentinels)$.client.disconnect()}async subscribe(){l9("Starting FailoverDetector");let $=[];for(let X of this.sentinels){let Y=X.client.subscribe(pQ).catch((G)=>{l9("Failed to subscribe to failover messages on sentinel %s:%s (%s)",X.address.host||"127.0.0.1",X.address.port||26739,G.message)});$.push(Y),X.client.on("message",(G)=>{if(!this.isDisconnected&&G===pQ)this.disconnect()})}await Promise.all($)}disconnect(){this.isDisconnected=!0,l9("Failover detected, disconnecting"),this.connector.disconnect()}}dQ.FailoverDetector=cQ});var V7=I((oQ)=>{Object.defineProperty(oQ,"__esModule",{value:!0});oQ.SentinelIterator=void 0;var gD=import.meta.require("net"),S5=Y0(),mD=import.meta.require("tls"),nQ=uQ();oQ.SentinelIterator=nQ.default;var uD=U7(),pD=$4(),cD=iQ(),D6=S5.Debug("SentinelConnector");class rQ extends uD.default{constructor($){super($.disconnectTimeout);if(this.options=$,this.emitter=null,this.failoverDetector=null,!this.options.sentinels.length)throw new Error("Requires at least one sentinel to connect to.");if(!this.options.name)throw new Error("Requires the name of master.");this.sentinelIterator=new nQ.default(this.options.sentinels)}check($){let X=!$.role||this.options.role===$.role;if(!X)D6("role invalid, expected %s, but got %s",this.options.role,$.role),this.sentinelIterator.next(),this.sentinelIterator.next(),this.sentinelIterator.reset(!0);return X}disconnect(){if(super.disconnect(),this.failoverDetector)this.failoverDetector.cleanup()}connect($){this.connecting=!0,this.retryAttempts=0;let X,Y=async()=>{let G=this.sentinelIterator.next();if(G.done){this.sentinelIterator.reset(!1);let W=typeof this.options.sentinelRetryStrategy==="function"?this.options.sentinelRetryStrategy(++this.retryAttempts):null,w=typeof W!=="number"?"All sentinels are unreachable and retry is disabled.":`All sentinels are unreachable. Retrying from scratch after ${W}ms.`;if(X)w+=` Last error: ${X.message}`;D6(w);let B=new Error(w);if(typeof W==="number")return $("error",B),await new Promise((U)=>setTimeout(U,W)),Y();else throw B}let H=null,Q=null;try{H=await this.resolve(G.value)}catch(W){Q=W}if(!this.connecting)throw new Error(S5.CONNECTION_CLOSED_ERROR_MSG);let J=G.value.host+":"+G.value.port;if(H){if(D6("resolved: %s:%s from sentinel %s",H.host,H.port,J),this.options.enableTLSForSentinelMode&&this.options.tls)Object.assign(H,this.options.tls),this.stream=mD.connect(H),this.stream.once("secureConnect",this.initFailoverDetector.bind(this));else this.stream=gD.createConnection(H),this.stream.once("connect",this.initFailoverDetector.bind(this));return this.stream.once("error",(W)=>{this.firstError=W}),this.stream}else{let W=Q?"failed to connect to sentinel "+J+" because "+Q.message:"connected to sentinel "+J+" successfully, but got an invalid reply: "+H;if(D6(W),$("sentinelError",new Error(W)),Q)X=Q;return Y()}};return Y()}async updateSentinels($){if(!this.options.updateSentinels)return;let X=await $.sentinel("sentinels",this.options.name);if(!Array.isArray(X))return;X.map(S5.packObject).forEach((Y)=>{if((Y.flags?Y.flags.split(","):[]).indexOf("disconnected")===-1&&Y.ip&&Y.port){let H=this.sentinelNatResolve(sQ(Y));if(this.sentinelIterator.add(H))D6("adding sentinel %s:%s",H.host,H.port)}}),D6("Updated internal sentinels: %s",this.sentinelIterator)}async resolveMaster($){let X=await $.sentinel("get-master-addr-by-name",this.options.name);return await this.updateSentinels($),this.sentinelNatResolve(Array.isArray(X)?{host:X[0],port:Number(X[1])}:null)}async resolveSlave($){let X=await $.sentinel("slaves",this.options.name);if(!Array.isArray(X))return null;let Y=X.map(S5.packObject).filter((G)=>G.flags&&!G.flags.match(/(disconnected|s_down|o_down)/));return this.sentinelNatResolve(dD(Y,this.options.preferredSlaves))}sentinelNatResolve($){if(!$||!this.options.natMap)return $;return this.options.natMap[`${$.host}:${$.port}`]||$}connectToSentinel($,X){return new pD.default({port:$.port||26379,host:$.host,username:this.options.sentinelUsername||null,password:this.options.sentinelPassword||null,family:$.family||("path"in this.options&&this.options.path?void 0:this.options.family),tls:this.options.sentinelTLS,retryStrategy:null,enableReadyCheck:!1,connectTimeout:this.options.connectTimeout,commandTimeout:this.options.sentinelCommandTimeout,...X})}async resolve($){let X=this.connectToSentinel($);X.on("error",lD);try{if(this.options.role==="slave")return await this.resolveSlave(X);else return await this.resolveMaster(X)}finally{X.disconnect()}}async initFailoverDetector(){var $;if(!this.options.failoverDetector)return;this.sentinelIterator.reset(!0);let X=[];while(X.length<this.options.sentinelMaxConnections){let{done:Y,value:G}=this.sentinelIterator.next();if(Y)break;let H=this.connectToSentinel(G,{lazyConnect:!0,retryStrategy:this.options.sentinelReconnectStrategy});H.on("reconnecting",()=>{var Q;(Q=this.emitter)===null||Q===void 0||Q.emit("sentinelReconnecting")}),X.push({address:G,client:H})}if(this.sentinelIterator.reset(!1),this.failoverDetector)this.failoverDetector.cleanup();this.failoverDetector=new cD.FailoverDetector(this,X),await this.failoverDetector.subscribe(),($=this.emitter)===null||$===void 0||$.emit("failoverSubscribed")}}oQ.default=rQ;function dD($,X){if($.length===0)return null;let Y;if(typeof X==="function")Y=X($);else if(X!==null&&typeof X==="object"){let G=Array.isArray(X)?X:[X];G.sort((H,Q)=>{if(!H.prio)H.prio=1;if(!Q.prio)Q.prio=1;if(H.prio<Q.prio)return-1;if(H.prio>Q.prio)return 1;return 0});for(let H=0;H<G.length;H++){for(let Q=0;Q<$.length;Q++){let J=$[Q];if(J.ip===G[H].ip){if(J.port===G[H].port){Y=J;break}}}if(Y)break}}if(!Y)Y=S5.sample($);return sQ(Y)}function sQ($){return{host:$.ip,port:Number($.port)}}function lD(){}});var $J=I((tQ)=>{Object.defineProperty(tQ,"__esModule",{value:!0});tQ.SentinelConnector=tQ.StandaloneConnector=void 0;var nD=bQ();tQ.StandaloneConnector=nD.default;var rD=V7();tQ.SentinelConnector=rD.default});var GJ=I((YJ)=>{Object.defineProperty(YJ,"__esModule",{value:!0});var oD=Z4();class XJ extends oD.AbortError{constructor($){let X=`Reached the max retries per request limit (which is ${$}). Refer to "maxRetriesPerRequest" option for details.`;super(X);Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}YJ.default=XJ});var JJ=I((HJ)=>{Object.defineProperty(HJ,"__esModule",{value:!0});HJ.MaxRetriesPerRequestError=void 0;var tD=GJ();HJ.MaxRetriesPerRequestError=tD.default});var AJ=I((Uf,EJ)=>{var o9=import.meta.require("buffer").Buffer,eD=import.meta.require("string_decoder").StringDecoder,i9=new eD,WJ=Z4(),$_=WJ.ReplyError,X_=WJ.ParserError,J$=o9.allocUnsafe(32768),R0=0,F7=null,I5=0,n9=0;function Y_($){let X=$.buffer.length-1;var Y=$.offset,G=0,H=1;if($.buffer[Y]===45)H=-1,Y++;while(Y<X){let Q=$.buffer[Y++];if(Q===13)return $.offset=Y+1,H*G;G=G*10+(Q-48)}}function G_($){let X=$.buffer.length-1;var Y=$.offset,G=0,H="";if($.buffer[Y]===45)H+="-",Y++;while(Y<X){var Q=$.buffer[Y++];if(Q===13){if($.offset=Y+1,G!==0)H+=G;return H}else if(G>429496728)H+=G*10+(Q-48),G=0;else if(Q===48&&G===0)H+=0;else G=G*10+(Q-48)}}function wJ($){let{offset:X,buffer:Y}=$,G=Y.length-1;var H=X;while(H<G)if(Y[H++]===13){if($.offset=H+1,$.optionReturnBuffers===!0)return $.buffer.slice(X,H-1);return $.buffer.toString("utf8",X,H-1)}}function BJ($){let X=$.buffer.length-1;var Y=$.offset,G=0;while(Y<X){let H=$.buffer[Y++];if(H===13)return $.offset=Y+1,G;G=G*10+(H-48)}}function H_($){if($.optionStringNumbers===!0)return G_($);return Y_($)}function Q_($){let X=BJ($);if(X===void 0)return;if(X<0)return null;let Y=$.offset+X;if(Y+2>$.buffer.length){$.bigStrSize=Y+2,$.totalChunkSize=$.buffer.length,$.bufferCache.push($.buffer);return}let G=$.offset;if($.offset=Y+2,$.optionReturnBuffers===!0)return $.buffer.slice(G,Y);return $.buffer.toString("utf8",G,Y)}function J_($){var X=wJ($);if(X!==void 0){if($.optionReturnBuffers===!0)X=X.toString();return new $_(X)}}function W_($,X){let Y=new X_("Protocol error, got "+JSON.stringify(String.fromCharCode(X))+" as reply type byte",JSON.stringify($.buffer),$.offset);$.buffer=null,$.returnFatalError(Y)}function w_($){let X=BJ($);if(X===void 0)return;if(X<0)return null;let Y=new Array(X);return UJ($,Y,0)}function r9($,X,Y){$.arrayCache.push(X),$.arrayPos.push(Y)}function s9($){let X=$.arrayCache.pop();var Y=$.arrayPos.pop();if($.arrayCache.length){let G=s9($);if(G===void 0){r9($,X,Y);return}X[Y++]=G}return UJ($,X,Y)}function UJ($,X,Y){let G=$.buffer.length;while(Y<X.length){let H=$.offset;if($.offset>=G){r9($,X,Y);return}let Q=VJ($,$.buffer[$.offset++]);if(Q===void 0){if(!($.arrayCache.length||$.bufferCache.length))$.offset=H;r9($,X,Y);return}X[Y]=Q,Y++}return X}function VJ($,X){switch(X){case 36:return Q_($);case 43:return wJ($);case 42:return w_($);case 58:return H_($);case 45:return J_($);default:return W_($,X)}}function B_(){if(J$.length>51200)if(I5===1||n9>I5*2){let $=Math.floor(J$.length/10),X=$<R0?R0:$;R0=0,J$=J$.slice(X,J$.length)}else n9++,I5--;else clearInterval(F7),I5=0,n9=0,F7=null}function U_($){if(J$.length<$+R0){let X=$>78643200?2:3;if(R0>116391936)R0=52428800;if(J$=o9.allocUnsafe($*X+R0),R0=0,I5++,F7===null)F7=setInterval(B_,50)}}function V_($){let{bufferCache:X,offset:Y}=$;var G=X.length,H=$.bigStrSize-$.totalChunkSize;if($.offset=H,H<=2){if(G===2)return X[0].toString("utf8",Y,X[0].length+H-2);G--,H=X[X.length-2].length+H}var Q=i9.write(X[0].slice(Y));for(var J=1;J<G-1;J++)Q+=i9.write(X[J]);return Q+=i9.end(X[J].slice(0,H-2)),Q}function F_($){let{bufferCache:X,offset:Y}=$,G=$.bigStrSize-Y-2;var H=X.length,Q=$.bigStrSize-$.totalChunkSize;if($.offset=Q,Q<=2){if(H===2)return X[0].slice(Y,X[0].length+Q-2);H--,Q=X[X.length-2].length+Q}U_(G);let J=R0;X[0].copy(J$,J,Y,X[0].length),R0+=X[0].length-Y;for(var W=1;W<H-1;W++)X[W].copy(J$,R0),R0+=X[W].length;return X[W].copy(J$,R0,0,Q-2),R0+=Q-2,J$.slice(J,R0)}class FJ{constructor($){if(!$)throw new TypeError("Options are mandatory.");if(typeof $.returnError!=="function"||typeof $.returnReply!=="function")throw new TypeError("The returnReply and returnError options have to be functions.");this.setReturnBuffers(!!$.returnBuffers),this.setStringNumbers(!!$.stringNumbers),this.returnError=$.returnError,this.returnFatalError=$.returnFatalError||$.returnError,this.returnReply=$.returnReply,this.reset()}reset(){this.offset=0,this.buffer=null,this.bigStrSize=0,this.totalChunkSize=0,this.bufferCache=[],this.arrayCache=[],this.arrayPos=[]}setReturnBuffers($){if(typeof $!=="boolean")throw new TypeError("The returnBuffers argument has to be a boolean");this.optionReturnBuffers=$}setStringNumbers($){if(typeof $!=="boolean")throw new TypeError("The stringNumbers argument has to be a boolean");this.optionStringNumbers=$}execute($){if(this.buffer===null)this.buffer=$,this.offset=0;else if(this.bigStrSize===0){let Y=this.buffer.length,G=Y-this.offset,H=o9.allocUnsafe(G+$.length);if(this.buffer.copy(H,0,this.offset,Y),$.copy(H,G,0,$.length),this.buffer=H,this.offset=0,this.arrayCache.length){let Q=s9(this);if(Q===void 0)return;this.returnReply(Q)}}else if(this.totalChunkSize+$.length>=this.bigStrSize){this.bufferCache.push($);var X=this.optionReturnBuffers?F_(this):V_(this);if(this.bigStrSize=0,this.bufferCache=[],this.buffer=$,this.arrayCache.length){if(this.arrayCache[0][this.arrayPos[0]++]=X,X=s9(this),X===void 0)return}this.returnReply(X)}else{this.bufferCache.push($),this.totalChunkSize+=$.length;return}while(this.offset<this.buffer.length){let Y=this.offset,G=this.buffer[this.offset++],H=VJ(this,G);if(H===void 0){if(!(this.arrayCache.length||this.bufferCache.length))this.offset=Y;return}if(G===45)this.returnError(H);else this.returnReply(H)}this.buffer=null}}EJ.exports=FJ});var LJ=I((zJ)=>{Object.defineProperty(zJ,"__esModule",{value:!0});class KJ{constructor(){this.set={subscribe:{},psubscribe:{},ssubscribe:{}}}add($,X){this.set[a9($)][X]=!0}del($,X){delete this.set[a9($)][X]}channels($){return Object.keys(this.set[a9($)])}isEmpty(){return this.channels("subscribe").length===0&&this.channels("psubscribe").length===0&&this.channels("ssubscribe").length===0}}zJ.default=KJ;function a9($){if($==="unsubscribe")return"subscribe";if($==="punsubscribe")return"psubscribe";if($==="sunsubscribe")return"ssubscribe";return $}});var qJ=I((NJ)=>{Object.defineProperty(NJ,"__esModule",{value:!0});var OJ=v$(),A_=Y0(),K_=AJ(),z_=LJ(),L_=A_.Debug("dataHandler");class _J{constructor($,X){this.redis=$;let Y=new K_({stringNumbers:X.stringNumbers,returnBuffers:!0,returnError:(G)=>{this.returnError(G)},returnFatalError:(G)=>{this.returnFatalError(G)},returnReply:(G)=>{this.returnReply(G)}});$.stream.on("data",(G)=>{Y.execute(G)})}returnFatalError($){$.message+=". Please report this.",this.redis.recoverFromFatalError($,$,{offlineQueue:!1})}returnError($){let X=this.shiftCommand($);if(!X)return;$.command={name:X.command.name,args:X.command.args},this.redis.handleReconnection($,X)}returnReply($){if(this.handleMonitorReply($))return;if(this.handleSubscriberReply($))return;let X=this.shiftCommand($);if(!X)return;if(OJ.default.checkFlag("ENTER_SUBSCRIBER_MODE",X.command.name)){if(this.redis.condition.subscriber=new z_.default,this.redis.condition.subscriber.add(X.command.name,$[1].toString()),!RJ(X.command,$[2]))this.redis.commandQueue.unshift(X)}else if(OJ.default.checkFlag("EXIT_SUBSCRIBER_MODE",X.command.name)){if(!DJ(X.command,$[2]))this.redis.commandQueue.unshift(X)}else X.command.resolve($)}handleSubscriberReply($){if(!this.redis.condition.subscriber)return!1;let X=Array.isArray($)?$[0].toString():null;switch(L_('receive reply "%s" in subscriber mode',X),X){case"message":if(this.redis.listeners("message").length>0)this.redis.emit("message",$[1].toString(),$[2]?$[2].toString():"");this.redis.emit("messageBuffer",$[1],$[2]);break;case"pmessage":{let Y=$[1].toString();if(this.redis.listeners("pmessage").length>0)this.redis.emit("pmessage",Y,$[2].toString(),$[3].toString());this.redis.emit("pmessageBuffer",Y,$[2],$[3]);break}case"smessage":{if(this.redis.listeners("smessage").length>0)this.redis.emit("smessage",$[1].toString(),$[2]?$[2].toString():"");this.redis.emit("smessageBuffer",$[1],$[2]);break}case"ssubscribe":case"subscribe":case"psubscribe":{let Y=$[1].toString();this.redis.condition.subscriber.add(X,Y);let G=this.shiftCommand($);if(!G)return;if(!RJ(G.command,$[2]))this.redis.commandQueue.unshift(G);break}case"sunsubscribe":case"unsubscribe":case"punsubscribe":{let Y=$[1]?$[1].toString():null;if(Y)this.redis.condition.subscriber.del(X,Y);let G=$[2];if(Number(G)===0)this.redis.condition.subscriber=!1;let H=this.shiftCommand($);if(!H)return;if(!DJ(H.command,G))this.redis.commandQueue.unshift(H);break}default:{let Y=this.shiftCommand($);if(!Y)return;Y.command.resolve($)}}return!0}handleMonitorReply($){if(this.redis.status!=="monitoring")return!1;let X=$.toString();if(X==="OK")return!1;let Y=X.indexOf(" "),G=X.slice(0,Y),H=X.indexOf('"'),Q=X.slice(H+1,-1).split('" "').map((W)=>W.replace(/\\"/g,'"')),J=X.slice(Y+2,H-2).split(" ");return this.redis.emit("monitor",G,Q,J[1],J[0]),!0}shiftCommand($){let X=this.redis.commandQueue.shift();if(!X){let G=new Error("Command queue state error. If you can reproduce this, please report it."+($ instanceof Error?` Last error: ${$.message}`:` Last reply: ${$.toString()}`));return this.redis.emit("error",G),null}return X}}NJ.default=_J;var X4=new WeakMap;function RJ($,X){let Y=X4.has($)?X4.get($):$.args.length;if(Y-=1,Y<=0)return $.resolve(X),X4.delete($),!0;return X4.set($,Y),!1}function DJ($,X){let Y=X4.has($)?X4.get($):$.args.length;if(Y===0){if(Number(X)===0)return X4.delete($),$.resolve(X),!0;return!1}if(Y-=1,Y<=0)return $.resolve(X),!0;return X4.set($,Y),!1}});var ZJ=I((MJ)=>{Object.defineProperty(MJ,"__esModule",{value:!0});MJ.readyHandler=MJ.errorHandler=MJ.closeHandler=MJ.connectHandler=void 0;var R_=Z4(),D_=v$(),__=JJ(),C5=Y0(),N_=qJ(),F0=C5.Debug("connection");function q_($){return function(){$.setStatus("connect"),$.resetCommandQueue();let X=!1,{connectionEpoch:Y}=$;if($.condition.auth)$.auth($.condition.auth,function(G){if(Y!==$.connectionEpoch)return;if(G)if(G.message.indexOf("no password is set")!==-1)console.warn("[WARN] Redis server does not require a password, but a password was supplied.");else if(G.message.indexOf("without any password configured for the default user")!==-1)console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied");else if(G.message.indexOf("wrong number of arguments for 'auth' command")!==-1)console.warn(`[ERROR] The server returned "wrong number of arguments for 'auth' command". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under.`);else X=!0,$.recoverFromFatalError(G,G)});if($.condition.select)$.select($.condition.select).catch((G)=>{$.silentEmit("error",G)});if(!$.options.enableReadyCheck)MJ.readyHandler($)();if(new N_.default($,{stringNumbers:$.options.stringNumbers}),$.options.enableReadyCheck)$._readyCheck(function(G,H){if(Y!==$.connectionEpoch)return;if(G){if(!X)$.recoverFromFatalError(new Error("Ready check failed: "+G.message),G)}else if($.connector.check(H))MJ.readyHandler($)();else $.disconnect(!0)})}}MJ.connectHandler=q_;function t9($){let X=new R_.AbortError("Command aborted due to connection close");return X.command={name:$.name,args:$.args},X}function M_($){var X;let Y=0;for(let G=0;G<$.length;){let H=(X=$.peekAt(G))===null||X===void 0?void 0:X.command,Q=H.pipelineIndex;if(Q===void 0||Q===0)Y=0;if(Q!==void 0&&Q!==Y++){$.remove(G,1),H.reject(t9(H));continue}G++}}function Z_($){var X;for(let Y=0;Y<$.length;){let G=(X=$.peekAt(Y))===null||X===void 0?void 0:X.command;if(G.name==="multi")break;if(G.name==="exec"){$.remove(Y,1),G.reject(t9(G));break}if(G.inTransaction)$.remove(Y,1),G.reject(t9(G));else Y++}}function P_($){return function(){let Y=$.status;if($.setStatus("close"),$.commandQueue.length)M_($.commandQueue);if($.offlineQueue.length)Z_($.offlineQueue);if(Y==="ready"){if(!$.prevCondition)$.prevCondition=$.condition;if($.commandQueue.length)$.prevCommandQueue=$.commandQueue}if($.manuallyClosing)return $.manuallyClosing=!1,F0("skip reconnecting since the connection is manually closed."),X();if(typeof $.options.retryStrategy!=="function")return F0("skip reconnecting because `retryStrategy` is not a function"),X();let G=$.options.retryStrategy(++$.retryAttempts);if(typeof G!=="number")return F0("skip reconnecting because `retryStrategy` doesn't return a number"),X();F0("reconnect in %sms",G),$.setStatus("reconnecting",G),$.reconnectTimeout=setTimeout(function(){$.reconnectTimeout=null,$.connect().catch(C5.noop)},G);let{maxRetriesPerRequest:H}=$.options;if(typeof H==="number"){if(H<0)F0("maxRetriesPerRequest is negative, ignoring...");else if($.retryAttempts%(H+1)===0)F0("reach maxRetriesPerRequest limitation, flushing command queue..."),$.flushQueue(new __.MaxRetriesPerRequestError(H))}};function X(){$.setStatus("end"),$.flushQueue(new Error(C5.CONNECTION_CLOSED_ERROR_MSG))}}MJ.closeHandler=P_;function S_($){return function(X){F0("error: %s",X),$.silentEmit("error",X)}}MJ.errorHandler=S_;function I_($){return function(){if($.setStatus("ready"),$.retryAttempts=0,$.options.monitor){$.call("monitor").then(()=>$.setStatus("monitoring"),(G)=>$.emit("error",G));let{sendCommand:Y}=$;$.sendCommand=function(G){if(D_.default.checkFlag("VALID_IN_MONITOR_MODE",G.name))return Y.call($,G);return G.reject(new Error("Connection is in monitoring mode, can't process commands.")),G.promise},$.once("close",function(){delete $.sendCommand});return}let X=$.prevCondition?$.prevCondition.select:$.condition.select;if($.options.connectionName)F0("set the connection name [%s]",$.options.connectionName),$.client("setname",$.options.connectionName).catch(C5.noop);if($.options.readOnly)F0("set the connection to readonly mode"),$.readonly().catch(C5.noop);if($.prevCondition){let Y=$.prevCondition;if($.prevCondition=null,Y.subscriber&&$.options.autoResubscribe){if($.condition.select!==X)F0("connect to db [%d]",X),$.select(X);let G=Y.subscriber.channels("subscribe");if(G.length)F0("subscribe %d channels",G.length),$.subscribe(G);let H=Y.subscriber.channels("psubscribe");if(H.length)F0("psubscribe %d channels",H.length),$.psubscribe(H);let Q=Y.subscriber.channels("ssubscribe");if(Q.length)F0("ssubscribe %d channels",Q.length),$.ssubscribe(Q)}}if($.prevCommandQueue)if($.options.autoResendUnfulfilledCommands){F0("resend %d unfulfilled commands",$.prevCommandQueue.length);while($.prevCommandQueue.length>0){let Y=$.prevCommandQueue.shift();if(Y.select!==$.condition.select&&Y.command.name!=="select")$.select(Y.select);$.sendCommand(Y.command,Y.stream)}}else $.prevCommandQueue=null;if($.offlineQueue.length){F0("send %d commands in offline queue",$.offlineQueue.length);let Y=$.offlineQueue;$.resetOfflineQueue();while(Y.length>0){let G=Y.shift();if(G.select!==$.condition.select&&G.command.name!=="select")$.select(G.select);$.sendCommand(G.command,G.stream)}}if($.condition.select!==X)F0("connect to db [%d]",X),$.select(X)}}MJ.readyHandler=I_});var IJ=I((PJ)=>{Object.defineProperty(PJ,"__esModule",{value:!0});PJ.DEFAULT_REDIS_OPTIONS=void 0;PJ.DEFAULT_REDIS_OPTIONS={port:6379,host:"localhost",family:4,connectTimeout:1e4,disconnectTimeout:2000,retryStrategy:function($){return Math.min($*50,2000)},keepAlive:0,noDelay:!0,connectionName:null,sentinels:null,name:null,role:"master",sentinelRetryStrategy:function($){return Math.min($*10,1000)},sentinelReconnectStrategy:function(){return 60000},natMap:null,enableTLSForSentinelMode:!1,updateSentinels:!0,failoverDetector:!1,username:null,password:null,db:0,enableOfflineQueue:!0,enableReadyCheck:!0,autoResubscribe:!0,autoResendUnfulfilledCommands:!0,lazyConnect:!1,keyPrefix:"",reconnectOnError:null,readOnly:!1,stringNumbers:!1,maxRetriesPerRequest:20,maxLoadingRetryTime:1e4,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],sentinelMaxConnections:10}});var $4=I((kJ)=>{Object.defineProperty(kJ,"__esModule",{value:!0});var CJ=E6(),TJ=import.meta.require("events"),e9=a$(),k_=d9(),$Y=v$(),x_=$J(),v_=V7(),Y4=ZJ(),f_=IJ(),h_=Y7(),y_=m9(),j4=Y0(),b_=u9(),g_=Q7(),G4=s8(),jJ=w7(),H4=j4.Debug("redis");class _$ extends g_.default{constructor($,X,Y){super();if(this.status="wait",this.isCluster=!1,this.reconnectTimeout=null,this.connectionEpoch=0,this.retryAttempts=0,this.manuallyClosing=!1,this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this.parseOptions($,X,Y),TJ.EventEmitter.call(this),this.resetCommandQueue(),this.resetOfflineQueue(),this.options.Connector)this.connector=new this.options.Connector(this.options);else if(this.options.sentinels){let G=new v_.default(this.options);G.emitter=this,this.connector=G}else this.connector=new x_.StandaloneConnector(this.options);if(this.options.scripts)Object.entries(this.options.scripts).forEach(([G,H])=>{this.defineCommand(G,H)});if(this.options.lazyConnect)this.setStatus("wait");else this.connect().catch(G4.noop)}static createClient(...$){return new _$(...$)}get autoPipelineQueueSize(){let $=0;for(let X of this._autoPipelines.values())$+=X.length;return $}connect($){let X=new Promise((Y,G)=>{if(this.status==="connecting"||this.status==="connect"||this.status==="ready"){G(new Error("Redis is already connecting/connected"));return}this.connectionEpoch+=1,this.setStatus("connecting");let{options:H}=this;this.condition={select:H.db,auth:H.username?[H.username,H.password]:H.password,subscriber:!1};let Q=this;e9.default(this.connector.connect(function(J,W){Q.silentEmit(J,W)}),function(J,W){if(J){Q.flushQueue(J),Q.silentEmit("error",J),G(J),Q.setStatus("end");return}let w=H.tls?"secureConnect":"connect";if("sentinels"in H&&H.sentinels&&!H.enableTLSForSentinelMode)w="connect";if(Q.stream=W,H.noDelay)W.setNoDelay(!0);if(typeof H.keepAlive==="number")if(W.connecting)W.once(w,()=>{W.setKeepAlive(!0,H.keepAlive)});else W.setKeepAlive(!0,H.keepAlive);if(W.connecting){if(W.once(w,Y4.connectHandler(Q)),H.connectTimeout){let V=!1;W.setTimeout(H.connectTimeout,function(){if(V)return;W.setTimeout(0),W.destroy();let F=new Error("connect ETIMEDOUT");F.errorno="ETIMEDOUT",F.code="ETIMEDOUT",F.syscall="connect",Y4.errorHandler(Q)(F)}),W.once(w,function(){V=!0,W.setTimeout(0)})}}else if(W.destroyed){let V=Q.connector.firstError;if(V)process.nextTick(()=>{Y4.errorHandler(Q)(V)});process.nextTick(Y4.closeHandler(Q))}else process.nextTick(Y4.connectHandler(Q));if(!W.destroyed)W.once("error",Y4.errorHandler(Q)),W.once("close",Y4.closeHandler(Q));let B=function(){Q.removeListener("close",U),Y()};var U=function(){Q.removeListener("ready",B),G(new Error(j4.CONNECTION_CLOSED_ERROR_MSG))};Q.once("ready",B),Q.once("close",U)})});return e9.default(X,$)}disconnect($=!1){if(!$)this.manuallyClosing=!0;if(this.reconnectTimeout&&!$)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;if(this.status==="wait")Y4.closeHandler(this)();else this.connector.disconnect()}end(){this.disconnect()}duplicate($){return new _$({...this.options,...$})}get mode(){var $;return this.options.monitor?"monitor":(($=this.condition)===null||$===void 0?void 0:$.subscriber)?"subscriber":"normal"}monitor($){let X=this.duplicate({monitor:!0,lazyConnect:!1});return e9.default(new Promise(function(Y,G){X.once("error",G),X.once("monitoring",function(){Y(X)})}),$)}sendCommand($,X){var Y,G;if(this.status==="wait")this.connect().catch(G4.noop);if(this.status==="end")return $.reject(new Error(j4.CONNECTION_CLOSED_ERROR_MSG)),$.promise;if(((Y=this.condition)===null||Y===void 0?void 0:Y.subscriber)&&!$Y.default.checkFlag("VALID_IN_SUBSCRIBER_MODE",$.name))return $.reject(new Error("Connection in subscriber mode, only subscriber commands may be used")),$.promise;if(typeof this.options.commandTimeout==="number")$.setTimeout(this.options.commandTimeout);let H=this.status==="ready"||!X&&this.status==="connect"&&CJ.exists($.name)&&CJ.hasFlag($.name,"loading");if(!this.stream)H=!1;else if(!this.stream.writable)H=!1;else if(this.stream._writableState&&this.stream._writableState.ended)H=!1;if(!H){if(!this.options.enableOfflineQueue)return $.reject(new Error("Stream isn't writeable and enableOfflineQueue options is false")),$.promise;if($.name==="quit"&&this.offlineQueue.length===0)return this.disconnect(),$.resolve(Buffer.from("OK")),$.promise;if(H4.enabled)H4("queue command[%s]: %d -> %s(%o)",this._getDescription(),this.condition.select,$.name,$.args);this.offlineQueue.push({command:$,stream:X,select:this.condition.select})}else{if(H4.enabled)H4("write command[%s]: %d -> %s(%o)",this._getDescription(),(G=this.condition)===null||G===void 0?void 0:G.select,$.name,$.args);if(X)if("isPipeline"in X&&X.isPipeline)X.write($.toWritable(X.destination.redis.stream));else X.write($.toWritable(X));else this.stream.write($.toWritable(this.stream));if(this.commandQueue.push({command:$,stream:X,select:this.condition.select}),$Y.default.checkFlag("WILL_DISCONNECT",$.name))this.manuallyClosing=!0;if(this.options.socketTimeout!==void 0&&this.socketTimeoutTimer===void 0)this.setSocketTimeout()}if($.name==="select"&&j4.isInt($.args[0])){let Q=parseInt($.args[0],10);if(this.condition.select!==Q)this.condition.select=Q,this.emit("select",Q),H4("switch to db [%d]",this.condition.select)}return $.promise}setSocketTimeout(){this.socketTimeoutTimer=setTimeout(()=>{this.stream.destroy(new Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`)),this.socketTimeoutTimer=void 0},this.options.socketTimeout),this.stream.once("data",()=>{if(clearTimeout(this.socketTimeoutTimer),this.socketTimeoutTimer=void 0,this.commandQueue.length===0)return;this.setSocketTimeout()})}scanStream($){return this.createScanStream("scan",{options:$})}scanBufferStream($){return this.createScanStream("scanBuffer",{options:$})}sscanStream($,X){return this.createScanStream("sscan",{key:$,options:X})}sscanBufferStream($,X){return this.createScanStream("sscanBuffer",{key:$,options:X})}hscanStream($,X){return this.createScanStream("hscan",{key:$,options:X})}hscanBufferStream($,X){return this.createScanStream("hscanBuffer",{key:$,options:X})}zscanStream($,X){return this.createScanStream("zscan",{key:$,options:X})}zscanBufferStream($,X){return this.createScanStream("zscanBuffer",{key:$,options:X})}silentEmit($,X){let Y;if($==="error"){if(Y=X,this.status==="end")return;if(this.manuallyClosing){if(Y instanceof Error&&(Y.message===j4.CONNECTION_CLOSED_ERROR_MSG||Y.syscall==="connect"||Y.syscall==="read"))return}}if(this.listeners($).length>0)return this.emit.apply(this,arguments);if(Y&&Y instanceof Error)console.error("[ioredis] Unhandled error event:",Y.stack);return!1}recoverFromFatalError($,X,Y){this.flushQueue(X,Y),this.silentEmit("error",X),this.disconnect(!0)}handleReconnection($,X){var Y;let G=!1;if(this.options.reconnectOnError)G=this.options.reconnectOnError($);switch(G){case 1:case!0:if(this.status!=="reconnecting")this.disconnect(!0);X.command.reject($);break;case 2:if(this.status!=="reconnecting")this.disconnect(!0);if(((Y=this.condition)===null||Y===void 0?void 0:Y.select)!==X.select&&X.command.name!=="select")this.select(X.select);this.sendCommand(X.command);break;default:X.command.reject($)}}_getDescription(){let $;if("path"in this.options&&this.options.path)$=this.options.path;else if(this.stream&&this.stream.remoteAddress&&this.stream.remotePort)$=this.stream.remoteAddress+":"+this.stream.remotePort;else if("host"in this.options&&this.options.host)$=this.options.host+":"+this.options.port;else $="";if(this.options.connectionName)$+=` (${this.options.connectionName})`;return $}resetCommandQueue(){this.commandQueue=new jJ}resetOfflineQueue(){this.offlineQueue=new jJ}parseOptions(...$){let X={},Y=!1;for(let G=0;G<$.length;++G){let H=$[G];if(H===null||typeof H==="undefined")continue;if(typeof H==="object")G4.defaults(X,H);else if(typeof H==="string"){if(G4.defaults(X,j4.parseURL(H)),H.startsWith("rediss://"))Y=!0}else if(typeof H==="number")X.port=H;else throw new Error("Invalid argument "+H)}if(Y)G4.defaults(X,{tls:!0});if(G4.defaults(X,_$.defaultOptions),typeof X.port==="string")X.port=parseInt(X.port,10);if(typeof X.db==="string")X.db=parseInt(X.db,10);this.options=j4.resolveTLSProfile(X)}setStatus($,X){if(H4.enabled)H4("status[%s]: %s -> %s",this._getDescription(),this.status||"[empty]",$);this.status=$,process.nextTick(this.emit.bind(this,$,X))}createScanStream($,{key:X,options:Y={}}){return new h_.default({objectMode:!0,key:X,redis:this,command:$,...Y})}flushQueue($,X){X=G4.defaults({},X,{offlineQueue:!0,commandQueue:!0});let Y;if(X.offlineQueue)while(Y=this.offlineQueue.shift())Y.command.reject($);if(X.commandQueue){if(this.commandQueue.length>0){if(this.stream)this.stream.removeAllListeners("data");while(Y=this.commandQueue.shift())Y.command.reject($)}}}_readyCheck($){let X=this;this.info(function(Y,G){if(Y){if(Y.message&&Y.message.includes("NOPERM"))return console.warn(`Skipping the ready check because INFO command fails: "${Y.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`),$(null,{});return $(Y)}if(typeof G!=="string")return $(null,G);let H={},Q=G.split("\r\n");for(let J=0;J<Q.length;++J){let[W,...w]=Q[J].split(":"),B=w.join(":");if(B)H[W]=B}if(!H.loading||H.loading==="0")$(null,H);else{let J=(H.loading_eta_seconds||1)*1000,W=X.options.maxLoadingRetryTime&&X.options.maxLoadingRetryTime<J?X.options.maxLoadingRetryTime:J;H4("Redis server still loading, trying again in "+W+"ms"),setTimeout(function(){X._readyCheck($)},W)}}).catch(G4.noop)}}_$.Cluster=k_.default;_$.Command=$Y.default;_$.defaultOptions=f_.DEFAULT_REDIS_OPTIONS;b_.default(_$,TJ.EventEmitter);y_.addTransactionSupport(_$.prototype);kJ.default=_$});var A7=I((D0,vJ)=>{Object.defineProperty(D0,"__esModule",{value:!0});D0.print=D0.ReplyError=D0.SentinelIterator=D0.SentinelConnector=D0.AbstractConnector=D0.Pipeline=D0.ScanStream=D0.Command=D0.Cluster=D0.Redis=D0.default=void 0;D0=vJ.exports=$4().default;var u_=$4();Object.defineProperty(D0,"default",{enumerable:!0,get:function(){return u_.default}});var p_=$4();Object.defineProperty(D0,"Redis",{enumerable:!0,get:function(){return p_.default}});var c_=d9();Object.defineProperty(D0,"Cluster",{enumerable:!0,get:function(){return c_.default}});var d_=v$();Object.defineProperty(D0,"Command",{enumerable:!0,get:function(){return d_.default}});var l_=Y7();Object.defineProperty(D0,"ScanStream",{enumerable:!0,get:function(){return l_.default}});var i_=y9();Object.defineProperty(D0,"Pipeline",{enumerable:!0,get:function(){return i_.default}});var n_=U7();Object.defineProperty(D0,"AbstractConnector",{enumerable:!0,get:function(){return n_.default}});var xJ=V7();Object.defineProperty(D0,"SentinelConnector",{enumerable:!0,get:function(){return xJ.default}});Object.defineProperty(D0,"SentinelIterator",{enumerable:!0,get:function(){return xJ.SentinelIterator}});D0.ReplyError=Z4().ReplyError;Object.defineProperty(D0,"Promise",{get(){return console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used."),Promise},set($){console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.")}});function r_($,X){if($)console.log("Error: "+$);else console.log("Reply: "+X)}D0.print=r_});var j5=I((Pf,fJ)=>{var o_=Number.MAX_SAFE_INTEGER||9007199254740991,a_=["major","premajor","minor","preminor","patch","prepatch","prerelease"];fJ.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:o_,RELEASE_TYPES:a_,SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var T5=I((Sf,hJ)=>{var t_=typeof process==="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...$)=>console.error("SEMVER",...$):()=>{};hJ.exports=t_});var _6=I((f$,yJ)=>{var{MAX_SAFE_COMPONENT_LENGTH:XY,MAX_SAFE_BUILD_LENGTH:e_,MAX_LENGTH:$N}=j5(),XN=T5();f$=yJ.exports={};var YN=f$.re=[],GN=f$.safeRe=[],t=f$.src=[],e=f$.t={},HN=0,YY="[a-zA-Z0-9-]",QN=[["\\s",1],["\\d",$N],[YY,e_]],JN=($)=>{for(let[X,Y]of QN)$=$.split(`${X}*`).join(`${X}{0,${Y}}`).split(`${X}+`).join(`${X}{1,${Y}}`);return $},K1=($,X,Y)=>{let G=JN(X),H=HN++;XN($,H,X),e[$]=H,t[H]=X,YN[H]=new RegExp(X,Y?"g":void 0),GN[H]=new RegExp(G,Y?"g":void 0)};K1("NUMERICIDENTIFIER","0|[1-9]\\d*");K1("NUMERICIDENTIFIERLOOSE","\\d+");K1("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${YY}*`);K1("MAINVERSION",`(${t[e.NUMERICIDENTIFIER]})\\.(${t[e.NUMERICIDENTIFIER]})\\.(${t[e.NUMERICIDENTIFIER]})`);K1("MAINVERSIONLOOSE",`(${t[e.NUMERICIDENTIFIERLOOSE]})\\.(${t[e.NUMERICIDENTIFIERLOOSE]})\\.(${t[e.NUMERICIDENTIFIERLOOSE]})`);K1("PRERELEASEIDENTIFIER",`(?:${t[e.NUMERICIDENTIFIER]}|${t[e.NONNUMERICIDENTIFIER]})`);K1("PRERELEASEIDENTIFIERLOOSE",`(?:${t[e.NUMERICIDENTIFIERLOOSE]}|${t[e.NONNUMERICIDENTIFIER]})`);K1("PRERELEASE",`(?:-(${t[e.PRERELEASEIDENTIFIER]}(?:\\.${t[e.PRERELEASEIDENTIFIER]})*))`);K1("PRERELEASELOOSE",`(?:-?(${t[e.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${t[e.PRERELEASEIDENTIFIERLOOSE]})*))`);K1("BUILDIDENTIFIER",`${YY}+`);K1("BUILD",`(?:\\+(${t[e.BUILDIDENTIFIER]}(?:\\.${t[e.BUILDIDENTIFIER]})*))`);K1("FULLPLAIN",`v?${t[e.MAINVERSION]}${t[e.PRERELEASE]}?${t[e.BUILD]}?`);K1("FULL",`^${t[e.FULLPLAIN]}\$`);K1("LOOSEPLAIN",`[v=\\s]*${t[e.MAINVERSIONLOOSE]}${t[e.PRERELEASELOOSE]}?${t[e.BUILD]}?`);K1("LOOSE",`^${t[e.LOOSEPLAIN]}\$`);K1("GTLT","((?:<|>)?=?)");K1("XRANGEIDENTIFIERLOOSE",`${t[e.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);K1("XRANGEIDENTIFIER",`${t[e.NUMERICIDENTIFIER]}|x|X|\\*`);K1("XRANGEPLAIN",`[v=\\s]*(${t[e.XRANGEIDENTIFIER]})(?:\\.(${t[e.XRANGEIDENTIFIER]})(?:\\.(${t[e.XRANGEIDENTIFIER]})(?:${t[e.PRERELEASE]})?${t[e.BUILD]}?)?)?`);K1("XRANGEPLAINLOOSE",`[v=\\s]*(${t[e.XRANGEIDENTIFIERLOOSE]})(?:\\.(${t[e.XRANGEIDENTIFIERLOOSE]})(?:\\.(${t[e.XRANGEIDENTIFIERLOOSE]})(?:${t[e.PRERELEASELOOSE]})?${t[e.BUILD]}?)?)?`);K1("XRANGE",`^${t[e.GTLT]}\\s*${t[e.XRANGEPLAIN]}\$`);K1("XRANGELOOSE",`^${t[e.GTLT]}\\s*${t[e.XRANGEPLAINLOOSE]}\$`);K1("COERCEPLAIN",`(^|[^\\d])(\\d{1,${XY}})(?:\\.(\\d{1,${XY}}))?(?:\\.(\\d{1,${XY}}))?`);K1("COERCE",`${t[e.COERCEPLAIN]}(?:\$|[^\\d])`);K1("COERCEFULL",t[e.COERCEPLAIN]+`(?:${t[e.PRERELEASE]})?(?:${t[e.BUILD]})?(?:\$|[^\\d])`);K1("COERCERTL",t[e.COERCE],!0);K1("COERCERTLFULL",t[e.COERCEFULL],!0);K1("LONETILDE","(?:~>?)");K1("TILDETRIM",`(\\s*)${t[e.LONETILDE]}\\s+`,!0);f$.tildeTrimReplace="$1~";K1("TILDE",`^${t[e.LONETILDE]}${t[e.XRANGEPLAIN]}\$`);K1("TILDELOOSE",`^${t[e.LONETILDE]}${t[e.XRANGEPLAINLOOSE]}\$`);K1("LONECARET","(?:\\^)");K1("CARETTRIM",`(\\s*)${t[e.LONECARET]}\\s+`,!0);f$.caretTrimReplace="$1^";K1("CARET",`^${t[e.LONECARET]}${t[e.XRANGEPLAIN]}\$`);K1("CARETLOOSE",`^${t[e.LONECARET]}${t[e.XRANGEPLAINLOOSE]}\$`);K1("COMPARATORLOOSE",`^${t[e.GTLT]}\\s*(${t[e.LOOSEPLAIN]})\$|^\$`);K1("COMPARATOR",`^${t[e.GTLT]}\\s*(${t[e.FULLPLAIN]})\$|^\$`);K1("COMPARATORTRIM",`(\\s*)${t[e.GTLT]}\\s*(${t[e.LOOSEPLAIN]}|${t[e.XRANGEPLAIN]})`,!0);f$.comparatorTrimReplace="$1$2$3";K1("HYPHENRANGE",`^\\s*(${t[e.XRANGEPLAIN]})\\s+-\\s+(${t[e.XRANGEPLAIN]})\\s*\$`);K1("HYPHENRANGELOOSE",`^\\s*(${t[e.XRANGEPLAINLOOSE]})\\s+-\\s+(${t[e.XRANGEPLAINLOOSE]})\\s*\$`);K1("STAR","(<|>)?=?\\s*\\*");K1("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");K1("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var K7=I((If,bJ)=>{var WN=Object.freeze({loose:!0}),wN=Object.freeze({}),BN=($)=>{if(!$)return wN;if(typeof $!=="object")return WN;return $};bJ.exports=BN});var GY=I((Cf,uJ)=>{var gJ=/^[0-9]+$/,mJ=($,X)=>{let Y=gJ.test($),G=gJ.test(X);if(Y&&G)$=+$,X=+X;return $===X?0:Y&&!G?-1:G&&!Y?1:$<X?-1:1},UN=($,X)=>mJ(X,$);uJ.exports={compareIdentifiers:mJ,rcompareIdentifiers:UN}});var E0=I((jf,lJ)=>{var z7=T5(),{MAX_LENGTH:pJ,MAX_SAFE_INTEGER:L7}=j5(),{safeRe:cJ,t:dJ}=_6(),VN=K7(),{compareIdentifiers:N6}=GY();class W${constructor($,X){if(X=VN(X),$ instanceof W$)if($.loose===!!X.loose&&$.includePrerelease===!!X.includePrerelease)return $;else $=$.version;else if(typeof $!=="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof $}".`);if($.length>pJ)throw new TypeError(`version is longer than ${pJ} characters`);z7("SemVer",$,X),this.options=X,this.loose=!!X.loose,this.includePrerelease=!!X.includePrerelease;let Y=$.trim().match(X.loose?cJ[dJ.LOOSE]:cJ[dJ.FULL]);if(!Y)throw new TypeError(`Invalid Version: ${$}`);if(this.raw=$,this.major=+Y[1],this.minor=+Y[2],this.patch=+Y[3],this.major>L7||this.major<0)throw new TypeError("Invalid major version");if(this.minor>L7||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>L7||this.patch<0)throw new TypeError("Invalid patch version");if(!Y[4])this.prerelease=[];else this.prerelease=Y[4].split(".").map((G)=>{if(/^[0-9]+$/.test(G)){let H=+G;if(H>=0&&H<L7)return H}return G});this.build=Y[5]?Y[5].split("."):[],this.format()}format(){if(this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length)this.version+=`-${this.prerelease.join(".")}`;return this.version}toString(){return this.version}compare($){if(z7("SemVer.compare",this.version,this.options,$),!($ instanceof W$)){if(typeof $==="string"&&$===this.version)return 0;$=new W$($,this.options)}if($.version===this.version)return 0;return this.compareMain($)||this.comparePre($)}compareMain($){if(!($ instanceof W$))$=new W$($,this.options);return N6(this.major,$.major)||N6(this.minor,$.minor)||N6(this.patch,$.patch)}comparePre($){if(!($ instanceof W$))$=new W$($,this.options);if(this.prerelease.length&&!$.prerelease.length)return-1;else if(!this.prerelease.length&&$.prerelease.length)return 1;else if(!this.prerelease.length&&!$.prerelease.length)return 0;let X=0;do{let Y=this.prerelease[X],G=$.prerelease[X];if(z7("prerelease compare",X,Y,G),Y===void 0&&G===void 0)return 0;else if(G===void 0)return 1;else if(Y===void 0)return-1;else if(Y===G)continue;else return N6(Y,G)}while(++X)}compareBuild($){if(!($ instanceof W$))$=new W$($,this.options);let X=0;do{let Y=this.build[X],G=$.build[X];if(z7("build compare",X,Y,G),Y===void 0&&G===void 0)return 0;else if(G===void 0)return 1;else if(Y===void 0)return-1;else if(Y===G)continue;else return N6(Y,G)}while(++X)}inc($,X,Y){switch($){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",X,Y);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",X,Y);break;case"prepatch":this.prerelease.length=0,this.inc("patch",X,Y),this.inc("pre",X,Y);break;case"prerelease":if(this.prerelease.length===0)this.inc("patch",X,Y);this.inc("pre",X,Y);break;case"major":if(this.minor!==0||this.patch!==0||this.prerelease.length===0)this.major++;this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":if(this.patch!==0||this.prerelease.length===0)this.minor++;this.patch=0,this.prerelease=[];break;case"patch":if(this.prerelease.length===0)this.patch++;this.prerelease=[];break;case"pre":{let G=Number(Y)?1:0;if(!X&&Y===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[G];else{let H=this.prerelease.length;while(--H>=0)if(typeof this.prerelease[H]==="number")this.prerelease[H]++,H=-2;if(H===-1){if(X===this.prerelease.join(".")&&Y===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(G)}}if(X){let H=[X,G];if(Y===!1)H=[X];if(N6(this.prerelease[0],X)===0){if(isNaN(this.prerelease[1]))this.prerelease=H}else this.prerelease=H}break}default:throw new Error(`invalid increment argument: ${$}`)}if(this.raw=this.format(),this.build.length)this.raw+=`+${this.build.join(".")}`;return this}}lJ.exports=W$});var T4=I((Tf,nJ)=>{var iJ=E0(),FN=($,X,Y=!1)=>{if($ instanceof iJ)return $;try{return new iJ($,X)}catch(G){if(!Y)return null;throw G}};nJ.exports=FN});var sJ=I((kf,rJ)=>{var EN=T4(),AN=($,X)=>{let Y=EN($,X);return Y?Y.version:null};rJ.exports=AN});var aJ=I((xf,oJ)=>{var KN=T4(),zN=($,X)=>{let Y=KN($.trim().replace(/^[=v]+/,""),X);return Y?Y.version:null};oJ.exports=zN});var $W=I((vf,eJ)=>{var tJ=E0(),LN=($,X,Y,G,H)=>{if(typeof Y==="string")H=G,G=Y,Y=void 0;try{return new tJ($ instanceof tJ?$.version:$,Y).inc(X,G,H).version}catch(Q){return null}};eJ.exports=LN});var GW=I((ff,YW)=>{var XW=T4(),ON=($,X)=>{let Y=XW($,null,!0),G=XW(X,null,!0),H=Y.compare(G);if(H===0)return null;let Q=H>0,J=Q?Y:G,W=Q?G:Y,w=!!J.prerelease.length;if(!!W.prerelease.length&&!w){if(!W.patch&&!W.minor)return"major";if(J.patch)return"patch";if(J.minor)return"minor";return"major"}let U=w?"pre":"";if(Y.major!==G.major)return U+"major";if(Y.minor!==G.minor)return U+"minor";if(Y.patch!==G.patch)return U+"patch";return"prerelease"};YW.exports=ON});var QW=I((hf,HW)=>{var RN=E0(),DN=($,X)=>new RN($,X).major;HW.exports=DN});var WW=I((yf,JW)=>{var _N=E0(),NN=($,X)=>new _N($,X).minor;JW.exports=NN});var BW=I((bf,wW)=>{var qN=E0(),MN=($,X)=>new qN($,X).patch;wW.exports=MN});var VW=I((gf,UW)=>{var ZN=T4(),PN=($,X)=>{let Y=ZN($,X);return Y&&Y.prerelease.length?Y.prerelease:null};UW.exports=PN});var d0=I((mf,EW)=>{var FW=E0(),SN=($,X,Y)=>new FW($,Y).compare(new FW(X,Y));EW.exports=SN});var KW=I((uf,AW)=>{var IN=d0(),CN=($,X,Y)=>IN(X,$,Y);AW.exports=CN});var LW=I((pf,zW)=>{var jN=d0(),TN=($,X)=>jN($,X,!0);zW.exports=TN});var O7=I((cf,RW)=>{var OW=E0(),kN=($,X,Y)=>{let G=new OW($,Y),H=new OW(X,Y);return G.compare(H)||G.compareBuild(H)};RW.exports=kN});var _W=I((df,DW)=>{var xN=O7(),vN=($,X)=>$.sort((Y,G)=>xN(Y,G,X));DW.exports=vN});var qW=I((lf,NW)=>{var fN=O7(),hN=($,X)=>$.sort((Y,G)=>fN(G,Y,X));NW.exports=hN});var k5=I((nf,MW)=>{var yN=d0(),bN=($,X,Y)=>yN($,X,Y)>0;MW.exports=bN});var R7=I((rf,ZW)=>{var gN=d0(),mN=($,X,Y)=>gN($,X,Y)<0;ZW.exports=mN});var HY=I((sf,PW)=>{var uN=d0(),pN=($,X,Y)=>uN($,X,Y)===0;PW.exports=pN});var QY=I((of,SW)=>{var cN=d0(),dN=($,X,Y)=>cN($,X,Y)!==0;SW.exports=dN});var D7=I((af,IW)=>{var lN=d0(),iN=($,X,Y)=>lN($,X,Y)>=0;IW.exports=iN});var _7=I((tf,CW)=>{var nN=d0(),rN=($,X,Y)=>nN($,X,Y)<=0;CW.exports=rN});var JY=I((ef,jW)=>{var sN=HY(),oN=QY(),aN=k5(),tN=D7(),eN=R7(),$q=_7(),Xq=($,X,Y,G)=>{switch(X){case"===":if(typeof $==="object")$=$.version;if(typeof Y==="object")Y=Y.version;return $===Y;case"!==":if(typeof $==="object")$=$.version;if(typeof Y==="object")Y=Y.version;return $!==Y;case"":case"=":case"==":return sN($,Y,G);case"!=":return oN($,Y,G);case">":return aN($,Y,G);case">=":return tN($,Y,G);case"<":return eN($,Y,G);case"<=":return $q($,Y,G);default:throw new TypeError(`Invalid operator: ${X}`)}};jW.exports=Xq});var kW=I(($h,TW)=>{var Yq=E0(),Gq=T4(),{safeRe:N7,t:q7}=_6(),Hq=($,X)=>{if($ instanceof Yq)return $;if(typeof $==="number")$=String($);if(typeof $!=="string")return null;X=X||{};let Y=null;if(!X.rtl)Y=$.match(X.includePrerelease?N7[q7.COERCEFULL]:N7[q7.COERCE]);else{let w=X.includePrerelease?N7[q7.COERCERTLFULL]:N7[q7.COERCERTL],B;while((B=w.exec($))&&(!Y||Y.index+Y[0].length!==$.length)){if(!Y||B.index+B[0].length!==Y.index+Y[0].length)Y=B;w.lastIndex=B.index+B[1].length+B[2].length}w.lastIndex=-1}if(Y===null)return null;let G=Y[2],H=Y[3]||"0",Q=Y[4]||"0",J=X.includePrerelease&&Y[5]?`-${Y[5]}`:"",W=X.includePrerelease&&Y[6]?`+${Y[6]}`:"";return Gq(`${G}.${H}.${Q}${J}${W}`,X)};TW.exports=Hq});var fW=I((Xh,vW)=>{class xW{constructor(){this.max=1000,this.map=new Map}get($){let X=this.map.get($);if(X===void 0)return;else return this.map.delete($),this.map.set($,X),X}delete($){return this.map.delete($)}set($,X){if(!this.delete($)&&X!==void 0){if(this.map.size>=this.max){let G=this.map.keys().next().value;this.delete(G)}this.map.set($,X)}return this}}vW.exports=xW});var l0=I((Yh,gW)=>{var Qq=/\s+/g;class x5{constructor($,X){if(X=Wq(X),$ instanceof x5)if($.loose===!!X.loose&&$.includePrerelease===!!X.includePrerelease)return $;else return new x5($.raw,X);if($ instanceof WY)return this.raw=$.value,this.set=[[$]],this.formatted=void 0,this;if(this.options=X,this.loose=!!X.loose,this.includePrerelease=!!X.includePrerelease,this.raw=$.trim().replace(Qq," "),this.set=this.raw.split("||").map((Y)=>this.parseRange(Y.trim())).filter((Y)=>Y.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let Y=this.set[0];if(this.set=this.set.filter((G)=>!yW(G[0])),this.set.length===0)this.set=[Y];else if(this.set.length>1){for(let G of this.set)if(G.length===1&&Aq(G[0])){this.set=[G];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let $=0;$<this.set.length;$++){if($>0)this.formatted+="||";let X=this.set[$];for(let Y=0;Y<X.length;Y++){if(Y>0)this.formatted+=" ";this.formatted+=X[Y].toString().trim()}}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange($){let Y=((this.options.includePrerelease&&Fq)|(this.options.loose&&Eq))+":"+$,G=hW.get(Y);if(G)return G;let H=this.options.loose,Q=H?I0[_0.HYPHENRANGELOOSE]:I0[_0.HYPHENRANGE];$=$.replace(Q,Mq(this.options.includePrerelease)),y1("hyphen replace",$),$=$.replace(I0[_0.COMPARATORTRIM],Bq),y1("comparator trim",$),$=$.replace(I0[_0.TILDETRIM],Uq),y1("tilde trim",$),$=$.replace(I0[_0.CARETTRIM],Vq),y1("caret trim",$);let J=$.split(" ").map((U)=>Kq(U,this.options)).join(" ").split(/\s+/).map((U)=>qq(U,this.options));if(H)J=J.filter((U)=>{return y1("loose invalid filter",U,this.options),!!U.match(I0[_0.COMPARATORLOOSE])});y1("range list",J);let W=new Map,w=J.map((U)=>new WY(U,this.options));for(let U of w){if(yW(U))return[U];W.set(U.value,U)}if(W.size>1&&W.has(""))W.delete("");let B=[...W.values()];return hW.set(Y,B),B}intersects($,X){if(!($ instanceof x5))throw new TypeError("a Range is required");return this.set.some((Y)=>{return bW(Y,X)&&$.set.some((G)=>{return bW(G,X)&&Y.every((H)=>{return G.every((Q)=>{return H.intersects(Q,X)})})})})}test($){if(!$)return!1;if(typeof $==="string")try{$=new wq($,this.options)}catch(X){return!1}for(let X=0;X<this.set.length;X++)if(Zq(this.set[X],$,this.options))return!0;return!1}}gW.exports=x5;var Jq=fW(),hW=new Jq,Wq=K7(),WY=v5(),y1=T5(),wq=E0(),{safeRe:I0,t:_0,comparatorTrimReplace:Bq,tildeTrimReplace:Uq,caretTrimReplace:Vq}=_6(),{FLAG_INCLUDE_PRERELEASE:Fq,FLAG_LOOSE:Eq}=j5(),yW=($)=>$.value==="<0.0.0-0",Aq=($)=>$.value==="",bW=($,X)=>{let Y=!0,G=$.slice(),H=G.pop();while(Y&&G.length)Y=G.every((Q)=>{return H.intersects(Q,X)}),H=G.pop();return Y},Kq=($,X)=>{return y1("comp",$,X),$=Oq($,X),y1("caret",$),$=zq($,X),y1("tildes",$),$=Dq($,X),y1("xrange",$),$=Nq($,X),y1("stars",$),$},N0=($)=>!$||$.toLowerCase()==="x"||$==="*",zq=($,X)=>{return $.trim().split(/\s+/).map((Y)=>Lq(Y,X)).join(" ")},Lq=($,X)=>{let Y=X.loose?I0[_0.TILDELOOSE]:I0[_0.TILDE];return $.replace(Y,(G,H,Q,J,W)=>{y1("tilde",$,G,H,Q,J,W);let w;if(N0(H))w="";else if(N0(Q))w=`>=${H}.0.0 <${+H+1}.0.0-0`;else if(N0(J))w=`>=${H}.${Q}.0 <${H}.${+Q+1}.0-0`;else if(W)y1("replaceTilde pr",W),w=`>=${H}.${Q}.${J}-${W} <${H}.${+Q+1}.0-0`;else w=`>=${H}.${Q}.${J} <${H}.${+Q+1}.0-0`;return y1("tilde return",w),w})},Oq=($,X)=>{return $.trim().split(/\s+/).map((Y)=>Rq(Y,X)).join(" ")},Rq=($,X)=>{y1("caret",$,X);let Y=X.loose?I0[_0.CARETLOOSE]:I0[_0.CARET],G=X.includePrerelease?"-0":"";return $.replace(Y,(H,Q,J,W,w)=>{y1("caret",$,H,Q,J,W,w);let B;if(N0(Q))B="";else if(N0(J))B=`>=${Q}.0.0${G} <${+Q+1}.0.0-0`;else if(N0(W))if(Q==="0")B=`>=${Q}.${J}.0${G} <${Q}.${+J+1}.0-0`;else B=`>=${Q}.${J}.0${G} <${+Q+1}.0.0-0`;else if(w)if(y1("replaceCaret pr",w),Q==="0")if(J==="0")B=`>=${Q}.${J}.${W}-${w} <${Q}.${J}.${+W+1}-0`;else B=`>=${Q}.${J}.${W}-${w} <${Q}.${+J+1}.0-0`;else B=`>=${Q}.${J}.${W}-${w} <${+Q+1}.0.0-0`;else if(y1("no pr"),Q==="0")if(J==="0")B=`>=${Q}.${J}.${W}${G} <${Q}.${J}.${+W+1}-0`;else B=`>=${Q}.${J}.${W}${G} <${Q}.${+J+1}.0-0`;else B=`>=${Q}.${J}.${W} <${+Q+1}.0.0-0`;return y1("caret return",B),B})},Dq=($,X)=>{return y1("replaceXRanges",$,X),$.split(/\s+/).map((Y)=>_q(Y,X)).join(" ")},_q=($,X)=>{$=$.trim();let Y=X.loose?I0[_0.XRANGELOOSE]:I0[_0.XRANGE];return $.replace(Y,(G,H,Q,J,W,w)=>{y1("xRange",$,G,H,Q,J,W,w);let B=N0(Q),U=B||N0(J),V=U||N0(W),F=V;if(H==="="&&F)H="";if(w=X.includePrerelease?"-0":"",B)if(H===">"||H==="<")G="<0.0.0-0";else G="*";else if(H&&F){if(U)J=0;if(W=0,H===">")if(H=">=",U)Q=+Q+1,J=0,W=0;else J=+J+1,W=0;else if(H==="<=")if(H="<",U)Q=+Q+1;else J=+J+1;if(H==="<")w="-0";G=`${H+Q}.${J}.${W}${w}`}else if(U)G=`>=${Q}.0.0${w} <${+Q+1}.0.0-0`;else if(V)G=`>=${Q}.${J}.0${w} <${Q}.${+J+1}.0-0`;return y1("xRange return",G),G})},Nq=($,X)=>{return y1("replaceStars",$,X),$.trim().replace(I0[_0.STAR],"")},qq=($,X)=>{return y1("replaceGTE0",$,X),$.trim().replace(I0[X.includePrerelease?_0.GTE0PRE:_0.GTE0],"")},Mq=($)=>(X,Y,G,H,Q,J,W,w,B,U,V,F)=>{if(N0(G))Y="";else if(N0(H))Y=`>=${G}.0.0${$?"-0":""}`;else if(N0(Q))Y=`>=${G}.${H}.0${$?"-0":""}`;else if(J)Y=`>=${Y}`;else Y=`>=${Y}${$?"-0":""}`;if(N0(B))w="";else if(N0(U))w=`<${+B+1}.0.0-0`;else if(N0(V))w=`<${B}.${+U+1}.0-0`;else if(F)w=`<=${B}.${U}.${V}-${F}`;else if($)w=`<${B}.${U}.${+V+1}-0`;else w=`<=${w}`;return`${Y} ${w}`.trim()},Zq=($,X,Y)=>{for(let G=0;G<$.length;G++)if(!$[G].test(X))return!1;if(X.prerelease.length&&!Y.includePrerelease){for(let G=0;G<$.length;G++){if(y1($[G].semver),$[G].semver===WY.ANY)continue;if($[G].semver.prerelease.length>0){let H=$[G].semver;if(H.major===X.major&&H.minor===X.minor&&H.patch===X.patch)return!0}}return!1}return!0}});var v5=I((Gh,lW)=>{var f5=Symbol("SemVer ANY");class M7{static get ANY(){return f5}constructor($,X){if(X=mW(X),$ instanceof M7)if($.loose===!!X.loose)return $;else $=$.value;if($=$.trim().split(/\s+/).join(" "),BY("comparator",$,X),this.options=X,this.loose=!!X.loose,this.parse($),this.semver===f5)this.value="";else this.value=this.operator+this.semver.version;BY("comp",this)}parse($){let X=this.options.loose?uW[pW.COMPARATORLOOSE]:uW[pW.COMPARATOR],Y=$.match(X);if(!Y)throw new TypeError(`Invalid comparator: ${$}`);if(this.operator=Y[1]!==void 0?Y[1]:"",this.operator==="=")this.operator="";if(!Y[2])this.semver=f5;else this.semver=new cW(Y[2],this.options.loose)}toString(){return this.value}test($){if(BY("Comparator.test",$,this.options.loose),this.semver===f5||$===f5)return!0;if(typeof $==="string")try{$=new cW($,this.options)}catch(X){return!1}return wY($,this.operator,this.semver,this.options)}intersects($,X){if(!($ instanceof M7))throw new TypeError("a Comparator is required");if(this.operator===""){if(this.value==="")return!0;return new dW($.value,X).test(this.value)}else if($.operator===""){if($.value==="")return!0;return new dW(this.value,X).test($.semver)}if(X=mW(X),X.includePrerelease&&(this.value==="<0.0.0-0"||$.value==="<0.0.0-0"))return!1;if(!X.includePrerelease&&(this.value.startsWith("<0.0.0")||$.value.startsWith("<0.0.0")))return!1;if(this.operator.startsWith(">")&&$.operator.startsWith(">"))return!0;if(this.operator.startsWith("<")&&$.operator.startsWith("<"))return!0;if(this.semver.version===$.semver.version&&this.operator.includes("=")&&$.operator.includes("="))return!0;if(wY(this.semver,"<",$.semver,X)&&this.operator.startsWith(">")&&$.operator.startsWith("<"))return!0;if(wY(this.semver,">",$.semver,X)&&this.operator.startsWith("<")&&$.operator.startsWith(">"))return!0;return!1}}lW.exports=M7;var mW=K7(),{safeRe:uW,t:pW}=_6(),wY=JY(),BY=T5(),cW=E0(),dW=l0()});var h5=I((Hh,iW)=>{var Pq=l0(),Sq=($,X,Y)=>{try{X=new Pq(X,Y)}catch(G){return!1}return X.test($)};iW.exports=Sq});var rW=I((Qh,nW)=>{var Iq=l0(),Cq=($,X)=>new Iq($,X).set.map((Y)=>Y.map((G)=>G.value).join(" ").trim().split(" "));nW.exports=Cq});var oW=I((Jh,sW)=>{var jq=E0(),Tq=l0(),kq=($,X,Y)=>{let G=null,H=null,Q=null;try{Q=new Tq(X,Y)}catch(J){return null}return $.forEach((J)=>{if(Q.test(J)){if(!G||H.compare(J)===-1)G=J,H=new jq(G,Y)}}),G};sW.exports=kq});var tW=I((Wh,aW)=>{var xq=E0(),vq=l0(),fq=($,X,Y)=>{let G=null,H=null,Q=null;try{Q=new vq(X,Y)}catch(J){return null}return $.forEach((J)=>{if(Q.test(J)){if(!G||H.compare(J)===1)G=J,H=new xq(G,Y)}}),G};aW.exports=fq});var Xw=I((wh,$w)=>{var UY=E0(),hq=l0(),eW=k5(),yq=($,X)=>{$=new hq($,X);let Y=new UY("0.0.0");if($.test(Y))return Y;if(Y=new UY("0.0.0-0"),$.test(Y))return Y;Y=null;for(let G=0;G<$.set.length;++G){let H=$.set[G],Q=null;if(H.forEach((J)=>{let W=new UY(J.semver.version);switch(J.operator){case">":if(W.prerelease.length===0)W.patch++;else W.prerelease.push(0);W.raw=W.format();case"":case">=":if(!Q||eW(W,Q))Q=W;break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${J.operator}`)}}),Q&&(!Y||eW(Y,Q)))Y=Q}if(Y&&$.test(Y))return Y;return null};$w.exports=yq});var Gw=I((Bh,Yw)=>{var bq=l0(),gq=($,X)=>{try{return new bq($,X).range||"*"}catch(Y){return null}};Yw.exports=gq});var Z7=I((Uh,Ww)=>{var mq=E0(),Jw=v5(),{ANY:uq}=Jw,pq=l0(),cq=h5(),Hw=k5(),Qw=R7(),dq=_7(),lq=D7(),iq=($,X,Y,G)=>{$=new mq($,G),X=new pq(X,G);let H,Q,J,W,w;switch(Y){case">":H=Hw,Q=dq,J=Qw,W=">",w=">=";break;case"<":H=Qw,Q=lq,J=Hw,W="<",w="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(cq($,X,G))return!1;for(let B=0;B<X.set.length;++B){let U=X.set[B],V=null,F=null;if(U.forEach((E)=>{if(E.semver===uq)E=new Jw(">=0.0.0");if(V=V||E,F=F||E,H(E.semver,V.semver,G))V=E;else if(J(E.semver,F.semver,G))F=E}),V.operator===W||V.operator===w)return!1;if((!F.operator||F.operator===W)&&Q($,F.semver))return!1;else if(F.operator===w&&J($,F.semver))return!1}return!0};Ww.exports=iq});var Bw=I((Vh,ww)=>{var nq=Z7(),rq=($,X,Y)=>nq($,X,">",Y);ww.exports=rq});var Vw=I((Fh,Uw)=>{var sq=Z7(),oq=($,X,Y)=>sq($,X,"<",Y);Uw.exports=oq});var Aw=I((Eh,Ew)=>{var Fw=l0(),aq=($,X,Y)=>{return $=new Fw($,Y),X=new Fw(X,Y),$.intersects(X,Y)};Ew.exports=aq});var zw=I((Ah,Kw)=>{var tq=h5(),eq=d0();Kw.exports=($,X,Y)=>{let G=[],H=null,Q=null,J=$.sort((U,V)=>eq(U,V,Y));for(let U of J)if(tq(U,X,Y)){if(Q=U,!H)H=U}else{if(Q)G.push([H,Q]);Q=null,H=null}if(H)G.push([H,null]);let W=[];for(let[U,V]of G)if(U===V)W.push(U);else if(!V&&U===J[0])W.push("*");else if(!V)W.push(`>=${U}`);else if(U===J[0])W.push(`<=${V}`);else W.push(`${U} - ${V}`);let w=W.join(" || "),B=typeof X.raw==="string"?X.raw:String(X);return w.length<B.length?w:X}});var Nw=I((Kh,_w)=>{var Lw=l0(),FY=v5(),{ANY:VY}=FY,y5=h5(),EY=d0(),$M=($,X,Y={})=>{if($===X)return!0;$=new Lw($,Y),X=new Lw(X,Y);let G=!1;$:for(let H of $.set){for(let Q of X.set){let J=YM(H,Q,Y);if(G=G||J!==null,J)continue $}if(G)return!1}return!0},XM=[new FY(">=0.0.0-0")],Ow=[new FY(">=0.0.0")],YM=($,X,Y)=>{if($===X)return!0;if($.length===1&&$[0].semver===VY)if(X.length===1&&X[0].semver===VY)return!0;else if(Y.includePrerelease)$=XM;else $=Ow;if(X.length===1&&X[0].semver===VY)if(Y.includePrerelease)return!0;else X=Ow;let G=new Set,H,Q;for(let E of $)if(E.operator===">"||E.operator===">=")H=Rw(H,E,Y);else if(E.operator==="<"||E.operator==="<=")Q=Dw(Q,E,Y);else G.add(E.semver);if(G.size>1)return null;let J;if(H&&Q){if(J=EY(H.semver,Q.semver,Y),J>0)return null;else if(J===0&&(H.operator!==">="||Q.operator!=="<="))return null}for(let E of G){if(H&&!y5(E,String(H),Y))return null;if(Q&&!y5(E,String(Q),Y))return null;for(let K of X)if(!y5(E,String(K),Y))return!1;return!0}let W,w,B,U,V=Q&&!Y.includePrerelease&&Q.semver.prerelease.length?Q.semver:!1,F=H&&!Y.includePrerelease&&H.semver.prerelease.length?H.semver:!1;if(V&&V.prerelease.length===1&&Q.operator==="<"&&V.prerelease[0]===0)V=!1;for(let E of X){if(U=U||E.operator===">"||E.operator===">=",B=B||E.operator==="<"||E.operator==="<=",H){if(F){if(E.semver.prerelease&&E.semver.prerelease.length&&E.semver.major===F.major&&E.semver.minor===F.minor&&E.semver.patch===F.patch)F=!1}if(E.operator===">"||E.operator===">="){if(W=Rw(H,E,Y),W===E&&W!==H)return!1}else if(H.operator===">="&&!y5(H.semver,String(E),Y))return!1}if(Q){if(V){if(E.semver.prerelease&&E.semver.prerelease.length&&E.semver.major===V.major&&E.semver.minor===V.minor&&E.semver.patch===V.patch)V=!1}if(E.operator==="<"||E.operator==="<="){if(w=Dw(Q,E,Y),w===E&&w!==Q)return!1}else if(Q.operator==="<="&&!y5(Q.semver,String(E),Y))return!1}if(!E.operator&&(Q||H)&&J!==0)return!1}if(H&&B&&!Q&&J!==0)return!1;if(Q&&U&&!H&&J!==0)return!1;if(F||V)return!1;return!0},Rw=($,X,Y)=>{if(!$)return X;let G=EY($.semver,X.semver,Y);return G>0?$:G<0?X:X.operator===">"&&$.operator===">="?X:$},Dw=($,X,Y)=>{if(!$)return X;let G=EY($.semver,X.semver,Y);return G<0?$:G>0?X:X.operator==="<"&&$.operator==="<="?X:$};_w.exports=$M});var Pw=I((zh,Zw)=>{var AY=_6(),qw=j5(),GM=E0(),Mw=GY(),HM=T4(),QM=sJ(),JM=aJ(),WM=$W(),wM=GW(),BM=QW(),UM=WW(),VM=BW(),FM=VW(),EM=d0(),AM=KW(),KM=LW(),zM=O7(),LM=_W(),OM=qW(),RM=k5(),DM=R7(),_M=HY(),NM=QY(),qM=D7(),MM=_7(),ZM=JY(),PM=kW(),SM=v5(),IM=l0(),CM=h5(),jM=rW(),TM=oW(),kM=tW(),xM=Xw(),vM=Gw(),fM=Z7(),hM=Bw(),yM=Vw(),bM=Aw(),gM=zw(),mM=Nw();Zw.exports={parse:HM,valid:QM,clean:JM,inc:WM,diff:wM,major:BM,minor:UM,patch:VM,prerelease:FM,compare:EM,rcompare:AM,compareLoose:KM,compareBuild:zM,sort:LM,rsort:OM,gt:RM,lt:DM,eq:_M,neq:NM,gte:qM,lte:MM,cmp:ZM,coerce:PM,Comparator:SM,Range:IM,satisfies:CM,toComparators:jM,maxSatisfying:TM,minSatisfying:kM,minVersion:xM,validRange:vM,outside:fM,gtr:hM,ltr:yM,intersects:bM,simplifyRange:gM,subset:mM,SemVer:GM,re:AY.re,src:AY.src,tokens:AY.t,SEMVER_SPEC_VERSION:qw.SEMVER_SPEC_VERSION,RELEASE_TYPES:qw.RELEASE_TYPES,compareIdentifiers:Mw.compareIdentifiers,rcompareIdentifiers:Mw.rcompareIdentifiers}});var NY=I((hw)=>{Object.defineProperty(hw,"__esModule",{value:!0});hw.default=dM;var pM=cM(import.meta.require("crypto"));function cM($){return $&&$.__esModule?$:{default:$}}var T7=new Uint8Array(256),j7=T7.length;function dM(){if(j7>T7.length-16)pM.default.randomFillSync(T7),j7=0;return T7.slice(j7,j7+=16)}});var gw=I((yw)=>{Object.defineProperty(yw,"__esModule",{value:!0});yw.default=void 0;var iM=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;yw.default=iM});var m5=I((mw)=>{Object.defineProperty(mw,"__esModule",{value:!0});mw.default=void 0;var nM=rM(gw());function rM($){return $&&$.__esModule?$:{default:$}}function sM($){return typeof $==="string"&&nM.default.test($)}var oM=sM;mw.default=oM});var u5=I((cw)=>{Object.defineProperty(cw,"__esModule",{value:!0});cw.default=void 0;cw.unsafeStringify=pw;var aM=tM(m5());function tM($){return $&&$.__esModule?$:{default:$}}var Q0=[];for(let $=0;$<256;++$)Q0.push(($+256).toString(16).slice(1));function pw($,X=0){return Q0[$[X+0]]+Q0[$[X+1]]+Q0[$[X+2]]+Q0[$[X+3]]+"-"+Q0[$[X+4]]+Q0[$[X+5]]+"-"+Q0[$[X+6]]+Q0[$[X+7]]+"-"+Q0[$[X+8]]+Q0[$[X+9]]+"-"+Q0[$[X+10]]+Q0[$[X+11]]+Q0[$[X+12]]+Q0[$[X+13]]+Q0[$[X+14]]+Q0[$[X+15]]}function eM($,X=0){let Y=pw($,X);if(!aM.default(Y))throw TypeError("Stringified UUID is invalid");return Y}var $Z=eM;cw.default=$Z});var rw=I((iw)=>{Object.defineProperty(iw,"__esModule",{value:!0});iw.default=void 0;var YZ=HZ(NY()),GZ=u5();function HZ($){return $&&$.__esModule?$:{default:$}}var lw,qY,MY=0,ZY=0;function QZ($,X,Y){let G=X&&Y||0,H=X||new Array(16);$=$||{};let Q=$.node||lw,J=$.clockseq!==void 0?$.clockseq:qY;if(Q==null||J==null){let F=$.random||($.rng||YZ.default)();if(Q==null)Q=lw=[F[0]|1,F[1],F[2],F[3],F[4],F[5]];if(J==null)J=qY=(F[6]<<8|F[7])&16383}let W=$.msecs!==void 0?$.msecs:Date.now(),w=$.nsecs!==void 0?$.nsecs:ZY+1,B=W-MY+(w-ZY)/1e4;if(B<0&&$.clockseq===void 0)J=J+1&16383;if((B<0||W>MY)&&$.nsecs===void 0)w=0;if(w>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");MY=W,ZY=w,qY=J,W+=12219292800000;let U=((W&268435455)*1e4+w)%4294967296;H[G++]=U>>>24&255,H[G++]=U>>>16&255,H[G++]=U>>>8&255,H[G++]=U&255;let V=W/4294967296*1e4&268435455;H[G++]=V>>>8&255,H[G++]=V&255,H[G++]=V>>>24&15|16,H[G++]=V>>>16&255,H[G++]=J>>>8|128,H[G++]=J&255;for(let F=0;F<6;++F)H[G+F]=Q[F];return X||GZ.unsafeStringify(H)}var JZ=QZ;iw.default=JZ});var PY=I((sw)=>{Object.defineProperty(sw,"__esModule",{value:!0});sw.default=void 0;var WZ=wZ(m5());function wZ($){return $&&$.__esModule?$:{default:$}}function BZ($){if(!WZ.default($))throw TypeError("Invalid UUID");let X,Y=new Uint8Array(16);return Y[0]=(X=parseInt($.slice(0,8),16))>>>24,Y[1]=X>>>16&255,Y[2]=X>>>8&255,Y[3]=X&255,Y[4]=(X=parseInt($.slice(9,13),16))>>>8,Y[5]=X&255,Y[6]=(X=parseInt($.slice(14,18),16))>>>8,Y[7]=X&255,Y[8]=(X=parseInt($.slice(19,23),16))>>>8,Y[9]=X&255,Y[10]=(X=parseInt($.slice(24,36),16))/1099511627776&255,Y[11]=X/4294967296&255,Y[12]=X>>>24&255,Y[13]=X>>>16&255,Y[14]=X>>>8&255,Y[15]=X&255,Y}var UZ=BZ;sw.default=UZ});var SY=I((ew)=>{Object.defineProperty(ew,"__esModule",{value:!0});ew.URL=ew.DNS=void 0;ew.default=KZ;var VZ=u5(),FZ=EZ(PY());function EZ($){return $&&$.__esModule?$:{default:$}}function AZ($){$=unescape(encodeURIComponent($));let X=[];for(let Y=0;Y<$.length;++Y)X.push($.charCodeAt(Y));return X}var aw="6ba7b810-9dad-11d1-80b4-00c04fd430c8";ew.DNS=aw;var tw="6ba7b811-9dad-11d1-80b4-00c04fd430c8";ew.URL=tw;function KZ($,X,Y){function G(H,Q,J,W){var w;if(typeof H==="string")H=AZ(H);if(typeof Q==="string")Q=FZ.default(Q);if(((w=Q)===null||w===void 0?void 0:w.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let B=new Uint8Array(16+H.length);if(B.set(Q),B.set(H,Q.length),B=Y(B),B[6]=B[6]&15|X,B[8]=B[8]&63|128,J){W=W||0;for(let U=0;U<16;++U)J[W+U]=B[U];return J}return VZ.unsafeStringify(B)}try{G.name=$}catch(H){}return G.DNS=aw,G.URL=tw,G}});var GB=I((XB)=>{Object.defineProperty(XB,"__esModule",{value:!0});XB.default=void 0;var OZ=RZ(import.meta.require("crypto"));function RZ($){return $&&$.__esModule?$:{default:$}}function DZ($){if(Array.isArray($))$=Buffer.from($);else if(typeof $==="string")$=Buffer.from($,"utf8");return OZ.default.createHash("md5").update($).digest()}var _Z=DZ;XB.default=_Z});var WB=I((QB)=>{Object.defineProperty(QB,"__esModule",{value:!0});QB.default=void 0;var NZ=HB(SY()),qZ=HB(GB());function HB($){return $&&$.__esModule?$:{default:$}}var MZ=NZ.default("v3",48,qZ.default),ZZ=MZ;QB.default=ZZ});var UB=I((wB)=>{Object.defineProperty(wB,"__esModule",{value:!0});wB.default=void 0;var PZ=SZ(import.meta.require("crypto"));function SZ($){return $&&$.__esModule?$:{default:$}}var IZ={randomUUID:PZ.default.randomUUID};wB.default=IZ});var KB=I((EB)=>{Object.defineProperty(EB,"__esModule",{value:!0});EB.default=void 0;var VB=FB(UB()),CZ=FB(NY()),jZ=u5();function FB($){return $&&$.__esModule?$:{default:$}}function TZ($,X,Y){if(VB.default.randomUUID&&!X&&!$)return VB.default.randomUUID();$=$||{};let G=$.random||($.rng||CZ.default)();if(G[6]=G[6]&15|64,G[8]=G[8]&63|128,X){Y=Y||0;for(let H=0;H<16;++H)X[Y+H]=G[H];return X}return jZ.unsafeStringify(G)}var kZ=TZ;EB.default=kZ});var OB=I((zB)=>{Object.defineProperty(zB,"__esModule",{value:!0});zB.default=void 0;var xZ=vZ(import.meta.require("crypto"));function vZ($){return $&&$.__esModule?$:{default:$}}function fZ($){if(Array.isArray($))$=Buffer.from($);else if(typeof $==="string")$=Buffer.from($,"utf8");return xZ.default.createHash("sha1").update($).digest()}var hZ=fZ;zB.default=hZ});var NB=I((DB)=>{Object.defineProperty(DB,"__esModule",{value:!0});DB.default=void 0;var yZ=RB(SY()),bZ=RB(OB());function RB($){return $&&$.__esModule?$:{default:$}}var gZ=yZ.default("v5",80,bZ.default),mZ=gZ;DB.default=mZ});var ZB=I((qB)=>{Object.defineProperty(qB,"__esModule",{value:!0});qB.default=void 0;var uZ="00000000-0000-0000-0000-000000000000";qB.default=uZ});var IB=I((PB)=>{Object.defineProperty(PB,"__esModule",{value:!0});PB.default=void 0;var pZ=cZ(m5());function cZ($){return $&&$.__esModule?$:{default:$}}function dZ($){if(!pZ.default($))throw TypeError("Invalid UUID");return parseInt($.slice(14,15),16)}var lZ=dZ;PB.default=lZ});var CB=I((w$)=>{Object.defineProperty(w$,"__esModule",{value:!0});Object.defineProperty(w$,"NIL",{enumerable:!0,get:function(){return oZ.default}});Object.defineProperty(w$,"parse",{enumerable:!0,get:function(){return $P.default}});Object.defineProperty(w$,"stringify",{enumerable:!0,get:function(){return eZ.default}});Object.defineProperty(w$,"v1",{enumerable:!0,get:function(){return iZ.default}});Object.defineProperty(w$,"v3",{enumerable:!0,get:function(){return nZ.default}});Object.defineProperty(w$,"v4",{enumerable:!0,get:function(){return rZ.default}});Object.defineProperty(w$,"v5",{enumerable:!0,get:function(){return sZ.default}});Object.defineProperty(w$,"validate",{enumerable:!0,get:function(){return tZ.default}});Object.defineProperty(w$,"version",{enumerable:!0,get:function(){return aZ.default}});var iZ=y$(rw()),nZ=y$(WB()),rZ=y$(KB()),sZ=y$(NB()),oZ=y$(ZB()),aZ=y$(IB()),tZ=y$(m5()),eZ=y$(u5()),$P=y$(PY());function y$($){return $&&$.__esModule?$:{default:$}}});var HU=I((Yy,f7)=>{var jB,TB,kB,xB,vB,fB,hB,yB,bB,gB,mB,uB,pB,x7,IY,cB,dB,lB,M6,iB,nB,rB,sB,oB,aB,tB,eB,$U,v7,XU,YU,GU;(function($){var X=typeof global==="object"?global:typeof self==="object"?self:typeof this==="object"?this:{};if(typeof define==="function"&&define.amd)define("tslib",["exports"],function(G){$(Y(X,Y(G)))});else if(typeof f7==="object"&&typeof Yy==="object")$(Y(X,Y(Yy)));else $(Y(X));function Y(G,H){if(G!==X)if(typeof Object.create==="function")Object.defineProperty(G,"__esModule",{value:!0});else G.__esModule=!0;return function(Q,J){return G[Q]=H?H(Q,J):J}}})(function($){var X=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(H,Q){H.__proto__=Q}||function(H,Q){for(var J in Q)if(Object.prototype.hasOwnProperty.call(Q,J))H[J]=Q[J]};jB=function(H,Q){if(typeof Q!=="function"&&Q!==null)throw new TypeError("Class extends value "+String(Q)+" is not a constructor or null");X(H,Q);function J(){this.constructor=H}H.prototype=Q===null?Object.create(Q):(J.prototype=Q.prototype,new J)},TB=Object.assign||function(H){for(var Q,J=1,W=arguments.length;J<W;J++){Q=arguments[J];for(var w in Q)if(Object.prototype.hasOwnProperty.call(Q,w))H[w]=Q[w]}return H},kB=function(H,Q){var J={};for(var W in H)if(Object.prototype.hasOwnProperty.call(H,W)&&Q.indexOf(W)<0)J[W]=H[W];if(H!=null&&typeof Object.getOwnPropertySymbols==="function"){for(var w=0,W=Object.getOwnPropertySymbols(H);w<W.length;w++)if(Q.indexOf(W[w])<0&&Object.prototype.propertyIsEnumerable.call(H,W[w]))J[W[w]]=H[W[w]]}return J},xB=function(H,Q,J,W){var w=arguments.length,B=w<3?Q:W===null?W=Object.getOwnPropertyDescriptor(Q,J):W,U;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")B=Reflect.decorate(H,Q,J,W);else for(var V=H.length-1;V>=0;V--)if(U=H[V])B=(w<3?U(B):w>3?U(Q,J,B):U(Q,J))||B;return w>3&&B&&Object.defineProperty(Q,J,B),B},vB=function(H,Q){return function(J,W){Q(J,W,H)}},fB=function(H,Q,J,W,w,B){function U(p){if(p!==void 0&&typeof p!=="function")throw new TypeError("Function expected");return p}var V=W.kind,F=V==="getter"?"get":V==="setter"?"set":"value",E=!Q&&H?W.static?H:H.prototype:null,K=Q||(E?Object.getOwnPropertyDescriptor(E,W.name):{}),A,P=!1;for(var _=J.length-1;_>=0;_--){var C={};for(var b in W)C[b]=b==="access"?{}:W[b];for(var b in W.access)C.access[b]=W.access[b];C.addInitializer=function(p){if(P)throw new TypeError("Cannot add initializers after decoration has completed");B.push(U(p||null))};var T=J[_](V==="accessor"?{get:K.get,set:K.set}:K[F],C);if(V==="accessor"){if(T===void 0)continue;if(T===null||typeof T!=="object")throw new TypeError("Object expected");if(A=U(T.get))K.get=A;if(A=U(T.set))K.set=A;if(A=U(T.init))w.unshift(A)}else if(A=U(T))if(V==="field")w.unshift(A);else K[F]=A}if(E)Object.defineProperty(E,W.name,K);P=!0},hB=function(H,Q,J){var W=arguments.length>2;for(var w=0;w<Q.length;w++)J=W?Q[w].call(H,J):Q[w].call(H);return W?J:void 0},yB=function(H){return typeof H==="symbol"?H:"".concat(H)},bB=function(H,Q,J){if(typeof Q==="symbol")Q=Q.description?"[".concat(Q.description,"]"):"";return Object.defineProperty(H,"name",{configurable:!0,value:J?"".concat(J," ",Q):Q})},gB=function(H,Q){if(typeof Reflect==="object"&&typeof Reflect.metadata==="function")return Reflect.metadata(H,Q)},mB=function(H,Q,J,W){function w(B){return B instanceof J?B:new J(function(U){U(B)})}return new(J||(J=Promise))(function(B,U){function V(K){try{E(W.next(K))}catch(A){U(A)}}function F(K){try{E(W.throw(K))}catch(A){U(A)}}function E(K){K.done?B(K.value):w(K.value).then(V,F)}E((W=W.apply(H,Q||[])).next())})},uB=function(H,Q){var J={label:0,sent:function(){if(B[0]&1)throw B[1];return B[1]},trys:[],ops:[]},W,w,B,U=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return U.next=V(0),U.throw=V(1),U.return=V(2),typeof Symbol==="function"&&(U[Symbol.iterator]=function(){return this}),U;function V(E){return function(K){return F([E,K])}}function F(E){if(W)throw new TypeError("Generator is already executing.");while(U&&(U=0,E[0]&&(J=0)),J)try{if(W=1,w&&(B=E[0]&2?w.return:E[0]?w.throw||((B=w.return)&&B.call(w),0):w.next)&&!(B=B.call(w,E[1])).done)return B;if(w=0,B)E=[E[0]&2,B.value];switch(E[0]){case 0:case 1:B=E;break;case 4:return J.label++,{value:E[1],done:!1};case 5:J.label++,w=E[1],E=[0];continue;case 7:E=J.ops.pop(),J.trys.pop();continue;default:if((B=J.trys,!(B=B.length>0&&B[B.length-1]))&&(E[0]===6||E[0]===2)){J=0;continue}if(E[0]===3&&(!B||E[1]>B[0]&&E[1]<B[3])){J.label=E[1];break}if(E[0]===6&&J.label<B[1]){J.label=B[1],B=E;break}if(B&&J.label<B[2]){J.label=B[2],J.ops.push(E);break}if(B[2])J.ops.pop();J.trys.pop();continue}E=Q.call(H,J)}catch(K){E=[6,K],w=0}finally{W=B=0}if(E[0]&5)throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}},pB=function(H,Q){for(var J in H)if(J!=="default"&&!Object.prototype.hasOwnProperty.call(Q,J))v7(Q,H,J)},v7=Object.create?function(H,Q,J,W){if(W===void 0)W=J;var w=Object.getOwnPropertyDescriptor(Q,J);if(!w||("get"in w?!Q.__esModule:w.writable||w.configurable))w={enumerable:!0,get:function(){return Q[J]}};Object.defineProperty(H,W,w)}:function(H,Q,J,W){if(W===void 0)W=J;H[W]=Q[J]},x7=function(H){var Q=typeof Symbol==="function"&&Symbol.iterator,J=Q&&H[Q],W=0;if(J)return J.call(H);if(H&&typeof H.length==="number")return{next:function(){if(H&&W>=H.length)H=void 0;return{value:H&&H[W++],done:!H}}};throw new TypeError(Q?"Object is not iterable.":"Symbol.iterator is not defined.")},IY=function(H,Q){var J=typeof Symbol==="function"&&H[Symbol.iterator];if(!J)return H;var W=J.call(H),w,B=[],U;try{while((Q===void 0||Q-- >0)&&!(w=W.next()).done)B.push(w.value)}catch(V){U={error:V}}finally{try{if(w&&!w.done&&(J=W.return))J.call(W)}finally{if(U)throw U.error}}return B},cB=function(){for(var H=[],Q=0;Q<arguments.length;Q++)H=H.concat(IY(arguments[Q]));return H},dB=function(){for(var H=0,Q=0,J=arguments.length;Q<J;Q++)H+=arguments[Q].length;for(var W=Array(H),w=0,Q=0;Q<J;Q++)for(var B=arguments[Q],U=0,V=B.length;U<V;U++,w++)W[w]=B[U];return W},lB=function(H,Q,J){if(J||arguments.length===2){for(var W=0,w=Q.length,B;W<w;W++)if(B||!(W in Q)){if(!B)B=Array.prototype.slice.call(Q,0,W);B[W]=Q[W]}}return H.concat(B||Array.prototype.slice.call(Q))},M6=function(H){return this instanceof M6?(this.v=H,this):new M6(H)},iB=function(H,Q,J){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var W=J.apply(H,Q||[]),w,B=[];return w=Object.create((typeof AsyncIterator==="function"?AsyncIterator:Object).prototype),V("next"),V("throw"),V("return",U),w[Symbol.asyncIterator]=function(){return this},w;function U(_){return function(C){return Promise.resolve(C).then(_,A)}}function V(_,C){if(W[_]){if(w[_]=function(b){return new Promise(function(T,p){B.push([_,b,T,p])>1||F(_,b)})},C)w[_]=C(w[_])}}function F(_,C){try{E(W[_](C))}catch(b){P(B[0][3],b)}}function E(_){_.value instanceof M6?Promise.resolve(_.value.v).then(K,A):P(B[0][2],_)}function K(_){F("next",_)}function A(_){F("throw",_)}function P(_,C){if(_(C),B.shift(),B.length)F(B[0][0],B[0][1])}},nB=function(H){var Q,J;return Q={},W("next"),W("throw",function(w){throw w}),W("return"),Q[Symbol.iterator]=function(){return this},Q;function W(w,B){Q[w]=H[w]?function(U){return(J=!J)?{value:M6(H[w](U)),done:!1}:B?B(U):U}:B}},rB=function(H){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var Q=H[Symbol.asyncIterator],J;return Q?Q.call(H):(H=typeof x7==="function"?x7(H):H[Symbol.iterator](),J={},W("next"),W("throw"),W("return"),J[Symbol.asyncIterator]=function(){return this},J);function W(B){J[B]=H[B]&&function(U){return new Promise(function(V,F){U=H[B](U),w(V,F,U.done,U.value)})}}function w(B,U,V,F){Promise.resolve(F).then(function(E){B({value:E,done:V})},U)}},sB=function(H,Q){if(Object.defineProperty)Object.defineProperty(H,"raw",{value:Q});else H.raw=Q;return H};var Y=Object.create?function(H,Q){Object.defineProperty(H,"default",{enumerable:!0,value:Q})}:function(H,Q){H.default=Q};oB=function(H){if(H&&H.__esModule)return H;var Q={};if(H!=null){for(var J in H)if(J!=="default"&&Object.prototype.hasOwnProperty.call(H,J))v7(Q,H,J)}return Y(Q,H),Q},aB=function(H){return H&&H.__esModule?H:{default:H}},tB=function(H,Q,J,W){if(J==="a"&&!W)throw new TypeError("Private accessor was defined without a getter");if(typeof Q==="function"?H!==Q||!W:!Q.has(H))throw new TypeError("Cannot read private member from an object whose class did not declare it");return J==="m"?W:J==="a"?W.call(H):W?W.value:Q.get(H)},eB=function(H,Q,J,W,w){if(W==="m")throw new TypeError("Private method is not writable");if(W==="a"&&!w)throw new TypeError("Private accessor was defined without a setter");if(typeof Q==="function"?H!==Q||!w:!Q.has(H))throw new TypeError("Cannot write private member to an object whose class did not declare it");return W==="a"?w.call(H,J):w?w.value=J:Q.set(H,J),J},$U=function(H,Q){if(Q===null||typeof Q!=="object"&&typeof Q!=="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof H==="function"?Q===H:H.has(Q)},XU=function(H,Q,J){if(Q!==null&&Q!==void 0){if(typeof Q!=="object"&&typeof Q!=="function")throw new TypeError("Object expected.");var W,w;if(J){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");W=Q[Symbol.asyncDispose]}if(W===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");if(W=Q[Symbol.dispose],J)w=W}if(typeof W!=="function")throw new TypeError("Object not disposable.");if(w)W=function(){try{w.call(this)}catch(B){return Promise.reject(B)}};H.stack.push({value:Q,dispose:W,async:J})}else if(J)H.stack.push({async:!0});return Q};var G=typeof SuppressedError==="function"?SuppressedError:function(H,Q,J){var W=new Error(J);return W.name="SuppressedError",W.error=H,W.suppressed=Q,W};YU=function(H){function Q(B){H.error=H.hasError?new G(B,H.error,"An error was suppressed during disposal."):B,H.hasError=!0}var J,W=0;function w(){while(J=H.stack.pop())try{if(!J.async&&W===1)return W=0,H.stack.push(J),Promise.resolve().then(w);if(J.dispose){var B=J.dispose.call(J.value);if(J.async)return W|=2,Promise.resolve(B).then(w,function(U){return Q(U),w()})}else W|=1}catch(U){Q(U)}if(W===1)return H.hasError?Promise.reject(H.error):Promise.resolve();if(H.hasError)throw H.error}return w()},GU=function(H,Q){if(typeof H==="string"&&/^\.\.?\//.test(H))return H.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(J,W,w,B,U){return W?Q?".jsx":".js":w&&(!B||!U)?J:w+B+"."+U.toLowerCase()+"js"});return H},$("__extends",jB),$("__assign",TB),$("__rest",kB),$("__decorate",xB),$("__param",vB),$("__esDecorate",fB),$("__runInitializers",hB),$("__propKey",yB),$("__setFunctionName",bB),$("__metadata",gB),$("__awaiter",mB),$("__generator",uB),$("__exportStar",pB),$("__createBinding",v7),$("__values",x7),$("__read",IY),$("__spread",cB),$("__spreadArrays",dB),$("__spreadArray",lB),$("__await",M6),$("__asyncGenerator",iB),$("__asyncDelegator",nB),$("__asyncValues",rB),$("__makeTemplateObject",sB),$("__importStar",oB),$("__importDefault",aB),$("__classPrivateFieldGet",tB),$("__classPrivateFieldSet",eB),$("__classPrivateFieldIn",$U),$("__addDisposableResource",XU),$("__disposeResources",YU),$("__rewriteRelativeImportExtension",GU)})});var XV=I((ty,$V)=>{var SP=import.meta.require("fs"),B$=import.meta.require("path"),IP=import.meta.require("url"),dU=import.meta.require("os"),lU=typeof __webpack_require__==="function"?__non_webpack_require__:import.meta.require,CP=process.config&&process.config.variables||{},jP=!!process.env.PREBUILDS_ONLY,nY=process.versions,dY=nY.modules;if(nY.deno||process.isBun)dY="unsupported";var cY=xP()?"electron":kP()?"node-webkit":"node",i7=process.env.npm_config_arch||dU.arch(),n7=process.env.npm_config_platform||dU.platform(),iU=process.env.LIBC||(vP(n7)?"musl":"glibc"),lY=process.env.ARM_VERSION||(i7==="arm64"?"8":CP.arm_version)||"",nU=(nY.uv||"").split(".")[0];$V.exports=Z$;function Z$($){return lU(Z$.resolve($))}Z$.resolve=Z$.path=function($){$=B$.resolve($||".");var X="",Y;try{X=lU(B$.join($,"package.json")).name;var G=X.toUpperCase().replace(/-/g,"_");if(process.env[G+"_PREBUILD"])$=process.env[G+"_PREBUILD"]}catch(A){Y=A}if(!jP){var H=pU(B$.join($,"build/Release"),cU);if(H)return H;var Q=pU(B$.join($,"build/Debug"),cU);if(Q)return Q}var J=E($);if(J)return J;var W=E(B$.dirname(process.execPath));if(W)return W;var w=(X[0]=="@"?"":"@"+X+"/")+X+"-"+n7+"-"+i7,B;try{var U=B$.dirname(import.meta.require("module").createRequire(IP.pathToFileURL(B$.join($,"package.json"))).resolve(w));return K(U)}catch(A){B=A}var V=["platform="+n7,"arch="+i7,"runtime="+cY,"abi="+dY,"uv="+nU,lY?"armv="+lY:"","libc="+iU,"node="+process.versions.node,process.versions.electron?"electron="+process.versions.electron:"",typeof __webpack_require__==="function"?"webpack=true":""].filter(Boolean).join(" ");let F="No native build was found for "+V+"\n    attempted loading from: "+$+" and package: "+w+"\n";if(Y)F+="Error finding package.json: "+Y.message+"\n";if(B)F+="Error resolving package: "+B.message+"\n";throw new Error(F);function E(A){var P=iY(B$.join(A,"prebuilds")).map(rU),_=P.filter(sU(n7,i7)).sort(oU)[0];if(!_)return;return K(B$.join(A,"prebuilds",_.name))}function K(A){var P=iY(A).map(aU),_=P.filter(tU(cY,dY)),C=_.sort(eU(cY))[0];if(C)return B$.join(A,C.file)}};function iY($){try{return SP.readdirSync($)}catch(X){return[]}}function pU($,X){var Y=iY($).filter(X);return Y[0]&&B$.join($,Y[0])}function cU($){return/\.node$/.test($)}function rU($){var X=$.split("-");if(X.length!==2)return;var Y=X[0],G=X[1].split("+");if(!Y)return;if(!G.length)return;if(!G.every(Boolean))return;return{name:$,platform:Y,architectures:G}}function sU($,X){return function(Y){if(Y==null)return!1;if(Y.platform!==$)return!1;return Y.architectures.includes(X)}}function oU($,X){return $.architectures.length-X.architectures.length}function aU($){var X=$.split("."),Y=X.pop(),G={file:$,specificity:0};if(Y!=="node")return;for(var H=0;H<X.length;H++){var Q=X[H];if(Q==="node"||Q==="electron"||Q==="node-webkit")G.runtime=Q;else if(Q==="napi")G.napi=!0;else if(Q.slice(0,3)==="abi")G.abi=Q.slice(3);else if(Q.slice(0,2)==="uv")G.uv=Q.slice(2);else if(Q.slice(0,4)==="armv")G.armv=Q.slice(4);else if(Q==="glibc"||Q==="musl")G.libc=Q;else continue;G.specificity++}return G}function tU($,X){return function(Y){if(Y==null)return!1;if(Y.runtime!==$&&!TP(Y))return!1;if(Y.abi!==X&&!Y.napi)return!1;if(Y.uv&&Y.uv!==nU)return!1;if(Y.armv&&Y.armv!==lY)return!1;if(Y.libc&&Y.libc!==iU)return!1;return!0}}function TP($){return $.runtime==="node"&&$.napi}function eU($){return function(X,Y){if(X.runtime!==Y.runtime)return X.runtime===$?-1:1;else if(X.abi!==Y.abi)return X.abi?-1:1;else if(X.specificity!==Y.specificity)return X.specificity>Y.specificity?-1:1;else return 0}}function kP(){return!!(process.versions&&process.versions.nw)}function xP(){if(process.versions&&process.versions.electron)return!0;if(process.env.ELECTRON_RUN_AS_NODE)return!0;return typeof window!=="undefined"&&window.process&&window.process.type==="renderer"}function vP($){if($!=="linux")return!1;let{familySync:X,MUSL:Y}=import.meta.require("detect-libc");return X()===Y}Z$.parseTags=aU;Z$.matchTags=tU;Z$.compareTags=eU;Z$.parseTuple=rU;Z$.matchTuple=sU;Z$.compareTuples=oU});var YV=I((ey,sY)=>{var rY=typeof __webpack_require__==="function"?__non_webpack_require__:import.meta.require;if(typeof rY.addon==="function")sY.exports=rY.addon.bind(rY);else sY.exports=XV()});var HV=I(($b,GV)=>{var __dirname="/mnt/Master Disk/CodeLab/MERN Stack/xRush/dokanify-server/node_modules/msgpackr-extract";GV.exports=YV()(__dirname)});var pF=I((uF)=>{Object.defineProperty(uF,"__esModule",{value:!0});class V4 extends Error{}class yV extends V4{constructor($){super(`Invalid DateTime: ${$.toMessage()}`)}}class bV extends V4{constructor($){super(`Invalid Interval: ${$.toMessage()}`)}}class gV extends V4{constructor($){super(`Invalid Duration: ${$.toMessage()}`)}}class p4 extends V4{}class zG extends V4{constructor($){super(`Invalid unit ${$}`)}}class J0 extends V4{}class p$ extends V4{constructor(){super("Zone is an abstract class")}}var n="numeric",F$="short",m0="long",QX={year:n,month:n,day:n},mV={year:n,month:F$,day:n},hS={year:n,month:F$,day:n,weekday:F$},uV={year:n,month:m0,day:n},pV={year:n,month:m0,day:n,weekday:m0},cV={hour:n,minute:n},dV={hour:n,minute:n,second:n},lV={hour:n,minute:n,second:n,timeZoneName:F$},iV={hour:n,minute:n,second:n,timeZoneName:m0},nV={hour:n,minute:n,hourCycle:"h23"},rV={hour:n,minute:n,second:n,hourCycle:"h23"},sV={hour:n,minute:n,second:n,hourCycle:"h23",timeZoneName:F$},oV={hour:n,minute:n,second:n,hourCycle:"h23",timeZoneName:m0},aV={year:n,month:n,day:n,hour:n,minute:n},tV={year:n,month:n,day:n,hour:n,minute:n,second:n},eV={year:n,month:F$,day:n,hour:n,minute:n},$F={year:n,month:F$,day:n,hour:n,minute:n,second:n},yS={year:n,month:F$,day:n,weekday:F$,hour:n,minute:n},XF={year:n,month:m0,day:n,hour:n,minute:n,timeZoneName:F$},YF={year:n,month:m0,day:n,hour:n,minute:n,second:n,timeZoneName:F$},GF={year:n,month:m0,day:n,weekday:m0,hour:n,minute:n,timeZoneName:m0},HF={year:n,month:m0,day:n,weekday:m0,hour:n,minute:n,second:n,timeZoneName:m0};class d4{get type(){throw new p$}get name(){throw new p$}get ianaName(){return this.name}get isUniversal(){throw new p$}offsetName($,X){throw new p$}formatOffset($,X){throw new p$}offset($){throw new p$}equals($){throw new p$}get isValid(){throw new p$}}var YG=null;class a5 extends d4{static get instance(){if(YG===null)YG=new a5;return YG}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName($,{format:X,locale:Y}){return zF($,X,Y)}formatOffset($,X){return s5(this.offset($),X)}offset($){return-new Date($).getTimezoneOffset()}equals($){return $.type==="system"}get isValid(){return!0}}var XX={};function bS($){if(!XX[$])XX[$]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:$,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"});return XX[$]}var gS={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6};function mS($,X){let Y=$.format(X).replace(/\u200E/g,""),G=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(Y),[,H,Q,J,W,w,B,U]=G;return[J,H,Q,W,w,B,U]}function uS($,X){let Y=$.formatToParts(X),G=[];for(let H=0;H<Y.length;H++){let{type:Q,value:J}=Y[H],W=gS[Q];if(Q==="era")G[W]=J;else if(!E1(W))G[W]=parseInt(J,10)}return G}var o7={};class I$ extends d4{static create($){if(!o7[$])o7[$]=new I$($);return o7[$]}static resetCache(){o7={},XX={}}static isValidSpecifier($){return this.isValidZone($)}static isValidZone($){if(!$)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:$}).format(),!0}catch(X){return!1}}constructor($){super();this.zoneName=$,this.valid=I$.isValidZone($)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName($,{format:X,locale:Y}){return zF($,X,Y,this.name)}formatOffset($,X){return s5(this.offset($),X)}offset($){let X=new Date($);if(isNaN(X))return NaN;let Y=bS(this.name),[G,H,Q,J,W,w,B]=Y.formatToParts?uS(Y,X):mS(Y,X);if(J==="BC")G=-Math.abs(G)+1;let V=UX({year:G,month:H,day:Q,hour:W===24?0:W,minute:w,second:B,millisecond:0}),F=+X,E=F%1000;return F-=E>=0?E:1000+E,(V-F)/60000}equals($){return $.type==="iana"&&$.name===this.name}get isValid(){return this.valid}}var WV={};function pS($,X={}){let Y=JSON.stringify([$,X]),G=WV[Y];if(!G)G=new Intl.ListFormat($,X),WV[Y]=G;return G}var UG={};function VG($,X={}){let Y=JSON.stringify([$,X]),G=UG[Y];if(!G)G=new Intl.DateTimeFormat($,X),UG[Y]=G;return G}var FG={};function cS($,X={}){let Y=JSON.stringify([$,X]),G=FG[Y];if(!G)G=new Intl.NumberFormat($,X),FG[Y]=G;return G}var EG={};function dS($,X={}){let{base:Y,...G}=X,H=JSON.stringify([$,G]),Q=EG[H];if(!Q)Q=new Intl.RelativeTimeFormat($,X),EG[H]=Q;return Q}var n5=null;function lS(){if(n5)return n5;else return n5=new Intl.DateTimeFormat().resolvedOptions().locale,n5}var wV={};function iS($){let X=wV[$];if(!X){let Y=new Intl.Locale($);X="getWeekInfo"in Y?Y.getWeekInfo():Y.weekInfo,wV[$]=X}return X}function nS($){let X=$.indexOf("-x-");if(X!==-1)$=$.substring(0,X);let Y=$.indexOf("-u-");if(Y===-1)return[$];else{let G,H;try{G=VG($).resolvedOptions(),H=$}catch(W){let w=$.substring(0,Y);G=VG(w).resolvedOptions(),H=w}let{numberingSystem:Q,calendar:J}=G;return[H,Q,J]}}function rS($,X,Y){if(Y||X){if(!$.includes("-u-"))$+="-u";if(Y)$+=`-ca-${Y}`;if(X)$+=`-nu-${X}`;return $}else return $}function sS($){let X=[];for(let Y=1;Y<=12;Y++){let G=F1.utc(2009,Y,1);X.push($(G))}return X}function oS($){let X=[];for(let Y=1;Y<=7;Y++){let G=F1.utc(2016,11,13+Y);X.push($(G))}return X}function a7($,X,Y,G){let H=$.listingMode();if(H==="error")return null;else if(H==="en")return Y(X);else return G(X)}function aS($){if($.numberingSystem&&$.numberingSystem!=="latn")return!1;else return $.numberingSystem==="latn"||!$.locale||$.locale.startsWith("en")||new Intl.DateTimeFormat($.intl).resolvedOptions().numberingSystem==="latn"}class QF{constructor($,X,Y){this.padTo=Y.padTo||0,this.floor=Y.floor||!1;let{padTo:G,floor:H,...Q}=Y;if(!X||Object.keys(Q).length>0){let J={useGrouping:!1,...Y};if(Y.padTo>0)J.minimumIntegerDigits=Y.padTo;this.inf=cS($,J)}}format($){if(this.inf){let X=this.floor?Math.floor($):$;return this.inf.format(X)}else{let X=this.floor?Math.floor($):NG($,3);return a1(X,this.padTo)}}}class JF{constructor($,X,Y){this.opts=Y,this.originalZone=void 0;let G=void 0;if(this.opts.timeZone)this.dt=$;else if($.zone.type==="fixed"){let Q=-1*($.offset/60),J=Q>=0?`Etc/GMT+${Q}`:`Etc/GMT${Q}`;if($.offset!==0&&I$.create(J).valid)G=J,this.dt=$;else G="UTC",this.dt=$.offset===0?$:$.setZone("UTC").plus({minutes:$.offset}),this.originalZone=$.zone}else if($.zone.type==="system")this.dt=$;else if($.zone.type==="iana")this.dt=$,G=$.zone.name;else G="UTC",this.dt=$.setZone("UTC").plus({minutes:$.offset}),this.originalZone=$.zone;let H={...this.opts};H.timeZone=H.timeZone||G,this.dtf=VG(X,H)}format(){if(this.originalZone)return this.formatToParts().map(({value:$})=>$).join("");return this.dtf.format(this.dt.toJSDate())}formatToParts(){let $=this.dtf.formatToParts(this.dt.toJSDate());if(this.originalZone)return $.map((X)=>{if(X.type==="timeZoneName"){let Y=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...X,value:Y}}else return X});return $}resolvedOptions(){return this.dtf.resolvedOptions()}}class WF{constructor($,X,Y){if(this.opts={style:"long",...Y},!X&&AF())this.rtf=dS($,Y)}format($,X){if(this.rtf)return this.rtf.format($,X);else return RI(X,$,this.opts.numeric,this.opts.style!=="long")}formatToParts($,X){if(this.rtf)return this.rtf.formatToParts($,X);else return[]}}var tS={firstDay:1,minimalDays:4,weekend:[6,7]};class S1{static fromOpts($){return S1.create($.locale,$.numberingSystem,$.outputCalendar,$.weekSettings,$.defaultToEN)}static create($,X,Y,G,H=!1){let Q=$||g1.defaultLocale,J=Q||(H?"en-US":lS()),W=X||g1.defaultNumberingSystem,w=Y||g1.defaultOutputCalendar,B=AG(G)||g1.defaultWeekSettings;return new S1(J,W,w,B,Q)}static resetCache(){n5=null,UG={},FG={},EG={}}static fromObject({locale:$,numberingSystem:X,outputCalendar:Y,weekSettings:G}={}){return S1.create($,X,Y,G)}constructor($,X,Y,G,H){let[Q,J,W]=nS($);this.locale=Q,this.numberingSystem=X||J||null,this.outputCalendar=Y||W||null,this.weekSettings=G,this.intl=rS(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=H,this.fastNumbersCached=null}get fastNumbers(){if(this.fastNumbersCached==null)this.fastNumbersCached=aS(this);return this.fastNumbersCached}listingMode(){let $=this.isEnglish(),X=(this.numberingSystem===null||this.numberingSystem==="latn")&&(this.outputCalendar===null||this.outputCalendar==="gregory");return $&&X?"en":"intl"}clone($){if(!$||Object.getOwnPropertyNames($).length===0)return this;else return S1.create($.locale||this.specifiedLocale,$.numberingSystem||this.numberingSystem,$.outputCalendar||this.outputCalendar,AG($.weekSettings)||this.weekSettings,$.defaultToEN||!1)}redefaultToEN($={}){return this.clone({...$,defaultToEN:!0})}redefaultToSystem($={}){return this.clone({...$,defaultToEN:!1})}months($,X=!1){return a7(this,$,RF,()=>{let Y=X?{month:$,day:"numeric"}:{month:$},G=X?"format":"standalone";if(!this.monthsCache[G][$])this.monthsCache[G][$]=sS((H)=>this.extract(H,Y,"month"));return this.monthsCache[G][$]})}weekdays($,X=!1){return a7(this,$,NF,()=>{let Y=X?{weekday:$,year:"numeric",month:"long",day:"numeric"}:{weekday:$},G=X?"format":"standalone";if(!this.weekdaysCache[G][$])this.weekdaysCache[G][$]=oS((H)=>this.extract(H,Y,"weekday"));return this.weekdaysCache[G][$]})}meridiems(){return a7(this,void 0,()=>qF,()=>{if(!this.meridiemCache){let $={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[F1.utc(2016,11,13,9),F1.utc(2016,11,13,19)].map((X)=>this.extract(X,$,"dayperiod"))}return this.meridiemCache})}eras($){return a7(this,$,MF,()=>{let X={era:$};if(!this.eraCache[$])this.eraCache[$]=[F1.utc(-40,1,1),F1.utc(2017,1,1)].map((Y)=>this.extract(Y,X,"era"));return this.eraCache[$]})}extract($,X,Y){let G=this.dtFormatter($,X),H=G.formatToParts(),Q=H.find((J)=>J.type.toLowerCase()===Y);return Q?Q.value:null}numberFormatter($={}){return new QF(this.intl,$.forceSimple||this.fastNumbers,$)}dtFormatter($,X={}){return new JF($,this.intl,X)}relFormatter($={}){return new WF(this.intl,this.isEnglish(),$)}listFormatter($={}){return pS(this.intl,$)}isEnglish(){return this.locale==="en"||this.locale.toLowerCase()==="en-us"||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")}getWeekSettings(){if(this.weekSettings)return this.weekSettings;else if(!KF())return tS;else return iS(this.locale)}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals($){return this.locale===$.locale&&this.numberingSystem===$.numberingSystem&&this.outputCalendar===$.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}var GG=null;class K0 extends d4{static get utcInstance(){if(GG===null)GG=new K0(0);return GG}static instance($){return $===0?K0.utcInstance:new K0($)}static parseSpecifier($){if($){let X=$.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(X)return new K0(VX(X[1],X[2]))}return null}constructor($){super();this.fixed=$}get type(){return"fixed"}get name(){return this.fixed===0?"UTC":`UTC${s5(this.fixed,"narrow")}`}get ianaName(){if(this.fixed===0)return"Etc/UTC";else return`Etc/GMT${s5(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset($,X){return s5(this.fixed,X)}get isUniversal(){return!0}offset(){return this.fixed}equals($){return $.type==="fixed"&&$.fixed===this.fixed}get isValid(){return!0}}class LG extends d4{constructor($){super();this.zoneName=$}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function B4($,X){if(E1($)||$===null)return X;else if($ instanceof d4)return $;else if(HI($)){let Y=$.toLowerCase();if(Y==="default")return X;else if(Y==="local"||Y==="system")return a5.instance;else if(Y==="utc"||Y==="gmt")return K0.utcInstance;else return K0.parseSpecifier(Y)||I$.create($)}else if(U4($))return K0.instance($);else if(typeof $==="object"&&"offset"in $&&typeof $.offset==="function")return $;else return new LG($)}var OG={arab:"[\u0660-\u0669]",arabext:"[\u06F0-\u06F9]",bali:"[\u1B50-\u1B59]",beng:"[\u09E6-\u09EF]",deva:"[\u0966-\u096F]",fullwide:"[\uFF10-\uFF19]",gujr:"[\u0AE6-\u0AEF]",hanidec:"[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",khmr:"[\u17E0-\u17E9]",knda:"[\u0CE6-\u0CEF]",laoo:"[\u0ED0-\u0ED9]",limb:"[\u1946-\u194F]",mlym:"[\u0D66-\u0D6F]",mong:"[\u1810-\u1819]",mymr:"[\u1040-\u1049]",orya:"[\u0B66-\u0B6F]",tamldec:"[\u0BE6-\u0BEF]",telu:"[\u0C66-\u0C6F]",thai:"[\u0E50-\u0E59]",tibt:"[\u0F20-\u0F29]",latn:"\\d"},BV={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},eS=OG.hanidec.replace(/[\[|\]]/g,"").split("");function $I($){let X=parseInt($,10);if(isNaN(X)){X="";for(let Y=0;Y<$.length;Y++){let G=$.charCodeAt(Y);if($[Y].search(OG.hanidec)!==-1)X+=eS.indexOf($[Y]);else for(let H in BV){let[Q,J]=BV[H];if(G>=Q&&G<=J)X+=G-Q}}return parseInt(X,10)}else return X}var T6={};function XI(){T6={}}function U$({numberingSystem:$},X=""){let Y=$||"latn";if(!T6[Y])T6[Y]={};if(!T6[Y][X])T6[Y][X]=new RegExp(`${OG[Y]}${X}`);return T6[Y][X]}var UV=()=>Date.now(),VV="system",FV=null,EV=null,AV=null,KV=60,zV,LV=null;class g1{static get now(){return UV}static set now($){UV=$}static set defaultZone($){VV=$}static get defaultZone(){return B4(VV,a5.instance)}static get defaultLocale(){return FV}static set defaultLocale($){FV=$}static get defaultNumberingSystem(){return EV}static set defaultNumberingSystem($){EV=$}static get defaultOutputCalendar(){return AV}static set defaultOutputCalendar($){AV=$}static get defaultWeekSettings(){return LV}static set defaultWeekSettings($){LV=AG($)}static get twoDigitCutoffYear(){return KV}static set twoDigitCutoffYear($){KV=$%100}static get throwOnInvalid(){return zV}static set throwOnInvalid($){zV=$}static resetCaches(){S1.resetCache(),I$.resetCache(),F1.resetCache(),XI()}}class s0{constructor($,X){this.reason=$,this.explanation=X}toMessage(){if(this.explanation)return`${this.reason}: ${this.explanation}`;else return this.reason}}var wF=[0,31,59,90,120,151,181,212,243,273,304,334],BF=[0,31,60,91,121,152,182,213,244,274,305,335];function o0($,X){return new s0("unit out of range",`you specified ${X} (of type ${typeof X}) as a ${$}, which is invalid`)}function RG($,X,Y){let G=new Date(Date.UTC($,X-1,Y));if($<100&&$>=0)G.setUTCFullYear(G.getUTCFullYear()-1900);let H=G.getUTCDay();return H===0?7:H}function UF($,X,Y){return Y+(t5($)?BF:wF)[X-1]}function VF($,X){let Y=t5($)?BF:wF,G=Y.findIndex((Q)=>Q<X),H=X-Y[G];return{month:G+1,day:H}}function DG($,X){return($-X+7)%7+1}function JX($,X=4,Y=1){let{year:G,month:H,day:Q}=$,J=UF(G,H,Q),W=DG(RG(G,H,Q),Y),w=Math.floor((J-W+14-X)/7),B;if(w<1)B=G-1,w=o5(B,X,Y);else if(w>o5(G,X,Y))B=G+1,w=1;else B=G;return{weekYear:B,weekNumber:w,weekday:W,...FX($)}}function OV($,X=4,Y=1){let{weekYear:G,weekNumber:H,weekday:Q}=$,J=DG(RG(G,1,X),Y),W=x6(G),w=H*7+Q-J-7+X,B;if(w<1)B=G-1,w+=x6(B);else if(w>W)B=G+1,w-=x6(G);else B=G;let{month:U,day:V}=VF(B,w);return{year:B,month:U,day:V,...FX($)}}function HG($){let{year:X,month:Y,day:G}=$,H=UF(X,Y,G);return{year:X,ordinal:H,...FX($)}}function RV($){let{year:X,ordinal:Y}=$,{month:G,day:H}=VF(X,Y);return{year:X,month:G,day:H,...FX($)}}function DV($,X){if(!E1($.localWeekday)||!E1($.localWeekNumber)||!E1($.localWeekYear)){if(!E1($.weekday)||!E1($.weekNumber)||!E1($.weekYear))throw new p4("Cannot mix locale-based week fields with ISO-based week fields");if(!E1($.localWeekday))$.weekday=$.localWeekday;if(!E1($.localWeekNumber))$.weekNumber=$.localWeekNumber;if(!E1($.localWeekYear))$.weekYear=$.localWeekYear;return delete $.localWeekday,delete $.localWeekNumber,delete $.localWeekYear,{minDaysInFirstWeek:X.getMinDaysInFirstWeek(),startOfWeek:X.getStartOfWeek()}}else return{minDaysInFirstWeek:4,startOfWeek:1}}function YI($,X=4,Y=1){let G=BX($.weekYear),H=a0($.weekNumber,1,o5($.weekYear,X,Y)),Q=a0($.weekday,1,7);if(!G)return o0("weekYear",$.weekYear);else if(!H)return o0("week",$.weekNumber);else if(!Q)return o0("weekday",$.weekday);else return!1}function GI($){let X=BX($.year),Y=a0($.ordinal,1,x6($.year));if(!X)return o0("year",$.year);else if(!Y)return o0("ordinal",$.ordinal);else return!1}function FF($){let X=BX($.year),Y=a0($.month,1,12),G=a0($.day,1,WX($.year,$.month));if(!X)return o0("year",$.year);else if(!Y)return o0("month",$.month);else if(!G)return o0("day",$.day);else return!1}function EF($){let{hour:X,minute:Y,second:G,millisecond:H}=$,Q=a0(X,0,23)||X===24&&Y===0&&G===0&&H===0,J=a0(Y,0,59),W=a0(G,0,59),w=a0(H,0,999);if(!Q)return o0("hour",X);else if(!J)return o0("minute",Y);else if(!W)return o0("second",G);else if(!w)return o0("millisecond",H);else return!1}function E1($){return typeof $==="undefined"}function U4($){return typeof $==="number"}function BX($){return typeof $==="number"&&$%1===0}function HI($){return typeof $==="string"}function QI($){return Object.prototype.toString.call($)==="[object Date]"}function AF(){try{return typeof Intl!=="undefined"&&!!Intl.RelativeTimeFormat}catch($){return!1}}function KF(){try{return typeof Intl!=="undefined"&&!!Intl.Locale&&(("weekInfo"in Intl.Locale.prototype)||("getWeekInfo"in Intl.Locale.prototype))}catch($){return!1}}function JI($){return Array.isArray($)?$:[$]}function _V($,X,Y){if($.length===0)return;return $.reduce((G,H)=>{let Q=[X(H),H];if(!G)return Q;else if(Y(G[0],Q[0])===G[0])return G;else return Q},null)[1]}function WI($,X){return X.reduce((Y,G)=>{return Y[G]=$[G],Y},{})}function f6($,X){return Object.prototype.hasOwnProperty.call($,X)}function AG($){if($==null)return null;else if(typeof $!=="object")throw new J0("Week settings must be an object");else{if(!a0($.firstDay,1,7)||!a0($.minimalDays,1,7)||!Array.isArray($.weekend)||$.weekend.some((X)=>!a0(X,1,7)))throw new J0("Invalid week settings");return{firstDay:$.firstDay,minimalDays:$.minimalDays,weekend:Array.from($.weekend)}}}function a0($,X,Y){return BX($)&&$>=X&&$<=Y}function wI($,X){return $-X*Math.floor($/X)}function a1($,X=2){let Y=$<0,G;if(Y)G="-"+(""+-$).padStart(X,"0");else G=(""+$).padStart(X,"0");return G}function w4($){if(E1($)||$===null||$==="")return;else return parseInt($,10)}function m4($){if(E1($)||$===null||$==="")return;else return parseFloat($)}function _G($){if(E1($)||$===null||$==="")return;else{let X=parseFloat("0."+$)*1000;return Math.floor(X)}}function NG($,X,Y=!1){let G=10**X;return(Y?Math.trunc:Math.round)($*G)/G}function t5($){return $%4===0&&($%100!==0||$%400===0)}function x6($){return t5($)?366:365}function WX($,X){let Y=wI(X-1,12)+1,G=$+(X-Y)/12;if(Y===2)return t5(G)?29:28;else return[31,null,31,30,31,30,31,31,30,31,30,31][Y-1]}function UX($){let X=Date.UTC($.year,$.month-1,$.day,$.hour,$.minute,$.second,$.millisecond);if($.year<100&&$.year>=0)X=new Date(X),X.setUTCFullYear($.year,$.month-1,$.day);return+X}function NV($,X,Y){return-DG(RG($,1,X),Y)+X-1}function o5($,X=4,Y=1){let G=NV($,X,Y),H=NV($+1,X,Y);return(x6($)-G+H)/7}function KG($){if($>99)return $;else return $>g1.twoDigitCutoffYear?1900+$:2000+$}function zF($,X,Y,G=null){let H=new Date($),Q={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};if(G)Q.timeZone=G;let J={timeZoneName:X,...Q},W=new Intl.DateTimeFormat(Y,J).formatToParts(H).find((w)=>w.type.toLowerCase()==="timezonename");return W?W.value:null}function VX($,X){let Y=parseInt($,10);if(Number.isNaN(Y))Y=0;let G=parseInt(X,10)||0,H=Y<0||Object.is(Y,-0)?-G:G;return Y*60+H}function LF($){let X=Number($);if(typeof $==="boolean"||$===""||Number.isNaN(X))throw new J0(`Invalid unit value ${$}`);return X}function wX($,X){let Y={};for(let G in $)if(f6($,G)){let H=$[G];if(H===void 0||H===null)continue;Y[X(G)]=LF(H)}return Y}function s5($,X){let Y=Math.trunc(Math.abs($/60)),G=Math.trunc(Math.abs($%60)),H=$>=0?"+":"-";switch(X){case"short":return`${H}${a1(Y,2)}:${a1(G,2)}`;case"narrow":return`${H}${Y}${G>0?`:${G}`:""}`;case"techie":return`${H}${a1(Y,2)}${a1(G,2)}`;default:throw new RangeError(`Value format ${X} is out of range for property format`)}}function FX($){return WI($,["hour","minute","second","millisecond"])}var BI=["January","February","March","April","May","June","July","August","September","October","November","December"],OF=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],UI=["J","F","M","A","M","J","J","A","S","O","N","D"];function RF($){switch($){case"narrow":return[...UI];case"short":return[...OF];case"long":return[...BI];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var DF=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],_F=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],VI=["M","T","W","T","F","S","S"];function NF($){switch($){case"narrow":return[...VI];case"short":return[..._F];case"long":return[...DF];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var qF=["AM","PM"],FI=["Before Christ","Anno Domini"],EI=["BC","AD"],AI=["B","A"];function MF($){switch($){case"narrow":return[...AI];case"short":return[...EI];case"long":return[...FI];default:return null}}function KI($){return qF[$.hour<12?0:1]}function zI($,X){return NF(X)[$.weekday-1]}function LI($,X){return RF(X)[$.month-1]}function OI($,X){return MF(X)[$.year<0?0:1]}function RI($,X,Y="always",G=!1){let H={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},Q=["hours","minutes","seconds"].indexOf($)===-1;if(Y==="auto"&&Q){let V=$==="days";switch(X){case 1:return V?"tomorrow":`next ${H[$][0]}`;case-1:return V?"yesterday":`last ${H[$][0]}`;case 0:return V?"today":`this ${H[$][0]}`}}let J=Object.is(X,-0)||X<0,W=Math.abs(X),w=W===1,B=H[$],U=G?w?B[1]:B[2]||B[1]:w?H[$][0]:$;return J?`${W} ${U} ago`:`in ${W} ${U}`}function qV($,X){let Y="";for(let G of $)if(G.literal)Y+=G.val;else Y+=X(G.val);return Y}var DI={D:QX,DD:mV,DDD:uV,DDDD:pV,t:cV,tt:dV,ttt:lV,tttt:iV,T:nV,TT:rV,TTT:sV,TTTT:oV,f:aV,ff:eV,fff:XF,ffff:GF,F:tV,FF:$F,FFF:YF,FFFF:HF};class A0{static create($,X={}){return new A0($,X)}static parseFormat($){let X=null,Y="",G=!1,H=[];for(let Q=0;Q<$.length;Q++){let J=$.charAt(Q);if(J==="'"){if(Y.length>0)H.push({literal:G||/^\s+$/.test(Y),val:Y});X=null,Y="",G=!G}else if(G)Y+=J;else if(J===X)Y+=J;else{if(Y.length>0)H.push({literal:/^\s+$/.test(Y),val:Y});Y=J,X=J}}if(Y.length>0)H.push({literal:G||/^\s+$/.test(Y),val:Y});return H}static macroTokenToFormatOpts($){return DI[$]}constructor($,X){this.opts=X,this.loc=$,this.systemLoc=null}formatWithSystemDefault($,X){if(this.systemLoc===null)this.systemLoc=this.loc.redefaultToSystem();return this.systemLoc.dtFormatter($,{...this.opts,...X}).format()}dtFormatter($,X={}){return this.loc.dtFormatter($,{...this.opts,...X})}formatDateTime($,X){return this.dtFormatter($,X).format()}formatDateTimeParts($,X){return this.dtFormatter($,X).formatToParts()}formatInterval($,X){return this.dtFormatter($.start,X).dtf.formatRange($.start.toJSDate(),$.end.toJSDate())}resolvedOptions($,X){return this.dtFormatter($,X).resolvedOptions()}num($,X=0){if(this.opts.forceSimple)return a1($,X);let Y={...this.opts};if(X>0)Y.padTo=X;return this.loc.numberFormatter(Y).format($)}formatDateTimeFromString($,X){let Y=this.loc.listingMode()==="en",G=this.loc.outputCalendar&&this.loc.outputCalendar!=="gregory",H=(F,E)=>this.loc.extract($,F,E),Q=(F)=>{if($.isOffsetFixed&&$.offset===0&&F.allowZ)return"Z";return $.isValid?$.zone.formatOffset($.ts,F.format):""},J=()=>Y?KI($):H({hour:"numeric",hourCycle:"h12"},"dayperiod"),W=(F,E)=>Y?LI($,F):H(E?{month:F}:{month:F,day:"numeric"},"month"),w=(F,E)=>Y?zI($,F):H(E?{weekday:F}:{weekday:F,month:"long",day:"numeric"},"weekday"),B=(F)=>{let E=A0.macroTokenToFormatOpts(F);if(E)return this.formatWithSystemDefault($,E);else return F},U=(F)=>Y?OI($,F):H({era:F},"era"),V=(F)=>{switch(F){case"S":return this.num($.millisecond);case"u":case"SSS":return this.num($.millisecond,3);case"s":return this.num($.second);case"ss":return this.num($.second,2);case"uu":return this.num(Math.floor($.millisecond/10),2);case"uuu":return this.num(Math.floor($.millisecond/100));case"m":return this.num($.minute);case"mm":return this.num($.minute,2);case"h":return this.num($.hour%12===0?12:$.hour%12);case"hh":return this.num($.hour%12===0?12:$.hour%12,2);case"H":return this.num($.hour);case"HH":return this.num($.hour,2);case"Z":return Q({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return Q({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return Q({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return $.zone.offsetName($.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return $.zone.offsetName($.ts,{format:"long",locale:this.loc.locale});case"z":return $.zoneName;case"a":return J();case"d":return G?H({day:"numeric"},"day"):this.num($.day);case"dd":return G?H({day:"2-digit"},"day"):this.num($.day,2);case"c":return this.num($.weekday);case"ccc":return w("short",!0);case"cccc":return w("long",!0);case"ccccc":return w("narrow",!0);case"E":return this.num($.weekday);case"EEE":return w("short",!1);case"EEEE":return w("long",!1);case"EEEEE":return w("narrow",!1);case"L":return G?H({month:"numeric",day:"numeric"},"month"):this.num($.month);case"LL":return G?H({month:"2-digit",day:"numeric"},"month"):this.num($.month,2);case"LLL":return W("short",!0);case"LLLL":return W("long",!0);case"LLLLL":return W("narrow",!0);case"M":return G?H({month:"numeric"},"month"):this.num($.month);case"MM":return G?H({month:"2-digit"},"month"):this.num($.month,2);case"MMM":return W("short",!1);case"MMMM":return W("long",!1);case"MMMMM":return W("narrow",!1);case"y":return G?H({year:"numeric"},"year"):this.num($.year);case"yy":return G?H({year:"2-digit"},"year"):this.num($.year.toString().slice(-2),2);case"yyyy":return G?H({year:"numeric"},"year"):this.num($.year,4);case"yyyyyy":return G?H({year:"numeric"},"year"):this.num($.year,6);case"G":return U("short");case"GG":return U("long");case"GGGGG":return U("narrow");case"kk":return this.num($.weekYear.toString().slice(-2),2);case"kkkk":return this.num($.weekYear,4);case"W":return this.num($.weekNumber);case"WW":return this.num($.weekNumber,2);case"n":return this.num($.localWeekNumber);case"nn":return this.num($.localWeekNumber,2);case"ii":return this.num($.localWeekYear.toString().slice(-2),2);case"iiii":return this.num($.localWeekYear,4);case"o":return this.num($.ordinal);case"ooo":return this.num($.ordinal,3);case"q":return this.num($.quarter);case"qq":return this.num($.quarter,2);case"X":return this.num(Math.floor($.ts/1000));case"x":return this.num($.ts);default:return B(F)}};return qV(A0.parseFormat(X),V)}formatDurationFromString($,X){let Y=(W)=>{switch(W[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},G=(W)=>(w)=>{let B=Y(w);if(B)return this.num(W.get(B),w.length);else return w},H=A0.parseFormat(X),Q=H.reduce((W,{literal:w,val:B})=>w?W:W.concat(B),[]),J=$.shiftTo(...Q.map(Y).filter((W)=>W));return qV(H,G(J))}}var ZF=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function h6(...$){let X=$.reduce((Y,G)=>Y+G.source,"");return RegExp(`^${X}\$`)}function y6(...$){return(X)=>$.reduce(([Y,G,H],Q)=>{let[J,W,w]=Q(X,H);return[{...Y,...J},W||G,w]},[{},null,1]).slice(0,2)}function b6($,...X){if($==null)return[null,null];for(let[Y,G]of X){let H=Y.exec($);if(H)return G(H)}return[null,null]}function PF(...$){return(X,Y)=>{let G={},H;for(H=0;H<$.length;H++)G[$[H]]=w4(X[Y+H]);return[G,null,Y+H]}}var SF=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,_I=`(?:${SF.source}?(?:\\[(${ZF.source})\\])?)?`,qG=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,IF=RegExp(`${qG.source}${_I}`),MG=RegExp(`(?:T${IF.source})?`),NI=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,qI=/(\d{4})-?W(\d\d)(?:-?(\d))?/,MI=/(\d{4})-?(\d{3})/,ZI=PF("weekYear","weekNumber","weekDay"),PI=PF("year","ordinal"),SI=/(\d{4})-(\d\d)-(\d\d)/,CF=RegExp(`${qG.source} ?(?:${SF.source}|(${ZF.source}))?`),II=RegExp(`(?: ${CF.source})?`);function v6($,X,Y){let G=$[X];return E1(G)?Y:w4(G)}function CI($,X){return[{year:v6($,X),month:v6($,X+1,1),day:v6($,X+2,1)},null,X+3]}function g6($,X){return[{hours:v6($,X,0),minutes:v6($,X+1,0),seconds:v6($,X+2,0),milliseconds:_G($[X+3])},null,X+4]}function e5($,X){let Y=!$[X]&&!$[X+1],G=VX($[X+1],$[X+2]),H=Y?null:K0.instance(G);return[{},H,X+3]}function $8($,X){let Y=$[X]?I$.create($[X]):null;return[{},Y,X+1]}var jI=RegExp(`^T?${qG.source}\$`),TI=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function kI($){let[X,Y,G,H,Q,J,W,w,B]=$,U=X[0]==="-",V=w&&w[0]==="-",F=(E,K=!1)=>E!==void 0&&(K||E&&U)?-E:E;return[{years:F(m4(Y)),months:F(m4(G)),weeks:F(m4(H)),days:F(m4(Q)),hours:F(m4(J)),minutes:F(m4(W)),seconds:F(m4(w),w==="-0"),milliseconds:F(_G(B),V)}]}var xI={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ZG($,X,Y,G,H,Q,J){let W={year:X.length===2?KG(w4(X)):w4(X),month:OF.indexOf(Y)+1,day:w4(G),hour:w4(H),minute:w4(Q)};if(J)W.second=w4(J);if($)W.weekday=$.length>3?DF.indexOf($)+1:_F.indexOf($)+1;return W}var vI=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function fI($){let[,X,Y,G,H,Q,J,W,w,B,U,V]=$,F=ZG(X,H,G,Y,Q,J,W),E;if(w)E=xI[w];else if(B)E=0;else E=VX(U,V);return[F,new K0(E)]}function hI($){return $.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}var yI=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,bI=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,gI=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function MV($){let[,X,Y,G,H,Q,J,W]=$;return[ZG(X,H,G,Y,Q,J,W),K0.utcInstance]}function mI($){let[,X,Y,G,H,Q,J,W]=$;return[ZG(X,W,Y,G,H,Q,J),K0.utcInstance]}var uI=h6(NI,MG),pI=h6(qI,MG),cI=h6(MI,MG),dI=h6(IF),jF=y6(CI,g6,e5,$8),lI=y6(ZI,g6,e5,$8),iI=y6(PI,g6,e5,$8),nI=y6(g6,e5,$8);function rI($){return b6($,[uI,jF],[pI,lI],[cI,iI],[dI,nI])}function sI($){return b6(hI($),[vI,fI])}function oI($){return b6($,[yI,MV],[bI,MV],[gI,mI])}function aI($){return b6($,[TI,kI])}var tI=y6(g6);function eI($){return b6($,[jI,tI])}var $C=h6(SI,II),XC=h6(CF),YC=y6(g6,e5,$8);function GC($){return b6($,[$C,jF],[XC,YC])}var ZV="Invalid Duration",TF={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:604800000},days:{hours:24,minutes:1440,seconds:86400,milliseconds:86400000},hours:{minutes:60,seconds:3600,milliseconds:3600000},minutes:{seconds:60,milliseconds:60000},seconds:{milliseconds:1000}},HC={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536000,milliseconds:31536000000},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:7862400000},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592000,milliseconds:2592000000},...TF},r0=365.2425,I6=30.436875,QC={years:{quarters:4,months:12,weeks:r0/7,days:r0,hours:r0*24,minutes:r0*24*60,seconds:r0*24*60*60,milliseconds:r0*24*60*60*1000},quarters:{months:3,weeks:r0/28,days:r0/4,hours:r0*24/4,minutes:r0*24*60/4,seconds:r0*24*60*60/4,milliseconds:r0*24*60*60*1000/4},months:{weeks:I6/7,days:I6,hours:I6*24,minutes:I6*24*60,seconds:I6*24*60*60,milliseconds:I6*24*60*60*1000},...TF},c4=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],JC=c4.slice(0).reverse();function W4($,X,Y=!1){let G={values:Y?X.values:{...$.values,...X.values||{}},loc:$.loc.clone(X.loc),conversionAccuracy:X.conversionAccuracy||$.conversionAccuracy,matrix:X.matrix||$.matrix};return new q1(G)}function kF($,X){var Y;let G=(Y=X.milliseconds)!=null?Y:0;for(let H of JC.slice(1))if(X[H])G+=X[H]*$[H].milliseconds;return G}function PV($,X){let Y=kF($,X)<0?-1:1;c4.reduceRight((G,H)=>{if(!E1(X[H])){if(G){let Q=X[G]*Y,J=$[H][G],W=Math.floor(Q/J);X[H]+=W*Y,X[G]-=W*J*Y}return H}else return G},null),c4.reduce((G,H)=>{if(!E1(X[H])){if(G){let Q=X[G]%1;X[G]-=Q,X[H]+=Q*$[G][H]}return H}else return G},null)}function WC($){let X={};for(let[Y,G]of Object.entries($))if(G!==0)X[Y]=G;return X}class q1{constructor($){let X=$.conversionAccuracy==="longterm"||!1,Y=X?QC:HC;if($.matrix)Y=$.matrix;this.values=$.values,this.loc=$.loc||S1.create(),this.conversionAccuracy=X?"longterm":"casual",this.invalid=$.invalid||null,this.matrix=Y,this.isLuxonDuration=!0}static fromMillis($,X){return q1.fromObject({milliseconds:$},X)}static fromObject($,X={}){if($==null||typeof $!=="object")throw new J0(`Duration.fromObject: argument expected to be an object, got ${$===null?"null":typeof $}`);return new q1({values:wX($,q1.normalizeUnit),loc:S1.fromObject(X),conversionAccuracy:X.conversionAccuracy,matrix:X.matrix})}static fromDurationLike($){if(U4($))return q1.fromMillis($);else if(q1.isDuration($))return $;else if(typeof $==="object")return q1.fromObject($);else throw new J0(`Unknown duration argument ${$} of type ${typeof $}`)}static fromISO($,X){let[Y]=aI($);if(Y)return q1.fromObject(Y,X);else return q1.invalid("unparsable",`the input "${$}" can't be parsed as ISO 8601`)}static fromISOTime($,X){let[Y]=eI($);if(Y)return q1.fromObject(Y,X);else return q1.invalid("unparsable",`the input "${$}" can't be parsed as ISO 8601`)}static invalid($,X=null){if(!$)throw new J0("need to specify a reason the Duration is invalid");let Y=$ instanceof s0?$:new s0($,X);if(g1.throwOnInvalid)throw new gV(Y);else return new q1({invalid:Y})}static normalizeUnit($){let X={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[$?$.toLowerCase():$];if(!X)throw new zG($);return X}static isDuration($){return $&&$.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat($,X={}){let Y={...X,floor:X.round!==!1&&X.floor!==!1};return this.isValid?A0.create(this.loc,Y).formatDurationFromString(this,$):ZV}toHuman($={}){if(!this.isValid)return ZV;let X=c4.map((Y)=>{let G=this.values[Y];if(E1(G))return null;return this.loc.numberFormatter({style:"unit",unitDisplay:"long",...$,unit:Y.slice(0,-1)}).format(G)}).filter((Y)=>Y);return this.loc.listFormatter({type:"conjunction",style:$.listStyle||"narrow",...$}).format(X)}toObject(){if(!this.isValid)return{};return{...this.values}}toISO(){if(!this.isValid)return null;let $="P";if(this.years!==0)$+=this.years+"Y";if(this.months!==0||this.quarters!==0)$+=this.months+this.quarters*3+"M";if(this.weeks!==0)$+=this.weeks+"W";if(this.days!==0)$+=this.days+"D";if(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)$+="T";if(this.hours!==0)$+=this.hours+"H";if(this.minutes!==0)$+=this.minutes+"M";if(this.seconds!==0||this.milliseconds!==0)$+=NG(this.seconds+this.milliseconds/1000,3)+"S";if($==="P")$+="T0S";return $}toISOTime($={}){if(!this.isValid)return null;let X=this.toMillis();if(X<0||X>=86400000)return null;return $={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...$,includeOffset:!1},F1.fromMillis(X,{zone:"UTC"}).toISOTime($)}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){if(this.isValid)return`Duration { values: ${JSON.stringify(this.values)} }`;else return`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){if(!this.isValid)return NaN;return kF(this.matrix,this.values)}valueOf(){return this.toMillis()}plus($){if(!this.isValid)return this;let X=q1.fromDurationLike($),Y={};for(let G of c4)if(f6(X.values,G)||f6(this.values,G))Y[G]=X.get(G)+this.get(G);return W4(this,{values:Y},!0)}minus($){if(!this.isValid)return this;let X=q1.fromDurationLike($);return this.plus(X.negate())}mapUnits($){if(!this.isValid)return this;let X={};for(let Y of Object.keys(this.values))X[Y]=LF($(this.values[Y],Y));return W4(this,{values:X},!0)}get($){return this[q1.normalizeUnit($)]}set($){if(!this.isValid)return this;let X={...this.values,...wX($,q1.normalizeUnit)};return W4(this,{values:X})}reconfigure({locale:$,numberingSystem:X,conversionAccuracy:Y,matrix:G}={}){let Q={loc:this.loc.clone({locale:$,numberingSystem:X}),matrix:G,conversionAccuracy:Y};return W4(this,Q)}as($){return this.isValid?this.shiftTo($).get($):NaN}normalize(){if(!this.isValid)return this;let $=this.toObject();return PV(this.matrix,$),W4(this,{values:$},!0)}rescale(){if(!this.isValid)return this;let $=WC(this.normalize().shiftToAll().toObject());return W4(this,{values:$},!0)}shiftTo(...$){if(!this.isValid)return this;if($.length===0)return this;$=$.map((Q)=>q1.normalizeUnit(Q));let X={},Y={},G=this.toObject(),H;for(let Q of c4)if($.indexOf(Q)>=0){H=Q;let J=0;for(let w in Y)J+=this.matrix[w][Q]*Y[w],Y[w]=0;if(U4(G[Q]))J+=G[Q];let W=Math.trunc(J);X[Q]=W,Y[Q]=(J*1000-W*1000)/1000}else if(U4(G[Q]))Y[Q]=G[Q];for(let Q in Y)if(Y[Q]!==0)X[H]+=Q===H?Y[Q]:Y[Q]/this.matrix[H][Q];return PV(this.matrix,X),W4(this,{values:X},!0)}shiftToAll(){if(!this.isValid)return this;return this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds")}negate(){if(!this.isValid)return this;let $={};for(let X of Object.keys(this.values))$[X]=this.values[X]===0?0:-this.values[X];return W4(this,{values:$},!0)}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals($){if(!this.isValid||!$.isValid)return!1;if(!this.loc.equals($.loc))return!1;function X(Y,G){if(Y===void 0||Y===0)return G===void 0||G===0;return Y===G}for(let Y of c4)if(!X(this.values[Y],$.values[Y]))return!1;return!0}}var C6="Invalid Interval";function wC($,X){if(!$||!$.isValid)return d1.invalid("missing or invalid start");else if(!X||!X.isValid)return d1.invalid("missing or invalid end");else if(X<$)return d1.invalid("end before start",`The end of an interval must be after its start, but you had start=${$.toISO()} and end=${X.toISO()}`);else return null}class d1{constructor($){this.s=$.start,this.e=$.end,this.invalid=$.invalid||null,this.isLuxonInterval=!0}static invalid($,X=null){if(!$)throw new J0("need to specify a reason the Interval is invalid");let Y=$ instanceof s0?$:new s0($,X);if(g1.throwOnInvalid)throw new bV(Y);else return new d1({invalid:Y})}static fromDateTimes($,X){let Y=i5($),G=i5(X),H=wC(Y,G);if(H==null)return new d1({start:Y,end:G});else return H}static after($,X){let Y=q1.fromDurationLike(X),G=i5($);return d1.fromDateTimes(G,G.plus(Y))}static before($,X){let Y=q1.fromDurationLike(X),G=i5($);return d1.fromDateTimes(G.minus(Y),G)}static fromISO($,X){let[Y,G]=($||"").split("/",2);if(Y&&G){let H,Q;try{H=F1.fromISO(Y,X),Q=H.isValid}catch(w){Q=!1}let J,W;try{J=F1.fromISO(G,X),W=J.isValid}catch(w){W=!1}if(Q&&W)return d1.fromDateTimes(H,J);if(Q){let w=q1.fromISO(G,X);if(w.isValid)return d1.after(H,w)}else if(W){let w=q1.fromISO(Y,X);if(w.isValid)return d1.before(J,w)}}return d1.invalid("unparsable",`the input "${$}" can't be parsed as ISO 8601`)}static isInterval($){return $&&$.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get isValid(){return this.invalidReason===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length($="milliseconds"){return this.isValid?this.toDuration(...[$]).get($):NaN}count($="milliseconds",X){if(!this.isValid)return NaN;let Y=this.start.startOf($,X),G;if(X!=null&&X.useLocaleWeeks)G=this.end.reconfigure({locale:Y.locale});else G=this.end;return G=G.startOf($,X),Math.floor(G.diff(Y,$).get($))+(G.valueOf()!==this.end.valueOf())}hasSame($){return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,$):!1}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter($){if(!this.isValid)return!1;return this.s>$}isBefore($){if(!this.isValid)return!1;return this.e<=$}contains($){if(!this.isValid)return!1;return this.s<=$&&this.e>$}set({start:$,end:X}={}){if(!this.isValid)return this;return d1.fromDateTimes($||this.s,X||this.e)}splitAt(...$){if(!this.isValid)return[];let X=$.map(i5).filter((Q)=>this.contains(Q)).sort((Q,J)=>Q.toMillis()-J.toMillis()),Y=[],{s:G}=this,H=0;while(G<this.e){let Q=X[H]||this.e,J=+Q>+this.e?this.e:Q;Y.push(d1.fromDateTimes(G,J)),G=J,H+=1}return Y}splitBy($){let X=q1.fromDurationLike($);if(!this.isValid||!X.isValid||X.as("milliseconds")===0)return[];let{s:Y}=this,G=1,H,Q=[];while(Y<this.e){let J=this.start.plus(X.mapUnits((W)=>W*G));H=+J>+this.e?this.e:J,Q.push(d1.fromDateTimes(Y,H)),Y=H,G+=1}return Q}divideEqually($){if(!this.isValid)return[];return this.splitBy(this.length()/$).slice(0,$)}overlaps($){return this.e>$.s&&this.s<$.e}abutsStart($){if(!this.isValid)return!1;return+this.e===+$.s}abutsEnd($){if(!this.isValid)return!1;return+$.e===+this.s}engulfs($){if(!this.isValid)return!1;return this.s<=$.s&&this.e>=$.e}equals($){if(!this.isValid||!$.isValid)return!1;return this.s.equals($.s)&&this.e.equals($.e)}intersection($){if(!this.isValid)return this;let X=this.s>$.s?this.s:$.s,Y=this.e<$.e?this.e:$.e;if(X>=Y)return null;else return d1.fromDateTimes(X,Y)}union($){if(!this.isValid)return this;let X=this.s<$.s?this.s:$.s,Y=this.e>$.e?this.e:$.e;return d1.fromDateTimes(X,Y)}static merge($){let[X,Y]=$.sort((G,H)=>G.s-H.s).reduce(([G,H],Q)=>{if(!H)return[G,Q];else if(H.overlaps(Q)||H.abutsStart(Q))return[G,H.union(Q)];else return[G.concat([H]),Q]},[[],null]);if(Y)X.push(Y);return X}static xor($){let X=null,Y=0,G=[],H=$.map((W)=>[{time:W.s,type:"s"},{time:W.e,type:"e"}]),Q=Array.prototype.concat(...H),J=Q.sort((W,w)=>W.time-w.time);for(let W of J)if(Y+=W.type==="s"?1:-1,Y===1)X=W.time;else{if(X&&+X!==+W.time)G.push(d1.fromDateTimes(X,W.time));X=null}return d1.merge(G)}difference(...$){return d1.xor([this].concat($)).map((X)=>this.intersection(X)).filter((X)=>X&&!X.isEmpty())}toString(){if(!this.isValid)return C6;return`[${this.s.toISO()} \u2013 ${this.e.toISO()})`}[Symbol.for("nodejs.util.inspect.custom")](){if(this.isValid)return`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`;else return`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString($=QX,X={}){return this.isValid?A0.create(this.s.loc.clone(X),$).formatInterval(this):C6}toISO($){if(!this.isValid)return C6;return`${this.s.toISO($)}/${this.e.toISO($)}`}toISODate(){if(!this.isValid)return C6;return`${this.s.toISODate()}/${this.e.toISODate()}`}toISOTime($){if(!this.isValid)return C6;return`${this.s.toISOTime($)}/${this.e.toISOTime($)}`}toFormat($,{separator:X=" \u2013 "}={}){if(!this.isValid)return C6;return`${this.s.toFormat($)}${X}${this.e.toFormat($)}`}toDuration($,X){if(!this.isValid)return q1.invalid(this.invalidReason);return this.e.diff(this.s,$,X)}mapEndpoints($){return d1.fromDateTimes($(this.s),$(this.e))}}class k6{static hasDST($=g1.defaultZone){let X=F1.now().setZone($).set({month:12});return!$.isUniversal&&X.offset!==X.set({month:6}).offset}static isValidIANAZone($){return I$.isValidZone($)}static normalizeZone($){return B4($,g1.defaultZone)}static getStartOfWeek({locale:$=null,locObj:X=null}={}){return(X||S1.create($)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:$=null,locObj:X=null}={}){return(X||S1.create($)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:$=null,locObj:X=null}={}){return(X||S1.create($)).getWeekendDays().slice()}static months($="long",{locale:X=null,numberingSystem:Y=null,locObj:G=null,outputCalendar:H="gregory"}={}){return(G||S1.create(X,Y,H)).months($)}static monthsFormat($="long",{locale:X=null,numberingSystem:Y=null,locObj:G=null,outputCalendar:H="gregory"}={}){return(G||S1.create(X,Y,H)).months($,!0)}static weekdays($="long",{locale:X=null,numberingSystem:Y=null,locObj:G=null}={}){return(G||S1.create(X,Y,null)).weekdays($)}static weekdaysFormat($="long",{locale:X=null,numberingSystem:Y=null,locObj:G=null}={}){return(G||S1.create(X,Y,null)).weekdays($,!0)}static meridiems({locale:$=null}={}){return S1.create($).meridiems()}static eras($="short",{locale:X=null}={}){return S1.create(X,null,"gregory").eras($)}static features(){return{relative:AF(),localeWeek:KF()}}}function SV($,X){let Y=(H)=>H.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),G=Y(X)-Y($);return Math.floor(q1.fromMillis(G).as("days"))}function BC($,X,Y){let G=[["years",(w,B)=>B.year-w.year],["quarters",(w,B)=>B.quarter-w.quarter+(B.year-w.year)*4],["months",(w,B)=>B.month-w.month+(B.year-w.year)*12],["weeks",(w,B)=>{let U=SV(w,B);return(U-U%7)/7}],["days",SV]],H={},Q=$,J,W;for(let[w,B]of G)if(Y.indexOf(w)>=0)if(J=w,H[w]=B($,X),W=Q.plus(H),W>X){if(H[w]--,$=Q.plus(H),$>X)W=$,H[w]--,$=Q.plus(H)}else $=W;return[$,H,W,J]}function UC($,X,Y,G){let[H,Q,J,W]=BC($,X,Y),w=X-H,B=Y.filter((V)=>["hours","minutes","seconds","milliseconds"].indexOf(V)>=0);if(B.length===0){if(J<X)J=H.plus({[W]:1});if(J!==H)Q[W]=(Q[W]||0)+w/(J-H)}let U=q1.fromObject(Q,G);if(B.length>0)return q1.fromMillis(w,G).shiftTo(...B).plus(U);else return U}var VC="missing Intl.DateTimeFormat.formatToParts support";function P1($,X=(Y)=>Y){return{regex:$,deser:([Y])=>X($I(Y))}}var FC=String.fromCharCode(160),xF=`[ ${FC}]`,vF=new RegExp(xF,"g");function EC($){return $.replace(/\./g,"\\.?").replace(vF,xF)}function IV($){return $.replace(/\./g,"").replace(vF," ").toLowerCase()}function V$($,X){if($===null)return null;else return{regex:RegExp($.map(EC).join("|")),deser:([Y])=>$.findIndex((G)=>IV(Y)===IV(G))+X}}function CV($,X){return{regex:$,deser:([,Y,G])=>VX(Y,G),groups:X}}function t7($){return{regex:$,deser:([X])=>X}}function AC($){return $.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function KC($,X){let Y=U$(X),G=U$(X,"{2}"),H=U$(X,"{3}"),Q=U$(X,"{4}"),J=U$(X,"{6}"),W=U$(X,"{1,2}"),w=U$(X,"{1,3}"),B=U$(X,"{1,6}"),U=U$(X,"{1,9}"),V=U$(X,"{2,4}"),F=U$(X,"{4,6}"),E=(P)=>({regex:RegExp(AC(P.val)),deser:([_])=>_,literal:!0}),A=((P)=>{if($.literal)return E(P);switch(P.val){case"G":return V$(X.eras("short"),0);case"GG":return V$(X.eras("long"),0);case"y":return P1(B);case"yy":return P1(V,KG);case"yyyy":return P1(Q);case"yyyyy":return P1(F);case"yyyyyy":return P1(J);case"M":return P1(W);case"MM":return P1(G);case"MMM":return V$(X.months("short",!0),1);case"MMMM":return V$(X.months("long",!0),1);case"L":return P1(W);case"LL":return P1(G);case"LLL":return V$(X.months("short",!1),1);case"LLLL":return V$(X.months("long",!1),1);case"d":return P1(W);case"dd":return P1(G);case"o":return P1(w);case"ooo":return P1(H);case"HH":return P1(G);case"H":return P1(W);case"hh":return P1(G);case"h":return P1(W);case"mm":return P1(G);case"m":return P1(W);case"q":return P1(W);case"qq":return P1(G);case"s":return P1(W);case"ss":return P1(G);case"S":return P1(w);case"SSS":return P1(H);case"u":return t7(U);case"uu":return t7(W);case"uuu":return P1(Y);case"a":return V$(X.meridiems(),0);case"kkkk":return P1(Q);case"kk":return P1(V,KG);case"W":return P1(W);case"WW":return P1(G);case"E":case"c":return P1(Y);case"EEE":return V$(X.weekdays("short",!1),1);case"EEEE":return V$(X.weekdays("long",!1),1);case"ccc":return V$(X.weekdays("short",!0),1);case"cccc":return V$(X.weekdays("long",!0),1);case"Z":case"ZZ":return CV(new RegExp(`([+-]${W.source})(?::(${G.source}))?`),2);case"ZZZ":return CV(new RegExp(`([+-]${W.source})(${G.source})?`),2);case"z":return t7(/[a-z_+-/]{1,256}?/i);case" ":return t7(/[^\S\n\r]/);default:return E(P)}})($)||{invalidReason:VC};return A.token=$,A}var zC={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}};function LC($,X,Y){let{type:G,value:H}=$;if(G==="literal"){let w=/^\s+$/.test(H);return{literal:!w,val:w?" ":H}}let Q=X[G],J=G;if(G==="hour")if(X.hour12!=null)J=X.hour12?"hour12":"hour24";else if(X.hourCycle!=null)if(X.hourCycle==="h11"||X.hourCycle==="h12")J="hour12";else J="hour24";else J=Y.hour12?"hour12":"hour24";let W=zC[J];if(typeof W==="object")W=W[Q];if(W)return{literal:!1,val:W};return}function OC($){return[`^${$.map((Y)=>Y.regex).reduce((Y,G)=>`${Y}(${G.source})`,"")}\$`,$]}function RC($,X,Y){let G=$.match(X);if(G){let H={},Q=1;for(let J in Y)if(f6(Y,J)){let W=Y[J],w=W.groups?W.groups+1:1;if(!W.literal&&W.token)H[W.token.val[0]]=W.deser(G.slice(Q,Q+w));Q+=w}return[G,H]}else return[G,{}]}function DC($){let X=(Q)=>{switch(Q){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},Y=null,G;if(!E1($.z))Y=I$.create($.z);if(!E1($.Z)){if(!Y)Y=new K0($.Z);G=$.Z}if(!E1($.q))$.M=($.q-1)*3+1;if(!E1($.h)){if($.h<12&&$.a===1)$.h+=12;else if($.h===12&&$.a===0)$.h=0}if($.G===0&&$.y)$.y=-$.y;if(!E1($.u))$.S=_G($.u);return[Object.keys($).reduce((Q,J)=>{let W=X(J);if(W)Q[W]=$[J];return Q},{}),Y,G]}var QG=null;function _C(){if(!QG)QG=F1.fromMillis(1555555555555);return QG}function NC($,X){if($.literal)return $;let Y=A0.macroTokenToFormatOpts($.val),G=yF(Y,X);if(G==null||G.includes(void 0))return $;return G}function fF($,X){return Array.prototype.concat(...$.map((Y)=>NC(Y,X)))}class PG{constructor($,X){if(this.locale=$,this.format=X,this.tokens=fF(A0.parseFormat(X),$),this.units=this.tokens.map((Y)=>KC(Y,$)),this.disqualifyingUnit=this.units.find((Y)=>Y.invalidReason),!this.disqualifyingUnit){let[Y,G]=OC(this.units);this.regex=RegExp(Y,"i"),this.handlers=G}}explainFromTokens($){if(!this.isValid)return{input:$,tokens:this.tokens,invalidReason:this.invalidReason};else{let[X,Y]=RC($,this.regex,this.handlers),[G,H,Q]=Y?DC(Y):[null,null,void 0];if(f6(Y,"a")&&f6(Y,"H"))throw new p4("Can't include meridiem when specifying 24-hour format");return{input:$,tokens:this.tokens,regex:this.regex,rawMatches:X,matches:Y,result:G,zone:H,specificOffset:Q}}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function hF($,X,Y){return new PG($,Y).explainFromTokens(X)}function qC($,X,Y){let{result:G,zone:H,specificOffset:Q,invalidReason:J}=hF($,X,Y);return[G,H,Q,J]}function yF($,X){if(!$)return null;let G=A0.create(X,$).dtFormatter(_C()),H=G.formatToParts(),Q=G.resolvedOptions();return H.map((J)=>LC(J,$,Q))}var JG="Invalid DateTime",jV=8640000000000000;function r5($){return new s0("unsupported zone",`the zone "${$.name}" is not supported`)}function WG($){if($.weekData===null)$.weekData=JX($.c);return $.weekData}function wG($){if($.localWeekData===null)$.localWeekData=JX($.c,$.loc.getMinDaysInFirstWeek(),$.loc.getStartOfWeek());return $.localWeekData}function u4($,X){let Y={ts:$.ts,zone:$.zone,c:$.c,o:$.o,loc:$.loc,invalid:$.invalid};return new F1({...Y,...X,old:Y})}function bF($,X,Y){let G=$-X*60*1000,H=Y.offset(G);if(X===H)return[G,X];G-=(H-X)*60*1000;let Q=Y.offset(G);if(H===Q)return[G,H];return[$-Math.min(H,Q)*60*1000,Math.max(H,Q)]}function e7($,X){$+=X*60*1000;let Y=new Date($);return{year:Y.getUTCFullYear(),month:Y.getUTCMonth()+1,day:Y.getUTCDate(),hour:Y.getUTCHours(),minute:Y.getUTCMinutes(),second:Y.getUTCSeconds(),millisecond:Y.getUTCMilliseconds()}}function YX($,X,Y){return bF(UX($),X,Y)}function TV($,X){let Y=$.o,G=$.c.year+Math.trunc(X.years),H=$.c.month+Math.trunc(X.months)+Math.trunc(X.quarters)*3,Q={...$.c,year:G,month:H,day:Math.min($.c.day,WX(G,H))+Math.trunc(X.days)+Math.trunc(X.weeks)*7},J=q1.fromObject({years:X.years-Math.trunc(X.years),quarters:X.quarters-Math.trunc(X.quarters),months:X.months-Math.trunc(X.months),weeks:X.weeks-Math.trunc(X.weeks),days:X.days-Math.trunc(X.days),hours:X.hours,minutes:X.minutes,seconds:X.seconds,milliseconds:X.milliseconds}).as("milliseconds"),W=UX(Q),[w,B]=bF(W,Y,$.zone);if(J!==0)w+=J,B=$.zone.offset(w);return{ts:w,o:B}}function j6($,X,Y,G,H,Q){let{setZone:J,zone:W}=Y;if($&&Object.keys($).length!==0||X){let w=X||W,B=F1.fromObject($,{...Y,zone:w,specificOffset:Q});return J?B:B.setZone(W)}else return F1.invalid(new s0("unparsable",`the input "${H}" can't be parsed as ${G}`))}function $X($,X,Y=!0){return $.isValid?A0.create(S1.create("en-US"),{allowZ:Y,forceSimple:!0}).formatDateTimeFromString($,X):null}function BG($,X){let Y=$.c.year>9999||$.c.year<0,G="";if(Y&&$.c.year>=0)G+="+";if(G+=a1($.c.year,Y?6:4),X)G+="-",G+=a1($.c.month),G+="-",G+=a1($.c.day);else G+=a1($.c.month),G+=a1($.c.day);return G}function kV($,X,Y,G,H,Q){let J=a1($.c.hour);if(X){if(J+=":",J+=a1($.c.minute),$.c.millisecond!==0||$.c.second!==0||!Y)J+=":"}else J+=a1($.c.minute);if($.c.millisecond!==0||$.c.second!==0||!Y){if(J+=a1($.c.second),$.c.millisecond!==0||!G)J+=".",J+=a1($.c.millisecond,3)}if(H)if($.isOffsetFixed&&$.offset===0&&!Q)J+="Z";else if($.o<0)J+="-",J+=a1(Math.trunc(-$.o/60)),J+=":",J+=a1(Math.trunc(-$.o%60));else J+="+",J+=a1(Math.trunc($.o/60)),J+=":",J+=a1(Math.trunc($.o%60));if(Q)J+="["+$.zone.ianaName+"]";return J}var gF={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},MC={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},ZC={ordinal:1,hour:0,minute:0,second:0,millisecond:0},mF=["year","month","day","hour","minute","second","millisecond"],PC=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],SC=["year","ordinal","hour","minute","second","millisecond"];function IC($){let X={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[$.toLowerCase()];if(!X)throw new zG($);return X}function xV($){switch($.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return IC($)}}function CC($){if(!HX[$]){if(GX===void 0)GX=g1.now();HX[$]=$.offset(GX)}return HX[$]}function vV($,X){let Y=B4(X.zone,g1.defaultZone);if(!Y.isValid)return F1.invalid(r5(Y));let G=S1.fromObject(X),H,Q;if(!E1($.year)){for(let w of mF)if(E1($[w]))$[w]=gF[w];let J=FF($)||EF($);if(J)return F1.invalid(J);let W=CC(Y);[H,Q]=YX($,W,Y)}else H=g1.now();return new F1({ts:H,zone:Y,loc:G,o:Q})}function fV($,X,Y){let G=E1(Y.round)?!0:Y.round,H=(J,W)=>{return J=NG(J,G||Y.calendary?0:2,!0),X.loc.clone(Y).relFormatter(Y).format(J,W)},Q=(J)=>{if(Y.calendary)if(!X.hasSame($,J))return X.startOf(J).diff($.startOf(J),J).get(J);else return 0;else return X.diff($,J).get(J)};if(Y.unit)return H(Q(Y.unit),Y.unit);for(let J of Y.units){let W=Q(J);if(Math.abs(W)>=1)return H(W,J)}return H($>X?-0:0,Y.units[Y.units.length-1])}function hV($){let X={},Y;if($.length>0&&typeof $[$.length-1]==="object")X=$[$.length-1],Y=Array.from($).slice(0,$.length-1);else Y=Array.from($);return[X,Y]}var GX,HX={};class F1{constructor($){let X=$.zone||g1.defaultZone,Y=$.invalid||(Number.isNaN($.ts)?new s0("invalid input"):null)||(!X.isValid?r5(X):null);this.ts=E1($.ts)?g1.now():$.ts;let G=null,H=null;if(!Y)if($.old&&$.old.ts===this.ts&&$.old.zone.equals(X))[G,H]=[$.old.c,$.old.o];else{let J=U4($.o)&&!$.old?$.o:X.offset(this.ts);G=e7(this.ts,J),Y=Number.isNaN(G.year)?new s0("invalid input"):null,G=Y?null:G,H=Y?null:J}this._zone=X,this.loc=$.loc||S1.create(),this.invalid=Y,this.weekData=null,this.localWeekData=null,this.c=G,this.o=H,this.isLuxonDateTime=!0}static now(){return new F1({})}static local(){let[$,X]=hV(arguments),[Y,G,H,Q,J,W,w]=X;return vV({year:Y,month:G,day:H,hour:Q,minute:J,second:W,millisecond:w},$)}static utc(){let[$,X]=hV(arguments),[Y,G,H,Q,J,W,w]=X;return $.zone=K0.utcInstance,vV({year:Y,month:G,day:H,hour:Q,minute:J,second:W,millisecond:w},$)}static fromJSDate($,X={}){let Y=QI($)?$.valueOf():NaN;if(Number.isNaN(Y))return F1.invalid("invalid input");let G=B4(X.zone,g1.defaultZone);if(!G.isValid)return F1.invalid(r5(G));return new F1({ts:Y,zone:G,loc:S1.fromObject(X)})}static fromMillis($,X={}){if(!U4($))throw new J0(`fromMillis requires a numerical input, but received a ${typeof $} with value ${$}`);else if($<-jV||$>jV)return F1.invalid("Timestamp out of range");else return new F1({ts:$,zone:B4(X.zone,g1.defaultZone),loc:S1.fromObject(X)})}static fromSeconds($,X={}){if(!U4($))throw new J0("fromSeconds requires a numerical input");else return new F1({ts:$*1000,zone:B4(X.zone,g1.defaultZone),loc:S1.fromObject(X)})}static fromObject($,X={}){$=$||{};let Y=B4(X.zone,g1.defaultZone);if(!Y.isValid)return F1.invalid(r5(Y));let G=S1.fromObject(X),H=wX($,xV),{minDaysInFirstWeek:Q,startOfWeek:J}=DV(H,G),W=g1.now(),w=!E1(X.specificOffset)?X.specificOffset:Y.offset(W),B=!E1(H.ordinal),U=!E1(H.year),V=!E1(H.month)||!E1(H.day),F=U||V,E=H.weekYear||H.weekNumber;if((F||B)&&E)throw new p4("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(V&&B)throw new p4("Can't mix ordinal dates with month/day");let K=E||H.weekday&&!F,A,P,_=e7(W,w);if(K)A=PC,P=MC,_=JX(_,Q,J);else if(B)A=SC,P=ZC,_=HG(_);else A=mF,P=gF;let C=!1;for(let d of A){let Z=H[d];if(!E1(Z))C=!0;else if(C)H[d]=P[d];else H[d]=_[d]}let b=K?YI(H,Q,J):B?GI(H):FF(H),T=b||EF(H);if(T)return F1.invalid(T);let p=K?OV(H,Q,J):B?RV(H):H,[k,x]=YX(p,w,Y),S=new F1({ts:k,zone:Y,o:x,loc:G});if(H.weekday&&F&&$.weekday!==S.weekday)return F1.invalid("mismatched weekday",`you can't specify both a weekday of ${H.weekday} and a date of ${S.toISO()}`);if(!S.isValid)return F1.invalid(S.invalid);return S}static fromISO($,X={}){let[Y,G]=rI($);return j6(Y,G,X,"ISO 8601",$)}static fromRFC2822($,X={}){let[Y,G]=sI($);return j6(Y,G,X,"RFC 2822",$)}static fromHTTP($,X={}){let[Y,G]=oI($);return j6(Y,G,X,"HTTP",X)}static fromFormat($,X,Y={}){if(E1($)||E1(X))throw new J0("fromFormat requires an input string and a format");let{locale:G=null,numberingSystem:H=null}=Y,Q=S1.fromOpts({locale:G,numberingSystem:H,defaultToEN:!0}),[J,W,w,B]=qC(Q,$,X);if(B)return F1.invalid(B);else return j6(J,W,Y,`format ${X}`,$,w)}static fromString($,X,Y={}){return F1.fromFormat($,X,Y)}static fromSQL($,X={}){let[Y,G]=GC($);return j6(Y,G,X,"SQL",$)}static invalid($,X=null){if(!$)throw new J0("need to specify a reason the DateTime is invalid");let Y=$ instanceof s0?$:new s0($,X);if(g1.throwOnInvalid)throw new yV(Y);else return new F1({invalid:Y})}static isDateTime($){return $&&$.isLuxonDateTime||!1}static parseFormatForOpts($,X={}){let Y=yF($,S1.fromObject(X));return!Y?null:Y.map((G)=>G?G.val:null).join("")}static expandFormat($,X={}){return fF(A0.parseFormat($),S1.fromObject(X)).map((G)=>G.val).join("")}static resetCache(){GX=void 0,HX={}}get($){return this[$]}get isValid(){return this.invalid===null}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?WG(this).weekYear:NaN}get weekNumber(){return this.isValid?WG(this).weekNumber:NaN}get weekday(){return this.isValid?WG(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?wG(this).weekday:NaN}get localWeekNumber(){return this.isValid?wG(this).weekNumber:NaN}get localWeekYear(){return this.isValid?wG(this).weekYear:NaN}get ordinal(){return this.isValid?HG(this.c).ordinal:NaN}get monthShort(){return this.isValid?k6.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?k6.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?k6.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?k6.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){if(this.isValid)return this.zone.offsetName(this.ts,{format:"short",locale:this.locale});else return null}get offsetNameLong(){if(this.isValid)return this.zone.offsetName(this.ts,{format:"long",locale:this.locale});else return null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){if(this.isOffsetFixed)return!1;else return this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let $=86400000,X=60000,Y=UX(this.c),G=this.zone.offset(Y-$),H=this.zone.offset(Y+$),Q=this.zone.offset(Y-G*X),J=this.zone.offset(Y-H*X);if(Q===J)return[this];let W=Y-Q*X,w=Y-J*X,B=e7(W,Q),U=e7(w,J);if(B.hour===U.hour&&B.minute===U.minute&&B.second===U.second&&B.millisecond===U.millisecond)return[u4(this,{ts:W}),u4(this,{ts:w})];return[this]}get isInLeapYear(){return t5(this.year)}get daysInMonth(){return WX(this.year,this.month)}get daysInYear(){return this.isValid?x6(this.year):NaN}get weeksInWeekYear(){return this.isValid?o5(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?o5(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions($={}){let{locale:X,numberingSystem:Y,calendar:G}=A0.create(this.loc.clone($),$).resolvedOptions(this);return{locale:X,numberingSystem:Y,outputCalendar:G}}toUTC($=0,X={}){return this.setZone(K0.instance($),X)}toLocal(){return this.setZone(g1.defaultZone)}setZone($,{keepLocalTime:X=!1,keepCalendarTime:Y=!1}={}){if($=B4($,g1.defaultZone),$.equals(this.zone))return this;else if(!$.isValid)return F1.invalid(r5($));else{let G=this.ts;if(X||Y){let H=$.offset(this.ts),Q=this.toObject();[G]=YX(Q,H,$)}return u4(this,{ts:G,zone:$})}}reconfigure({locale:$,numberingSystem:X,outputCalendar:Y}={}){let G=this.loc.clone({locale:$,numberingSystem:X,outputCalendar:Y});return u4(this,{loc:G})}setLocale($){return this.reconfigure({locale:$})}set($){if(!this.isValid)return this;let X=wX($,xV),{minDaysInFirstWeek:Y,startOfWeek:G}=DV(X,this.loc),H=!E1(X.weekYear)||!E1(X.weekNumber)||!E1(X.weekday),Q=!E1(X.ordinal),J=!E1(X.year),W=!E1(X.month)||!E1(X.day),w=J||W,B=X.weekYear||X.weekNumber;if((w||Q)&&B)throw new p4("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(W&&Q)throw new p4("Can't mix ordinal dates with month/day");let U;if(H)U=OV({...JX(this.c,Y,G),...X},Y,G);else if(!E1(X.ordinal))U=RV({...HG(this.c),...X});else if(U={...this.toObject(),...X},E1(X.day))U.day=Math.min(WX(U.year,U.month),U.day);let[V,F]=YX(U,this.o,this.zone);return u4(this,{ts:V,o:F})}plus($){if(!this.isValid)return this;let X=q1.fromDurationLike($);return u4(this,TV(this,X))}minus($){if(!this.isValid)return this;let X=q1.fromDurationLike($).negate();return u4(this,TV(this,X))}startOf($,{useLocaleWeeks:X=!1}={}){if(!this.isValid)return this;let Y={},G=q1.normalizeUnit($);switch(G){case"years":Y.month=1;case"quarters":case"months":Y.day=1;case"weeks":case"days":Y.hour=0;case"hours":Y.minute=0;case"minutes":Y.second=0;case"seconds":Y.millisecond=0;break}if(G==="weeks")if(X){let H=this.loc.getStartOfWeek(),{weekday:Q}=this;if(Q<H)Y.weekNumber=this.weekNumber-1;Y.weekday=H}else Y.weekday=1;if(G==="quarters"){let H=Math.ceil(this.month/3);Y.month=(H-1)*3+1}return this.set(Y)}endOf($,X){return this.isValid?this.plus({[$]:1}).startOf($,X).minus(1):this}toFormat($,X={}){return this.isValid?A0.create(this.loc.redefaultToEN(X)).formatDateTimeFromString(this,$):JG}toLocaleString($=QX,X={}){return this.isValid?A0.create(this.loc.clone(X),$).formatDateTime(this):JG}toLocaleParts($={}){return this.isValid?A0.create(this.loc.clone($),$).formatDateTimeParts(this):[]}toISO({format:$="extended",suppressSeconds:X=!1,suppressMilliseconds:Y=!1,includeOffset:G=!0,extendedZone:H=!1}={}){if(!this.isValid)return null;let Q=$==="extended",J=BG(this,Q);return J+="T",J+=kV(this,Q,X,Y,G,H),J}toISODate({format:$="extended"}={}){if(!this.isValid)return null;return BG(this,$==="extended")}toISOWeekDate(){return $X(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:$=!1,suppressSeconds:X=!1,includeOffset:Y=!0,includePrefix:G=!1,extendedZone:H=!1,format:Q="extended"}={}){if(!this.isValid)return null;return(G?"T":"")+kV(this,Q==="extended",X,$,Y,H)}toRFC2822(){return $X(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return $X(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){if(!this.isValid)return null;return BG(this,!0)}toSQLTime({includeOffset:$=!0,includeZone:X=!1,includeOffsetSpace:Y=!0}={}){let G="HH:mm:ss.SSS";if(X||$){if(Y)G+=" ";if(X)G+="z";else if($)G+="ZZ"}return $X(this,G,!0)}toSQL($={}){if(!this.isValid)return null;return`${this.toSQLDate()} ${this.toSQLTime($)}`}toString(){return this.isValid?this.toISO():JG}[Symbol.for("nodejs.util.inspect.custom")](){if(this.isValid)return`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`;else return`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1000:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1000):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject($={}){if(!this.isValid)return{};let X={...this.c};if($.includeConfig)X.outputCalendar=this.outputCalendar,X.numberingSystem=this.loc.numberingSystem,X.locale=this.loc.locale;return X}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff($,X="milliseconds",Y={}){if(!this.isValid||!$.isValid)return q1.invalid("created by diffing an invalid DateTime");let G={locale:this.locale,numberingSystem:this.numberingSystem,...Y},H=JI(X).map(q1.normalizeUnit),Q=$.valueOf()>this.valueOf(),J=Q?this:$,W=Q?$:this,w=UC(J,W,H,G);return Q?w.negate():w}diffNow($="milliseconds",X={}){return this.diff(F1.now(),$,X)}until($){return this.isValid?d1.fromDateTimes(this,$):this}hasSame($,X,Y){if(!this.isValid)return!1;let G=$.valueOf(),H=this.setZone($.zone,{keepLocalTime:!0});return H.startOf(X,Y)<=G&&G<=H.endOf(X,Y)}equals($){return this.isValid&&$.isValid&&this.valueOf()===$.valueOf()&&this.zone.equals($.zone)&&this.loc.equals($.loc)}toRelative($={}){if(!this.isValid)return null;let X=$.base||F1.fromObject({},{zone:this.zone}),Y=$.padding?this<X?-$.padding:$.padding:0,G=["years","months","days","hours","minutes","seconds"],H=$.unit;if(Array.isArray($.unit))G=$.unit,H=void 0;return fV(X,this.plus(Y),{...$,numeric:"always",units:G,unit:H})}toRelativeCalendar($={}){if(!this.isValid)return null;return fV($.base||F1.fromObject({},{zone:this.zone}),this,{...$,numeric:"auto",units:["years","months","days"],calendary:!0})}static min(...$){if(!$.every(F1.isDateTime))throw new J0("min requires all arguments be DateTimes");return _V($,(X)=>X.valueOf(),Math.min)}static max(...$){if(!$.every(F1.isDateTime))throw new J0("max requires all arguments be DateTimes");return _V($,(X)=>X.valueOf(),Math.max)}static fromFormatExplain($,X,Y={}){let{locale:G=null,numberingSystem:H=null}=Y,Q=S1.fromOpts({locale:G,numberingSystem:H,defaultToEN:!0});return hF(Q,$,X)}static fromStringExplain($,X,Y={}){return F1.fromFormatExplain($,X,Y)}static buildFormatParser($,X={}){let{locale:Y=null,numberingSystem:G=null}=X,H=S1.fromOpts({locale:Y,numberingSystem:G,defaultToEN:!0});return new PG(H,$)}static fromFormatParser($,X,Y={}){if(E1($)||E1(X))throw new J0("fromFormatParser requires an input string and a format parser");let{locale:G=null,numberingSystem:H=null}=Y,Q=S1.fromOpts({locale:G,numberingSystem:H,defaultToEN:!0});if(!Q.equals(X.locale))throw new J0(`fromFormatParser called with a locale of ${Q}, but the format parser was created for ${X.locale}`);let{result:J,zone:W,specificOffset:w,invalidReason:B}=X.explainFromTokens($);if(B)return F1.invalid(B);else return j6(J,W,Y,`format ${X.format}`,$,w)}static get DATE_SHORT(){return QX}static get DATE_MED(){return mV}static get DATE_MED_WITH_WEEKDAY(){return hS}static get DATE_FULL(){return uV}static get DATE_HUGE(){return pV}static get TIME_SIMPLE(){return cV}static get TIME_WITH_SECONDS(){return dV}static get TIME_WITH_SHORT_OFFSET(){return lV}static get TIME_WITH_LONG_OFFSET(){return iV}static get TIME_24_SIMPLE(){return nV}static get TIME_24_WITH_SECONDS(){return rV}static get TIME_24_WITH_SHORT_OFFSET(){return sV}static get TIME_24_WITH_LONG_OFFSET(){return oV}static get DATETIME_SHORT(){return aV}static get DATETIME_SHORT_WITH_SECONDS(){return tV}static get DATETIME_MED(){return eV}static get DATETIME_MED_WITH_SECONDS(){return $F}static get DATETIME_MED_WITH_WEEKDAY(){return yS}static get DATETIME_FULL(){return XF}static get DATETIME_FULL_WITH_SECONDS(){return YF}static get DATETIME_HUGE(){return GF}static get DATETIME_HUGE_WITH_SECONDS(){return HF}}function i5($){if(F1.isDateTime($))return $;else if($&&$.valueOf&&U4($.valueOf()))return F1.fromJSDate($);else if($&&typeof $==="object")return F1.fromObject($);else throw new J0(`Unknown datetime argument: ${$}, of type ${typeof $}`)}var jC="3.5.0";uF.DateTime=F1;uF.Duration=q1;uF.FixedOffsetZone=K0;uF.IANAZone=I$;uF.Info=k6;uF.Interval=d1;uF.InvalidZone=LG;uF.Settings=g1;uF.SystemZone=a5;uF.VERSION=jC;uF.Zone=d4});var dF=I((bm,cF)=>{var l4=pF();A1.prototype.addYear=function(){this._date=this._date.plus({years:1})};A1.prototype.addMonth=function(){this._date=this._date.plus({months:1}).startOf("month")};A1.prototype.addDay=function(){this._date=this._date.plus({days:1}).startOf("day")};A1.prototype.addHour=function(){var $=this._date;if(this._date=this._date.plus({hours:1}).startOf("hour"),this._date<=$)this._date=this._date.plus({hours:1})};A1.prototype.addMinute=function(){var $=this._date;if(this._date=this._date.plus({minutes:1}).startOf("minute"),this._date<$)this._date=this._date.plus({hours:1})};A1.prototype.addSecond=function(){var $=this._date;if(this._date=this._date.plus({seconds:1}).startOf("second"),this._date<$)this._date=this._date.plus({hours:1})};A1.prototype.subtractYear=function(){this._date=this._date.minus({years:1})};A1.prototype.subtractMonth=function(){this._date=this._date.minus({months:1}).endOf("month").startOf("second")};A1.prototype.subtractDay=function(){this._date=this._date.minus({days:1}).endOf("day").startOf("second")};A1.prototype.subtractHour=function(){var $=this._date;if(this._date=this._date.minus({hours:1}).endOf("hour").startOf("second"),this._date>=$)this._date=this._date.minus({hours:1})};A1.prototype.subtractMinute=function(){var $=this._date;if(this._date=this._date.minus({minutes:1}).endOf("minute").startOf("second"),this._date>$)this._date=this._date.minus({hours:1})};A1.prototype.subtractSecond=function(){var $=this._date;if(this._date=this._date.minus({seconds:1}).startOf("second"),this._date>$)this._date=this._date.minus({hours:1})};A1.prototype.getDate=function(){return this._date.day};A1.prototype.getFullYear=function(){return this._date.year};A1.prototype.getDay=function(){var $=this._date.weekday;return $==7?0:$};A1.prototype.getMonth=function(){return this._date.month-1};A1.prototype.getHours=function(){return this._date.hour};A1.prototype.getMinutes=function(){return this._date.minute};A1.prototype.getSeconds=function(){return this._date.second};A1.prototype.getMilliseconds=function(){return this._date.millisecond};A1.prototype.getTime=function(){return this._date.valueOf()};A1.prototype.getUTCDate=function(){return this._getUTC().day};A1.prototype.getUTCFullYear=function(){return this._getUTC().year};A1.prototype.getUTCDay=function(){var $=this._getUTC().weekday;return $==7?0:$};A1.prototype.getUTCMonth=function(){return this._getUTC().month-1};A1.prototype.getUTCHours=function(){return this._getUTC().hour};A1.prototype.getUTCMinutes=function(){return this._getUTC().minute};A1.prototype.getUTCSeconds=function(){return this._getUTC().second};A1.prototype.toISOString=function(){return this._date.toUTC().toISO()};A1.prototype.toJSON=function(){return this._date.toJSON()};A1.prototype.setDate=function($){this._date=this._date.set({day:$})};A1.prototype.setFullYear=function($){this._date=this._date.set({year:$})};A1.prototype.setDay=function($){this._date=this._date.set({weekday:$})};A1.prototype.setMonth=function($){this._date=this._date.set({month:$+1})};A1.prototype.setHours=function($){this._date=this._date.set({hour:$})};A1.prototype.setMinutes=function($){this._date=this._date.set({minute:$})};A1.prototype.setSeconds=function($){this._date=this._date.set({second:$})};A1.prototype.setMilliseconds=function($){this._date=this._date.set({millisecond:$})};A1.prototype._getUTC=function(){return this._date.toUTC()};A1.prototype.toString=function(){return this.toDate().toString()};A1.prototype.toDate=function(){return this._date.toJSDate()};A1.prototype.isLastDayOfMonth=function(){var $=this._date.plus({days:1}).startOf("day");return this._date.month!==$.month};A1.prototype.isLastWeekdayOfMonth=function(){var $=this._date.plus({days:7}).startOf("day");return this._date.month!==$.month};function A1($,X){var Y={zone:X};if(!$)this._date=l4.DateTime.local();else if($ instanceof A1)this._date=$._date;else if($ instanceof Date)this._date=l4.DateTime.fromJSDate($,Y);else if(typeof $==="number")this._date=l4.DateTime.fromMillis($,Y);else if(typeof $==="string")this._date=l4.DateTime.fromISO($,Y),this._date.isValid||(this._date=l4.DateTime.fromRFC2822($,Y)),this._date.isValid||(this._date=l4.DateTime.fromSQL($,Y)),this._date.isValid||(this._date=l4.DateTime.fromFormat($,"EEE, d MMM yyyy HH:mm:ss",Y));if(!this._date||!this._date.isValid)throw new Error("CronDate: unhandled timestamp: "+JSON.stringify($));if(X&&X!==this._date.zoneName)this._date=this._date.setZone(X)}cF.exports=A1});var nF=I((gm,iF)=>{function i4($){return{start:$,count:1}}function lF($,X){$.end=X,$.step=X-$.start,$.count=2}function SG($,X,Y){if(X)if(X.count===2)$.push(i4(X.start)),$.push(i4(X.end));else $.push(X);if(Y)$.push(Y)}function pC($){var X=[],Y=void 0;for(var G=0;G<$.length;G++){var H=$[G];if(typeof H!=="number")SG(X,Y,i4(H)),Y=void 0;else if(!Y)Y=i4(H);else if(Y.count===1)lF(Y,H);else if(Y.step===H-Y.end)Y.count++,Y.end=H;else if(Y.count===2)X.push(i4(Y.start)),Y=i4(Y.end),lF(Y,H);else SG(X,Y),Y=i4(H)}return SG(X,Y),X}iF.exports=pC});var sF=I((mm,rF)=>{var cC=nF();function dC($,X,Y){var G=cC($);if(G.length===1){var H=G[0],Q=H.step;if(Q===1&&H.start===X&&H.end===Y)return"*";if(Q!==1&&H.start===X&&H.end===Y-Q+1)return"*/"+Q}var J=[];for(var W=0,w=G.length;W<w;++W){var B=G[W];if(B.count===1){J.push(B.start);continue}var Q=B.step;if(B.step===1){J.push(B.start+"-"+B.end);continue}var U=B.start==0?B.count-1:B.count;if(B.step*U>B.end)J=J.concat(Array.from({length:B.end-B.start+1}).map(function(F,E){var K=B.start+E;if((K-B.start)%B.step===0)return K;return null}).filter(function(F){return F!=null}));else if(B.end===Y-B.step+1)J.push(B.start+"/"+B.step);else J.push(B.start+"-"+B.end+"/"+B.step)}return J.join(",")}rF.exports=dC});var tF=I((um,aF)=>{var n4=dF(),lC=sF(),oF=1e4;function o($,X){this._options=X,this._utc=X.utc||!1,this._tz=this._utc?"UTC":X.tz,this._currentDate=new n4(X.currentDate,this._tz),this._startDate=X.startDate?new n4(X.startDate,this._tz):null,this._endDate=X.endDate?new n4(X.endDate,this._tz):null,this._isIterator=X.iterator||!1,this._hasIterated=!1,this._nthDayOfWeek=X.nthDayOfWeek||0,this.fields=o._freezeFields($)}o.map=["second","minute","hour","dayOfMonth","month","dayOfWeek"];o.predefined={"@yearly":"0 0 1 1 *","@monthly":"0 0 1 * *","@weekly":"0 0 * * 0","@daily":"0 0 * * *","@hourly":"0 * * * *"};o.constraints=[{min:0,max:59,chars:[]},{min:0,max:59,chars:[]},{min:0,max:23,chars:[]},{min:1,max:31,chars:["L"]},{min:1,max:12,chars:[]},{min:0,max:7,chars:["L"]}];o.daysInMonth=[31,29,31,30,31,30,31,31,30,31,30,31];o.aliases={month:{jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},dayOfWeek:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}};o.parseDefaults=["0","*","*","*","*","*"];o.standardValidCharacters=/^[,*\d/-]+$/;o.dayOfWeekValidCharacters=/^[?,*\dL#/-]+$/;o.dayOfMonthValidCharacters=/^[?,*\dL/-]+$/;o.validCharacters={second:o.standardValidCharacters,minute:o.standardValidCharacters,hour:o.standardValidCharacters,dayOfMonth:o.dayOfMonthValidCharacters,month:o.standardValidCharacters,dayOfWeek:o.dayOfWeekValidCharacters};o._isValidConstraintChar=function $(X,Y){if(typeof Y!=="string")return!1;return X.chars.some(function(G){return Y.indexOf(G)>-1})};o._parseField=function $(X,Y,G){switch(X){case"month":case"dayOfWeek":var H=o.aliases[X];Y=Y.replace(/[a-z]{3}/gi,function(w){if(w=w.toLowerCase(),typeof H[w]!=="undefined")return H[w];else throw new Error('Validation error, cannot resolve alias "'+w+'"')});break}if(!o.validCharacters[X].test(Y))throw new Error("Invalid characters, got value: "+Y);if(Y.indexOf("*")!==-1)Y=Y.replace(/\*/g,G.min+"-"+G.max);else if(Y.indexOf("?")!==-1)Y=Y.replace(/\?/g,G.min+"-"+G.max);function Q(w){var B=[];function U(K){if(K instanceof Array)for(var A=0,P=K.length;A<P;A++){var _=K[A];if(o._isValidConstraintChar(G,_)){B.push(_);continue}if(typeof _!=="number"||Number.isNaN(_)||_<G.min||_>G.max)throw new Error("Constraint error, got value "+_+" expected range "+G.min+"-"+G.max);B.push(_)}else{if(o._isValidConstraintChar(G,K)){B.push(K);return}var C=+K;if(Number.isNaN(C)||C<G.min||C>G.max)throw new Error("Constraint error, got value "+K+" expected range "+G.min+"-"+G.max);if(X==="dayOfWeek")C=C%7;B.push(C)}}var V=w.split(",");if(!V.every(function(K){return K.length>0}))throw new Error("Invalid list value format");if(V.length>1)for(var F=0,E=V.length;F<E;F++)U(J(V[F]));else U(J(w));return B.sort(o._sortCompareFn),B}function J(w){var B=1,U=w.split("/");if(U.length>2)throw new Error("Invalid repeat: "+w);if(U.length>1){if(U[0]==+U[0])U=[U[0]+"-"+G.max,U[1]];return W(U[0],U[U.length-1])}return W(w,B)}function W(w,B){var U=[],V=w.split("-");if(V.length>1){if(V.length<2)return+w;if(!V[0].length){if(!V[1].length)throw new Error("Invalid range: "+w);return+w}var F=+V[0],E=+V[1];if(Number.isNaN(F)||Number.isNaN(E)||F<G.min||E>G.max)throw new Error("Constraint error, got range "+F+"-"+E+" expected range "+G.min+"-"+G.max);else if(F>E)throw new Error("Invalid range: "+w);var K=+B;if(Number.isNaN(K)||K<=0)throw new Error("Constraint error, cannot repeat at every "+K+" time.");if(X==="dayOfWeek"&&E%7===0)U.push(0);for(var A=F,P=E;A<=P;A++){var _=U.indexOf(A)!==-1;if(!_&&K>0&&K%B===0)K=1,U.push(A);else K++}return U}return Number.isNaN(+w)?w:+w}return Q(Y)};o._sortCompareFn=function($,X){var Y=typeof $==="number",G=typeof X==="number";if(Y&&G)return $-X;if(!Y&&G)return 1;if(Y&&!G)return-1;return $.localeCompare(X)};o._handleMaxDaysInMonth=function($){if($.month.length===1){var X=o.daysInMonth[$.month[0]-1];if($.dayOfMonth[0]>X)throw new Error("Invalid explicit day of month definition");return $.dayOfMonth.filter(function(Y){return Y==="L"?!0:Y<=X}).sort(o._sortCompareFn)}};o._freezeFields=function($){for(var X=0,Y=o.map.length;X<Y;++X){var G=o.map[X],H=$[G];$[G]=Object.freeze(H)}return Object.freeze($)};o.prototype._applyTimezoneShift=function($,X,Y){if(Y==="Month"||Y==="Day"){var G=$.getTime();$[X+Y]();var H=$.getTime();if(G===H){if($.getMinutes()===0&&$.getSeconds()===0)$.addHour();else if($.getMinutes()===59&&$.getSeconds()===59)$.subtractHour()}}else{var Q=$.getHours();$[X+Y]();var J=$.getHours(),W=J-Q;if(W===2){if(this.fields.hour.length!==24)this._dstStart=J}else if(W===0&&$.getMinutes()===0&&$.getSeconds()===0){if(this.fields.hour.length!==24)this._dstEnd=J}}};o.prototype._findSchedule=function $(X){function Y(_,C){for(var b=0,T=C.length;b<T;b++)if(C[b]>=_)return C[b]===_;return C[0]===_}function G(_,C){if(C<6){if(_.getDate()<8&&C===1)return!0;var b=_.getDate()%7?1:0,T=_.getDate()-_.getDate()%7,p=Math.floor(T/7)+b;return p===C}return!1}function H(_){return _.length>0&&_.some(function(C){return typeof C==="string"&&C.indexOf("L")>=0})}X=X||!1;var Q=X?"subtract":"add",J=new n4(this._currentDate,this._tz),W=this._startDate,w=this._endDate,B=J.getTime(),U=0;function V(_){return _.some(function(C){if(!H([C]))return!1;var b=Number.parseInt(C[0])%7;if(Number.isNaN(b))throw new Error("Invalid last weekday of the month expression: "+C);return J.getDay()===b&&J.isLastWeekdayOfMonth()})}while(U<oF){if(U++,X){if(W&&J.getTime()-W.getTime()<0)throw new Error("Out of the timespan range")}else if(w&&w.getTime()-J.getTime()<0)throw new Error("Out of the timespan range");var F=Y(J.getDate(),this.fields.dayOfMonth);if(H(this.fields.dayOfMonth))F=F||J.isLastDayOfMonth();var E=Y(J.getDay(),this.fields.dayOfWeek);if(H(this.fields.dayOfWeek))E=E||V(this.fields.dayOfWeek);var K=this.fields.dayOfMonth.length>=o.daysInMonth[J.getMonth()],A=this.fields.dayOfWeek.length===o.constraints[5].max-o.constraints[5].min+1,P=J.getHours();if(!F&&(!E||A)){this._applyTimezoneShift(J,Q,"Day");continue}if(!K&&A&&!F){this._applyTimezoneShift(J,Q,"Day");continue}if(K&&!A&&!E){this._applyTimezoneShift(J,Q,"Day");continue}if(this._nthDayOfWeek>0&&!G(J,this._nthDayOfWeek)){this._applyTimezoneShift(J,Q,"Day");continue}if(!Y(J.getMonth()+1,this.fields.month)){this._applyTimezoneShift(J,Q,"Month");continue}if(!Y(P,this.fields.hour)){if(this._dstStart!==P){this._dstStart=null,this._applyTimezoneShift(J,Q,"Hour");continue}else if(!Y(P-1,this.fields.hour)){J[Q+"Hour"]();continue}}else if(this._dstEnd===P){if(!X){this._dstEnd=null,this._applyTimezoneShift(J,"add","Hour");continue}}if(!Y(J.getMinutes(),this.fields.minute)){this._applyTimezoneShift(J,Q,"Minute");continue}if(!Y(J.getSeconds(),this.fields.second)){this._applyTimezoneShift(J,Q,"Second");continue}if(B===J.getTime()){if(Q==="add"||J.getMilliseconds()===0)this._applyTimezoneShift(J,Q,"Second");else J.setMilliseconds(0);continue}break}if(U>=oF)throw new Error("Invalid expression, loop limit exceeded");return this._currentDate=new n4(J,this._tz),this._hasIterated=!0,J};o.prototype.next=function $(){var X=this._findSchedule();if(this._isIterator)return{value:X,done:!this.hasNext()};return X};o.prototype.prev=function $(){var X=this._findSchedule(!0);if(this._isIterator)return{value:X,done:!this.hasPrev()};return X};o.prototype.hasNext=function(){var $=this._currentDate,X=this._hasIterated;try{return this._findSchedule(),!0}catch(Y){return!1}finally{this._currentDate=$,this._hasIterated=X}};o.prototype.hasPrev=function(){var $=this._currentDate,X=this._hasIterated;try{return this._findSchedule(!0),!0}catch(Y){return!1}finally{this._currentDate=$,this._hasIterated=X}};o.prototype.iterate=function $(X,Y){var G=[];if(X>=0)for(var H=0,Q=X;H<Q;H++)try{var J=this.next();if(G.push(J),Y)Y(J,H)}catch(W){break}else for(var H=0,Q=X;H>Q;H--)try{var J=this.prev();if(G.push(J),Y)Y(J,H)}catch(B){break}return G};o.prototype.reset=function $(X){this._currentDate=new n4(X||this._options.currentDate)};o.prototype.stringify=function $(X){var Y=[];for(var G=X?0:1,H=o.map.length;G<H;++G){var Q=o.map[G],J=this.fields[Q],W=o.constraints[G];if(Q==="dayOfMonth"&&this.fields.month.length===1)W={min:1,max:o.daysInMonth[this.fields.month[0]-1]};else if(Q==="dayOfWeek")W={min:0,max:6},J=J[J.length-1]===7?J.slice(0,-1):J;Y.push(lC(J,W.min,W.max))}return Y.join(" ")};o.parse=function $(X,Y){var G=this;if(typeof Y==="function")Y={};function H(Q,J){if(!J)J={};if(typeof J.currentDate==="undefined")J.currentDate=new n4(void 0,G._tz);if(o.predefined[Q])Q=o.predefined[Q];var W=[],w=(Q+"").trim().split(/\s+/);if(w.length>6)throw new Error("Invalid cron expression");var B=o.map.length-w.length;for(var U=0,V=o.map.length;U<V;++U){var F=o.map[U],E=w[w.length>V?U:U-B];if(U<B||!E)W.push(o._parseField(F,o.parseDefaults[U],o.constraints[U]));else{var K=F==="dayOfWeek"?C(E):E;W.push(o._parseField(F,K,o.constraints[U]))}}var A={};for(var U=0,V=o.map.length;U<V;U++){var P=o.map[U];A[P]=W[U]}var _=o._handleMaxDaysInMonth(A);return A.dayOfMonth=_||A.dayOfMonth,new o(A,J);function C(b){var T=b.split("#");if(T.length>1){var p=+T[T.length-1];if(/,/.test(b))throw new Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");if(/\//.test(b))throw new Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");if(/-/.test(b))throw new Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");if(T.length>2||Number.isNaN(p)||(p<1||p>5))throw new Error("Constraint error, invalid dayOfWeek occurrence number (#)");return J.nthDayOfWeek=p,T[0]}return b}}return H(X,Y)};o.fieldsToExpression=function $(X,Y){function G(F,E,K){if(!E)throw new Error("Validation error, Field "+F+" is missing");if(E.length===0)throw new Error("Validation error, Field "+F+" contains no values");for(var A=0,P=E.length;A<P;A++){var _=E[A];if(o._isValidConstraintChar(K,_))continue;if(typeof _!=="number"||Number.isNaN(_)||_<K.min||_>K.max)throw new Error("Constraint error, got value "+_+" expected range "+K.min+"-"+K.max)}}var H={};for(var Q=0,J=o.map.length;Q<J;++Q){var W=o.map[Q],w=X[W];G(W,w,o.constraints[Q]);var B=[],U=-1;while(++U<w.length)B[U]=w[U];if(w=B.sort(o._sortCompareFn).filter(function(F,E,K){return!E||F!==K[E-1]}),w.length!==B.length)throw new Error("Validation error, Field "+W+" contains duplicate values");H[W]=w}var V=o._handleMaxDaysInMonth(H);return H.dayOfMonth=V||H.dayOfMonth,new o(H,Y||{})};aF.exports=o});var IG=I((pm,eF)=>{var EX=tF();function F4(){}F4._parseEntry=function $(X){var Y=X.split(" ");if(Y.length===6)return{interval:EX.parse(X)};else if(Y.length>6)return{interval:EX.parse(Y.slice(0,6).join(" ")),command:Y.slice(6,Y.length)};else throw new Error("Invalid entry: "+X)};F4.parseExpression=function $(X,Y){return EX.parse(X,Y)};F4.fieldsToExpression=function $(X,Y){return EX.fieldsToExpression(X,Y)};F4.parseString=function $(X){var Y=X.split("\n"),G={variables:{},expressions:[],errors:{}};for(var H=0,Q=Y.length;H<Q;H++){var J=Y[H],W=null,w=J.trim();if(w.length>0)if(w.match(/^#/))continue;else if(W=w.match(/^(.*)=(.*)$/))G.variables[W[1]]=W[2];else{var B=null;try{B=F4._parseEntry("0 "+w),G.expressions.push(B.interval)}catch(U){G.errors[w]=U}}}return G};F4.parseFile=function $(X,Y){import.meta.require("fs").readFile(X,function(G,H){if(G){Y(G);return}return Y(null,F4.parseString(H.toString()))})};eF.exports=F4});var QE=I((Ju,HE)=>{var{EventEmitter:oC}=import.meta.require("events");class CG{constructor(){this.eventEmitter=new oC,this.onabort=null,this.aborted=!1,this.reason=void 0}toString(){return"[object AbortSignal]"}get[Symbol.toStringTag](){return"AbortSignal"}removeEventListener($,X){this.eventEmitter.removeListener($,X)}addEventListener($,X){this.eventEmitter.on($,X)}dispatchEvent($){let X={type:$,target:this},Y=`on${$}`;if(typeof this[Y]==="function")this[Y](X);this.eventEmitter.emit($,X)}throwIfAborted(){if(this.aborted)throw this.reason}static abort($){let X=new KX;return X.abort(),X.signal}static timeout($){let X=new KX;return setTimeout(()=>X.abort(new Error("TimeoutError")),$),X.signal}}class KX{constructor(){this.signal=new CG}abort($){if(this.signal.aborted)return;if(this.signal.aborted=!0,$)this.signal.reason=$;else this.signal.reason=new Error("AbortError");this.signal.dispatchEvent("abort")}toString(){return"[object AbortController]"}get[Symbol.toStringTag](){return"AbortController"}}HE.exports={AbortController:KX,AbortSignal:CG}});var $2=async($,X=Object.create(null))=>{let{all:Y=!1,dot:G=!1}=X,Q=($ instanceof h8?$.raw.headers:$.headers).get("Content-Type");if(Q?.startsWith("multipart/form-data")||Q?.startsWith("application/x-www-form-urlencoded"))return Kz($,{all:Y,dot:G});return{}};async function Kz($,X){let Y=await $.formData();if(Y)return zz(Y,X);return{}}function zz($,X){let Y=Object.create(null);if($.forEach((G,H)=>{if(!(X.all||H.endsWith("[]")))Y[H]=G;else Lz(Y,H,G)}),X.dot)Object.entries(Y).forEach(([G,H])=>{if(G.includes("."))Oz(Y,G,H),delete Y[G]});return Y}var Lz=($,X,Y)=>{if($[X]!==void 0)if(Array.isArray($[X]))$[X].push(Y);else $[X]=[$[X],Y];else $[X]=Y},Oz=($,X,Y)=>{let G=$,H=X.split(".");H.forEach((Q,J)=>{if(J===H.length-1)G[Q]=Y;else{if(!G[Q]||typeof G[Q]!=="object"||Array.isArray(G[Q])||G[Q]instanceof File)G[Q]=Object.create(null);G=G[Q]}})};var aX=($)=>{let X=$.split("/");if(X[0]==="")X.shift();return X},X2=($)=>{let{groups:X,path:Y}=Rz($),G=aX(Y);return Dz(G,X)},Rz=($)=>{let X=[];return $=$.replace(/\{[^}]+\}/g,(Y,G)=>{let H=`@${G}`;return X.push([H,Y]),H}),{groups:X,path:$}},Dz=($,X)=>{for(let Y=X.length-1;Y>=0;Y--){let[G]=X[Y];for(let H=$.length-1;H>=0;H--)if($[H].includes(G)){$[H]=$[H].replace(G,X[Y][1]);break}}return $},y8={},tX=($)=>{if($==="*")return"*";let X=$.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(X){if(!y8[$])if(X[2])y8[$]=[$,X[1],new RegExp("^"+X[2]+"$")];else y8[$]=[$,X[1],!0];return y8[$]}return null},_z=($)=>{try{return decodeURI($)}catch{return $.replace(/(?:%[0-9A-Fa-f]{2})+/g,(X)=>{try{return decodeURI(X)}catch{return X}})}},z5=($)=>{let X=$.url,Y=X.indexOf("/",8),G=Y;for(;G<X.length;G++){let H=X.charCodeAt(G);if(H===37){let Q=X.indexOf("?",G),J=X.slice(Y,Q===-1?void 0:Q);return _z(J.includes("%25")?J.replace(/%25/g,"%2525"):J)}else if(H===63)break}return X.slice(Y,G)};var Y2=($)=>{let X=z5($);return X.length>1&&X[X.length-1]==="/"?X.slice(0,-1):X},R$=(...$)=>{let X="",Y=!1;for(let G of $){if(X[X.length-1]==="/")X=X.slice(0,-1),Y=!0;if(G[0]!=="/")G=`/${G}`;if(G==="/"&&Y)X=`${X}/`;else if(G!=="/")X=`${X}${G}`;if(G==="/"&&X==="")X="/"}return X},b8=($)=>{if(!$.match(/\:.+\?$/))return null;let X=$.split("/"),Y=[],G="";return X.forEach((H)=>{if(H!==""&&!/\:/.test(H))G+="/"+H;else if(/\:/.test(H))if(/\?/.test(H)){if(Y.length===0&&G==="")Y.push("/");else Y.push(G);let Q=H.replace("?","");G+="/"+Q,Y.push(G)}else G+="/"+H}),Y.filter((H,Q,J)=>J.indexOf(H)===Q)},oX=($)=>{if(!/[%+]/.test($))return $;if($.indexOf("+")!==-1)$=$.replace(/\+/g," ");return/%/.test($)?W6($):$},G2=($,X,Y)=>{let G;if(!Y&&X&&!/[%+]/.test(X)){let J=$.indexOf(`?${X}`,8);if(J===-1)J=$.indexOf(`&${X}`,8);while(J!==-1){let W=$.charCodeAt(J+X.length+1);if(W===61){let w=J+X.length+2,B=$.indexOf("&",w);return oX($.slice(w,B===-1?void 0:B))}else if(W==38||isNaN(W))return"";J=$.indexOf(`&${X}`,J+1)}if(G=/[%+]/.test($),!G)return}let H={};G??=/[%+]/.test($);let Q=$.indexOf("?",8);while(Q!==-1){let J=$.indexOf("&",Q+1),W=$.indexOf("=",Q);if(W>J&&J!==-1)W=-1;let w=$.slice(Q+1,W===-1?J===-1?void 0:J:W);if(G)w=oX(w);if(Q=J,w==="")continue;let B;if(W===-1)B="";else if(B=$.slice(W+1,J===-1?void 0:J),G)B=oX(B);if(Y){if(!(H[w]&&Array.isArray(H[w])))H[w]=[];H[w].push(B)}else H[w]??=B}return X?H[X]:H},H2=G2,Q2=($,X)=>{return G2($,X,!0)},W6=decodeURIComponent;var h8=class{raw;#Y;#G;routeIndex=0;path;bodyCache={};constructor($,X="/",Y=[[]]){this.raw=$,this.path=X,this.#G=Y,this.#Y={}}param($){return $?this.getDecodedParam($):this.getAllDecodedParams()}getDecodedParam($){let X=this.#G[0][this.routeIndex][1][$],Y=this.getParamValue(X);return Y?/\%/.test(Y)?W6(Y):Y:void 0}getAllDecodedParams(){let $={},X=Object.keys(this.#G[0][this.routeIndex][1]);for(let Y of X){let G=this.getParamValue(this.#G[0][this.routeIndex][1][Y]);if(G&&typeof G==="string")$[Y]=/\%/.test(G)?W6(G):G}return $}getParamValue($){return this.#G[1]?this.#G[1][$]:$}query($){return H2(this.url,$)}queries($){return Q2(this.url,$)}header($){if($)return this.raw.headers.get($.toLowerCase())??void 0;let X={};return this.raw.headers.forEach((Y,G)=>{X[G]=Y}),X}async parseBody($){return this.bodyCache.parsedBody??=await $2(this,$)}cachedBody=($)=>{let{bodyCache:X,raw:Y}=this,G=X[$];if(G)return G;let H=Object.keys(X)[0];if(H)return X[H].then((Q)=>{if(H==="json")Q=JSON.stringify(Q);return new Response(Q)[$]()});return X[$]=Y[$]()};json(){return this.cachedBody("json")}text(){return this.cachedBody("text")}arrayBuffer(){return this.cachedBody("arrayBuffer")}blob(){return this.cachedBody("blob")}formData(){return this.cachedBody("formData")}addValidatedData($,X){this.#Y[$]=X}valid($){return this.#Y[$]}get url(){return this.raw.url}get method(){return this.raw.method}get matchedRoutes(){return this.#G[0].map(([[,$]])=>$)}get routePath(){return this.#G[0].map(([[,$]])=>$)[this.routeIndex].path}};var eX={Stringify:1,BeforeStream:2,Stream:3},s$=($,X)=>{let Y=new String($);return Y.isEscaped=!0,Y.callbacks=X,Y},Nz=/[&<>'"]/,J2=async($,X)=>{let Y="";X||=[];let G=await Promise.all($);for(let H=G.length-1;;H--){if(Y+=G[H],H--,H<0)break;let Q=G[H];if(typeof Q==="object")X.push(...Q.callbacks||[]);let J=Q.isEscaped;if(Q=await(typeof Q==="object"?Q.toString():Q),typeof Q==="object")X.push(...Q.callbacks||[]);if(Q.isEscaped??J)Y+=Q;else{let W=[Y];g8(Q,W),Y=W[0]}}return s$(Y,X)},g8=($,X)=>{let Y=$.search(Nz);if(Y===-1){X[0]+=$;return}let G,H,Q=0;for(H=Y;H<$.length;H++){switch($.charCodeAt(H)){case 34:G="&quot;";break;case 39:G="&#39;";break;case 38:G="&amp;";break;case 60:G="&lt;";break;case 62:G="&gt;";break;default:continue}X[0]+=$.substring(Q,H)+G,Q=H+1}X[0]+=$.substring(Q,H)},W2=($)=>{let X=$.callbacks;if(!X?.length)return $;let Y=[$],G={};return X.forEach((H)=>H({phase:eX.Stringify,buffer:Y,context:G})),Y[0]},$9=async($,X,Y,G,H)=>{if(typeof $==="object"&&!($ instanceof String)){if(!($ instanceof Promise))$=$.toString();if($ instanceof Promise)$=await $}let Q=$.callbacks;if(!Q?.length)return Promise.resolve($);if(H)H[0]+=$;else H=[$];let J=Promise.all(Q.map((W)=>W({phase:X,buffer:H,context:G}))).then((W)=>Promise.all(W.filter(Boolean).map((w)=>$9(w,X,!1,G,H))).then(()=>H[0]));if(Y)return s$(await J,Q);else return J};var qz="text/plain; charset=UTF-8",X9=($,X={})=>{return Object.entries(X).forEach(([Y,G])=>$.set(Y,G)),$},w6=class{#Y;#G;env={};#Q;finalized=!1;error;#w=200;#J;#$;#X;#H;#W=!0;#V;#B;#U;#F;#E;constructor($,X){if(this.#Y=$,X)this.#J=X.executionCtx,this.env=X.env,this.#U=X.notFoundHandler,this.#E=X.path,this.#F=X.matchResult}get req(){return this.#G??=new h8(this.#Y,this.#E,this.#F),this.#G}get event(){if(this.#J&&"respondWith"in this.#J)return this.#J;else throw Error("This context has no FetchEvent")}get executionCtx(){if(this.#J)return this.#J;else throw Error("This context has no ExecutionContext")}get res(){return this.#W=!1,this.#H||=new Response("404 Not Found",{status:404})}set res($){if(this.#W=!1,this.#H&&$)try{for(let[X,Y]of this.#H.headers.entries()){if(X==="content-type")continue;if(X==="set-cookie"){let G=this.#H.headers.getSetCookie();$.headers.delete("set-cookie");for(let H of G)$.headers.append("set-cookie",H)}else $.headers.set(X,Y)}}catch(X){if(X instanceof TypeError&&X.message.includes("immutable")){this.res=new Response($.body,{headers:$.headers,status:$.status});return}else throw X}this.#H=$,this.finalized=!0}render=(...$)=>{return this.#B??=(X)=>this.html(X),this.#B(...$)};setLayout=($)=>this.#V=$;getLayout=()=>this.#V;setRenderer=($)=>{this.#B=$};header=($,X,Y)=>{if(X===void 0){if(this.#$)this.#$.delete($);else if(this.#X)delete this.#X[$.toLocaleLowerCase()];if(this.finalized)this.res.headers.delete($);return}if(Y?.append){if(!this.#$)this.#W=!1,this.#$=new Headers(this.#X),this.#X={};this.#$.append($,X)}else if(this.#$)this.#$.set($,X);else this.#X??={},this.#X[$.toLowerCase()]=X;if(this.finalized)if(Y?.append)this.res.headers.append($,X);else this.res.headers.set($,X)};status=($)=>{this.#W=!1,this.#w=$};set=($,X)=>{this.#Q??=new Map,this.#Q.set($,X)};get=($)=>{return this.#Q?this.#Q.get($):void 0};get var(){if(!this.#Q)return{};return Object.fromEntries(this.#Q)}newResponse=($,X,Y)=>{if(this.#W&&!Y&&!X&&this.#w===200)return new Response($,{headers:this.#X});if(X&&typeof X!=="number"){let H=new Headers(X.headers);if(this.#$)this.#$.forEach((J,W)=>{if(W==="set-cookie")H.append(W,J);else H.set(W,J)});let Q=X9(H,this.#X);return new Response($,{headers:Q,status:X.status??this.#w})}let G=typeof X==="number"?X:this.#w;if(this.#X??={},this.#$??=new Headers,X9(this.#$,this.#X),this.#H)this.#H.headers.forEach((H,Q)=>{if(Q==="set-cookie")this.#$?.append(Q,H);else this.#$?.set(Q,H)}),X9(this.#$,this.#X);Y??={};for(let[H,Q]of Object.entries(Y))if(typeof Q==="string")this.#$.set(H,Q);else{this.#$.delete(H);for(let J of Q)this.#$.append(H,J)}return new Response($,{status:G,headers:this.#$})};body=($,X,Y)=>{return typeof X==="number"?this.newResponse($,X,Y):this.newResponse($,X)};text=($,X,Y)=>{if(!this.#X){if(this.#W&&!Y&&!X)return new Response($);this.#X={}}return this.#X["content-type"]=qz,typeof X==="number"?this.newResponse($,X,Y):this.newResponse($,X)};json=($,X,Y)=>{let G=JSON.stringify($);return this.#X??={},this.#X["content-type"]="application/json; charset=UTF-8",typeof X==="number"?this.newResponse(G,X,Y):this.newResponse(G,X)};html=($,X,Y)=>{if(this.#X??={},this.#X["content-type"]="text/html; charset=UTF-8",typeof $==="object")return $9($,eX.Stringify,!1,{}).then((G)=>{return typeof X==="number"?this.newResponse(G,X,Y):this.newResponse(G,X)});return typeof X==="number"?this.newResponse($,X,Y):this.newResponse($,X)};redirect=($,X)=>{return this.#$??=new Headers,this.#$.set("Location",$),this.newResponse(null,X??302)};notFound=()=>{return this.#U??=()=>new Response,this.#U(this)}};var Y9=($,X,Y)=>{return(G,H)=>{let Q=-1;return J(0);async function J(W){if(W<=Q)throw new Error("next() called multiple times");Q=W;let w,B=!1,U;if($[W]){if(U=$[W][0][0],G instanceof w6)G.req.routeIndex=W}else U=W===$.length&&H||void 0;if(!U){if(G instanceof w6&&G.finalized===!1&&Y)w=await Y(G)}else try{w=await U(G,()=>{return J(W+1)})}catch(V){if(V instanceof Error&&G instanceof w6&&X)G.error=V,w=await X(V,G),B=!0;else throw V}if(w&&(G.finalized===!1||B))G.res=w;return G}}};var r1="ALL",w2="all",B2=["get","post","put","delete","options","patch"],m8="Can not add a route since the matcher is already built.",u8=class extends Error{};var Mz=Symbol("composedHandler"),Zz=($)=>{return $.text("404 Not Found",404)},U2=($,X)=>{if("getResponse"in $)return $.getResponse();return console.error($),X.text("Internal Server Error",500)},G9=class{get;post;put;delete;options;patch;all;on;use;router;getPath;_basePath="/";#Y="/";routes=[];constructor($={}){[...B2,w2].forEach((G)=>{this[G]=(H,...Q)=>{if(typeof H==="string")this.#Y=H;else this.addRoute(G,this.#Y,H);return Q.forEach((J)=>{if(typeof J!=="string")this.addRoute(G,this.#Y,J)}),this}}),this.on=(G,H,...Q)=>{for(let J of[H].flat()){this.#Y=J;for(let W of[G].flat())Q.map((w)=>{this.addRoute(W.toUpperCase(),this.#Y,w)})}return this},this.use=(G,...H)=>{if(typeof G==="string")this.#Y=G;else this.#Y="*",H.unshift(G);return H.forEach((Q)=>{this.addRoute(r1,this.#Y,Q)}),this};let Y=$.strict??!0;delete $.strict,Object.assign(this,$),this.getPath=Y?$.getPath??z5:Y2}clone(){let $=new G9({router:this.router,getPath:this.getPath});return $.routes=this.routes,$}notFoundHandler=Zz;errorHandler=U2;route($,X){let Y=this.basePath($);return X.routes.map((G)=>{let H;if(X.errorHandler===U2)H=G.handler;else H=async(Q,J)=>(await Y9([],X.errorHandler)(Q,()=>G.handler(Q,J))).res,H[Mz]=G.handler;Y.addRoute(G.method,G.path,H)}),this}basePath($){let X=this.clone();return X._basePath=R$(this._basePath,$),X}onError=($)=>{return this.errorHandler=$,this};notFound=($)=>{return this.notFoundHandler=$,this};mount($,X,Y){let G,H;if(Y)if(typeof Y==="function")H=Y;else H=Y.optionHandler,G=Y.replaceRequest;let Q=H?(W)=>{let w=H(W);return Array.isArray(w)?w:[w]}:(W)=>{let w=void 0;try{w=W.executionCtx}catch{}return[W.env,w]};G||=(()=>{let W=R$(this._basePath,$),w=W==="/"?0:W.length;return(B)=>{let U=new URL(B.url);return U.pathname=U.pathname.slice(w)||"/",new Request(U,B)}})();let J=async(W,w)=>{let B=await X(G(W.req.raw),...Q(W));if(B)return B;await w()};return this.addRoute(r1,R$($,"*"),J),this}addRoute($,X,Y){$=$.toUpperCase(),X=R$(this._basePath,X);let G={path:X,method:$,handler:Y};this.router.add($,X,[Y,G]),this.routes.push(G)}matchRoute($,X){return this.router.match($,X)}handleError($,X){if($ instanceof Error)return this.errorHandler($,X);throw $}dispatch($,X,Y,G){if(G==="HEAD")return(async()=>new Response(null,await this.dispatch($,X,Y,"GET")))();let H=this.getPath($,{env:Y}),Q=this.matchRoute(G,H),J=new w6($,{path:H,matchResult:Q,env:Y,executionCtx:X,notFoundHandler:this.notFoundHandler});if(Q[0].length===1){let w;try{w=Q[0][0][0][0](J,async()=>{J.res=await this.notFoundHandler(J)})}catch(B){return this.handleError(B,J)}return w instanceof Promise?w.then((B)=>B||(J.finalized?J.res:this.notFoundHandler(J))).catch((B)=>this.handleError(B,J)):w??this.notFoundHandler(J)}let W=Y9(Q[0],this.errorHandler,this.notFoundHandler);return(async()=>{try{let w=await W(J);if(!w.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return w.res}catch(w){return this.handleError(w,J)}})()}fetch=($,...X)=>{return this.dispatch($,X[1],X[0],$.method)};request=($,X,Y,G)=>{if($ instanceof Request){if(X!==void 0)$=new Request($,X);return this.fetch($,Y,G)}$=$.toString();let H=/^https?:\/\//.test($)?$:`http://localhost${R$("/",$)}`,Q=new Request(H,X);return this.fetch(Q,Y,G)};fire=()=>{addEventListener("fetch",($)=>{$.respondWith(this.dispatch($.request,$,void 0,$.request.method))})}};var p8="[^/]+",L5=".*",O5="(?:|/.*)",B6=Symbol(),Pz=new Set(".\\+*[^]$()");function Sz($,X){if($.length===1)return X.length===1?$<X?-1:1:-1;if(X.length===1)return 1;if($===L5||$===O5)return 1;else if(X===L5||X===O5)return-1;if($===p8)return 1;else if(X===p8)return-1;return $.length===X.length?$<X?-1:1:X.length-$.length}var c8=class{index;varIndex;children=Object.create(null);insert($,X,Y,G,H){if($.length===0){if(this.index!==void 0)throw B6;if(H)return;this.index=X;return}let[Q,...J]=$,W=Q==="*"?J.length===0?["","",L5]:["","",p8]:Q==="/*"?["","",O5]:Q.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),w;if(W){let B=W[1],U=W[2]||p8;if(B&&W[2]){if(U=U.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(U))throw B6}if(w=this.children[U],!w){if(Object.keys(this.children).some((V)=>V!==L5&&V!==O5))throw B6;if(H)return;if(w=this.children[U]=new c8,B!=="")w.varIndex=G.varIndex++}if(!H&&B!=="")Y.push([B,w.varIndex])}else if(w=this.children[Q],!w){if(Object.keys(this.children).some((B)=>B.length>1&&B!==L5&&B!==O5))throw B6;if(H)return;w=this.children[Q]=new c8}w.insert(J,X,Y,G,H)}buildRegExpStr(){let X=Object.keys(this.children).sort(Sz).map((Y)=>{let G=this.children[Y];return(typeof G.varIndex==="number"?`(${Y})@${G.varIndex}`:Pz.has(Y)?`\\${Y}`:Y)+G.buildRegExpStr()});if(typeof this.index==="number")X.unshift(`#${this.index}`);if(X.length===0)return"";if(X.length===1)return X[0];return"(?:"+X.join("|")+")"}};var V2=class{context={varIndex:0};root=new c8;insert($,X,Y){let G=[],H=[];for(let J=0;;){let W=!1;if($=$.replace(/\{[^}]+\}/g,(w)=>{let B=`@\\${J}`;return H[J]=[B,w],J++,W=!0,B}),!W)break}let Q=$.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let J=H.length-1;J>=0;J--){let[W]=H[J];for(let w=Q.length-1;w>=0;w--)if(Q[w].indexOf(W)!==-1){Q[w]=Q[w].replace(W,H[J][1]);break}}return this.root.insert(Q,X,G,this.context,Y),G}buildRegExp(){let $=this.root.buildRegExpStr();if($==="")return[/^$/,[],[]];let X=0,Y=[],G=[];return $=$.replace(/#(\d+)|@(\d+)|\.\*\$/g,(H,Q,J)=>{if(typeof Q!=="undefined")return Y[++X]=Number(Q),"$()";if(typeof J!=="undefined")return G[Number(J)]=++X,"";return""}),[new RegExp(`^${$}`),Y,G]}};var F2=[],Iz=[/^$/,[],Object.create(null)],E2=Object.create(null);function A2($){return E2[$]??=new RegExp($==="*"?"":`^${$.replace(/\/\*$|([.\\+*[^\]$()])/g,(X,Y)=>Y?`\\${Y}`:"(?:|/.*)")}\$`)}function Cz(){E2=Object.create(null)}function jz($){let X=new V2,Y=[];if($.length===0)return Iz;let G=$.map((B)=>[!/\*|\/:/.test(B[0]),...B]).sort(([B,U],[V,F])=>B?1:V?-1:U.length-F.length),H=Object.create(null);for(let B=0,U=-1,V=G.length;B<V;B++){let[F,E,K]=G[B];if(F)H[E]=[K.map(([P])=>[P,Object.create(null)]),F2];else U++;let A;try{A=X.insert(E,U,F)}catch(P){throw P===B6?new u8(E):P}if(F)continue;Y[U]=K.map(([P,_])=>{let C=Object.create(null);_-=1;for(;_>=0;_--){let[b,T]=A[_];C[b]=T}return[P,C]})}let[Q,J,W]=X.buildRegExp();for(let B=0,U=Y.length;B<U;B++)for(let V=0,F=Y[B].length;V<F;V++){let E=Y[B][V]?.[1];if(!E)continue;let K=Object.keys(E);for(let A=0,P=K.length;A<P;A++)E[K[A]]=W[E[K[A]]]}let w=[];for(let B in J)w[B]=Y[J[B]];return[Q,w,H]}function U6($,X){if(!$)return;for(let Y of Object.keys($).sort((G,H)=>H.length-G.length))if(A2(Y).test(X))return[...$[Y]];return}var H9=class{name="RegExpRouter";middleware;routes;constructor(){this.middleware={[r1]:Object.create(null)},this.routes={[r1]:Object.create(null)}}add($,X,Y){let{middleware:G,routes:H}=this;if(!G||!H)throw new Error(m8);if(!G[$])[G,H].forEach((W)=>{W[$]=Object.create(null),Object.keys(W[r1]).forEach((w)=>{W[$][w]=[...W[r1][w]]})});if(X==="/*")X="*";let Q=(X.match(/\/:/g)||[]).length;if(/\*$/.test(X)){let W=A2(X);if($===r1)Object.keys(G).forEach((w)=>{G[w][X]||=U6(G[w],X)||U6(G[r1],X)||[]});else G[$][X]||=U6(G[$],X)||U6(G[r1],X)||[];Object.keys(G).forEach((w)=>{if($===r1||$===w)Object.keys(G[w]).forEach((B)=>{W.test(B)&&G[w][B].push([Y,Q])})}),Object.keys(H).forEach((w)=>{if($===r1||$===w)Object.keys(H[w]).forEach((B)=>W.test(B)&&H[w][B].push([Y,Q]))});return}let J=b8(X)||[X];for(let W=0,w=J.length;W<w;W++){let B=J[W];Object.keys(H).forEach((U)=>{if($===r1||$===U)H[U][B]||=[...U6(G[U],B)||U6(G[r1],B)||[]],H[U][B].push([Y,Q-w+W+1])})}}match($,X){Cz();let Y=this.buildAllMatchers();return this.match=(G,H)=>{let Q=Y[G]||Y[r1],J=Q[2][H];if(J)return J;let W=H.match(Q[0]);if(!W)return[[],F2];let w=W.indexOf("",1);return[Q[1][w],W]},this.match($,X)}buildAllMatchers(){let $=Object.create(null);return[...Object.keys(this.routes),...Object.keys(this.middleware)].forEach((X)=>{$[X]||=this.buildMatcher(X)}),this.middleware=this.routes=void 0,$}buildMatcher($){let X=[],Y=$===r1;if([this.middleware,this.routes].forEach((G)=>{let H=G[$]?Object.keys(G[$]).map((Q)=>[Q,G[$][Q]]):[];if(H.length!==0)Y||=!0,X.push(...H);else if($!==r1)X.push(...Object.keys(G[r1]).map((Q)=>[Q,G[r1][Q]]))}),!Y)return null;else return jz(X)}};var Q9=class{name="SmartRouter";routers=[];routes=[];constructor($){Object.assign(this,$)}add($,X,Y){if(!this.routes)throw new Error(m8);this.routes.push([$,X,Y])}match($,X){if(!this.routes)throw new Error("Fatal error");let{routers:Y,routes:G}=this,H=Y.length,Q=0,J;for(;Q<H;Q++){let W=Y[Q];try{for(let w=0,B=G.length;w<B;w++)W.add(...G[w]);J=W.match($,X)}catch(w){if(w instanceof u8)continue;throw w}this.match=W.match.bind(W),this.routers=[W],this.routes=void 0;break}if(Q===H)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,J}get activeRouter(){if(this.routes||this.routers.length!==1)throw new Error("No active router has been determined yet.");return this.routers[0]}};var J9=class{methods;children;patterns;order=0;params=Object.create(null);constructor($,X,Y){if(this.children=Y||Object.create(null),this.methods=[],$&&X){let G=Object.create(null);G[$]={handler:X,possibleKeys:[],score:0},this.methods=[G]}this.patterns=[]}insert($,X,Y){this.order=++this.order;let G=this,H=X2(X),Q=[];for(let w=0,B=H.length;w<B;w++){let U=H[w];if(Object.keys(G.children).includes(U)){G=G.children[U];let F=tX(U);if(F)Q.push(F[1]);continue}G.children[U]=new J9;let V=tX(U);if(V)G.patterns.push(V),Q.push(V[1]);G=G.children[U]}if(!G.methods.length)G.methods=[];let J=Object.create(null),W={handler:Y,possibleKeys:Q.filter((w,B,U)=>U.indexOf(w)===B),score:this.order};return J[$]=W,G.methods.push(J),G}gHSets($,X,Y,G){let H=[];for(let Q=0,J=$.methods.length;Q<J;Q++){let W=$.methods[Q],w=W[X]||W[r1],B=Object.create(null);if(w!==void 0){w.params=Object.create(null);for(let U=0,V=w.possibleKeys.length;U<V;U++){let F=w.possibleKeys[U],E=B[w.score];w.params[F]=G[F]&&!E?G[F]:Y[F]??G[F],B[w.score]=!0}H.push(w)}}return H}search($,X){let Y=[];this.params=Object.create(null);let H=[this],Q=aX(X);for(let W=0,w=Q.length;W<w;W++){let B=Q[W],U=W===w-1,V=[];for(let F=0,E=H.length;F<E;F++){let K=H[F],A=K.children[B];if(A)if(A.params=K.params,U){if(A.children["*"])Y.push(...this.gHSets(A.children["*"],$,K.params,Object.create(null)));Y.push(...this.gHSets(A,$,K.params,Object.create(null)))}else V.push(A);for(let P=0,_=K.patterns.length;P<_;P++){let C=K.patterns[P],b={...K.params};if(C==="*"){let d=K.children["*"];if(d)Y.push(...this.gHSets(d,$,K.params,Object.create(null))),V.push(d);continue}if(B==="")continue;let[T,p,k]=C,x=K.children[T],S=Q.slice(W).join("/");if(k instanceof RegExp&&k.test(S)){b[p]=S,Y.push(...this.gHSets(x,$,K.params,b));continue}if(k===!0||k.test(B)){if(typeof T==="string")if(b[p]=B,U){if(Y.push(...this.gHSets(x,$,b,K.params)),x.children["*"])Y.push(...this.gHSets(x.children["*"],$,b,K.params))}else x.params=b,V.push(x)}}}H=V}return[Y.sort((W,w)=>{return W.score-w.score}).map(({handler:W,params:w})=>[W,w])]}};var W9=class{name="TrieRouter";node;constructor(){this.node=new J9}add($,X,Y){let G=b8(X);if(G){for(let H=0,Q=G.length;H<Q;H++)this.node.insert($,G[H],Y);return}this.node.insert($,X,Y)}match($,X){return this.node.search($,X)}};var H$=class extends G9{constructor($={}){super($);this.router=$.router??new Q9({routers:[new H9,new W9]})}};var Tz=class{initApp;constructor($){this.initApp=$?.initApp}createApp=()=>{let $=new H$;if(this.initApp)this.initApp($);return $};createMiddleware=($)=>$;createHandlers=(...$)=>{return $.filter((X)=>X!==void 0)}},kz=($)=>new Tz($),K2=($)=>kz().createMiddleware($);var o$=class extends Error{res;status;constructor($=500,X){super(X?.message,{cause:X?.cause});this.res=X?.res,this.status=$}getResponse(){if(this.res)return new Response(this.res.body,{status:this.status,headers:this.res.headers});return new Response(this.message,{status:this.status})}};var z2={OK:200,MovedPermanently:301,BadRequest:400,Unauthorized:401,Forbidden:403,NotFound:404,Conflict:409,InternalServerError:500,ServiceUnavailable:503};function x$($,X,Y,G=!0){return{success:G||!1,message:$,meta:Y,data:X||null}}var R5=($)=>{return async(X)=>{try{let Y=await $(X);return X.status(200),X.json(Y)}catch(Y){if(Y instanceof o$)return X.status(Y.status),X.json({success:!1,message:Y.message,data:null,meta:{status:Y.status}});return console.error("Internal Server Error. Log : ",Y),X.status(500),X.json({success:!1,message:"Request is not processed by the server.",data:null,meta:{status:500}})}}};function d8({routes:$,routeGuard:X,basePath:Y=null}){let G=new H$().basePath(Y??"");if(X)G.use(L2(X));for(let{method:H,path:Q,controller:J,useGuards:W=[]}of $){let w=W.map((B)=>L2(B));switch(H){case"POST":G.post(Q,...w,R5(J));break;case"GET":G.get(Q,...w,R5(J));break;case"PUT":G.put(Q,...w,R5(J));break;case"DELETE":G.delete(Q,...w,R5(J));break;case"PATCH":G.patch(Q,...w,R5(J));break}}return G}function O2($){let X=new H$;for(let Y of $){let G=new Y;if(G.routes===void 0)throw new Error("Router must have a 'routes' method");X.route("/",G.routes)}return X}function l8({basePath:$,routers:X}){let Y=new H$().basePath($??"");for(let G of X)Y.route("/",G);return Y}function L2($){return K2(async(X,Y)=>{try{await new $().use(X,Y)}catch(G){if(G instanceof o$)return X.status(G.status),X.json(x$(G.message,null,{},!1));if(G instanceof Error)return X.status(z2.Unauthorized),X.json(x$(G.message,null,{},!1));return X.status(z2.BadRequest),X.json(x$("Bad Request",null,{},!1))}})}var R2=($)=>{let Y={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...$},G=((H)=>{if(typeof H==="string")if(H==="*")return()=>H;else return(Q)=>H===Q?Q:null;else if(typeof H==="function")return H;else return(Q)=>H.includes(Q)?Q:null})(Y.origin);return async function H(Q,J){function W(B,U){Q.res.headers.set(B,U)}let w=G(Q.req.header("origin")||"",Q);if(w)W("Access-Control-Allow-Origin",w);if(Y.origin!=="*"){let B=Q.req.header("Vary");if(B)W("Vary",B);else W("Vary","Origin")}if(Y.credentials)W("Access-Control-Allow-Credentials","true");if(Y.exposeHeaders?.length)W("Access-Control-Expose-Headers",Y.exposeHeaders.join(","));if(Q.req.method==="OPTIONS"){if(Y.maxAge!=null)W("Access-Control-Max-Age",Y.maxAge.toString());if(Y.allowMethods?.length)W("Access-Control-Allow-Methods",Y.allowMethods.join(","));let B=Y.allowHeaders;if(!B?.length){let U=Q.req.header("Access-Control-Request-Headers");if(U)B=U.split(/\s*,\s*/)}if(B?.length)W("Access-Control-Allow-Headers",B.join(",")),Q.res.headers.append("Vary","Access-Control-Request-Headers");return Q.res.headers.delete("Content-Length"),Q.res.headers.delete("Content-Type"),new Response(null,{headers:Q.res.headers,status:204,statusText:Q.res.statusText})}await J()}};var xz=/^(GET|HEAD)$/,vz=/^\b(application\/x-www-form-urlencoded|multipart\/form-data|text\/plain)\b/i,D2=($)=>{let X=((G)=>{if(!G)return(H,Q)=>H===new URL(Q.req.url).origin;else if(typeof G==="string")return(H)=>H===G;else if(typeof G==="function")return G;else return(H)=>G.includes(H)})($?.origin),Y=(G,H)=>{if(G===void 0)return!1;return X(G,H)};return async function G(H,Q){if(!xz.test(H.req.method)&&vz.test(H.req.header("content-type")||"text/plain")&&!Y(H.req.header("origin"),H)){let J=new Response("Forbidden",{status:403});throw new o$(403,{res:J})}await Q()}};function _2(){let{process:$,Deno:X}=globalThis;return!(typeof X?.noColor==="boolean"?X.noColor:typeof $!=="undefined"?"NO_COLOR"in $?.env:!1)}var fz=($)=>{let[X,Y]=[",","."];return $.map((H)=>H.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+X)).join(Y)},hz=($)=>{let X=Date.now()-$;return fz([X<1000?X+"ms":Math.round(X/1000)+"s"])},yz=($)=>{let X=_2(),Y={7:X?`\x1B[35m${$}\x1B[0m`:`${$}`,5:X?`\x1B[31m${$}\x1B[0m`:`${$}`,4:X?`\x1B[33m${$}\x1B[0m`:`${$}`,3:X?`\x1B[36m${$}\x1B[0m`:`${$}`,2:X?`\x1B[32m${$}\x1B[0m`:`${$}`,1:X?`\x1B[32m${$}\x1B[0m`:`${$}`,0:X?`\x1B[33m${$}\x1B[0m`:`${$}`},G=$/100|0;return Y[G]};function N2($,X,Y,G,H=0,Q){let J=X==="<--"?`${X} ${Y} ${G}`:`${X} ${Y} ${G} ${yz(H)} ${Q}`;$(J)}var q2=($=console.log)=>{return async function X(Y,G){let{method:H}=Y.req,Q=z5(Y.req.raw);N2($,"<--",H,Q);let J=Date.now();await G(),N2($,"-->",H,Q,Y.res.status,hz(J))}};var bz={crossOriginEmbedderPolicy:["Cross-Origin-Embedder-Policy","require-corp"],crossOriginResourcePolicy:["Cross-Origin-Resource-Policy","same-origin"],crossOriginOpenerPolicy:["Cross-Origin-Opener-Policy","same-origin"],originAgentCluster:["Origin-Agent-Cluster","?1"],referrerPolicy:["Referrer-Policy","no-referrer"],strictTransportSecurity:["Strict-Transport-Security","max-age=15552000; includeSubDomains"],xContentTypeOptions:["X-Content-Type-Options","nosniff"],xDnsPrefetchControl:["X-DNS-Prefetch-Control","off"],xDownloadOptions:["X-Download-Options","noopen"],xFrameOptions:["X-Frame-Options","SAMEORIGIN"],xPermittedCrossDomainPolicies:["X-Permitted-Cross-Domain-Policies","none"],xXssProtection:["X-XSS-Protection","0"]},gz={crossOriginEmbedderPolicy:!1,crossOriginResourcePolicy:!0,crossOriginOpenerPolicy:!0,originAgentCluster:!0,referrerPolicy:!0,strictTransportSecurity:!0,xContentTypeOptions:!0,xDnsPrefetchControl:!0,xDownloadOptions:!0,xFrameOptions:!0,xPermittedCrossDomainPolicies:!0,xXssProtection:!0,removePoweredBy:!0,permissionsPolicy:{}};var w9=($)=>{let X={...gz,...$},Y=mz(X),G=[];if(X.contentSecurityPolicy){let[H,Q]=M2(X.contentSecurityPolicy);if(H)G.push(H);Y.push(["Content-Security-Policy",Q])}if(X.contentSecurityPolicyReportOnly){let[H,Q]=M2(X.contentSecurityPolicyReportOnly);if(H)G.push(H);Y.push(["Content-Security-Policy-Report-Only",Q])}if(X.permissionsPolicy&&Object.keys(X.permissionsPolicy).length>0)Y.push(["Permissions-Policy",uz(X.permissionsPolicy)]);if(X.reportingEndpoints)Y.push(["Reporting-Endpoints",cz(X.reportingEndpoints)]);if(X.reportTo)Y.push(["Report-To",dz(X.reportTo)]);return async function H(Q,J){let W=G.length===0?Y:G.reduce((w,B)=>B(Q,w),Y);if(await J(),lz(Q,W),X?.removePoweredBy)Q.res.headers.delete("X-Powered-By")}};function mz($){return Object.entries(bz).filter(([X])=>$[X]).map(([X,Y])=>{let G=$[X];return typeof G==="string"?[Y[0],G]:Y})}function M2($){let X=[],Y=[];for(let[G,H]of Object.entries($)){let Q=Array.isArray(H)?H:[H];Q.forEach((J,W)=>{if(typeof J==="function"){let w=W*2+2+Y.length;X.push((B,U)=>{U[w]=J(B,G)})}}),Y.push(G.replace(/[A-Z]+(?![a-z])|[A-Z]/g,(J,W)=>W?"-"+J.toLowerCase():J.toLowerCase()),...Q.flatMap((J)=>[" ",J]),"; ")}return Y.pop(),X.length===0?[void 0,Y.join("")]:[(G,H)=>H.map((Q)=>{if(Q[0]==="Content-Security-Policy"||Q[0]==="Content-Security-Policy-Report-Only"){let J=Q[1].slice();return X.forEach((W)=>{W(G,J)}),[Q[0],J.join("")]}else return Q}),Y]}function uz($){return Object.entries($).map(([X,Y])=>{let G=pz(X);if(typeof Y==="boolean")return`${G}=${Y?"*":"none"}`;if(Array.isArray(Y)){if(Y.length===0)return`${G}=()`;if(Y.length===1&&(Y[0]==="*"||Y[0]==="none"))return`${G}=${Y[0]}`;let H=Y.map((Q)=>["self","src"].includes(Q)?Q:`"${Q}"`);return`${G}=(${H.join(" ")})`}return""}).filter(Boolean).join(", ")}function pz($){return $.replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()}function cz($=[]){return $.map((X)=>`${X.name}="${X.url}"`).join(", ")}function dz($=[]){return $.map((X)=>JSON.stringify(X)).join(", ")}function lz($,X){X.forEach(([Y,G])=>{$.res.headers.set(Y,G)})}var Z2={contentSecurityPolicy:{baseUri:["'self'"]},xXssProtection:"1; mode=block",xFrameOptions:"DENY",xContentTypeOptions:"nosniff",referrerPolicy:!0,crossOriginEmbedderPolicy:!0,crossOriginOpenerPolicy:!0,crossOriginResourcePolicy:!0,xRobotsTag:"none"};var P2={origin:"*",credentials:!0,methods:["GET","POST","PUT","PATCH","DELETE"],allowedHeaders:["Content-Type","Authorization"]};var V6={PORT:process.env.PORT||3000,API_VERSION:"v1",DATABASE_URL:"postgres://postgres:postgres@localhost:5432/dokanify",REDIS_URL:"redis://default:eb6i0JSBzINSx48x6drjA4pfZULVOPu7@redis-13102.c266.us-east-1-3.ec2.redns.redis-cloud.com:13102"};async function S2($){let X=[];for(let Y of $){let G=new Y;X.push(G.worker)}await Promise.all(X)}class B9{async auth(){return x$("Hi from auth services!")}}class U9{authServices;constructor(){this.authServices=new B9}auth=async($)=>{return this.authServices.auth()}}class V9{routes;constructor(){this.routes=l8({routers:[this.defaultRoutes()],basePath:"/auth"})}defaultRoutes(){let $=new U9;return d8({basePath:"/",routes:[{path:"/",method:"GET",controller:$.auth}]})}}class F9{async blogs(){return x$("Hi from blogs!")}}class E9{blogsServices;constructor(){this.blogsServices=new F9}blogs=async($)=>{return this.blogsServices.blogs()}}class A9{routes;constructor(){this.routes=l8({routers:[this.defaultRoutes()],basePath:"/blogs"})}defaultRoutes(){let $=new E9;return d8({basePath:"/",routes:[{path:"/",method:"GET",controller:$.blogs}]})}}class I2{constructor($){this.value=void 0,this.next=null,this.value=$}}class C2{constructor(){this.length=0,this.head=null,this.tail=null}push($){let X=new I2($);if(!this.length)this.head=X;else this.tail.next=X;return this.tail=X,this.length+=1,X}shift(){if(!this.length)return null;else{let $=this.head;return this.head=this.head.next,this.length-=1,$}}}class K9{constructor($=!1){this.ignoreErrors=$,this.queue=new C2,this.pending=new Set,this.newPromise()}add($){this.pending.add($),$.then((X)=>{if(this.pending.delete($),this.queue.length===0)this.resolvePromise(X);this.queue.push(X)}).catch((X)=>{if(this.ignoreErrors)this.queue.push(void 0);this.pending.delete($),this.rejectPromise(X)})}async waitAll(){await Promise.all(this.pending)}numTotal(){return this.pending.size+this.queue.length}numPending(){return this.pending.size}numQueued(){return this.queue.length}resolvePromise($){this.resolve($),this.newPromise()}rejectPromise($){this.reject($),this.newPromise()}newPromise(){this.nextPromise=new Promise(($,X)=>{this.resolve=$,this.reject=X})}async wait(){return this.nextPromise}async fetch(){var $;if(this.pending.size===0&&this.queue.length===0)return;while(this.queue.length===0)try{await this.wait()}catch(X){if(!this.ignoreErrors)console.error("Unexpected Error in AsyncFifoQueue",X)}return($=this.queue.shift())===null||$===void 0?void 0:$.value}}class M4{static normalize($){if(Number.isFinite($))return{type:"fixed",delay:$};else if($)return $}static calculate($,X,Y,G,H){if($)return iz($,H)(X,$.type,Y,G)}}M4.builtinStrategies={fixed:function($){return function(){return $}},exponential:function($){return function(X){return Math.round(Math.pow(2,X-1)*$)}}};function iz($,X){if($.type in M4.builtinStrategies)return M4.builtinStrategies[$.type]($.delay);else if(X)return X;else throw new Error(`Unknown backoff strategy ${$.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`)}import*as T2 from"path";import{fork as nz}from"child_process";import{createServer as rz}from"net";import{Worker as sz}from"worker_threads";var F6;(function($){$[$.Init=0]="Init",$[$.Start=1]="Start",$[$.Stop=2]="Stop"})(F6||(F6={}));var Q$;(function($){$[$.JobNotExist=-1]="JobNotExist",$[$.JobLockNotExist=-2]="JobLockNotExist",$[$.JobNotInState=-3]="JobNotInState",$[$.JobPendingDependencies=-4]="JobPendingDependencies",$[$.ParentJobNotExist=-5]="ParentJobNotExist",$[$.JobLockMismatch=-6]="JobLockMismatch",$[$.ParentJobCannotBeReplaced=-7]="ParentJobCannotBeReplaced",$[$.JobBelongsToJobScheduler=-8]="JobBelongsToJobScheduler"})(Q$||(Q$={}));var S0;(function($){$[$.Completed=0]="Completed",$[$.Error=1]="Error",$[$.Failed=2]="Failed",$[$.InitFailed=3]="InitFailed",$[$.InitCompleted=4]="InitCompleted",$[$.Log=5]="Log",$[$.MoveToDelayed=6]="MoveToDelayed",$[$.Progress=7]="Progress",$[$.Update=8]="Update"})(S0||(S0={}));var j2;(function($){$[$.ONE_MINUTE=1]="ONE_MINUTE",$[$.FIVE_MINUTES=5]="FIVE_MINUTES",$[$.FIFTEEN_MINUTES=15]="FIFTEEN_MINUTES",$[$.THIRTY_MINUTES=30]="THIRTY_MINUTES",$[$.ONE_HOUR=60]="ONE_HOUR",$[$.ONE_WEEK=10080]="ONE_WEEK",$[$.TWO_WEEKS=20160]="TWO_WEEKS",$[$.ONE_MONTH=80640]="ONE_MONTH"})(j2||(j2={}));var Y1;(function($){$.QueueName="bullmq.queue.name",$.QueueOperation="bullmq.queue.operation",$.BulkCount="bullmq.job.bulk.count",$.BulkNames="bullmq.job.bulk.names",$.JobName="bullmq.job.name",$.JobId="bullmq.job.id",$.JobKey="bullmq.job.key",$.JobIds="bullmq.job.ids",$.DeduplicationKey="bullmq.job.deduplication.key",$.JobOptions="bullmq.job.options",$.JobProgress="bullmq.job.progress",$.QueueDrainDelay="bullmq.queue.drain.delay",$.QueueGrace="bullmq.queue.grace",$.QueueCleanLimit="bullmq.queue.clean.limit",$.JobType="bullmq.job.type",$.QueueOptions="bullmq.queue.options",$.QueueEventMaxLength="bullmq.queue.event.max.length",$.WorkerOptions="bullmq.worker.options",$.WorkerName="bullmq.worker.name",$.WorkerId="bullmq.worker.id",$.WorkerRateLimit="bullmq.worker.rate.limit",$.WorkerDoNotWaitActive="bullmq.worker.do.not.wait.active",$.WorkerForceClose="bullmq.worker.force.close",$.WorkerStalledJobs="bullmq.worker.stalled.jobs",$.WorkerFailedJobs="bullmq.worker.failed.jobs",$.WorkerJobsToExtendLocks="bullmq.worker.jobs.to.extend.locks",$.JobFinishedTimestamp="bullmq.job.finished.timestamp",$.JobProcessedTimestamp="bullmq.job.processed.timestamp",$.JobResult="bullmq.job.result",$.JobFailedReason="bullmq.job.failed.reason"})(Y1||(Y1={}));var N1;(function($){$[$.INTERNAL=0]="INTERNAL",$[$.SERVER=1]="SERVER",$[$.CLIENT=2]="CLIENT",$[$.PRODUCER=3]="PRODUCER",$[$.CONSUMER=4]="CONSUMER"})(N1||(N1={}));import{EventEmitter as oz}from"events";var az={1:"Uncaught Fatal Exception",2:"Unused",3:"Internal JavaScript Parse Error",4:"Internal JavaScript Evaluation Failure",5:"Fatal Error",6:"Non-function Internal Exception Handler",7:"Internal Exception Handler Run-Time Failure",8:"Unused",9:"Invalid Argument",10:"Internal JavaScript Run-Time Failure",12:"Invalid Debug Argument",13:"Unfinished Top-Level Await"};class z9 extends oz{constructor($,X,Y={useWorkerThreads:!1}){super();this.mainFile=$,this.processFile=X,this.opts=Y,this._exitCode=null,this._signalCode=null,this._killed=!1}get pid(){if(this.childProcess)return this.childProcess.pid;else if(this.worker)return this.worker.threadId;else throw new Error("No child process or worker thread")}get exitCode(){return this._exitCode}get signalCode(){return this._signalCode}get killed(){if(this.childProcess)return this.childProcess.killed;return this._killed}async init(){let $=await $L(process.execArgv),X;if(this.opts.useWorkerThreads)this.worker=X=new sz(this.mainFile,Object.assign({execArgv:$,stdin:!0,stdout:!0,stderr:!0},this.opts.workerThreadsOptions?this.opts.workerThreadsOptions:{}));else this.childProcess=X=nz(this.mainFile,[],Object.assign({execArgv:$,stdio:"pipe"},this.opts.workerForkOptions?this.opts.workerForkOptions:{}));X.on("exit",(Y,G)=>{this._exitCode=Y,G=typeof G==="undefined"?null:G,this._signalCode=G,this._killed=!0,this.emit("exit",Y,G),X.removeAllListeners(),this.removeAllListeners()}),X.on("error",(...Y)=>this.emit("error",...Y)),X.on("message",(...Y)=>this.emit("message",...Y)),X.on("close",(...Y)=>this.emit("close",...Y)),X.stdout.pipe(process.stdout),X.stderr.pipe(process.stderr),await this.initChild()}async send($){return new Promise((X,Y)=>{if(this.childProcess)this.childProcess.send($,(G)=>{if(G)Y(G);else X()});else if(this.worker)X(this.worker.postMessage($));else X()})}killProcess($="SIGKILL"){if(this.childProcess)this.childProcess.kill($);else if(this.worker)this.worker.terminate()}async kill($="SIGKILL",X){if(this.hasProcessExited())return;let Y=tz(this.childProcess||this.worker);if(this.killProcess($),X!==void 0&&(X===0||isFinite(X))){let G=setTimeout(()=>{if(!this.hasProcessExited())this.killProcess("SIGKILL")},X);await Y,clearTimeout(G)}await Y}async initChild(){let $=new Promise((X,Y)=>{let G=(Q)=>{if(Q.cmd===S0.InitCompleted)X();else if(Q.cmd===S0.InitFailed){let J=new Error;J.stack=Q.err.stack,J.message=Q.err.message,Y(J)}this.off("message",G),this.off("close",H)},H=(Q,J)=>{if(Q>128)Q-=128;let W=az[Q]||`Unknown exit code ${Q}`;Y(new Error(`Error initializing child: ${W} and signal ${J}`)),this.off("message",G),this.off("close",H)};this.on("message",G),this.on("close",H)});await this.send({cmd:F6.Init,value:this.processFile}),await $}hasProcessExited(){return!!(this.exitCode!==null||this.signalCode)}}function tz($){return new Promise((X)=>{$.once("exit",()=>X())})}var ez=async()=>{return new Promise(($)=>{let X=rz();X.listen(0,()=>{let{port:Y}=X.address();X.close(()=>$(Y))})})},$L=async($)=>{let X=[],Y=[];for(let G=0;G<$.length;G++){let H=$[G];if(H.indexOf("--inspect")===-1)X.push(H);else{let Q=H.split("=")[0],J=await ez();Y.push(`${Q}=${J}`)}}return X.concat(Y)};var XL=30000;class L9{constructor({mainFile:$=T2.join(process.cwd(),"dist/cjs/classes/main.js"),useWorkerThreads:X,workerForkOptions:Y,workerThreadsOptions:G}){this.retained={},this.free={},this.opts={mainFile:$,useWorkerThreads:X,workerForkOptions:Y,workerThreadsOptions:G}}async retain($,X){let Y=this.getFree($).pop();if(Y)return this.retained[Y.pid]=Y,Y;Y=new z9(this.opts.mainFile,$,{useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions}),Y.on("exit",X);try{return await Y.init(),this.retained[Y.pid]=Y,Y}catch(G){throw console.error(G),this.release(Y),G}}release($){delete this.retained[$.pid],this.getFree($.processFile).push($)}remove($){delete this.retained[$.pid];let X=this.getFree($.processFile),Y=X.indexOf($);if(Y>-1)X.splice(Y,1)}async kill($,X="SIGKILL"){return this.remove($),$.kill(X,XL)}async clean(){let $=Object.values(this.retained).concat(this.getAllFree());this.retained={},this.free={},await Promise.all($.map((X)=>this.kill(X,"SIGTERM")))}getFree($){return this.free[$]=this.free[$]||[]}getAllFree(){return Object.values(this.free).reduce(($,X)=>$.concat(X),[])}}var uM=G$(A7(),1),Sw=G$(Y0(),1),q6=G$(Pw(),1),k4={value:null};function P7($,X,Y){try{return $.apply(X,Y)}catch(G){return k4.value=G,k4}}function Iw($){return Buffer.byteLength($,"utf8")}function Cw($){for(let X in $)if(Object.prototype.hasOwnProperty.call($,X))return!1;return!0}function S7($){let X={};for(let Y=0;Y<$.length;Y+=2)X[$[Y]]=$[Y+1];return X}function I7($,X){return new Promise((Y)=>{let G,H=()=>{X===null||X===void 0||X.signal.removeEventListener("abort",H),clearTimeout(G),Y()};G=setTimeout(H,$),X===null||X===void 0||X.signal.addEventListener("abort",H)})}function b5($,X){let Y=$.getMaxListeners();$.setMaxListeners(Y+X)}var jw=($)=>{return Object.entries($).reduce((X,[Y,G])=>{return X[G]=Y,X},{})};function h$($){if(!$)return!1;return["connect","disconnect","duplicate"].every((Y)=>typeof $[Y]==="function")}function Tw($){return h$($)&&$.isCluster}function C7($,X){b5($,-X)}function g5($){if($)return`${$.queue}:${$.id}`}var KY=/ERR unknown command ['`]\s*client\s*['`]/,kw=5000,xw=100;function x4($){let X=`${$.message}`;return X!==Sw.CONNECTION_CLOSED_ERROR_MSG&&!X.includes("ECONNREFUSED")}var Q4=($,X)=>{let Y=q6.valid(q6.coerce($));return q6.lt(Y,X)},zY=($)=>{let X={};for(let Y of Object.entries($))X[Y[0]]=JSON.parse(Y[1]);return X};var LY=":qe";var vw;(function($){$[$.Idle=0]="Idle",$[$.Started=1]="Started",$[$.Terminating=2]="Terminating",$[$.Errored=3]="Errored"})(vw||(vw={}));class OY extends Error{constructor($){super($);this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class RY extends Error{constructor($){super($);this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}var fw="bullmq:rateLimitExceeded";class DY extends Error{constructor($="bullmq:rateLimitExceeded"){super($);this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class _Y extends Error{constructor($){super($);this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}var N$=G$(CB(),1),nh=N$.default.v1,rh=N$.default.v3,k7=N$.default.v4,sh=N$.default.v5,oh=N$.default.NIL,ah=N$.default.version,th=N$.default.validate,eh=N$.default.stringify,$y=N$.default.parse;var QU=G$(HU(),1),{__extends:Gy,__assign:Hy,__rest:b$,__decorate:Qy,__param:Jy,__esDecorate:Wy,__runInitializers:wy,__propKey:By,__setFunctionName:Uy,__metadata:Vy,__awaiter:Fy,__generator:Ey,__exportStar:Ay,__createBinding:Ky,__values:zy,__read:Ly,__spread:Oy,__spreadArrays:Ry,__spreadArray:Dy,__await:_y,__asyncGenerator:Ny,__asyncDelegator:qy,__asyncValues:My,__makeTemplateObject:Zy,__importStar:Py,__importDefault:Sy,__classPrivateFieldGet:Iy,__classPrivateFieldSet:Cy,__classPrivateFieldIn:jy,__addDisposableResource:Ty,__disposeResources:ky,__rewriteRelativeImportExtension:xy}=QU.default;import{debuglog as gP}from"util";var jY;try{jY=new TextDecoder}catch($){}var c,b0,L=0;var vY=[],f4=vY,p5=0,k1={},_1,g$,y0=0,i0=0,$0,m$,C0=[],R1,JU={useRecords:!1,mapsAsObjects:!0};class g7{}var fY=new g7;fY.name="MessagePack 0xC1";var J4=!1,AU=2,TY,kY,xY;try{new Function("")}catch($){AU=1/0}class u${constructor($){if($){if($.useRecords===!1&&$.mapsAsObjects===void 0)$.mapsAsObjects=!0;if($.sequential&&$.trusted!==!1){if($.trusted=!0,!$.structures&&$.useRecords!=!1){if($.structures=[],!$.maxSharedStructures)$.maxSharedStructures=0}}if($.structures)$.structures.sharedLength=$.structures.length;else if($.getStructures)($.structures=[]).uninitialized=!0,$.structures.sharedLength=0;if($.int64AsNumber)$.int64AsType="number"}Object.assign(this,$)}unpack($,X){if(c)return ZU(()=>{return b7(),this?this.unpack($,X):u$.prototype.unpack.call(JU,$,X)});if(!$.buffer&&$.constructor===ArrayBuffer)$=typeof Buffer!=="undefined"?Buffer.from($):new Uint8Array($);if(typeof X==="object")b0=X.end||$.length,L=X.start||0;else L=0,b0=X>-1?X:$.length;p5=0,i0=0,g$=null,f4=vY,$0=null,c=$;try{R1=$.dataView||($.dataView=new DataView($.buffer,$.byteOffset,$.byteLength))}catch(Y){if(c=null,$ instanceof Uint8Array)throw Y;throw new Error("Source must be a Uint8Array or Buffer but was a "+($&&typeof $=="object"?$.constructor.name:typeof $))}if(this instanceof u$){if(k1=this,this.structures)return _1=this.structures,h7(X);else if(!_1||_1.length>0)_1=[]}else if(k1=JU,!_1||_1.length>0)_1=[];return h7(X)}unpackMultiple($,X){let Y,G=0;try{J4=!0;let H=$.length,Q=this?this.unpack($,H):m7.unpack($,H);if(X){if(X(Q,G,L)===!1)return;while(L<H)if(G=L,X(h7(),G,L)===!1)return}else{Y=[Q];while(L<H)G=L,Y.push(h7());return Y}}catch(H){throw H.lastPosition=G,H.values=Y,H}finally{J4=!1,b7()}}_mergeStructures($,X){if(kY)$=kY.call(this,$);if($=$||[],Object.isFrozen($))$=$.map((Y)=>Y.slice(0));for(let Y=0,G=$.length;Y<G;Y++){let H=$[Y];if(H){if(H.isShared=!0,Y>=32)H.highByte=Y-32>>5}}$.sharedLength=$.length;for(let Y in X||[])if(Y>=0){let G=$[Y],H=X[Y];if(H){if(G)($.restoreStructures||($.restoreStructures=[]))[Y]=G;$[Y]=H}}return this.structures=$}decode($,X){return this.unpack($,X)}}function h7($){try{if(!k1.trusted&&!J4){let Y=_1.sharedLength||0;if(Y<_1.length)_1.length=Y}let X;if(k1.randomAccessStructure&&c[L]<64&&c[L]>=32&&TY){if(X=TY(c,L,b0,k1),c=null,!($&&$.lazy)&&X)X=X.toJSON();L=b0}else X=o1();if($0)L=$0.postBundlePosition,$0=null;if(J4)_1.restoreStructures=null;if(L==b0){if(_1&&_1.restoreStructures)WU();if(_1=null,c=null,m$)m$=null}else if(L>b0)throw new Error("Unexpected end of MessagePack data");else if(!J4){let Y;try{Y=JSON.stringify(X,(G,H)=>typeof H==="bigint"?`${H}n`:H).slice(0,100)}catch(G){Y="(JSON view not available "+G+")"}throw new Error("Data read, but end of buffer not reached "+Y)}return X}catch(X){if(_1&&_1.restoreStructures)WU();if(b7(),X instanceof RangeError||X.message.startsWith("Unexpected end of buffer")||L>b0)X.incomplete=!0;throw X}}function WU(){for(let $ in _1.restoreStructures)_1[$]=_1.restoreStructures[$];_1.restoreStructures=null}function o1(){let $=c[L++];if($<160)if($<128)if($<64)return $;else{let X=_1[$&63]||k1.getStructures&&KU()[$&63];if(X){if(!X.read)X.read=hY(X,$&63);return X.read()}else return $}else if($<144)if($-=128,k1.mapsAsObjects){let X={};for(let Y=0;Y<$;Y++){let G=qU();if(G==="__proto__")G="__proto_";X[G]=o1()}return X}else{let X=new Map;for(let Y=0;Y<$;Y++)X.set(o1(),o1());return X}else{$-=144;let X=new Array($);for(let Y=0;Y<$;Y++)X[Y]=o1();if(k1.freezeData)return Object.freeze(X);return X}else if($<192){let X=$-160;if(i0>=L)return g$.slice(L-y0,(L+=X)-y0);if(i0==0&&b0<140){let Y=X<16?yY(X):NU(X);if(Y!=null)return Y}return y7(X)}else{let X;switch($){case 192:return null;case 193:if($0)if(X=o1(),X>0)return $0[1].slice($0.position1,$0.position1+=X);else return $0[0].slice($0.position0,$0.position0-=X);return fY;case 194:return!1;case 195:return!0;case 196:if(X=c[L++],X===void 0)throw new Error("Unexpected end of buffer");return CY(X);case 197:return X=R1.getUint16(L),L+=2,CY(X);case 198:return X=R1.getUint32(L),L+=4,CY(X);case 199:return v4(c[L++]);case 200:return X=R1.getUint16(L),L+=2,v4(X);case 201:return X=R1.getUint32(L),L+=4,v4(X);case 202:if(X=R1.getFloat32(L),k1.useFloat32>2){let Y=y4[(c[L]&127)<<1|c[L+1]>>7];return L+=4,(Y*X+(X>0?0.5:-0.5)>>0)/Y}return L+=4,X;case 203:return X=R1.getFloat64(L),L+=8,X;case 204:return c[L++];case 205:return X=R1.getUint16(L),L+=2,X;case 206:return X=R1.getUint32(L),L+=4,X;case 207:if(k1.int64AsType==="number")X=R1.getUint32(L)*4294967296,X+=R1.getUint32(L+4);else if(k1.int64AsType==="string")X=R1.getBigUint64(L).toString();else if(k1.int64AsType==="auto"){if(X=R1.getBigUint64(L),X<=BigInt(2)<<BigInt(52))X=Number(X)}else X=R1.getBigUint64(L);return L+=8,X;case 208:return R1.getInt8(L++);case 209:return X=R1.getInt16(L),L+=2,X;case 210:return X=R1.getInt32(L),L+=4,X;case 211:if(k1.int64AsType==="number")X=R1.getInt32(L)*4294967296,X+=R1.getUint32(L+4);else if(k1.int64AsType==="string")X=R1.getBigInt64(L).toString();else if(k1.int64AsType==="auto"){if(X=R1.getBigInt64(L),X>=BigInt(-2)<<BigInt(52)&&X<=BigInt(2)<<BigInt(52))X=Number(X)}else X=R1.getBigInt64(L);return L+=8,X;case 212:if(X=c[L++],X==114)return EU(c[L++]&63);else{let Y=C0[X];if(Y)if(Y.read)return L++,Y.read(o1());else if(Y.noBuffer)return L++,Y();else return Y(c.subarray(L,++L));else throw new Error("Unknown extension "+X)}case 213:if(X=c[L],X==114)return L++,EU(c[L++]&63,c[L++]);else return v4(2);case 214:return v4(4);case 215:return v4(8);case 216:return v4(16);case 217:if(X=c[L++],i0>=L)return g$.slice(L-y0,(L+=X)-y0);return zU(X);case 218:if(X=R1.getUint16(L),L+=2,i0>=L)return g$.slice(L-y0,(L+=X)-y0);return LU(X);case 219:if(X=R1.getUint32(L),L+=4,i0>=L)return g$.slice(L-y0,(L+=X)-y0);return OU(X);case 220:return X=R1.getUint16(L),L+=2,BU(X);case 221:return X=R1.getUint32(L),L+=4,BU(X);case 222:return X=R1.getUint16(L),L+=2,UU(X);case 223:return X=R1.getUint32(L),L+=4,UU(X);default:if($>=224)return $-256;if($===void 0){let Y=new Error("Unexpected end of MessagePack data");throw Y.incomplete=!0,Y}throw new Error("Unknown MessagePack token "+$)}}}var XP=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function hY($,X){function Y(){if(Y.count++>AU){let H=$.read=new Function("r","return function(){return "+(k1.freezeData?"Object.freeze":"")+"({"+$.map((Q)=>Q==="__proto__"?"__proto_:r()":XP.test(Q)?Q+":r()":"["+JSON.stringify(Q)+"]:r()").join(",")+"})}")(o1);if($.highByte===0)$.read=wU(X,$.read);return H()}let G={};for(let H=0,Q=$.length;H<Q;H++){let J=$[H];if(J==="__proto__")J="__proto_";G[J]=o1()}if(k1.freezeData)return Object.freeze(G);return G}if(Y.count=0,$.highByte===0)return wU(X,Y);return Y}var wU=($,X)=>{return function(){let Y=c[L++];if(Y===0)return X();let G=$<32?-($+(Y<<5)):$+(Y<<5),H=_1[G]||KU()[G];if(!H)throw new Error("Record id is not defined for "+G);if(!H.read)H.read=hY(H,$);return H.read()}};function KU(){let $=ZU(()=>{return c=null,k1.getStructures()});return _1=k1._mergeStructures($,_1)}var y7=h4,zU=h4,LU=h4,OU=h4,RU=!1;function DU($){RU=!0,y7=X(1),zU=X(2),LU=X(3),OU=X(5);function X(Y){return function G(H){let Q=f4[p5++];if(Q==null){if($0)return h4(H);let W=c.byteOffset,w=$(L-Y+W,b0+W,c.buffer);if(typeof w=="string")Q=w,f4=vY;else if(f4=w,p5=1,i0=1,Q=f4[0],Q===void 0)throw new Error("Unexpected end of buffer")}let J=Q.length;if(J<=H)return L+=H,Q;return g$=Q,y0=L,i0=L+J,L+=H,Q.slice(0,H)}}}function h4($){let X;if($<16){if(X=yY($))return X}if($>64&&jY)return jY.decode(c.subarray(L,L+=$));let Y=L+$,G=[];X="";while(L<Y){let H=c[L++];if((H&128)===0)G.push(H);else if((H&224)===192){let Q=c[L++]&63;G.push((H&31)<<6|Q)}else if((H&240)===224){let Q=c[L++]&63,J=c[L++]&63;G.push((H&31)<<12|Q<<6|J)}else if((H&248)===240){let Q=c[L++]&63,J=c[L++]&63,W=c[L++]&63,w=(H&7)<<18|Q<<12|J<<6|W;if(w>65535)w-=65536,G.push(w>>>10&1023|55296),w=56320|w&1023;G.push(w)}else G.push(H);if(G.length>=4096)X+=G0.apply(String,G),G.length=0}if(G.length>0)X+=G0.apply(String,G);return X}function _U($,X,Y){let G=c;c=$,L=X;try{return h4(Y)}finally{c=G}}function BU($){let X=new Array($);for(let Y=0;Y<$;Y++)X[Y]=o1();if(k1.freezeData)return Object.freeze(X);return X}function UU($){if(k1.mapsAsObjects){let X={};for(let Y=0;Y<$;Y++){let G=qU();if(G==="__proto__")G="__proto_";X[G]=o1()}return X}else{let X=new Map;for(let Y=0;Y<$;Y++)X.set(o1(),o1());return X}}var G0=String.fromCharCode;function NU($){let X=L,Y=new Array($);for(let G=0;G<$;G++){let H=c[L++];if((H&128)>0){L=X;return}Y[G]=H}return G0.apply(String,Y)}function yY($){if($<4)if($<2)if($===0)return"";else{let X=c[L++];if((X&128)>1){L-=1;return}return G0(X)}else{let X=c[L++],Y=c[L++];if((X&128)>0||(Y&128)>0){L-=2;return}if($<3)return G0(X,Y);let G=c[L++];if((G&128)>0){L-=3;return}return G0(X,Y,G)}else{let X=c[L++],Y=c[L++],G=c[L++],H=c[L++];if((X&128)>0||(Y&128)>0||(G&128)>0||(H&128)>0){L-=4;return}if($<6)if($===4)return G0(X,Y,G,H);else{let Q=c[L++];if((Q&128)>0){L-=5;return}return G0(X,Y,G,H,Q)}else if($<8){let Q=c[L++],J=c[L++];if((Q&128)>0||(J&128)>0){L-=6;return}if($<7)return G0(X,Y,G,H,Q,J);let W=c[L++];if((W&128)>0){L-=7;return}return G0(X,Y,G,H,Q,J,W)}else{let Q=c[L++],J=c[L++],W=c[L++],w=c[L++];if((Q&128)>0||(J&128)>0||(W&128)>0||(w&128)>0){L-=8;return}if($<10)if($===8)return G0(X,Y,G,H,Q,J,W,w);else{let B=c[L++];if((B&128)>0){L-=9;return}return G0(X,Y,G,H,Q,J,W,w,B)}else if($<12){let B=c[L++],U=c[L++];if((B&128)>0||(U&128)>0){L-=10;return}if($<11)return G0(X,Y,G,H,Q,J,W,w,B,U);let V=c[L++];if((V&128)>0){L-=11;return}return G0(X,Y,G,H,Q,J,W,w,B,U,V)}else{let B=c[L++],U=c[L++],V=c[L++],F=c[L++];if((B&128)>0||(U&128)>0||(V&128)>0||(F&128)>0){L-=12;return}if($<14)if($===12)return G0(X,Y,G,H,Q,J,W,w,B,U,V,F);else{let E=c[L++];if((E&128)>0){L-=13;return}return G0(X,Y,G,H,Q,J,W,w,B,U,V,F,E)}else{let E=c[L++],K=c[L++];if((E&128)>0||(K&128)>0){L-=14;return}if($<15)return G0(X,Y,G,H,Q,J,W,w,B,U,V,F,E,K);let A=c[L++];if((A&128)>0){L-=15;return}return G0(X,Y,G,H,Q,J,W,w,B,U,V,F,E,K,A)}}}}}function VU(){let $=c[L++],X;if($<192)X=$-160;else switch($){case 217:X=c[L++];break;case 218:X=R1.getUint16(L),L+=2;break;case 219:X=R1.getUint32(L),L+=4;break;default:throw new Error("Expected string")}return h4(X)}function CY($){return k1.copyBuffers?Uint8Array.prototype.slice.call(c,L,L+=$):c.subarray(L,L+=$)}function v4($){let X=c[L++];if(C0[X]){let Y;return C0[X](c.subarray(L,Y=L+=$),(G)=>{L=G;try{return o1()}finally{L=Y}})}else throw new Error("Unknown extension type "+X)}var FU=new Array(4096);function qU(){let $=c[L++];if($>=160&&$<192){if($=$-160,i0>=L)return g$.slice(L-y0,(L+=$)-y0);else if(!(i0==0&&b0<180))return y7($)}else return L--,MU(o1());let X=($<<5^($>1?R1.getUint16(L):$>0?c[L]:0))&4095,Y=FU[X],G=L,H=L+$-3,Q,J=0;if(Y&&Y.bytes==$){while(G<H){if(Q=R1.getUint32(G),Q!=Y[J++]){G=1879048192;break}G+=4}H+=3;while(G<H)if(Q=c[G++],Q!=Y[J++]){G=1879048192;break}if(G===H)return L=G,Y.string;H-=3,G=L}Y=[],FU[X]=Y,Y.bytes=$;while(G<H)Q=R1.getUint32(G),Y.push(Q),G+=4;H+=3;while(G<H)Q=c[G++],Y.push(Q);let W=$<16?yY($):NU($);if(W!=null)return Y.string=W;return Y.string=y7($)}function MU($){if(typeof $==="string")return $;if(typeof $==="number"||typeof $==="boolean"||typeof $==="bigint")return $.toString();if($==null)return $+"";throw new Error("Invalid property type for record",typeof $)}var EU=($,X)=>{let Y=o1().map(MU),G=$;if(X!==void 0)$=$<32?-((X<<5)+$):(X<<5)+$,Y.highByte=X;let H=_1[$];if(H&&(H.isShared||J4))(_1.restoreStructures||(_1.restoreStructures=[]))[$]=H;return _1[$]=Y,Y.read=hY(Y,G),Y.read()};C0[0]=()=>{};C0[0].noBuffer=!0;C0[66]=($)=>{let X=$.length,Y=BigInt($[0]&128?$[0]-256:$[0]);for(let G=1;G<X;G++)Y<<=8n,Y+=BigInt($[G]);return Y};var YP={Error,TypeError,ReferenceError};C0[101]=()=>{let $=o1();return(YP[$[0]]||Error)($[1],{cause:$[2]})};C0[105]=($)=>{if(k1.structuredClone===!1)throw new Error("Structured clone extension is disabled");let X=R1.getUint32(L-4);if(!m$)m$=new Map;let Y=c[L],G;if(Y>=144&&Y<160||Y==220||Y==221)G=[];else G={};let H={target:G};m$.set(X,H);let Q=o1();if(H.used)return Object.assign(G,Q);return H.target=Q,Q};C0[112]=($)=>{if(k1.structuredClone===!1)throw new Error("Structured clone extension is disabled");let X=R1.getUint32(L-4),Y=m$.get(X);return Y.used=!0,Y.target};C0[115]=()=>new Set(o1());var bY=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(($)=>$+"Array"),GP=typeof globalThis==="object"?globalThis:window;C0[116]=($)=>{let X=$[0],Y=bY[X];if(!Y){if(X===16){let G=new ArrayBuffer($.length-1);return new Uint8Array(G).set($.subarray(1)),G}throw new Error("Could not find typed array for code "+X)}return new GP[Y](Uint8Array.prototype.slice.call($,1).buffer)};C0[120]=()=>{let $=o1();return new RegExp($[0],$[1])};var HP=[];C0[98]=($)=>{let X=($[0]<<24)+($[1]<<16)+($[2]<<8)+$[3],Y=L;return L+=X-$.length,$0=HP,$0=[VU(),VU()],$0.position0=0,$0.position1=0,$0.postBundlePosition=L,L=Y,o1()};C0[255]=($)=>{if($.length==4)return new Date(($[0]*16777216+($[1]<<16)+($[2]<<8)+$[3])*1000);else if($.length==8)return new Date((($[0]<<22)+($[1]<<14)+($[2]<<6)+($[3]>>2))/1e6+(($[3]&3)*4294967296+$[4]*16777216+($[5]<<16)+($[6]<<8)+$[7])*1000);else if($.length==12)return new Date((($[0]<<24)+($[1]<<16)+($[2]<<8)+$[3])/1e6+(($[4]&128?-281474976710656:0)+$[6]*1099511627776+$[7]*4294967296+$[8]*16777216+($[9]<<16)+($[10]<<8)+$[11])*1000);else return new Date("invalid")};function ZU($){if(xY)xY();let X=b0,Y=L,G=p5,H=y0,Q=i0,J=g$,W=f4,w=m$,B=$0,U=new Uint8Array(c.slice(0,b0)),V=_1,F=_1.slice(0,_1.length),E=k1,K=J4,A=$();return b0=X,L=Y,p5=G,y0=H,i0=Q,g$=J,f4=W,m$=w,$0=B,c=U,J4=K,_1=V,_1.splice(0,_1.length,...F),k1=E,R1=new DataView(c.buffer,c.byteOffset,c.byteLength),A}function b7(){c=null,m$=null,_1=null}var y4=new Array(147);for(let $=0;$<256;$++)y4[$]=+("1e"+Math.floor(45.15-$*0.30103));var m7=new u$({useRecords:!1}),QP=m7.unpack,JP=m7.unpackMultiple,WP=m7.unpack;var wP=new Float32Array(1),fy=new Uint8Array(wP.buffer,0,4);function PU($,X,Y){TY=$,kY=X,xY=Y}var p7;try{p7=new TextEncoder}catch($){}var gY,kU,c7=typeof Buffer!=="undefined",u7=c7?function($){return Buffer.allocUnsafeSlow($)}:Uint8Array,xU=c7?Buffer:Uint8Array,SU=c7?4294967296:2144337920,N,c5,x1,D=0,q0,c1=null,vU,BP=21760,UP=/[\u0080-\uFFFF]/,q$=Symbol("record-id");class b4 extends u${constructor($){super($);this.offset=0;let X,Y,G,H,Q,J=xU.prototype.utf8Write?function(R,j){return N.utf8Write(R,j,4294967295)}:p7&&p7.encodeInto?function(R,j){return p7.encodeInto(R,N.subarray(j)).written}:!1,W=this;if(!$)$={};let w=$&&$.sequential,B=$.structures||$.saveStructures,U=$.maxSharedStructures;if(U==null)U=B?32:0;if(U>8160)throw new Error("Maximum maxSharedStructure is 8160");if($.structuredClone&&$.moreTypes==null)this.moreTypes=!0;let V=$.maxOwnStructures;if(V==null)V=B?32:64;if(!this.structures&&$.useRecords!=!1)this.structures=[];let F=U>32||V+U>64,E=U+64,K=U+V+64;if(K>8256)throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let A=[],P=0,_=0;this.pack=this.encode=function(R,j){if(!N)N=new u7(8192),x1=N.dataView||(N.dataView=new DataView(N.buffer,0,8192)),D=0;if(q0=N.length-10,q0-D<2048)N=new u7(N.length),x1=N.dataView||(N.dataView=new DataView(N.buffer,0,N.length)),q0=N.length-10,D=0;else D=D+7&2147483640;if(Y=D,j&LP)D+=j&255;if(Q=W.structuredClone?new Map:null,W.bundleStrings&&typeof R!=="string")c1=[],c1.size=1/0;else c1=null;if(H=W.structures,H){if(H.uninitialized)H=W._mergeStructures(W.getStructures());let f=H.sharedLength||0;if(f>U)throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+H.sharedLength);if(!H.transitions){H.transitions=Object.create(null);for(let u=0;u<f;u++){let M=H[u];if(!M)continue;let m,i=H.transitions;for(let H1=0,U1=M.length;H1<U1;H1++){let w1=M[H1];if(m=i[w1],!m)m=i[w1]=Object.create(null);i=m}i[q$]=u+64}this.lastNamedStructuresLength=f}if(!w)H.nextId=f+64}if(G)G=!1;let v;try{if(W.randomAccessStructure&&R&&R.constructor&&R.constructor===Object)$1(R);else T(R);let f=c1;if(c1)jU(Y,T,0);if(Q&&Q.idsToInsert){let u=Q.idsToInsert.sort((H1,U1)=>H1.offset>U1.offset?1:-1),M=u.length,m=-1;while(f&&M>0){let H1=u[--M].offset+Y;if(H1<f.stringsPosition+Y&&m===-1)m=0;if(H1>f.position+Y){if(m>=0)m+=6}else{if(m>=0)x1.setUint32(f.position+Y,x1.getUint32(f.position+Y)+m),m=-1;f=f.previous,M++}}if(m>=0&&f)x1.setUint32(f.position+Y,x1.getUint32(f.position+Y)+m);if(D+=u.length*6,D>q0)d(D);W.offset=D;let i=FP(N.subarray(Y,D),u);return Q=null,i}if(W.offset=D,j&KP)return N.start=Y,N.end=D,N;return N.subarray(Y,D)}catch(f){throw v=f,f}finally{if(H){if(C(),G&&W.saveStructures){let f=H.sharedLength||0,u=N.subarray(Y,D),M=fU(H,W);if(!v){if(W.saveStructures(M,M.isCompatible)===!1)return W.pack(R,j);if(W.lastNamedStructuresLength=f,N.length>1073741824)N=null;return u}}}if(N.length>1073741824)N=null;if(j&zP)D=Y}};let C=()=>{if(_<10)_++;let R=H.sharedLength||0;if(H.length>R&&!w)H.length=R;if(P>1e4){if(H.transitions=null,_=0,P=0,A.length>0)A=[]}else if(A.length>0&&!w){for(let j=0,v=A.length;j<v;j++)A[j][q$]=0;A=[]}},b=(R)=>{var j=R.length;if(j<16)N[D++]=144|j;else if(j<65536)N[D++]=220,N[D++]=j>>8,N[D++]=j&255;else N[D++]=221,x1.setUint32(D,j),D+=4;for(let v=0;v<j;v++)T(R[v])},T=(R)=>{if(D>q0)N=d(D);var j=typeof R,v;if(j==="string"){let f=R.length;if(c1&&f>=4&&f<4096){if((c1.size+=f)>BP){let i,H1=(c1[0]?c1[0].length*3+c1[1].length:0)+10;if(D+H1>q0)N=d(D+H1);let U1;if(c1.position)U1=c1,N[D]=200,D+=3,N[D++]=98,i=D-Y,D+=4,jU(Y,T,0),x1.setUint16(i+Y-3,D-Y-i);else N[D++]=214,N[D++]=98,i=D-Y,D+=4;c1=["",""],c1.previous=U1,c1.size=0,c1.position=i}let m=UP.test(R);c1[m?0:1]+=R,N[D++]=193,T(m?-f:f);return}let u;if(f<32)u=1;else if(f<256)u=2;else if(f<65536)u=3;else u=5;let M=f*3;if(D+M>q0)N=d(D+M);if(f<64||!J){let m,i,H1,U1=D+u;for(m=0;m<f;m++)if(i=R.charCodeAt(m),i<128)N[U1++]=i;else if(i<2048)N[U1++]=i>>6|192,N[U1++]=i&63|128;else if((i&64512)===55296&&((H1=R.charCodeAt(m+1))&64512)===56320)i=65536+((i&1023)<<10)+(H1&1023),m++,N[U1++]=i>>18|240,N[U1++]=i>>12&63|128,N[U1++]=i>>6&63|128,N[U1++]=i&63|128;else N[U1++]=i>>12|224,N[U1++]=i>>6&63|128,N[U1++]=i&63|128;v=U1-D-u}else v=J(R,D+u);if(v<32)N[D++]=160|v;else if(v<256){if(u<2)N.copyWithin(D+2,D+1,D+1+v);N[D++]=217,N[D++]=v}else if(v<65536){if(u<3)N.copyWithin(D+3,D+2,D+2+v);N[D++]=218,N[D++]=v>>8,N[D++]=v&255}else{if(u<5)N.copyWithin(D+5,D+3,D+3+v);N[D++]=219,x1.setUint32(D,v),D+=4}D+=v}else if(j==="number")if(R>>>0===R)if(R<32||R<128&&this.useRecords===!1||R<64&&!this.randomAccessStructure)N[D++]=R;else if(R<256)N[D++]=204,N[D++]=R;else if(R<65536)N[D++]=205,N[D++]=R>>8,N[D++]=R&255;else N[D++]=206,x1.setUint32(D,R),D+=4;else if(R>>0===R)if(R>=-32)N[D++]=256+R;else if(R>=-128)N[D++]=208,N[D++]=R+256;else if(R>=-32768)N[D++]=209,x1.setInt16(D,R),D+=2;else N[D++]=210,x1.setInt32(D,R),D+=4;else{let f;if((f=this.useFloat32)>0&&R<4294967296&&R>=-2147483648){N[D++]=202,x1.setFloat32(D,R);let u;if(f<4||(u=R*y4[(N[D]&127)<<1|N[D+1]>>7])>>0===u){D+=4;return}else D--}N[D++]=203,x1.setFloat64(D,R),D+=8}else if(j==="object"||j==="function")if(!R)N[D++]=192;else{if(Q){let u=Q.get(R);if(u){if(!u.id){let M=Q.idsToInsert||(Q.idsToInsert=[]);u.id=M.push(u)}N[D++]=214,N[D++]=112,x1.setUint32(D,u.id),D+=4;return}else Q.set(R,{offset:D-Y})}let f=R.constructor;if(f===Object)S(R);else if(f===Array)b(R);else if(f===Map)if(this.mapAsEmptyObject)N[D++]=128;else{if(v=R.size,v<16)N[D++]=128|v;else if(v<65536)N[D++]=222,N[D++]=v>>8,N[D++]=v&255;else N[D++]=223,x1.setUint32(D,v),D+=4;for(let[u,M]of R)T(u),T(M)}else{for(let u=0,M=gY.length;u<M;u++){let m=kU[u];if(R instanceof m){let i=gY[u];if(i.write){if(i.type)N[D++]=212,N[D++]=i.type,N[D++]=0;let j1=i.write.call(this,R);if(j1===R)if(Array.isArray(R))b(R);else S(R);else T(j1);return}let H1=N,U1=x1,w1=D;N=null;let D1;try{D1=i.pack.call(this,R,(j1)=>{if(N=H1,H1=null,D+=j1,D>q0)d(D);return{target:N,targetView:x1,position:D-j1}},T)}finally{if(H1)N=H1,x1=U1,D=w1,q0=N.length-10}if(D1){if(D1.length+D>q0)d(D1.length+D);D=VP(D1,N,D,i.type)}return}}if(Array.isArray(R))b(R);else{if(R.toJSON){let u=R.toJSON();if(u!==R)return T(u)}if(j==="function")return T(this.writeFunction&&this.writeFunction(R));S(R)}}}else if(j==="boolean")N[D++]=R?195:194;else if(j==="bigint"){if(R<BigInt(1)<<BigInt(63)&&R>=-(BigInt(1)<<BigInt(63)))N[D++]=211,x1.setBigInt64(D,R);else if(R<BigInt(1)<<BigInt(64)&&R>0)N[D++]=207,x1.setBigUint64(D,R);else if(this.largeBigIntToFloat)N[D++]=203,x1.setFloat64(D,Number(R));else if(this.useBigIntExtension&&R<2n**1023n&&R>-(2n**1023n)){N[D++]=199,D++,N[D++]=66;let f=[],u;do{let M=R&0xffn;u=(M&0x80n)===(R<0n?0x80n:0n),f.push(M),R>>=8n}while(!((R===0n||R===-1n)&&u));N[D-2]=f.length;for(let M=f.length;M>0;)N[D++]=Number(f[--M]);return}else throw new RangeError(R+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension or set largeBigIntToFloat to convert to float-64");D+=8}else if(j==="undefined")if(this.encodeUndefinedAsNil)N[D++]=192;else N[D++]=212,N[D++]=0,N[D++]=0;else throw new Error("Unknown type: "+j)},p=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?(R)=>{let j;if(this.skipValues){j=[];for(let u in R)if((typeof R.hasOwnProperty!=="function"||R.hasOwnProperty(u))&&!this.skipValues.includes(R[u]))j.push(u)}else j=Object.keys(R);let v=j.length;if(v<16)N[D++]=128|v;else if(v<65536)N[D++]=222,N[D++]=v>>8,N[D++]=v&255;else N[D++]=223,x1.setUint32(D,v),D+=4;let f;if(this.coercibleKeyAsNumber)for(let u=0;u<v;u++){f=j[u];let M=Number(f);T(isNaN(M)?f:M),T(R[f])}else for(let u=0;u<v;u++)T(f=j[u]),T(R[f])}:(R)=>{N[D++]=222;let j=D-Y;D+=2;let v=0;for(let f in R)if(typeof R.hasOwnProperty!=="function"||R.hasOwnProperty(f))T(f),T(R[f]),v++;N[j+++Y]=v>>8,N[j+Y]=v&255},k=this.useRecords===!1?p:$.progressiveRecords&&!F?(R)=>{let j,v=H.transitions||(H.transitions=Object.create(null)),f=D++-Y,u;for(let M in R)if(typeof R.hasOwnProperty!=="function"||R.hasOwnProperty(M)){if(j=v[M],j)v=j;else{let m=Object.keys(R),i=v;v=H.transitions;let H1=0;for(let U1=0,w1=m.length;U1<w1;U1++){let D1=m[U1];if(j=v[D1],!j)j=v[D1]=Object.create(null),H1++;v=j}if(f+Y+1==D)D--,Z(v,m,H1);else s(v,m,f,H1);u=!0,v=i[M]}T(R[M])}if(!u){let M=v[q$];if(M)N[f+Y]=M;else s(v,Object.keys(R),f,0)}}:(R)=>{let j,v=H.transitions||(H.transitions=Object.create(null)),f=0;for(let M in R)if(typeof R.hasOwnProperty!=="function"||R.hasOwnProperty(M)){if(j=v[M],!j)j=v[M]=Object.create(null),f++;v=j}let u=v[q$];if(u)if(u>=96&&F)N[D++]=((u-=96)&31)+96,N[D++]=u>>5;else N[D++]=u;else Z(v,v.__keys__||Object.keys(R),f);for(let M in R)if(typeof R.hasOwnProperty!=="function"||R.hasOwnProperty(M))T(R[M])},x=typeof this.useRecords=="function"&&this.useRecords,S=x?(R)=>{x(R)?k(R):p(R)}:k,d=(R)=>{let j;if(R>16777216){if(R-Y>SU)throw new Error("Packed buffer would be larger than maximum buffer size");j=Math.min(SU,Math.round(Math.max((R-Y)*(R>67108864?1.25:2),4194304)/4096)*4096)}else j=(Math.max(R-Y<<2,N.length-1)>>12)+1<<12;let v=new u7(j);if(x1=v.dataView||(v.dataView=new DataView(v.buffer,0,j)),R=Math.min(R,N.length),N.copy)N.copy(v,0,Y,R);else v.set(N.slice(Y,R));return D-=Y,Y=0,q0=v.length-10,N=v},Z=(R,j,v)=>{let f=H.nextId;if(!f)f=64;if(f<E&&this.shouldShareStructure&&!this.shouldShareStructure(j)){if(f=H.nextOwnId,!(f<K))f=E;H.nextOwnId=f+1}else{if(f>=K)f=E;H.nextId=f+1}let u=j.highByte=f>=96&&F?f-96>>5:-1;if(R[q$]=f,R.__keys__=j,H[f-64]=j,f<E)if(j.isShared=!0,H.sharedLength=f-63,G=!0,u>=0)N[D++]=(f&31)+96,N[D++]=u;else N[D++]=f;else{if(u>=0)N[D++]=213,N[D++]=114,N[D++]=(f&31)+96,N[D++]=u;else N[D++]=212,N[D++]=114,N[D++]=f;if(v)P+=_*v;if(A.length>=V)A.shift()[q$]=0;A.push(R),T(j)}},s=(R,j,v,f)=>{let u=N,M=D,m=q0,i=Y;if(N=c5,D=0,Y=0,!N)c5=N=new u7(8192);q0=N.length-10,Z(R,j,f),c5=N;let H1=D;if(N=u,D=M,q0=m,Y=i,H1>1){let U1=D+H1-1;if(U1>q0)d(U1);let w1=v+Y;N.copyWithin(w1+H1,w1+1,D),N.set(c5.slice(0,H1),w1),D=U1}else N[v+Y]=c5[0]},$1=(R)=>{let j=vU(R,N,Y,D,H,d,(v,f,u)=>{if(u)return G=!0;D=f;let M=N;if(T(v),C(),M!==N)return{position:D,targetView:x1,target:N};return D},this);if(j===0)return S(R);D=j}}useBuffer($){N=$,N.dataView||(N.dataView=new DataView(N.buffer,N.byteOffset,N.byteLength)),D=0}set position($){D=$}get position(){return D}clearSharedData(){if(this.structures)this.structures=[];if(this.typedStructs)this.typedStructs=[]}}kU=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,g7];gY=[{pack($,X,Y){let G=$.getTime()/1000;if((this.useTimestamp32||$.getMilliseconds()===0)&&G>=0&&G<4294967296){let{target:H,targetView:Q,position:J}=X(6);H[J++]=214,H[J++]=255,Q.setUint32(J,G)}else if(G>0&&G<4294967296){let{target:H,targetView:Q,position:J}=X(10);H[J++]=215,H[J++]=255,Q.setUint32(J,$.getMilliseconds()*4000000+(G/1000/4294967296>>0)),Q.setUint32(J+4,G)}else if(isNaN(G)){if(this.onInvalidDate)return X(0),Y(this.onInvalidDate());let{target:H,targetView:Q,position:J}=X(3);H[J++]=212,H[J++]=255,H[J++]=255}else{let{target:H,targetView:Q,position:J}=X(15);H[J++]=199,H[J++]=12,H[J++]=255,Q.setUint32(J,$.getMilliseconds()*1e6),Q.setBigInt64(J+4,BigInt(Math.floor(G)))}}},{pack($,X,Y){if(this.setAsEmptyObject)return X(0),Y({});let G=Array.from($),{target:H,position:Q}=X(this.moreTypes?3:0);if(this.moreTypes)H[Q++]=212,H[Q++]=115,H[Q++]=0;Y(G)}},{pack($,X,Y){let{target:G,position:H}=X(this.moreTypes?3:0);if(this.moreTypes)G[H++]=212,G[H++]=101,G[H++]=0;Y([$.name,$.message,$.cause])}},{pack($,X,Y){let{target:G,position:H}=X(this.moreTypes?3:0);if(this.moreTypes)G[H++]=212,G[H++]=120,G[H++]=0;Y([$.source,$.flags])}},{pack($,X){if(this.moreTypes)IU($,16,X);else CU(c7?Buffer.from($):new Uint8Array($),X)}},{pack($,X){let Y=$.constructor;if(Y!==xU&&this.moreTypes)IU($,bY.indexOf(Y.name),X);else CU($,X)}},{pack($,X){let{target:Y,position:G}=X(1);Y[G]=193}}];function IU($,X,Y,G){let H=$.byteLength;if(H+1<256){var{target:Q,position:J}=Y(4+H);Q[J++]=199,Q[J++]=H+1}else if(H+1<65536){var{target:Q,position:J}=Y(5+H);Q[J++]=200,Q[J++]=H+1>>8,Q[J++]=H+1&255}else{var{target:Q,position:J,targetView:W}=Y(7+H);Q[J++]=201,W.setUint32(J,H+1),J+=4}if(Q[J++]=116,Q[J++]=X,!$.buffer)$=new Uint8Array($);Q.set(new Uint8Array($.buffer,$.byteOffset,$.byteLength),J)}function CU($,X){let Y=$.byteLength;var G,H;if(Y<256){var{target:G,position:H}=X(Y+2);G[H++]=196,G[H++]=Y}else if(Y<65536){var{target:G,position:H}=X(Y+3);G[H++]=197,G[H++]=Y>>8,G[H++]=Y&255}else{var{target:G,position:H,targetView:Q}=X(Y+5);G[H++]=198,Q.setUint32(H,Y),H+=4}G.set($,H)}function VP($,X,Y,G){let H=$.length;switch(H){case 1:X[Y++]=212;break;case 2:X[Y++]=213;break;case 4:X[Y++]=214;break;case 8:X[Y++]=215;break;case 16:X[Y++]=216;break;default:if(H<256)X[Y++]=199,X[Y++]=H;else if(H<65536)X[Y++]=200,X[Y++]=H>>8,X[Y++]=H&255;else X[Y++]=201,X[Y++]=H>>24,X[Y++]=H>>16&255,X[Y++]=H>>8&255,X[Y++]=H&255}return X[Y++]=G,X.set($,Y),Y+=H,Y}function FP($,X){let Y,G=X.length*6,H=$.length-G;while(Y=X.pop()){let{offset:Q,id:J}=Y;$.copyWithin(Q+G,Q,H),G-=6;let W=Q+G;$[W++]=214,$[W++]=105,$[W++]=J>>24,$[W++]=J>>16&255,$[W++]=J>>8&255,$[W++]=J&255,H=Q}return $}function jU($,X,Y){if(c1.length>0){x1.setUint32(c1.position+$,D+Y-c1.position-$),c1.stringsPosition=D-$;let G=c1;c1=null,X(G[0]),X(G[1])}}function fU($,X){return $.isCompatible=(Y)=>{let G=!Y||(X.lastNamedStructuresLength||0)===Y.length;if(!G)X._mergeStructures(Y);return G},$}function hU($,X){vU=$,fU=X}var yU=new b4({useRecords:!1}),EP=yU.pack,AP=yU.pack;var KP=512,zP=1024,LP=2048;var mY=3,P6=0,d5=2,d7=1,pY=16,gU=["num","object","string","ascii"];gU[pY]="date";var RP=[!1,!0,!0,!1,!1,!0,!0,!1],mU;try{new Function(""),mU=!0}catch($){}var g4,DP=typeof Buffer!=="undefined",l7,M$;try{l7=new TextEncoder}catch($){}var _P=DP?function($,X,Y){return $.utf8Write(X,Y,4294967295)}:l7&&l7.encodeInto?function($,X,Y){return l7.encodeInto(X,$.subarray(Y)).written}:!1,dy=Symbol("type"),ly=Symbol("parent");hU(uU,PP);function uU($,X,Y,G,H,Q,J,W){let w=W.typedStructs||(W.typedStructs=[]),B=X.dataView,U=(w.lastStringStart||100)+G,V=X.length-10,F=G;if(G>V)X=Q(G),B=X.dataView,G-=Y,F-=Y,U-=Y,Y=0,V=X.length-10;let E,K=U,A=w.transitions||(w.transitions=Object.create(null)),P=w.nextId||w.length,_=P<15?1:P<240?2:P<61440?3:P<15728640?4:0;if(_===0)return 0;G+=_;let C=[],b,T=0;for(let k in $){let x=$[k],S=A[k];if(!S)A[k]=S={key:k,parent:A,enumerationOffset:0,ascii0:null,ascii8:null,num8:null,string16:null,object16:null,num32:null,float64:null,date64:null};if(G>V)X=Q(G),B=X.dataView,G-=Y,F-=Y,U-=Y,K-=Y,Y=0,V=X.length-10;switch(typeof x){case"number":let d=x;if(P<200||!S.num64){if(d>>0===d&&d<536870912&&d>-520093696){if(d<246&&d>=0&&(S.num8&&!(P>200&&S.num32)||d<32&&!S.num32))A=S.num8||j0(S,P6,1),X[G++]=d;else A=S.num32||j0(S,P6,4),B.setUint32(G,d,!0),G+=4;break}else if(d<4294967296&&d>=-2147483648){if(B.setFloat32(G,d,!0),RP[X[G+3]>>>5]){let R;if((R=d*y4[(X[G+3]&127)<<1|X[G+2]>>7])>>0===R){A=S.num32||j0(S,P6,4),G+=4;break}}}}A=S.num64||j0(S,P6,8),B.setFloat64(G,d,!0),G+=8;break;case"string":let Z=x.length;if(E=K-U,(Z<<2)+K>V)X=Q((Z<<2)+K),B=X.dataView,G-=Y,F-=Y,U-=Y,K-=Y,Y=0,V=X.length-10;if(Z>65280+E>>2){C.push(k,x,G-F);break}let s,$1=K;if(Z<64){let R,j,v;for(R=0;R<Z;R++)if(j=x.charCodeAt(R),j<128)X[K++]=j;else if(j<2048)s=!0,X[K++]=j>>6|192,X[K++]=j&63|128;else if((j&64512)===55296&&((v=x.charCodeAt(R+1))&64512)===56320)s=!0,j=65536+((j&1023)<<10)+(v&1023),R++,X[K++]=j>>18|240,X[K++]=j>>12&63|128,X[K++]=j>>6&63|128,X[K++]=j&63|128;else s=!0,X[K++]=j>>12|224,X[K++]=j>>6&63|128,X[K++]=j&63|128}else K+=_P(X,x,K),s=K-$1>Z;if(E<160||E<246&&(S.ascii8||S.string8)){if(s){if(!(A=S.string8))if(w.length>10&&(A=S.ascii8))A.__type=d5,S.ascii8=null,S.string8=A,J(null,0,!0);else A=j0(S,d5,1)}else if(E===0&&!b){b=!0,A=S.ascii0||j0(S,mY,0);break}else if(!(A=S.ascii8)&&!(w.length>10&&(A=S.string8)))A=j0(S,mY,1);X[G++]=E}else A=S.string16||j0(S,d5,2),B.setUint16(G,E,!0),G+=2;break;case"object":if(x){if(x.constructor===Date)A=S.date64||j0(S,pY,8),B.setFloat64(G,x.getTime(),!0),G+=8;else C.push(k,x,T);break}else if(S=bU(S,G,B,-10),S)A=S,G=g4;else C.push(k,x,T);break;case"boolean":A=S.num8||S.ascii8||j0(S,P6,1),X[G++]=x?249:248;break;case"undefined":if(S=bU(S,G,B,-9),S)A=S,G=g4;else C.push(k,x,T);break;default:C.push(k,x,T)}T++}for(let k=0,x=C.length;k<x;){let S=C[k++],d=C[k++],Z=C[k++],s=A[S];if(!s)A[S]=s={key:S,parent:A,enumerationOffset:Z-T,ascii0:null,ascii8:null,num8:null,string16:null,object16:null,num32:null,float64:null};let $1;if(d){let R;if(E=K-U,E<65280)if(A=s.object16,A)R=2;else if(A=s.object32)R=4;else A=j0(s,d7,2),R=2;else A=s.object32||j0(s,d7,4),R=4;if($1=J(d,K),typeof $1==="object")K=$1.position,B=$1.targetView,X=$1.target,U-=Y,G-=Y,F-=Y,Y=0;else K=$1;if(R===2)B.setUint16(G,E,!0),G+=2;else B.setUint32(G,E,!0),G+=4}else A=s.object16||j0(s,d7,2),B.setInt16(G,d===null?-10:-9,!0),G+=2;T++}let p=A[q$];if(p==null){p=W.typedStructs.length;let k=[],x=A,S,d;while((d=x.__type)!==void 0){let Z=x.__size;x=x.__parent,S=x.key;let s=[d,Z,S];if(x.enumerationOffset)s.push(x.enumerationOffset);k.push(s),x=x.parent}k.reverse(),A[q$]=p,W.typedStructs[p]=k,J(null,0,!0)}switch(_){case 1:if(p>=16)return 0;X[F]=p+32;break;case 2:if(p>=256)return 0;X[F]=56,X[F+1]=p;break;case 3:if(p>=65536)return 0;X[F]=57,B.setUint16(F+1,p,!0);break;case 4:if(p>=16777216)return 0;B.setUint32(F,(p<<8)+58,!0);break}if(G<U){if(U===K)return G;X.copyWithin(G,U,K),K+=G-U,w.lastStringStart=G-F}else if(G>U){if(U===K)return G;return w.lastStringStart=G-F,uU($,X,Y,F,H,Q,J,W)}return K}function bU($,X,Y,G){let H;if(H=$.ascii8||$.num8)return Y.setInt8(X,G,!0),g4=X+1,H;if(H=$.string16||$.object16)return Y.setInt16(X,G,!0),g4=X+2,H;if(H=$.num32)return Y.setUint32(X,3758096640+G,!0),g4=X+4,H;if(H=$.num64)return Y.setFloat64(X,NaN,!0),Y.setInt8(X,G),g4=X+8,H;g4=X;return}function j0($,X,Y){let G=gU[X]+(Y<<3),H=$[G]||($[G]=Object.create(null));return H.__type=X,H.__size=Y,H.__parent=$,H}function NP($){if(!($ instanceof Map))return $;let X=$.get("typed")||[];if(Object.isFrozen(X))X=X.map((H)=>H.slice(0));let Y=$.get("named"),G=Object.create(null);for(let H=0,Q=X.length;H<Q;H++){let J=X[H],W=G;for(let[w,B,U]of J){let V=W[U];if(!V)W[U]=V={key:U,parent:W,enumerationOffset:0,ascii0:null,ascii8:null,num8:null,string16:null,object16:null,num32:null,float64:null,date64:null};W=j0(V,w,B)}W[q$]=H}return X.transitions=G,this.typedStructs=X,this.lastTypedStructuresLength=X.length,Y}var uY=Symbol.for("source");function qP($,X,Y,G){let H=$[X++]-32;if(H>=24)switch(H){case 24:H=$[X++];break;case 25:H=$[X++]+($[X++]<<8);break;case 26:H=$[X++]+($[X++]<<8)+($[X++]<<16);break;case 27:H=$[X++]+($[X++]<<8)+($[X++]<<16)+($[X++]<<24);break}let Q=G.typedStructs&&G.typedStructs[H];if(!Q){if($=Uint8Array.prototype.slice.call($,X,Y),Y-=X,X=0,!G.getStructures)throw new Error(`Reference to shared structure ${H} without getStructures method`);if(G._mergeStructures(G.getStructures()),!G.typedStructs)throw new Error("Could not find any shared typed structures");if(G.lastTypedStructuresLength=G.typedStructs.length,Q=G.typedStructs[H],!Q)throw new Error("Could not find typed structure "+H)}var J=Q.construct;if(!J){J=Q.construct=function F(){};var W=J.prototype;let B=[],U=0,V;for(let F=0,E=Q.length;F<E;F++){let K=Q[F],[A,P,_,C]=K;if(_==="__proto__")_="__proto_";let b={key:_,offset:U};if(C)B.splice(F+C,0,b);else B.push(b);let T;switch(P){case 0:T=()=>0;break;case 1:T=(k,x)=>{let S=k.bytes[x+b.offset];return S>=246?Z6(S):S};break;case 2:T=(k,x)=>{let S=k.bytes,Z=(S.dataView||(S.dataView=new DataView(S.buffer,S.byteOffset,S.byteLength))).getUint16(x+b.offset,!0);return Z>=65280?Z6(Z&255):Z};break;case 4:T=(k,x)=>{let S=k.bytes,Z=(S.dataView||(S.dataView=new DataView(S.buffer,S.byteOffset,S.byteLength))).getUint32(x+b.offset,!0);return Z>=4294967040?Z6(Z&255):Z};break}b.getRef=T,U+=P;let p;switch(A){case mY:if(V&&!V.next)V.next=b;V=b,b.multiGetCount=0,p=function(k){let{bytes:x,position:S}=k,d=U+S,Z=T(k,S);if(typeof Z!=="number")return Z;let s,$1=b.next;while($1){if(s=$1.getRef(k,S),typeof s==="number")break;else s=null;$1=$1.next}if(s==null)s=k.bytesEnd-d;if(k.srcString)return k.srcString.slice(Z,s);return _U(x,Z+d,s-Z)};break;case d5:case d7:if(V&&!V.next)V.next=b;V=b,p=function(k){let x=k.position,S=U+x,d=T(k,x);if(typeof d!=="number")return d;let Z=k.bytes,s,$1=b.next;while($1){if(s=$1.getRef(k,x),typeof s==="number")break;else s=null;$1=$1.next}if(s==null)s=k.bytesEnd-S;if(A===d5)return Z.toString("utf8",d+S,s+S);else{M$=k;try{return G.unpack(Z,{start:d+S,end:s+S})}finally{M$=null}}};break;case P6:switch(P){case 4:p=function(k){let x=k.bytes,S=x.dataView||(x.dataView=new DataView(x.buffer,x.byteOffset,x.byteLength)),d=k.position+b.offset,Z=S.getInt32(d,!0);if(Z<536870912){if(Z>-520093696)return Z;if(Z>-536870912)return Z6(Z&255)}let s=S.getFloat32(d,!0),$1=y4[(x[d+3]&127)<<1|x[d+2]>>7];return($1*s+(s>0?0.5:-0.5)>>0)/$1};break;case 8:p=function(k){let x=k.bytes,d=(x.dataView||(x.dataView=new DataView(x.buffer,x.byteOffset,x.byteLength))).getFloat64(k.position+b.offset,!0);if(isNaN(d)){let Z=x[k.position+b.offset];if(Z>=246)return Z6(Z)}return d};break;case 1:p=function(k){let S=k.bytes[k.position+b.offset];return S<246?S:Z6(S)};break}break;case pY:p=function(k){let x=k.bytes,S=x.dataView||(x.dataView=new DataView(x.buffer,x.byteOffset,x.byteLength));return new Date(S.getFloat64(k.position+b.offset,!0))};break}b.get=p}if(mU){let F=[],E=[],K=0,A;for(let _ of B){if(G.alwaysLazyProperty&&G.alwaysLazyProperty(_.key)){A=!0;continue}Object.defineProperty(W,_.key,{get:MP(_.get),enumerable:!0});let C="v"+K++;E.push(C),F.push("["+JSON.stringify(_.key)+"]:"+C+"(s)")}if(A)F.push("__proto__:this");let P=new Function(...E,"return function(s){return{"+F.join(",")+"}}").apply(null,B.map((_)=>_.get));Object.defineProperty(W,"toJSON",{value(_){return P.call(this,this[uY])}})}else Object.defineProperty(W,"toJSON",{value(F){let E={};for(let K=0,A=B.length;K<A;K++){let P=B[K].key;E[P]=this[P]}return E}})}var w=new J;return w[uY]={bytes:$,position:X,srcString:"",bytesEnd:Y},w}function Z6($){switch($){case 246:return null;case 247:return;case 248:return!1;case 249:return!0}throw new Error("Unknown constant")}function MP($){return function(){return $(this[uY])}}function ZP(){if(M$)M$.bytes=Uint8Array.prototype.slice.call(M$.bytes,M$.position,M$.bytesEnd),M$.position=0,M$.bytesEnd=M$.bytes.length}function PP($,X){if(X.typedStructs){let G=new Map;G.set("named",$),G.set("typed",X.typedStructs),$=G}let Y=X.lastTypedStructuresLength||0;return $.isCompatible=(G)=>{let H=!0;if(G instanceof Map){if((G.get("named")||[]).length!==(X.lastNamedStructuresLength||0))H=!1;if((G.get("typed")||[]).length!==Y)H=!1}else if(G instanceof Array||Array.isArray(G)){if(G.length!==(X.lastNamedStructuresLength||0))H=!1}if(!H)X._mergeStructures(G);return H},X.lastTypedStructuresLength=X.typedStructs&&X.typedStructs.length,$}PU(qP,NP,ZP);var yP=process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED!==void 0&&process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase()==="true";if(!yP){let $;try{if($=HV(),$)DU($.extractStrings)}catch(X){}}var S6="5.23.0";var bP=new b4({useRecords:!1,encodeUndefinedAsNil:!0}),P$=bP.pack;class l5{constructor($){this.queue=$;let X=this.queue.keys;this.version=S6,this.moveToFinishedKeys=[X.wait,X.active,X.prioritized,X.events,X.stalled,X.limiter,X.delayed,X.paused,X.meta,X.pc,void 0,void 0,void 0,void 0]}execCommand($,X,Y){let G=`${X}:${this.version}`;return $[G](Y)}async isJobInList($,X){let Y=await this.queue.client,G;if(Q4(this.queue.redisVersion,"6.0.6"))G=await this.execCommand(Y,"isJobInList",[$,X]);else G=await Y.lpos($,X);return Number.isInteger(G)}addDelayedJob($,X,Y,G){let H=this.queue.keys,Q=[H.marker,H.meta,H.id,H.delayed,H.completed,H.events];return Q.push(P$(G),X.data,Y),this.execCommand($,"addDelayedJob",Q)}addPrioritizedJob($,X,Y,G){let H=this.queue.keys,Q=[H.marker,H.meta,H.id,H.prioritized,H.completed,H.active,H.events,H.pc];return Q.push(P$(G),X.data,Y),this.execCommand($,"addPrioritizedJob",Q)}addParentJob($,X,Y,G){let H=this.queue.keys,Q=[H.meta,H.id,H.completed,H.events];return Q.push(P$(G),X.data,Y),this.execCommand($,"addParentJob",Q)}addStandardJob($,X,Y,G){let H=this.queue.keys,Q=[H.wait,H.paused,H.meta,H.id,H.completed,H.active,H.events,H.marker];return Q.push(P$(G),X.data,Y),this.execCommand($,"addStandardJob",Q)}async addJob($,X,Y,G,H={}){let Q=this.queue.keys,J=X.parent?Object.assign(Object.assign({},X.parent),{fpof:Y.fpof,rdof:Y.rdof,idof:Y.idof}):null,W=[Q[""],typeof G!=="undefined"?G:"",X.name,X.timestamp,X.parentKey||null,H.waitChildrenKey||null,H.parentDependenciesKey||null,J,X.repeatJobKey,X.deduplicationId?`${Q.de}:${X.deduplicationId}`:null],w;if(Y.repeat){let U=Object.assign({},Y.repeat);if(U.startDate)U.startDate=+new Date(U.startDate);if(U.endDate)U.endDate=+new Date(U.endDate);w=P$(Object.assign(Object.assign({},Y),{repeat:U}))}else w=P$(Y);let B;if(H.waitChildrenKey)B=await this.addParentJob($,X,w,W);else if(typeof Y.delay=="number")B=await this.addDelayedJob($,X,w,W);else if(Y.priority)B=await this.addPrioritizedJob($,X,w,W);else B=await this.addStandardJob($,X,w,W);if(B<0)throw this.finishedErrors({code:B,parentKey:H.parentKey,command:"addJob"});return B}pauseArgs($){let X="wait",Y="paused";if(!$)X="paused",Y="wait";let G=[X,Y,"meta","prioritized"].map((Q)=>this.queue.toKey(Q));G.push(this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.marker);let H=[$?"paused":"resumed"];return G.concat(H)}async pause($){let X=await this.queue.client,Y=this.pauseArgs($);return this.execCommand(X,"pause",Y)}addRepeatableJobArgs($,X,Y,G){let H=this.queue.keys,Q=[H.repeat,H.delayed],J=[X,P$(Y),G,$,H[""]];return Q.concat(J)}async addRepeatableJob($,X,Y,G){let H=await this.queue.client,Q=this.addRepeatableJobArgs($,X,Y,G);return this.execCommand(H,"addRepeatableJob",Q)}async addJobScheduler($,X,Y){let G=this.queue.keys,H=await this.queue.client,Q=[G.repeat,G.delayed],J=[X,P$(Y),$,G[""]];return this.execCommand(H,"addJobScheduler",Q.concat(J))}async updateRepeatableJobMillis($,X,Y,G){let H=[this.queue.keys.repeat,Y,X,G];return this.execCommand($,"updateRepeatableJobMillis",H)}async updateJobSchedulerNextMillis($,X){return(await this.queue.client).zadd(this.queue.keys.repeat,X,$)}removeRepeatableArgs($,X,Y){let G=this.queue.keys,H=[G.repeat,G.delayed,G.events],Q=[$,this.getRepeatConcatOptions(X,Y),Y,G[""]];return H.concat(Q)}getRepeatConcatOptions($,X){if(X&&X.split(":").length>2)return X;return $}async removeRepeatable($,X,Y){let G=await this.queue.client,H=this.removeRepeatableArgs($,X,Y);return this.execCommand(G,"removeRepeatable",H)}async removeJobScheduler($){let X=await this.queue.client,Y=this.queue.keys,G=[Y.repeat,Y.delayed,Y.events],H=[$,Y[""]];return this.execCommand(X,"removeJobScheduler",G.concat(H))}removeArgs($,X){let Y=["","meta"].map((H)=>this.queue.toKey(H)),G=[$,X?1:0];return Y.concat(G)}async remove($,X){let Y=await this.queue.client,G=this.removeArgs($,X),H=await this.execCommand(Y,"removeJob",G);if(H<0)throw this.finishedErrors({code:H,jobId:$,command:"removeJob"});return H}async extendLock($,X,Y,G){G=G||await this.queue.client;let H=[this.queue.toKey($)+":lock",this.queue.keys.stalled,X,Y,$];return this.execCommand(G,"extendLock",H)}async updateData($,X){let Y=await this.queue.client,G=[this.queue.toKey($.id)],H=JSON.stringify(X),Q=await this.execCommand(Y,"updateData",G.concat([H]));if(Q<0)throw this.finishedErrors({code:Q,jobId:$.id,command:"updateData"})}async updateProgress($,X){let Y=await this.queue.client,G=[this.queue.toKey($),this.queue.keys.events,this.queue.keys.meta],H=JSON.stringify(X),Q=await this.execCommand(Y,"updateProgress",G.concat([$,H]));if(Q<0)throw this.finishedErrors({code:Q,jobId:$,command:"updateProgress"})}async addLog($,X,Y){let G=await this.queue.client,H=[this.queue.toKey($),this.queue.toKey($)+":logs"],Q=await this.execCommand(G,"addLog",H.concat([$,X,Y?Y:""]));if(Q<0)throw this.finishedErrors({code:Q,jobId:$,command:"addLog"});return Q}moveToFinishedArgs($,X,Y,G,H,Q,J,W=!0){var w,B,U,V,F,E;let K=this.queue.keys,A=this.queue.opts,P=H==="completed"?A.removeOnComplete:A.removeOnFail,_=this.queue.toKey(`metrics:${H}`),C=this.moveToFinishedKeys;C[10]=K[H],C[11]=this.queue.toKey((w=$.id)!==null&&w!==void 0?w:""),C[12]=_,C[13]=this.queue.keys.marker;let b=this.getKeepJobs(G,P),T=[$.id,J,Y,typeof X==="undefined"?"null":X,H,!W||this.queue.closing?0:1,K[""],P$({token:Q,keepJobs:b,limiter:A.limiter,lockDuration:A.lockDuration,attempts:$.opts.attempts,maxMetricsSize:((B=A.metrics)===null||B===void 0?void 0:B.maxDataPoints)?(U=A.metrics)===null||U===void 0?void 0:U.maxDataPoints:"",fpof:!!((V=$.opts)===null||V===void 0?void 0:V.failParentOnFailure),idof:!!((F=$.opts)===null||F===void 0?void 0:F.ignoreDependencyOnFailure),rdof:!!((E=$.opts)===null||E===void 0?void 0:E.removeDependencyOnFailure)})];return C.concat(T)}getKeepJobs($,X){if(typeof $==="undefined")return X||{count:$?0:-1};return typeof $==="object"?$:typeof $==="number"?{count:$}:{count:$?0:-1}}async moveToFinished($,X){let Y=await this.queue.client,G=await this.execCommand(Y,"moveToFinished",X);if(G<0)throw this.finishedErrors({code:G,jobId:$,command:"moveToFinished",state:"active"});else if(typeof G!=="undefined")return r7(G)}drainArgs($){let X=this.queue.keys,Y=[X.wait,X.paused,$?X.delayed:"",X.prioritized,X.repeat],G=[X[""]];return Y.concat(G)}async drain($){let X=await this.queue.client,Y=this.drainArgs($);return this.execCommand(X,"drain",Y)}removeChildDependencyArgs($,X){let G=[this.queue.keys[""]],H=[this.queue.toKey($),X];return G.concat(H)}async removeChildDependency($,X){let Y=await this.queue.client,G=this.removeChildDependencyArgs($,X),H=await this.execCommand(Y,"removeChildDependency",G);switch(H){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:H,jobId:$,parentKey:X,command:"removeChildDependency"})}}getRangesArgs($,X,Y,G){let H=this.queue.keys,Q=$.map((w)=>{return w==="waiting"?"wait":w}),J=[H[""]],W=[X,Y,G?"1":"0",...Q];return J.concat(W)}async getRanges($,X=0,Y=1,G=!1){let H=await this.queue.client,Q=this.getRangesArgs($,X,Y,G);return await this.execCommand(H,"getRanges",Q)}getCountsArgs($){let X=this.queue.keys,Y=$.map((Q)=>{return Q==="waiting"?"wait":Q}),G=[X[""]],H=[...Y];return G.concat(H)}async getCounts($){let X=await this.queue.client,Y=this.getCountsArgs($);return await this.execCommand(X,"getCounts",Y)}getCountsPerPriorityArgs($){let X=[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized],Y=$;return X.concat(Y)}async getCountsPerPriority($){let X=await this.queue.client,Y=this.getCountsPerPriorityArgs($);return await this.execCommand(X,"getCountsPerPriority",Y)}moveToCompletedArgs($,X,Y,G,H=!1){let Q=Date.now();return this.moveToFinishedArgs($,X,"returnvalue",Y,"completed",G,Q,H)}moveToFailedArgs($,X,Y,G,H=!1){let Q=Date.now();return this.moveToFinishedArgs($,X,"failedReason",Y,"failed",G,Q,H)}async isFinished($,X=!1){let Y=await this.queue.client,G=["completed","failed",$].map((H)=>{return this.queue.toKey(H)});return this.execCommand(Y,"isFinished",G.concat([$,X?"1":""]))}async getState($){let X=await this.queue.client,Y=["completed","failed","delayed","active","wait","paused","waiting-children","prioritized"].map((G)=>{return this.queue.toKey(G)});if(Q4(this.queue.redisVersion,"6.0.6"))return this.execCommand(X,"getState",Y.concat([$]));return this.execCommand(X,"getStateV2",Y.concat([$]))}async changeDelay($,X){let Y=await this.queue.client,G=this.changeDelayArgs($,X),H=await this.execCommand(Y,"changeDelay",G);if(H<0)throw this.finishedErrors({code:H,jobId:$,command:"changeDelay",state:"delayed"})}changeDelayArgs($,X){let Y=Date.now();return[this.queue.keys.delayed,this.queue.keys.meta,this.queue.keys.marker,this.queue.keys.events].concat([X,JSON.stringify(Y),$,this.queue.toKey($)])}async changePriority($,X=0,Y=!1){let G=await this.queue.client,H=this.changePriorityArgs($,X,Y),Q=await this.execCommand(G,"changePriority",H);if(Q<0)throw this.finishedErrors({code:Q,jobId:$,command:"changePriority"})}changePriorityArgs($,X=0,Y=!1){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.marker].concat([X,this.queue.toKey(""),$,Y?1:0])}moveToDelayedArgs($,X,Y,G,H={}){let Q=this.queue.keys;return[Q.marker,Q.active,Q.prioritized,Q.delayed,this.queue.toKey($),Q.events,Q.meta,Q.stalled].concat([this.queue.keys[""],X,$,Y,G,H.skipAttempt?"1":"0"])}saveStacktraceArgs($,X,Y){return[this.queue.toKey($)].concat([X,Y])}moveToWaitingChildrenArgs($,X,Y){let G=Date.now(),H=g5(Y.child);return[`${$}:lock`,"active","waiting-children",$,"stalled"].map((J)=>{return this.queue.toKey(J)}).concat([X,H!==null&&H!==void 0?H:"",JSON.stringify(G),$])}isMaxedArgs(){let $=this.queue.keys;return[$.meta,$.active]}async isMaxed(){let $=await this.queue.client,X=this.isMaxedArgs();return!!await this.execCommand($,"isMaxed",X)}async moveToDelayed($,X,Y,G="0",H={}){let Q=await this.queue.client,J=this.moveToDelayedArgs($,X,G,Y,H),W=await this.execCommand(Q,"moveToDelayed",J);if(W<0)throw this.finishedErrors({code:W,jobId:$,command:"moveToDelayed",state:"active"})}async moveToWaitingChildren($,X,Y={}){let G=await this.queue.client,H=this.moveToWaitingChildrenArgs($,X,Y),Q=await this.execCommand(G,"moveToWaitingChildren",H);switch(Q){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:Q,jobId:$,command:"moveToWaitingChildren",state:"active"})}}getRateLimitTtlArgs($){return[this.queue.keys.limiter].concat([$!==null&&$!==void 0?$:"0"])}async getRateLimitTtl($){let X=await this.queue.client,Y=this.getRateLimitTtlArgs($);return this.execCommand(X,"getRateLimitTtl",Y)}async cleanJobsInSet($,X,Y=0){let G=await this.queue.client;return this.execCommand(G,"cleanJobsInSet",[this.queue.toKey($),this.queue.toKey("events"),this.queue.toKey("repeat"),this.queue.toKey(""),X,Y,$])}retryJobArgs($,X,Y){let G=[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.paused,this.queue.toKey($),this.queue.keys.meta,this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.prioritized,this.queue.keys.pc,this.queue.keys.marker,this.queue.keys.stalled],H=(X?"R":"L")+"PUSH";return G.concat([this.queue.toKey(""),Date.now(),H,$,Y])}moveJobsToWaitArgs($,X,Y){let G=[this.queue.toKey(""),this.queue.keys.events,this.queue.toKey($),this.queue.toKey("wait"),this.queue.toKey("paused"),this.queue.keys.meta,this.queue.keys.active,this.queue.keys.marker],H=[X,Y,$];return G.concat(H)}async retryJobs($="failed",X=1000,Y=new Date().getTime()){let G=await this.queue.client,H=this.moveJobsToWaitArgs($,X,Y);return this.execCommand(G,"moveJobsToWait",H)}async promoteJobs($=1000){let X=await this.queue.client,Y=this.moveJobsToWaitArgs("delayed",$,Number.MAX_VALUE);return this.execCommand(X,"moveJobsToWait",Y)}async reprocessJob($,X){let Y=await this.queue.client,G=[this.queue.toKey($.id),this.queue.keys.events,this.queue.toKey(X),this.queue.keys.wait,this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.active,this.queue.keys.marker],H=[$.id,($.opts.lifo?"R":"L")+"PUSH",X==="failed"?"failedReason":"returnvalue",X],Q=await this.execCommand(Y,"reprocessJob",G.concat(H));switch(Q){case 1:return;default:throw this.finishedErrors({code:Q,jobId:$.id,command:"reprocessJob",state:X})}}async moveToActive($,X,Y){let G=this.queue.opts,H=this.queue.keys,Q=[H.wait,H.active,H.prioritized,H.events,H.stalled,H.limiter,H.delayed,H.paused,H.meta,H.pc,H.marker],J=[H[""],Date.now(),P$({token:X,lockDuration:G.lockDuration,limiter:G.limiter,name:Y})],W=await this.execCommand($,"moveToActive",Q.concat(J));return r7(W)}async promote($){let X=await this.queue.client,Y=[this.queue.keys.delayed,this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.events,this.queue.keys.marker],G=[this.queue.toKey(""),$],H=await this.execCommand(X,"promote",Y.concat(G));if(H<0)throw this.finishedErrors({code:H,jobId:$,command:"promote",state:"delayed"})}moveStalledJobsToWaitArgs(){let $=this.queue.opts,X=[this.queue.keys.stalled,this.queue.keys.wait,this.queue.keys.active,this.queue.keys.failed,this.queue.keys["stalled-check"],this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.marker,this.queue.keys.events],Y=[$.maxStalledCount,this.queue.toKey(""),Date.now(),$.stalledInterval];return X.concat(Y)}async moveStalledJobsToWait(){let $=await this.queue.client,X=this.moveStalledJobsToWaitArgs();return this.execCommand($,"moveStalledJobsToWait",X)}async moveJobFromActiveToWait($,X){let Y=await this.queue.client,G=`${this.queue.toKey($)}:lock`,H=[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.stalled,G,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.limiter,this.queue.keys.prioritized,this.queue.keys.marker,this.queue.keys.events],Q=[$,X,this.queue.toKey($)],J=await this.execCommand(Y,"moveJobFromActiveToWait",H.concat(Q));return J<0?0:J}async obliterate($){let X=await this.queue.client,Y=[this.queue.keys.meta,this.queue.toKey("")],G=[$.count,$.force?"force":null],H=await this.execCommand(X,"obliterate",Y.concat(G));if(H<0)switch(H){case-1:throw new Error("Cannot obliterate non-paused queue");case-2:throw new Error("Cannot obliterate queue with active jobs")}return H}async paginate($,X){let Y=await this.queue.client,G=[$],H=5,Q=X.end>=0?X.end-X.start+1:1/0,J="0",W=0,w,B,U,V=[],F=[];do{let E=[X.start+V.length,X.end,J,W,5];if(X.fetchJobs)E.push(1);if([J,W,w,B,U]=await this.execCommand(Y,"paginate",G.concat(E)),V=V.concat(w),U&&U.length)F=F.concat(U.map(S7))}while(J!="0"&&V.length<Q);if(V.length&&Array.isArray(V[0])){let E=[];for(let K=0;K<V.length;K++){let[A,P]=V[K];try{E.push({id:A,v:JSON.parse(P)})}catch(_){E.push({id:A,err:_.message})}}return{cursor:J,items:E,total:B,jobs:F}}else return{cursor:J,items:V.map((E)=>({id:E})),total:B,jobs:F}}finishedErrors({code:$,jobId:X,parentKey:Y,command:G,state:H}){switch($){case Q$.JobNotExist:return new Error(`Missing key for job ${X}. ${G}`);case Q$.JobLockNotExist:return new Error(`Missing lock for job ${X}. ${G}`);case Q$.JobNotInState:return new Error(`Job ${X} is not in the ${H} state. ${G}`);case Q$.JobPendingDependencies:return new Error(`Job ${X} has pending dependencies. ${G}`);case Q$.ParentJobNotExist:return new Error(`Missing key for parent job ${Y}. ${G}`);case Q$.JobLockMismatch:return new Error(`Lock mismatch for job ${X}. Cmd ${G} from ${H}`);case Q$.ParentJobCannotBeReplaced:return new Error(`The parent job ${Y} cannot be replaced. ${G}`);case Q$.JobBelongsToJobScheduler:return new Error(`Job ${X} belongs to a job scheduler and cannot be removed directly. ${G}`);default:return new Error(`Unknown code ${$} error for ${X}. ${G}`)}}}function r7($){if($){let X=[null,$[1],$[2],$[3]];if($[0])X[0]=S7($[0]);return X}return[]}var mP=gP("bull"),oY={de:"deduplication",fpof:"failParentOnFailure",idof:"ignoreDependencyOnFailure",kl:"keepLogs",rdof:"removeDependencyOnFailure",tm:"telemetryMetadata"},aY=jw(oY);aY.debounce="de";var QV=2097152;class n0{constructor($,X,Y,G={},H){this.queue=$,this.name=X,this.data=Y,this.opts=G,this.id=H,this.progress=0,this.returnvalue=null,this.stacktrace=null,this.delay=0,this.priority=0,this.attemptsStarted=0,this.attemptsMade=0;let Q=this.opts,{repeatJobKey:J}=Q,W=b$(Q,["repeatJobKey"]);this.opts=Object.assign({attempts:0},W),this.delay=this.opts.delay,this.priority=this.opts.priority||0,this.repeatJobKey=J,this.timestamp=G.timestamp?G.timestamp:Date.now(),this.opts.backoff=M4.normalize(G.backoff),this.parentKey=g5(G.parent),this.parent=G.parent?{id:G.parent.id,queueKey:G.parent.queue}:void 0,this.debounceId=G.debounce?G.debounce.id:void 0,this.deduplicationId=G.deduplication?G.deduplication.id:this.debounceId,this.toKey=$.toKey.bind($),this.setScripts(),this.queueQualifiedName=$.qualifiedName}static async create($,X,Y,G){let H=await $.client,Q=new this($,X,Y,G,G&&G.jobId);return Q.id=await Q.addJob(H,{parentKey:Q.parentKey,parentDependenciesKey:Q.parentKey?`${Q.parentKey}:dependencies`:""}),Q}static async createBulk($,X){let Y=await $.client,G=X.map((J)=>{var W;return new this($,J.name,J.data,J.opts,(W=J.opts)===null||W===void 0?void 0:W.jobId)}),H=Y.pipeline();for(let J of G)J.addJob(H,{parentKey:J.parentKey,parentDependenciesKey:J.parentKey?`${J.parentKey}:dependencies`:""});let Q=await H.exec();for(let J=0;J<Q.length;++J){let[W,w]=Q[J];if(W)throw W;G[J].id=w}return G}static fromJSON($,X,Y){let G=JSON.parse(X.data||"{}"),H=n0.optsFromJSON(X.opts),Q=new this($,X.name,G,H,X.id||Y);if(Q.progress=JSON.parse(X.progress||"0"),Q.delay=parseInt(X.delay),Q.timestamp=parseInt(X.timestamp),X.finishedOn)Q.finishedOn=parseInt(X.finishedOn);if(X.processedOn)Q.processedOn=parseInt(X.processedOn);if(X.rjk)Q.repeatJobKey=X.rjk;if(X.deid)Q.debounceId=X.deid,Q.deduplicationId=X.deid;if(Q.failedReason=X.failedReason,Q.attemptsStarted=parseInt(X.ats||"0"),Q.attemptsMade=parseInt(X.attemptsMade||X.atm||"0"),Q.stacktrace=uP(X.stacktrace),typeof X.returnvalue==="string")Q.returnvalue=JV(X.returnvalue);if(X.parentKey)Q.parentKey=X.parentKey;if(X.parent)Q.parent=JSON.parse(X.parent);if(X.pb)Q.processedBy=X.pb;return Q}setScripts(){this.scripts=new l5(this.queue)}static optsFromJSON($){let X=JSON.parse($||"{}"),Y=Object.entries(X),G={};for(let H of Y){let[Q,J]=H;if(oY[Q])G[oY[Q]]=J;else G[Q]=J}return G}static async fromId($,X){if(X){let G=await(await $.client).hgetall($.toKey(X));return Cw(G)?void 0:this.fromJSON($,G,X)}}static addJobLog($,X,Y,G){return $.scripts.addLog(X,Y,G)}toJSON(){let $=this,{queue:X,scripts:Y}=$;return b$($,["queue","scripts"])}asJSON(){return{id:this.id,name:this.name,data:JSON.stringify(typeof this.data==="undefined"?{}:this.data),opts:this.optsAsJSON(this.opts),parent:this.parent?Object.assign({},this.parent):void 0,parentKey:this.parentKey,progress:this.progress,attemptsMade:this.attemptsMade,attemptsStarted:this.attemptsStarted,finishedOn:this.finishedOn,processedOn:this.processedOn,timestamp:this.timestamp,failedReason:JSON.stringify(this.failedReason),stacktrace:JSON.stringify(this.stacktrace),debounceId:this.debounceId,deduplicationId:this.deduplicationId,repeatJobKey:this.repeatJobKey,returnvalue:JSON.stringify(this.returnvalue)}}optsAsJSON($={}){let X=Object.entries($),Y={};for(let G of X){let[H,Q]=G;if(aY[H])Y[aY[H]]=Q;else Y[H]=Q}return Y}asJSONSandbox(){return Object.assign(Object.assign({},this.asJSON()),{queueName:this.queueName,prefix:this.prefix})}updateData($){return this.data=$,this.scripts.updateData(this,$)}async updateProgress($){this.progress=$,await this.scripts.updateProgress(this.id,$),this.queue.emit("progress",this,$)}async log($){return n0.addJobLog(this.queue,this.id,$,this.opts.keepLogs)}async removeChildDependency(){if(await this.scripts.removeChildDependency(this.id,this.parentKey))return this.parent=void 0,this.parentKey=void 0,!0;return!1}async clearLogs($){let X=await this.queue.client,Y=this.toKey(this.id)+":logs";if($)await X.ltrim(Y,-$,-1);else await X.del(Y)}async remove({removeChildren:$=!0}={}){await this.queue.waitUntilReady();let X=this.queue,Y=this;if(await this.scripts.remove(Y.id,$))X.emit("removed",Y);else throw new Error(`Job ${this.id} could not be removed because it is locked by another worker`)}extendLock($,X){return this.scripts.extendLock(this.id,$,X)}async moveToCompleted($,X,Y=!0){await this.queue.waitUntilReady(),this.returnvalue=$||void 0;let G=P7(JSON.stringify,JSON,[$]);if(G===k4)throw k4.value;let H=this.scripts.moveToCompletedArgs(this,G,this.opts.removeOnComplete,X,Y),Q=await this.scripts.moveToFinished(this.id,H);return this.finishedOn=H[this.scripts.moveToFinishedKeys.length+1],this.attemptsMade+=1,Q}async shouldRetryJob($){if(this.attemptsMade+1<this.opts.attempts&&!this.discarded&&!($ instanceof RY||$.name=="UnrecoverableError")){let X=this.queue.opts,Y=await M4.calculate(this.opts.backoff,this.attemptsMade+1,$,this,X.settings&&X.settings.backoffStrategy);return[Y==-1?!1:!0,Y==-1?0:Y]}else return[!1,0]}async moveToFailed($,X,Y=!1){let G=await this.queue.client,H=$===null||$===void 0?void 0:$.message;this.failedReason=H;let Q,J=G.multi();this.saveStacktrace(J,$);let W,[w,B]=await this.shouldRetryJob($);if(w)if(B){let U=this.scripts.moveToDelayedArgs(this.id,Date.now(),X,B);this.scripts.execCommand(J,"moveToDelayed",U),Q="moveToDelayed"}else this.scripts.execCommand(J,"retryJob",this.scripts.retryJobArgs(this.id,this.opts.lifo,X)),Q="retryJob";else{let U=this.scripts.moveToFailedArgs(this,H,this.opts.removeOnFail,X,Y);this.scripts.execCommand(J,"moveToFinished",U),W=U[this.scripts.moveToFinishedKeys.length+1],Q="moveToFinished"}return this.queue.trace(N1.INTERNAL,this.getSpanOperation(Q),this.queue.name,async(U,V)=>{if(V)this.scripts.execCommand(J,"updateJobOption",[this.toKey(this.id),"tm",V]);let F=await J.exec(),E=F.find((A)=>A[0]);if(E)throw new Error(`Error "moveToFailed" with command ${Q}: ${E}`);let K=F[F.length-1][1];if(K<0)throw this.scripts.finishedErrors({code:K,jobId:this.id,command:Q,state:"active"});if(W&&typeof W==="number")this.finishedOn=W;if(B&&typeof B==="number")this.delay=B;if(this.attemptsMade+=1,Array.isArray(K))return r7(K)})}getSpanOperation($){switch($){case"moveToDelayed":return"delay";case"retryJob":return"retry";case"moveToFinished":return"fail"}}isCompleted(){return this.isInZSet("completed")}isFailed(){return this.isInZSet("failed")}isDelayed(){return this.isInZSet("delayed")}isWaitingChildren(){return this.isInZSet("waiting-children")}isActive(){return this.isInList("active")}async isWaiting(){return await this.isInList("wait")||await this.isInList("paused")}get queueName(){return this.queue.name}get prefix(){return this.queue.opts.prefix}getState(){return this.scripts.getState(this.id)}async changeDelay($){await this.scripts.changeDelay(this.id,$),this.delay=$}async changePriority($){await this.scripts.changePriority(this.id,$.priority,$.lifo),this.priority=$.priority||0}async getChildrenValues(){let X=await(await this.queue.client).hgetall(this.toKey(`${this.id}:processed`));if(X)return zY(X)}async getFailedChildrenValues(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getDependencies($={}){let Y=(await this.queue.client).multi();if(!$.processed&&!$.unprocessed){Y.hgetall(this.toKey(`${this.id}:processed`)),Y.smembers(this.toKey(`${this.id}:dependencies`));let[[G,H],[Q,J]]=await Y.exec();return{processed:zY(H),unprocessed:J}}else{let G={cursor:0,count:20};if($.processed){let V=Object.assign(Object.assign({},G),$.processed);Y.hscan(this.toKey(`${this.id}:processed`),V.cursor,"COUNT",V.count)}if($.unprocessed){let V=Object.assign(Object.assign({},G),$.unprocessed);Y.sscan(this.toKey(`${this.id}:dependencies`),V.cursor,"COUNT",V.count)}let[H,Q]=await Y.exec(),[J,W=[]]=$.processed?H[1]:[],[w,B=[]]=$.unprocessed?$.processed?Q[1]:H[1]:[],U={};for(let V=0;V<W.length;++V)if(V%2)U[W[V-1]]=JSON.parse(W[V]);return Object.assign(Object.assign({},J?{processed:U,nextProcessedCursor:Number(J)}:{}),w?{unprocessed:B,nextUnprocessedCursor:Number(w)}:{})}}async getDependenciesCount($={}){let Y=(await this.queue.client).multi(),G=!$.processed&&!$.unprocessed?{processed:!0,unprocessed:!0}:$;if(G.processed)Y.hlen(this.toKey(`${this.id}:processed`));if(G.unprocessed)Y.scard(this.toKey(`${this.id}:dependencies`));let[[H,Q]=[],[J,W]=[]]=await Y.exec(),w=G.processed?Q:void 0,B=G.unprocessed?G.processed?W:Q:void 0;return Object.assign(Object.assign({},G.processed?{processed:w}:{}),G.unprocessed?{unprocessed:B}:{})}async waitUntilFinished($,X){await this.queue.waitUntilReady();let Y=this.id;return new Promise(async(G,H)=>{let Q;if(X)Q=setTimeout(()=>W(`Job wait ${this.name} timed out before finishing, no finish notification arrived after ${X}ms (id=${Y})`),X);function J(K){U(),G(K.returnvalue)}function W(K){U(),H(new Error(K.failedReason||K))}let w=`completed:${Y}`,B=`failed:${Y}`;$.on(w,J),$.on(B,W),this.queue.on("closing",W);let U=()=>{clearInterval(Q),$.removeListener(w,J),$.removeListener(B,W),this.queue.removeListener("closing",W)};await $.waitUntilReady();let[V,F]=await this.scripts.isFinished(Y,!0);if(V!=0)if(V==-1||V==2)W({failedReason:F});else J({returnvalue:JV(F)})})}async moveToDelayed($,X){let Y=Date.now(),G=$-Y,H=G>0?G:0,Q=await this.scripts.moveToDelayed(this.id,Y,H,X,{skipAttempt:!0});return this.delay=H,Q}async moveToWaitingChildren($,X={}){return await this.scripts.moveToWaitingChildren(this.id,$,X)}async promote(){let $=this.id;await this.scripts.promote($),this.delay=0}retry($="failed"){return this.failedReason=null,this.finishedOn=null,this.processedOn=null,this.returnvalue=null,this.scripts.reprocessJob(this,$)}discard(){this.discarded=!0}async isInZSet($){return await(await this.queue.client).zscore(this.queue.toKey($),this.id)!==null}async isInList($){return this.scripts.isJobInList(this.queue.toKey($),this.id)}addJob($,X){let Y=this.asJSON();return this.validateOptions(Y),this.scripts.addJob($,Y,Y.opts,this.id,X)}validateOptions($){var X;if(this.opts.sizeLimit&&Iw($.data)>this.opts.sizeLimit)throw new Error(`The size of job ${this.name} exceeds the limit ${this.opts.sizeLimit} bytes`);if(this.opts.delay&&this.opts.repeat&&!((X=this.opts.repeat)===null||X===void 0?void 0:X.count))throw new Error("Delay and repeat options could not be used together");if(this.opts.removeDependencyOnFailure&&this.opts.failParentOnFailure)throw new Error("RemoveDependencyOnFailure and failParentOnFailure options can not be used together");if(this.opts.removeDependencyOnFailure&&this.opts.ignoreDependencyOnFailure)throw new Error("RemoveDependencyOnFailure and ignoreDependencyOnFailure options can not be used together");if(this.opts.failParentOnFailure&&this.opts.ignoreDependencyOnFailure)throw new Error("FailParentOnFailure and ignoreDependencyOnFailure options can not be used together");if(`${parseInt(this.id,10)}`===this.id)throw new Error("Custom Ids cannot be integers");if(this.opts.priority){if(Math.trunc(this.opts.priority)!==this.opts.priority)throw new Error("Priority should not be float");if(this.opts.priority>QV)throw new Error(`Priority should be between 0 and ${QV}`)}}saveStacktrace($,X){if(this.stacktrace=this.stacktrace||[],X===null||X===void 0?void 0:X.stack){if(this.stacktrace.push(X.stack),this.opts.stackTraceLimit===0)this.stacktrace=[];else if(this.opts.stackTraceLimit)this.stacktrace=this.stacktrace.slice(-this.opts.stackTraceLimit)}let Y=this.scripts.saveStacktraceArgs(this.id,JSON.stringify(this.stacktrace),X===null||X===void 0?void 0:X.message);this.scripts.execCommand($,"saveStacktrace",Y)}}function uP($){let X=P7(JSON.parse,JSON,[$]);if(X===k4||!(X instanceof Array))return[];else return X}function JV($){let X=P7(JSON.parse,JSON,[$]);if(X!==k4)return X;else mP("corrupted returnvalue: "+$,X)}class s7{constructor($="bull"){this.prefix=$}getKeys($){let X={};return["","active","wait","waiting-children","paused","id","delayed","prioritized","stalled-check","completed","failed","stalled","repeat","limiter","meta","events","pc","marker","de"].forEach((Y)=>{X[Y]=this.toKey($,Y)}),X}toKey($,X){return`${this.getQueueQualifiedName($)}:${X}`}getQueueQualifiedName($){return`${this.prefix}:${$}`}}var eY=G$(A7(),1),$G=G$(Y0(),1);import{EventEmitter as kS}from"events";var tY={};Az(tY,{updateRepeatableJobMillis:()=>TS,updateProgress:()=>jS,updateJobOption:()=>CS,updateData:()=>IS,saveStacktrace:()=>SS,retryJob:()=>PS,reprocessJob:()=>ZS,removeRepeatable:()=>MS,removeJobScheduler:()=>qS,removeJob:()=>NS,removeChildDependency:()=>_S,releaseLock:()=>DS,promote:()=>RS,pause:()=>OS,paginate:()=>LS,obliterate:()=>zS,moveToWaitingChildren:()=>KS,moveToFinished:()=>AS,moveToDelayed:()=>ES,moveToActive:()=>FS,moveStalledJobsToWait:()=>VS,moveJobsToWait:()=>US,moveJobFromActiveToWait:()=>BS,isMaxed:()=>wS,isJobInList:()=>WS,isFinished:()=>JS,getStateV2:()=>QS,getState:()=>HS,getRateLimitTtl:()=>GS,getRanges:()=>YS,getCountsPerPriority:()=>XS,getCounts:()=>$S,extendLock:()=>eP,drain:()=>tP,cleanJobsInSet:()=>aP,changePriority:()=>oP,changeDelay:()=>sP,addStandardJob:()=>rP,addRepeatableJob:()=>nP,addPrioritizedJob:()=>iP,addParentJob:()=>lP,addLog:()=>dP,addJobScheduler:()=>cP,addDelayedJob:()=>pP});var pP={name:"addDelayedJob",content:`--[[
  Adds a delayed job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - computes timestamp.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'delayed'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (use custom instead of one generated automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
          x [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[2]
local idKey = KEYS[3]
local delayedKey = KEYS[4]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to debounce a job.
]]
local function deduplicateJob(prefixKey, deduplicationOpts, jobId, deduplicationKey, eventsKey, maxEvents)
  local deduplicationId = deduplicationOpts and deduplicationOpts['id']
  if deduplicationId then
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl then
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
    else
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
      local currentDebounceJobId = rcall('GET', deduplicationKey)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "debounced", "jobId", currentDebounceJobId, "debounceId", deduplicationId)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "deduplicated", "jobId", currentDebounceJobId, "deduplicationId", deduplicationId)
      return currentDebounceJobId
    end
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to active if needed.
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey,
                                        parentKey, parentId, timestamp)
    local isParentActive = rcall("ZSCORE",
                                 parentQueueKey .. ":waiting-children", parentId)
    if rcall("SCARD", parentDependenciesKey) == 0 and isParentActive then
        rcall("ZREM", parentQueueKey .. ":waiting-children", parentId)
        local parentWaitKey = parentQueueKey .. ":wait"
        local parentPausedKey = parentQueueKey .. ":paused"
        local parentActiveKey = parentQueueKey .. ":active"
        local parentMetaKey = parentQueueKey .. ":meta"
        local parentMarkerKey = parentQueueKey .. ":marker"
        local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
        local priority = tonumber(jobAttributes[1]) or 0
        local delay = tonumber(jobAttributes[2]) or 0
        if delay > 0 then
            local delayedTimestamp = tonumber(timestamp) + delay
            local score = delayedTimestamp * 0x1000
            local parentDelayedKey = parentQueueKey .. ":delayed"
            rcall("ZADD", parentDelayedKey, score, parentId)
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed",
                  "jobId", parentId, "delay", delayedTimestamp)
            addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
        else
            if priority == 0 then
                local parentTarget, isParentPausedOrMaxed =
                    getTargetQueueList(parentMetaKey, parentActiveKey, parentWaitKey,
                                       parentPausedKey)
                addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed,
                    parentId)
            else
                local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
                addJobWithPriority(parentMarkerKey,
                                   parentQueueKey .. ":prioritized", priority,
                                   parentId, parentQueueKey .. ":pc", isPausedOrMaxed)
            end
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting",
                  "jobId", parentId, "prev", "waiting-children")
        end
    end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) ~= false then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey ~= nil then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local opts = cmsgpack.unpack(ARGV[3])
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(args[1], opts['de'],
  jobId, deduplicationKey, eventsKey, maxEvents)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
                                 opts, timestamp, parentKey, parentData,
                                 repeatJobKey)
local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
rcall("ZADD", delayedKey, score, jobId)
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
      "jobId", jobId, "delay", delayedTimestamp)
-- mark that a delayed job is available
local markerKey = KEYS[1]
addDelayMarkerIfNeeded(markerKey, delayedKey)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6};var cP={name:"addJobScheduler",content:`--[[
  Adds a job scheduler, i.e. a job factory that creates jobs based on a given schedule (repeat options).
    Input:
      KEYS[1] 'repeat' key
      KEYS[2] 'delayed' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  patten?
            [4]  endDate?
            [5]  every?
      ARGV[3] jobs scheduler id
      ARGV[4] prefix key
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local nextMillis = ARGV[1]
local jobSchedulerId = ARGV[3]
local prefixKey = ARGV[4]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKey(baseKey, jobKey)
  end
  removeJobKeys(jobKey)
end
local function storeRepeatableJob(repeatKey, nextMillis, rawOpts)
  rcall("ZADD", repeatKey, nextMillis, jobSchedulerId)
  local opts = cmsgpack.unpack(rawOpts)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  rcall("HMSET", repeatKey .. ":" .. jobSchedulerId, "name", opts['name'],
    unpack(optionalValues))
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
if prevMillis ~= false then
  local delayedJobId =  "repeat:" .. jobSchedulerId .. ":" .. prevMillis
  local nextDelayedJobId =  repeatKey .. ":" .. jobSchedulerId .. ":" .. nextMillis
  if rcall("ZSCORE", delayedKey, delayedJobId) ~= false
   and rcall("EXISTS", nextDelayedJobId) ~= 1 then
    removeJob(delayedJobId, true, prefixKey, true --[[remove debounce key]])
    rcall("ZREM", delayedKey, delayedJobId)
  end
end
return storeRepeatableJob(repeatKey, nextMillis, ARGV[2])
`,keys:2};var dP={name:"addLog",content:`--[[
  Add job log
  Input:
    KEYS[1] job id key
    KEYS[2] job logs key
    ARGV[1] id
    ARGV[2] log
    ARGV[3] keepLogs
  Output:
    -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
  local logCount = rcall("RPUSH", KEYS[2], ARGV[2])
  if ARGV[3] ~= '' then
    local keepLogs = tonumber(ARGV[3])
    rcall("LTRIM", KEYS[2], -keepLogs, -1)
    return math.min(keepLogs, logCount)
  end
  return logCount
else
  return -1
end
`,keys:2};var lP={name:"addParentJob",content:`--[[
  Adds a parent job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - adds the job to the waiting-children zset
    Input:
      KEYS[1] 'meta'
      KEYS[2] 'id'
      KEYS[3] 'completed'
      KEYS[4] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[1]
local idKey = KEYS[2]
local completedKey = KEYS[3]
local eventsKey = KEYS[4]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Function to debounce a job.
]]
local function deduplicateJob(prefixKey, deduplicationOpts, jobId, deduplicationKey, eventsKey, maxEvents)
  local deduplicationId = deduplicationOpts and deduplicationOpts['id']
  if deduplicationId then
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl then
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
    else
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
      local currentDebounceJobId = rcall('GET', deduplicationKey)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "debounced", "jobId", currentDebounceJobId, "debounceId", deduplicationId)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "deduplicated", "jobId", currentDebounceJobId, "deduplicationId", deduplicationId)
      return currentDebounceJobId
    end
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to active if needed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey,
                                        parentKey, parentId, timestamp)
    local isParentActive = rcall("ZSCORE",
                                 parentQueueKey .. ":waiting-children", parentId)
    if rcall("SCARD", parentDependenciesKey) == 0 and isParentActive then
        rcall("ZREM", parentQueueKey .. ":waiting-children", parentId)
        local parentWaitKey = parentQueueKey .. ":wait"
        local parentPausedKey = parentQueueKey .. ":paused"
        local parentActiveKey = parentQueueKey .. ":active"
        local parentMetaKey = parentQueueKey .. ":meta"
        local parentMarkerKey = parentQueueKey .. ":marker"
        local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
        local priority = tonumber(jobAttributes[1]) or 0
        local delay = tonumber(jobAttributes[2]) or 0
        if delay > 0 then
            local delayedTimestamp = tonumber(timestamp) + delay
            local score = delayedTimestamp * 0x1000
            local parentDelayedKey = parentQueueKey .. ":delayed"
            rcall("ZADD", parentDelayedKey, score, parentId)
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed",
                  "jobId", parentId, "delay", delayedTimestamp)
            addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
        else
            if priority == 0 then
                local parentTarget, isParentPausedOrMaxed =
                    getTargetQueueList(parentMetaKey, parentActiveKey, parentWaitKey,
                                       parentPausedKey)
                addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed,
                    parentId)
            else
                local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
                addJobWithPriority(parentMarkerKey,
                                   parentQueueKey .. ":prioritized", priority,
                                   parentId, parentQueueKey .. ":pc", isPausedOrMaxed)
            end
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting",
                  "jobId", parentId, "prev", "waiting-children")
        end
    end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) ~= false then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey ~= nil then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(args[1], opts['de'],
  jobId, deduplicationKey, eventsKey, maxEvents)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local waitChildrenKey = args[6]
rcall("ZADD", waitChildrenKey, timestamp, jobId)
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
      "waiting-children", "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:4};var iP={name:"addPrioritizedJob",content:`--[[
  Adds a priotitized job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'prioritized'
      KEYS[5] 'completed'
      KEYS[6] 'active'
      KEYS[7] events stream key
      KEYS[8] 'pc' priority counter
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]] 
local metaKey = KEYS[2]
local idKey = KEYS[3]
local priorityKey = KEYS[4]
local completedKey = KEYS[5]
local activeKey = KEYS[6]
local eventsKey = KEYS[7]
local priorityCounterKey = KEYS[8]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
local function deduplicateJob(prefixKey, deduplicationOpts, jobId, deduplicationKey, eventsKey, maxEvents)
  local deduplicationId = deduplicationOpts and deduplicationOpts['id']
  if deduplicationId then
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl then
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
    else
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
      local currentDebounceJobId = rcall('GET', deduplicationKey)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "debounced", "jobId", currentDebounceJobId, "debounceId", deduplicationId)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "deduplicated", "jobId", currentDebounceJobId, "deduplicationId", deduplicationId)
      return currentDebounceJobId
    end
  end
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey ~= nil then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to active if needed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey,
                                        parentKey, parentId, timestamp)
    local isParentActive = rcall("ZSCORE",
                                 parentQueueKey .. ":waiting-children", parentId)
    if rcall("SCARD", parentDependenciesKey) == 0 and isParentActive then
        rcall("ZREM", parentQueueKey .. ":waiting-children", parentId)
        local parentWaitKey = parentQueueKey .. ":wait"
        local parentPausedKey = parentQueueKey .. ":paused"
        local parentActiveKey = parentQueueKey .. ":active"
        local parentMetaKey = parentQueueKey .. ":meta"
        local parentMarkerKey = parentQueueKey .. ":marker"
        local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
        local priority = tonumber(jobAttributes[1]) or 0
        local delay = tonumber(jobAttributes[2]) or 0
        if delay > 0 then
            local delayedTimestamp = tonumber(timestamp) + delay
            local score = delayedTimestamp * 0x1000
            local parentDelayedKey = parentQueueKey .. ":delayed"
            rcall("ZADD", parentDelayedKey, score, parentId)
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed",
                  "jobId", parentId, "delay", delayedTimestamp)
            addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
        else
            if priority == 0 then
                local parentTarget, isParentPausedOrMaxed =
                    getTargetQueueList(parentMetaKey, parentActiveKey, parentWaitKey,
                                       parentPausedKey)
                addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed,
                    parentId)
            else
                local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
                addJobWithPriority(parentMarkerKey,
                                   parentQueueKey .. ":prioritized", priority,
                                   parentId, parentQueueKey .. ":pc", isPausedOrMaxed)
            end
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting",
                  "jobId", parentId, "prev", "waiting-children")
        end
    end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) ~= false then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(args[1], opts['de'],
  jobId, deduplicationKey, eventsKey, maxEvents)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
                                 opts, timestamp, parentKey, parentData,
                                 repeatJobKey)
-- Add the job to the prioritized set
local isPausedOrMaxed = isQueuePausedOrMaxed(metaKey, activeKey)
addJobWithPriority( KEYS[1], priorityKey, priority, jobId, priorityCounterKey, isPausedOrMaxed)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:8};var nP={name:"addRepeatableJob",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      KEYS[2] 'delayed' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  patten?
            [4]  endDate?
            [5]  every?
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      ARGV[4] custom key
      ARGV[5] prefix key
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local nextMillis = ARGV[1]
local legacyCustomKey = ARGV[3]
local customKey = ARGV[4]
local prefixKey = ARGV[5]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKey(baseKey, jobKey)
  end
  removeJobKeys(jobKey)
end
local function storeRepeatableJob(repeatKey, customKey, nextMillis, rawOpts)
  rcall("ZADD", repeatKey, nextMillis, customKey)
  local opts = cmsgpack.unpack(rawOpts)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  rcall("HMSET", repeatKey .. ":" .. customKey, "name", opts['name'],
    unpack(optionalValues))
  return customKey
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local prevMillis = rcall("ZSCORE", repeatKey, customKey)
if prevMillis ~= false then
  local delayedJobId =  "repeat:" .. customKey .. ":" .. prevMillis
  local nextDelayedJobId =  repeatKey .. ":" .. customKey .. ":" .. nextMillis
  if rcall("ZSCORE", delayedKey, delayedJobId) ~= false
   and rcall("EXISTS", nextDelayedJobId) ~= 1 then
    removeJob(delayedJobId, true, prefixKey, true --[[remove debounce key]])
    rcall("ZREM", delayedKey, delayedJobId)
  end
end
-- Keep backwards compatibility with old repeatable jobs (<= 3.0.0)
if rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
  return storeRepeatableJob(repeatKey, legacyCustomKey, nextMillis, ARGV[2])
end
return storeRepeatableJob(repeatKey, customKey, nextMillis, ARGV[2])
`,keys:2};var rP={name:"addStandardJob",content:`--[[
  Adds a job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - if delayed:
      - computes timestamp.
      - adds to delayed zset.
      - Emits a global event 'delayed' if the job is delayed.
    - if not delayed
      - Adds the jobId to the wait/paused list in one of three ways:
         - LIFO
         - FIFO
         - prioritized.
      - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'wait',
      KEYS[2] 'paused'
      KEYS[3] 'meta'
      KEYS[4] 'id'
      KEYS[5] 'completed'
      KEYS[6] 'active'
      KEYS[7] events stream key
      KEYS[8] marker key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  waitChildrenKey key.
            [7]  parent dependencies key.
            [8]  parent? {id, queueKey}
            [9]  repeat job key
            [10] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local eventsKey = KEYS[7]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[8]
local repeatJobKey = args[9]
local deduplicationKey = args[10]
local parentData
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
local function deduplicateJob(prefixKey, deduplicationOpts, jobId, deduplicationKey, eventsKey, maxEvents)
  local deduplicationId = deduplicationOpts and deduplicationOpts['id']
  if deduplicationId then
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl then
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
    else
      deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
      local currentDebounceJobId = rcall('GET', deduplicationKey)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "debounced", "jobId", currentDebounceJobId, "debounceId", deduplicationId)
      rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
        "deduplicated", "jobId", currentDebounceJobId, "deduplicationId", deduplicationId)
      return currentDebounceJobId
    end
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to active if needed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey,
                                        parentKey, parentId, timestamp)
    local isParentActive = rcall("ZSCORE",
                                 parentQueueKey .. ":waiting-children", parentId)
    if rcall("SCARD", parentDependenciesKey) == 0 and isParentActive then
        rcall("ZREM", parentQueueKey .. ":waiting-children", parentId)
        local parentWaitKey = parentQueueKey .. ":wait"
        local parentPausedKey = parentQueueKey .. ":paused"
        local parentActiveKey = parentQueueKey .. ":active"
        local parentMetaKey = parentQueueKey .. ":meta"
        local parentMarkerKey = parentQueueKey .. ":marker"
        local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
        local priority = tonumber(jobAttributes[1]) or 0
        local delay = tonumber(jobAttributes[2]) or 0
        if delay > 0 then
            local delayedTimestamp = tonumber(timestamp) + delay
            local score = delayedTimestamp * 0x1000
            local parentDelayedKey = parentQueueKey .. ":delayed"
            rcall("ZADD", parentDelayedKey, score, parentId)
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed",
                  "jobId", parentId, "delay", delayedTimestamp)
            addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
        else
            if priority == 0 then
                local parentTarget, isParentPausedOrMaxed =
                    getTargetQueueList(parentMetaKey, parentActiveKey, parentWaitKey,
                                       parentPausedKey)
                addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed,
                    parentId)
            else
                local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
                addJobWithPriority(parentMarkerKey,
                                   parentQueueKey .. ":prioritized", priority,
                                   parentId, parentQueueKey .. ":pc", isPausedOrMaxed)
            end
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting",
                  "jobId", parentId, "prev", "waiting-children")
        end
    end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) ~= false then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey ~= nil then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", KEYS[4])
local metaKey = KEYS[3]
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[7]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, KEYS[5], eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(args[1], opts['de'],
  jobId, deduplicationKey, eventsKey, maxEvents)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[6], KEYS[1], KEYS[2])
-- LIFO or FIFO
local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
addJobInTargetList(target, KEYS[8], pushCmd, isPausedOrMaxed, jobId)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:8};var sP={name:"changeDelay",content:`--[[
  Change job delay when it is in delayed set.
  Input:
    KEYS[1] delayed key
    KEYS[2] meta key
    KEYS[3] marker key
    KEYS[4] events stream
    ARGV[1] delay
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] job key
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in delayed set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
if rcall("EXISTS", ARGV[4]) == 1 then
  local jobId = ARGV[3]
  local delay = tonumber(ARGV[1])
  local score, delayedTimestamp = getDelayedScore(KEYS[1], ARGV[2], delay)
  local numRemovedElements = rcall("ZREM", KEYS[1], jobId)
  if numRemovedElements < 1 then
    return -3
  end
  rcall("HSET", ARGV[4], "delay", delay)
  rcall("ZADD", KEYS[1], score, jobId)
  local maxEvents = getOrSetMaxEvents(KEYS[2])
  rcall("XADD", KEYS[4], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(KEYS[3], KEYS[1])
  return 0
else
  return -1
end`,keys:4};var oP={name:"changePriority",content:`--[[
  Change job priority
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] 'active'
    KEYS[6] 'pc' priority counter
    KEYS[7] 'marker'
    ARGV[1] priority value
    ARGV[2] prefix key
    ARGV[3] job id
    ARGV[4] lifo
    Output:
       0  - OK
      -1  - Missing job
]]
local jobId = ARGV[3]
local jobKey = ARGV[2] .. jobId
local priority = tonumber(ARGV[1])
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
local function reAddJobWithNewPriority( prioritizedKey, markerKey, targetKey,
    priorityCounter, lifo, priority, jobId, isPausedOrMaxed)
    if priority == 0 then
        local pushCmd = lifo and 'RPUSH' or 'LPUSH'
        addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
    else
        if lifo then
            pushBackJobWithPriority(prioritizedKey, priority, jobId)
        else
            addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
                priorityCounter, isPausedOrMaxed)
        end
    end
end
if rcall("EXISTS", jobKey) == 1 then
    local metaKey = KEYS[3]
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[5], KEYS[1], KEYS[2])
    local prioritizedKey = KEYS[4]
    local priorityCounterKey = KEYS[6]
    local markerKey = KEYS[7]
    -- Re-add with the new priority
    if rcall("ZREM", prioritizedKey, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    elseif rcall("LREM", target, -1, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    end
    rcall("HSET", jobKey, "priority", priority)
    return 0
else
    return -1
end
`,keys:7};var aP={name:"cleanJobsInSet",content:`--[[
  Remove jobs from the specific set.
  Input:
    KEYS[1]  set key,
    KEYS[2]  events stream key
    KEYS[3]  job schedulers key
    ARGV[1]  jobKey prefix
    ARGV[2]  timestamp
    ARGV[3]  limit the number of jobs to be removed. 0 is unlimited
    ARGV[4]  set name, can be any of 'wait', 'active', 'paused', 'delayed', 'completed', or 'failed'
]]
local rcall = redis.call
local rangeStart = 0
local rangeEnd = -1
local limit = tonumber(ARGV[3])
-- If we're only deleting _n_ items, avoid retrieving all items
-- for faster performance
--
-- Start from the tail of the list, since that's where oldest elements
-- are generally added for FIFO lists
if limit > 0 then
  rangeStart = -1 - limit + 1
  rangeEnd = -1
end
-- Includes
--[[
  Function to clean job list.
  Returns jobIds and deleted count number.
]]
-- Includes
--[[
  Function to get the latest saved timestamp.
]]
local function getTimestamp(jobKey, attributes)
  if #attributes == 1 then
    return rcall("HGET", jobKey, attributes[1])
  end
  local jobTs
  for _, ts in ipairs(rcall("HMGET", jobKey, unpack(attributes))) do
    if (ts) then
      jobTs = ts
      break
    end
  end
  return jobTs
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKey(baseKey, jobKey)
  end
  removeJobKeys(jobKey)
end
local function cleanList(listKey, jobKeyPrefix, rangeStart, rangeEnd,
  timestamp, isWaiting)
  local jobs = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  local deleted = {}
  local deletedCount = 0
  local jobTS
  local deletionMarker = ''
  local jobIdsLen = #jobs
  for i, job in ipairs(jobs) do
    if limit > 0 and deletedCount >= limit then
      break
    end
    local jobKey = jobKeyPrefix .. job
    if (isWaiting or rcall("EXISTS", jobKey .. ":lock") == 0) then
      -- Find the right timestamp of the job to compare to maxTimestamp:
      -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
      -- * processedOn represents when the job was last attempted, but it doesn't get populated until
      --   the job is first tried
      -- * timestamp is the original job submission time
      -- Fetch all three of these (in that order) and use the first one that is set so that we'll leave jobs
      -- that have been active within the grace period:
      jobTS = getTimestamp(jobKey, {"finishedOn", "processedOn", "timestamp"})
      if (not jobTS or jobTS <= timestamp) then
        -- replace the entry with a deletion marker; the actual deletion will
        -- occur at the end of the script
        rcall("LSET", listKey, rangeEnd - jobIdsLen + i, deletionMarker)
        removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]])
        deletedCount = deletedCount + 1
        table.insert(deleted, job)
      end
    end
  end
  rcall("LREM", listKey, 0, deletionMarker)
  return {deleted, deletedCount}
end
--[[
  Function to clean job set.
  Returns jobIds and deleted count number.
]] 
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  We use ZRANGEBYSCORE to make the case where we're deleting a limited number
  of items in a sorted set only run a single iteration. If we simply used
  ZRANGE, we may take a long time traversing through jobs that are within the
  grace period.
]]
local function getJobsInZset(zsetKey, rangeEnd, limit)
  if limit > 0 then
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd, "LIMIT", 0, limit)
  else
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd)
  end
end
local function isJobSchedulerJob(jobId, jobSchedulersKey)
    if jobSchedulersKey then
        local jobSchedulerId = jobId:match("repeat:(.*):%d+")
        if jobSchedulerId then
            return rcall("ZSCORE", jobSchedulersKey, jobSchedulerId)
        end
    end
    return false
end
local function cleanSet(
    setKey,
    jobKeyPrefix,
    rangeEnd,
    timestamp,
    limit,
    attributes,
    isFinished,
    jobSchedulersKey)
    local jobs = getJobsInZset(setKey, rangeEnd, limit)
    local deleted = {}
    local deletedCount = 0
    local jobTS
    for i, job in ipairs(jobs) do
        if limit > 0 and deletedCount >= limit then
            break
        end
        -- Extract a Job Scheduler Id from jobId ("repeat:job-scheduler-id:millis") 
        -- and check if it is in the scheduled jobs
        if not isJobSchedulerJob(job, jobSchedulersKey) then
            local jobKey = jobKeyPrefix .. job
            if isFinished then
                removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                deletedCount = deletedCount + 1
                table.insert(deleted, job)
            else
                -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
                jobTS = getTimestamp(jobKey, attributes)
                if (not jobTS or jobTS <= timestamp) then
                    removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                    deletedCount = deletedCount + 1
                    table.insert(deleted, job)
                end
            end
        end
    end
    if (#deleted > 0) then
        for from, to in batches(#deleted, 7000) do
            rcall("ZREM", setKey, unpack(deleted, from, to))
        end
    end
    return {deleted, deletedCount}
end
local result
if ARGV[4] == "active" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], false --[[ hasFinished ]])
elseif ARGV[4] == "delayed" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"processedOn", "timestamp"}, false  --[[ hasFinished ]], KEYS[3])
elseif ARGV[4] == "prioritized" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"timestamp"}, false  --[[ hasFinished ]])
elseif ARGV[4] == "wait" or ARGV[4] == "paused" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], true --[[ hasFinished ]])
else
  rangeEnd = ARGV[2]
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"finishedOn"}, true  --[[ hasFinished ]])
end
rcall("XADD", KEYS[2], "*", "event", "cleaned", "count", result[2])
return result[1]
`,keys:3};var tP={name:"drain",content:`--[[
  Drains the queue, removes all jobs that are waiting
  or delayed, but not active, completed or failed
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'delayed'
    KEYS[4] 'prioritized'
    KEYS[5] 'jobschedulers' (repeat)
    ARGV[1]  queue key prefix
]]
local rcall = redis.call
local queueBaseKey = ARGV[1]
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKey(baseKey, jobKey)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max)
  local jobs = getListItems(keyName, max)
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  -- filter out jobs to ignore
  if jobsToIgnore then
    local filteredJobs = {}
    for i = 1, #jobs do
      if not jobsToIgnore[jobs[i]] then
        table.insert(filteredJobs, jobs[i])
      end
    end
    jobs = filteredJobs
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
removeListJobs(KEYS[1], true, queueBaseKey, 0) -- wait
removeListJobs(KEYS[2], true, queueBaseKey, 0) -- paused
if KEYS[3] ~= "" then
    -- We must not remove delayed jobs if they are associated to a job scheduler.
    local scheduledJobs = {}
    local jobSchedulers = rcall("ZRANGE", KEYS[5], 0, -1, "WITHSCORES")
    -- For every job scheduler, get the current delayed job id.
    for i = 1, #jobSchedulers, 2 do
        local jobSchedulerId = jobSchedulers[i]
        local jobSchedulerMillis = jobSchedulers[i + 1]
        local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. jobSchedulerMillis
        scheduledJobs[delayedJobId] = true
    end
    removeZSetJobs(KEYS[3], true, queueBaseKey, 0, scheduledJobs) -- delayed
end
removeZSetJobs(KEYS[4], true, queueBaseKey, 0) -- prioritized
`,keys:5};var eP={name:"extendLock",content:`--[[
  Extend lock and removes the job from the stalled set.
  Input:
    KEYS[1] 'lock',
    KEYS[2] 'stalled'
    ARGV[1]  token
    ARGV[2]  lock duration in milliseconds
    ARGV[3]  jobid
  Output:
    "1" if lock extented succesfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  --   if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2], "XX") then
  if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2]) then
    rcall("SREM", KEYS[2], ARGV[3])
    return 1
  end
end
return 0
`,keys:2};var $S={name:"getCounts",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1...] types
]]
local rcall = redis.call;
local prefix = KEYS[1]
local results = {}
for i = 1, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        results[#results+1] = count-1
      else
        results[#results+1] = 0
      end
    else
      results[#results+1] = rcall("LLEN", stateKey)
    end
  elseif ARGV[i] == "active" then
    results[#results+1] = rcall("LLEN", stateKey)
  else
    results[#results+1] = rcall("ZCARD", stateKey)
  end
end
return results
`,keys:1};var XS={name:"getCountsPerPriority",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1] wait key
      KEYS[2] paused key
      KEYS[3] meta key
      KEYS[4] prioritized key
      ARGV[1...] priorities
]]
local rcall = redis.call
local results = {}
local waitKey = KEYS[1]
local pausedKey = KEYS[2]
local prioritizedKey = KEYS[4]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
for i = 1, #ARGV do
  local priority = tonumber(ARGV[i])
  if priority == 0 then
    if isQueuePaused(KEYS[3]) then
      results[#results+1] = rcall("LLEN", pausedKey)
    else
      results[#results+1] = rcall("LLEN", waitKey)
    end
  else
    results[#results+1] = rcall("ZCOUNT", prioritizedKey,
      priority * 0x100000000, (priority + 1)  * 0x100000000 - 1)
  end
end
return results
`,keys:4};var YS={name:"getRanges",content:`--[[
  Get job ids per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1]    start
      ARGV[2]    end
      ARGV[3]    asc
      ARGV[4...] types
]]
local rcall = redis.call
local prefix = KEYS[1]
local rangeStart = tonumber(ARGV[1])
local rangeEnd = tonumber(ARGV[2])
local asc = ARGV[3]
local results = {}
local function getRangeInList(listKey, asc, rangeStart, rangeEnd, results)
  if asc == "1" then
    local modifiedRangeStart
    local modifiedRangeEnd
    if rangeStart == -1 then
      modifiedRangeStart = 0
    else
      modifiedRangeStart = -(rangeStart + 1)
    end
    if rangeEnd == -1 then
      modifiedRangeEnd = 0
    else
      modifiedRangeEnd = -(rangeEnd + 1)
    end
    results[#results+1] = rcall("LRANGE", listKey,
      modifiedRangeEnd,
      modifiedRangeStart)
  else
    results[#results+1] = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  end
end
for i = 4, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
      else
        results[#results+1] = {}
      end
    else
      getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
    end
  elseif ARGV[i] == "active" then
    getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
  else
    if asc == "1" then
      results[#results+1] = rcall("ZRANGE", stateKey, rangeStart, rangeEnd)
    else
      results[#results+1] = rcall("ZREVRANGE", stateKey, rangeStart, rangeEnd)
    end
  end
end
return results
`,keys:1};var GS={name:"getRateLimitTtl",content:`--[[
  Get rate limit ttl
    Input:
      KEYS[1] 'limiter'
      ARGV[1] maxJobs
]]
local rcall = redis.call
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
local rateLimiterKey = KEYS[1]
if ARGV[1] ~= "0" then
  return getRateLimitTTL(tonumber(ARGV[1]), rateLimiterKey)
else
  return rcall("PTTL", rateLimiterKey)
end
`,keys:1};var HS={name:"getState",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'prioritized'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) ~= false then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) ~= false then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) ~= false then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) ~= false then
  return "prioritized"
end
-- Includes
--[[
  Functions to check if a item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local active_items = rcall("LRANGE", KEYS[4] , 0, -1)
if checkItemInList(active_items, ARGV[1]) ~= nil then
  return "active"
end
local wait_items = rcall("LRANGE", KEYS[5] , 0, -1)
if checkItemInList(wait_items, ARGV[1]) ~= nil then
  return "waiting"
end
local paused_items = rcall("LRANGE", KEYS[6] , 0, -1)
if checkItemInList(paused_items, ARGV[1]) ~= nil then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7], ARGV[1]) ~= false then
  return "waiting-children"
end
return "unknown"
`,keys:8};var QS={name:"getStateV2",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) ~= false then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) ~= false then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) ~= false then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) ~= false then
  return "prioritized"
end
if rcall("LPOS", KEYS[4] , ARGV[1]) ~= false then
  return "active"
end
if rcall("LPOS", KEYS[5] , ARGV[1]) ~= false then
  return "waiting"
end
if rcall("LPOS", KEYS[6] , ARGV[1]) ~= false then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7] , ARGV[1]) ~= false then
  return "waiting-children"
end
return "unknown"
`,keys:8};var JS={name:"isFinished",content:`--[[
  Checks if a job is finished (.i.e. is in the completed or failed set)
  Input: 
    KEYS[1] completed key
    KEYS[2] failed key
    KEYS[3] job key
    ARGV[1] job id
    ARGV[2] return value?
  Output:
    0 - Not finished.
    1 - Completed.
    2 - Failed.
   -1 - Missing job. 
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[3]) ~= 1 then
  if ARGV[2] == "1" then
    return {-1,"Missing key for job " .. KEYS[3] .. ". isFinished"}
  end  
  return -1
end
if rcall("ZSCORE", KEYS[1], ARGV[1]) ~= false then
  if ARGV[2] == "1" then
    local returnValue = rcall("HGET", KEYS[3], "returnvalue")
    return {1,returnValue}
  end
  return 1
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) ~= false then
  if ARGV[2] == "1" then
    local failedReason = rcall("HGET", KEYS[3], "failedReason")
    return {2,failedReason}
  end
  return 2
end
if ARGV[2] == "1" then
  return {0}
end
return 0
`,keys:3};var WS={name:"isJobInList",content:`--[[
  Checks if job is in a given list.
  Input:
    KEYS[1]
    ARGV[1]
  Output:
    1 if element found in the list.
]]
-- Includes
--[[
  Functions to check if a item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local items = redis.call("LRANGE", KEYS[1] , 0, -1)
return checkItemInList(items, ARGV[1])
`,keys:1};var wS={name:"isMaxed",content:`--[[
  Checks if queue is maxed.
  Input:
    KEYS[1] meta key
    KEYS[2] active key
  Output:
    1 if element found in the list.
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if queue is maxed or not.
]]
local function isQueueMaxed(queueMetaKey, activeKey)
  local maxConcurrency = rcall("HGET", queueMetaKey, "concurrency")
  if maxConcurrency then
    local activeCount = rcall("LLEN", activeKey)
    if activeCount >= tonumber(maxConcurrency) then
      return true
    end
  end
  return false
end
return isQueueMaxed(KEYS[1], KEYS[2])
`,keys:2};var BS={name:"moveJobFromActiveToWait",content:`--[[
  Function to move job from active state to wait.
  Input:
    KEYS[1]  active key
    KEYS[2]  wait key
    KEYS[3]  stalled key
    KEYS[4]  job lock key
    KEYS[5]  paused key
    KEYS[6]  meta key
    KEYS[7]  limiter key
    KEYS[8]  prioritized key
    KEYS[9]  marker key
    KEYS[10] event key
    ARGV[1] job id
    ARGV[2] lock token
    ARGV[3] job id key
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local jobId = ARGV[1]
local token = ARGV[2]
local lockKey = KEYS[4]
local lockToken = rcall("GET", lockKey)
local pttl = rcall("PTTL", KEYS[7])
if lockToken == token then
  local metaKey = KEYS[6]
  local removed = rcall("LREM", KEYS[1], 1, jobId)
  if removed > 0 then
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[1], KEYS[2], KEYS[5])
    rcall("SREM", KEYS[3], jobId)
    local priority = tonumber(rcall("HGET", ARGV[3], "priority")) or 0
    if priority > 0 then
      pushBackJobWithPriority(KEYS[8], priority, jobId)
    else
      addJobInTargetList(target, KEYS[9], "RPUSH", isPausedOrMaxed, jobId)
    end
    rcall("DEL", lockKey)
    local maxEvents = getOrSetMaxEvents(metaKey)
    -- Emit waiting event
    rcall("XADD", KEYS[10], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
  end
end
return pttl
`,keys:10};var US={name:"moveJobsToWait",content:`--[[
  Move completed, failed or delayed jobs to wait.
  Note: Does not support jobs with priorities.
  Input:
    KEYS[1] base key
    KEYS[2] events stream
    KEYS[3] state key (failed, completed, delayed)
    KEYS[4] 'wait'
    KEYS[5] 'paused'
    KEYS[6] 'meta'
    KEYS[7] 'active'
    KEYS[8] 'marker'
    ARGV[1] count
    ARGV[2] timestamp
    ARGV[3] prev state
  Output:
    1  means the operation is not completed
    0  means the operation is completed
]]
local maxCount = tonumber(ARGV[1])
local timestamp = tonumber(ARGV[2])
local rcall = redis.call;
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local metaKey = KEYS[6]
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[4], KEYS[5])
local jobs = rcall('ZRANGEBYSCORE', KEYS[3], 0, timestamp, 'LIMIT', 0, maxCount)
if (#jobs > 0) then
    if ARGV[3] == "failed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "failedReason")
        end
    elseif ARGV[3] == "completed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "returnvalue")
        end
    end
    local maxEvents = getOrSetMaxEvents(metaKey)
    for i, key in ipairs(jobs) do
        -- Emit waiting event
        rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event",
              "waiting", "jobId", key, "prev", ARGV[3]);
    end
    for from, to in batches(#jobs, 7000) do
        rcall("ZREM", KEYS[3], unpack(jobs, from, to))
        rcall("LPUSH", target, unpack(jobs, from, to))
    end
    addBaseMarkerIfNeeded(KEYS[8], isPausedOrMaxed)
end
maxCount = maxCount - #jobs
if (maxCount <= 0) then return 1 end
return 0
`,keys:8};var VS={name:"moveStalledJobsToWait",content:`--[[
  Move stalled jobs to wait.
    Input:
      KEYS[1] 'stalled' (SET)
      KEYS[2] 'wait',   (LIST)
      KEYS[3] 'active', (LIST)
      KEYS[4] 'failed', (ZSET)
      KEYS[5] 'stalled-check', (KEY)
      KEYS[6] 'meta', (KEY)
      KEYS[7] 'paused', (LIST)
      KEYS[8] 'marker'
      KEYS[9] 'event stream' (STREAM)
      ARGV[1]  Max stalled job count
      ARGV[2]  queue.toKey('')
      ARGV[3]  timestamp
      ARGV[4]  max check time
    Events:
      'stalled' with stalled job id.
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to recursively move from waitingChildren to failed.
]]
-- Includes
--[[
  Validate and move parent to active if needed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey,
                                        parentKey, parentId, timestamp)
    local isParentActive = rcall("ZSCORE",
                                 parentQueueKey .. ":waiting-children", parentId)
    if rcall("SCARD", parentDependenciesKey) == 0 and isParentActive then
        rcall("ZREM", parentQueueKey .. ":waiting-children", parentId)
        local parentWaitKey = parentQueueKey .. ":wait"
        local parentPausedKey = parentQueueKey .. ":paused"
        local parentActiveKey = parentQueueKey .. ":active"
        local parentMetaKey = parentQueueKey .. ":meta"
        local parentMarkerKey = parentQueueKey .. ":marker"
        local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
        local priority = tonumber(jobAttributes[1]) or 0
        local delay = tonumber(jobAttributes[2]) or 0
        if delay > 0 then
            local delayedTimestamp = tonumber(timestamp) + delay
            local score = delayedTimestamp * 0x1000
            local parentDelayedKey = parentQueueKey .. ":delayed"
            rcall("ZADD", parentDelayedKey, score, parentId)
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed",
                  "jobId", parentId, "delay", delayedTimestamp)
            addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
        else
            if priority == 0 then
                local parentTarget, isParentPausedOrMaxed =
                    getTargetQueueList(parentMetaKey, parentActiveKey, parentWaitKey,
                                       parentPausedKey)
                addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed,
                    parentId)
            else
                local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
                addJobWithPriority(parentMarkerKey,
                                   parentQueueKey .. ":prioritized", priority,
                                   parentId, parentQueueKey .. ":pc", isPausedOrMaxed)
            end
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting",
                  "jobId", parentId, "prev", "waiting-children")
        end
    end
end
--[[
  Function to remove deduplication key if needed.
]]
local function removeDeduplicationKeyIfNeeded(prefixKey, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local pttl = rcall("PTTL", deduplicationKey)
    if pttl == 0 or pttl == -1 then
      rcall("DEL", deduplicationKey)
    end
  end
end
local function moveParentFromWaitingChildrenToFailed( parentQueueKey, parentKey, parentId, jobIdKey, timestamp)
  if rcall("ZREM", parentQueueKey .. ":waiting-children", parentId) == 1 then
    rcall("ZADD", parentQueueKey .. ":failed", timestamp, parentId)
    local failedReason = "child " .. jobIdKey .. " failed"
    rcall("HMSET", parentKey, "failedReason", failedReason, "finishedOn", timestamp)
    rcall("XADD", parentQueueKey .. ":events", "*", "event", "failed", "jobId", parentId, "failedReason",
      failedReason, "prev", "waiting-children")
    local jobAttributes = rcall("HMGET", parentKey, "parent", "deid")
    removeDeduplicationKeyIfNeeded(parentQueueKey .. ":", jobAttributes[2])
    if jobAttributes[1] then
      local parentData = cjson.decode(jobAttributes[1])
      if parentData['fpof'] then
        moveParentFromWaitingChildrenToFailed(
          parentData['queueKey'],
          parentData['queueKey'] .. ':' .. parentData['id'],
          parentData['id'],
          parentKey,
          timestamp
        )
      elseif parentData['idof'] or parentData['rdof'] then
        local grandParentKey = parentData['queueKey'] .. ':' .. parentData['id']
        local grandParentDependenciesSet = grandParentKey .. ":dependencies"
        if rcall("SREM", grandParentDependenciesSet, parentKey) == 1 then
          moveParentToWaitIfNeeded(parentData['queueKey'], grandParentDependenciesSet,
            grandParentKey, parentData['id'], timestamp)
          if parentData['idof'] then
            local grandParentFailedSet = grandParentKey .. ":failed"
            rcall("HSET", grandParentFailedSet, parentKey, failedReason)
          end
        end
      end
    end
  end
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKey(baseKey, jobKey)
  end
  removeJobKeys(jobKey)
end
--[[
  Functions to remove jobs by max age.
]]
-- Includes
local function removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix,
  shouldRemoveDebounceKey)
  local start = timestamp - maxAge * 1000
  local jobIds = rcall("ZREVRANGEBYSCORE", targetSet, start, "-inf")
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYSCORE", targetSet, "-inf", start)
end
--[[
  Functions to remove jobs by max count.
]]
-- Includes
local function removeJobsByMaxCount(maxCount, targetSet, prefix)
  local start = maxCount
  local jobIds = rcall("ZREVRANGE", targetSet, start, -1)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYRANK", targetSet, 0, -(maxCount + 1))
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents ~= false then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
local stalledKey = KEYS[1]
local waitKey = KEYS[2]
local activeKey = KEYS[3]
local failedKey = KEYS[4]
local stalledCheckKey = KEYS[5]
local metaKey = KEYS[6]
local pausedKey = KEYS[7]
local markerKey = KEYS[8]
local eventStreamKey = KEYS[9]
local maxStalledJobCount = tonumber(ARGV[1])
local queueKeyPrefix = ARGV[2]
local timestamp = ARGV[3]
local maxCheckTime = ARGV[4]
if rcall("EXISTS", stalledCheckKey) == 1 then return {{}, {}} end
rcall("SET", stalledCheckKey, timestamp, "PX", maxCheckTime)
-- Trim events before emiting them to avoid trimming events emitted in this script
trimEvents(metaKey, eventStreamKey)
-- Move all stalled jobs to wait
local stalling = rcall('SMEMBERS', stalledKey)
local stalled = {}
local failed = {}
if (#stalling > 0) then
    rcall('DEL', stalledKey)
    -- Remove from active list
    for i, jobId in ipairs(stalling) do
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            -- If the jobId is a delay marker ID we just remove it.
            rcall("LREM", activeKey, 1, jobId)
        else
            local jobKey = queueKeyPrefix .. jobId
            -- Check that the lock is also missing, then we can handle this job as really stalled.
            if (rcall("EXISTS", jobKey .. ":lock") == 0) then
                --  Remove from the active queue.
                local removed = rcall("LREM", activeKey, 1, jobId)
                if (removed > 0) then
                    -- If this job has been stalled too many times, such as if it crashes the worker, then fail it.
                    local stalledCount =
                        rcall("HINCRBY", jobKey, "stalledCounter", 1)
                    if (stalledCount > maxStalledJobCount) then
                        local jobAttributes = rcall("HMGET", jobKey, "opts", "parent", "deid")
                        local rawOpts = jobAttributes[1]
                        local rawParentData = jobAttributes[2]
                        local opts = cjson.decode(rawOpts)
                        local removeOnFailType = type(opts["removeOnFail"])
                        rcall("ZADD", failedKey, timestamp, jobId)
                        removeDeduplicationKeyIfNeeded(queueKeyPrefix, jobAttributes[3])
                        local failedReason =
                            "job stalled more than allowable limit"
                        rcall("HMSET", jobKey, "failedReason", failedReason,
                              "finishedOn", timestamp)
                        rcall("XADD", eventStreamKey, "*", "event",
                              "failed", "jobId", jobId, 'prev', 'active',
                              'failedReason', failedReason)
                        if rawParentData ~= false then
                            if opts['fpof'] then
                                local parentData = cjson.decode(rawParentData)
                                moveParentFromWaitingChildrenToFailed(
                                    parentData['queueKey'],
                                    parentData['queueKey'] .. ':' .. parentData['id'],
                                    parentData['id'],
                                    jobKey,
                                    timestamp
                                )
                            elseif opts['idof'] or opts['rdof'] then
                                local parentData = cjson.decode(rawParentData)
                                local parentKey = parentData['queueKey'] .. ':' .. parentData['id']
                                local dependenciesSet = parentKey .. ":dependencies"
                                if rcall("SREM", dependenciesSet, jobKey) == 1 then
                                    moveParentToWaitIfNeeded(parentData['queueKey'], dependenciesSet,
                                                             parentKey, parentData['id'], timestamp)
                                    if opts['idof'] then
                                       local failedSet = parentKey .. ":failed"
                                       rcall("HSET", failedSet, jobKey, failedReason)
                                    end
                                end
                            end
                        end
                        if removeOnFailType == "number" then
                            removeJobsByMaxCount(opts["removeOnFail"],
                                                  failedKey, queueKeyPrefix)
                        elseif removeOnFailType == "boolean" then
                            if opts["removeOnFail"] then
                                removeJob(jobId, false, queueKeyPrefix,
                                  false --[[remove debounce key]])
                                rcall("ZREM", failedKey, jobId)
                            end
                        elseif removeOnFailType ~= "nil" then
                            local maxAge = opts["removeOnFail"]["age"]
                            local maxCount = opts["removeOnFail"]["count"]
                            if maxAge ~= nil then
                                removeJobsByMaxAge(timestamp, maxAge,
                                                    failedKey, queueKeyPrefix)
                            end
                            if maxCount ~= nil and maxCount > 0 then
                                removeJobsByMaxCount(maxCount, failedKey,
                                                      queueKeyPrefix)
                            end
                        end
                        table.insert(failed, jobId)
                    else
                        local target, isPausedOrMaxed =
                            getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
                        -- Move the job back to the wait queue, to immediately be picked up by a waiting worker.
                        addJobInTargetList(target, markerKey, "RPUSH", isPausedOrMaxed, jobId)
                        rcall("XADD", eventStreamKey, "*", "event",
                              "waiting", "jobId", jobId, 'prev', 'active')
                        -- Emit the stalled event
                        rcall("XADD", eventStreamKey, "*", "event",
                              "stalled", "jobId", jobId)
                        table.insert(stalled, jobId)
                    end
                end
            end
        end
    end
end
-- Mark potentially stalled jobs
local active = rcall('LRANGE', activeKey, 0, -1)
if (#active > 0) then
    for from, to in batches(#active, 7000) do
        rcall('SADD', stalledKey, unpack(active, from, to))
    end
end
return {failed, stalled}`,keys:9};var FS={name:"moveToActive",content:`--[[
  Move next job to be processed to active, lock it and fetch its data. The job
  may be delayed, in that case we need to move it to the delayed set instead.
  This operation guarantees that the worker owns the job during the lock
  expiration time. The worker is responsible of keeping the lock fresh
  so that no other worker picks this job again.
  Input:
    KEYS[1] wait key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] stream events key
    KEYS[5] stalled key
    -- Rate limiting
    KEYS[6] rate limiter key
    KEYS[7] delayed key
    -- Delayed jobs
    KEYS[8] paused key
    KEYS[9] meta key
    KEYS[10] pc priority counter
    -- Marker
    KEYS[11] marker key
    -- Arguments
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] opts
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
local rcall = redis.call
local waitKey = KEYS[1]
local activeKey = KEYS[2]
local eventStreamKey = KEYS[4]
local rateLimiterKey = KEYS[6]
local delayedKey = KEYS[7]
local opts = cmsgpack.unpack(ARGV[3])
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPriorityToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local limiterDuration = opts['limiter'] and opts['limiter']['duration']
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  local lockKey = jobKey .. ':lock'
  -- get a lock
  if opts['token'] ~= "0" then
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                addJobInTargetList(targetKey, markerKey, "LPUSH", isPaused, jobId)
            else
                addJobWithPriority(markerKey, prioritizedKey, priority,
                  jobId, priorityCounterKey, isPaused)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
    end
end
local target, isPausedOrMaxed = getTargetQueueList(KEYS[9], activeKey, waitKey, KEYS[8])
-- Check if there are delayed jobs that we can move to wait.
local markerKey = KEYS[11]
promoteDelayedJobs(delayedKey, markerKey, target, KEYS[3], eventStreamKey, ARGV[1],
                   ARGV[2], KEYS[10], isPausedOrMaxed)
local maxJobs = tonumber(opts['limiter'] and opts['limiter']['max'])
local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
-- Check if we are rate limited first.
if expireTime > 0 then return {0, 0, expireTime, 0} end
-- paused or maxed queue
if isPausedOrMaxed then return {0, 0, 0, 0} end
-- no job ID, try non-blocking move from wait to active
local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
-- Markers in waitlist DEPRECATED in v5: Will be completely removed in v6.
if jobId and string.sub(jobId, 1, 2) == "0:" then
    rcall("LREM", activeKey, 1, jobId)
    jobId = rcall("RPOPLPUSH", waitKey, activeKey)
end
if jobId then
    return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                   maxJobs, opts)
else
    jobId = moveJobFromPriorityToActive(KEYS[3], activeKey, KEYS[10])
    if jobId then
        return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                       maxJobs, opts)
    end
end
-- Return the timestamp for the next delayed job if any.
local nextTimestamp = getNextDelayedTimestamp(delayedKey)
if nextTimestamp ~= nil then return {0, 0, 0, nextTimestamp} end
return {0, 0, 0, 0}
`,keys:11};var ES={name:"moveToDelayed",content:`--[[
  Moves job from active to delayed set.
  Input:
    KEYS[1] marker key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] delayed key
    KEYS[5] job key
    KEYS[6] events stream
    KEYS[7] meta key
    KEYS[8] stalled key
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] queue token
    ARGV[5] delay value
    ARGV[6] skip attempt
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in active set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local jobKey = KEYS[5]
local metaKey = KEYS[7]
local token = ARGV[4] 
if rcall("EXISTS", jobKey) == 1 then
    local errorCode = removeLock(jobKey, KEYS[8], token, ARGV[3])
    if errorCode < 0 then
        return errorCode
    end
    local delayedKey = KEYS[4]
    local jobId = ARGV[3]
    local delay = tonumber(ARGV[5])
    local score, delayedTimestamp = getDelayedScore(delayedKey, ARGV[2], delay)
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if numRemovedElements < 1 then return -3 end
    if ARGV[6] == "0" then
        rcall("HINCRBY", jobKey, "atm", 1)
    end
    rcall("HSET", jobKey, "delay", ARGV[5])
    local maxEvents = getOrSetMaxEvents(metaKey)
    rcall("ZADD", delayedKey, score, jobId)
    rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
          "jobId", jobId, "delay", delayedTimestamp)
    -- Check if we need to push a marker job to wake up sleeping workers.
    local markerKey = KEYS[1]
    addDelayMarkerIfNeeded(markerKey, delayedKey)
    return 0
else
    return -1
end
`,keys:8};var AS={name:"moveToFinished",content:`--[[
  Move job from active to a finished status (completed o failed)
  A job can only be moved to completed if it was active.
  The job must be locked before it can be moved to a finished status,
  and the lock must be released in this script.
    Input:
      KEYS[1] wait key
      KEYS[2] active key
      KEYS[3] prioritized key
      KEYS[4] event stream key
      KEYS[5] stalled key
      -- Rate limiting
      KEYS[6] rate limiter key
      KEYS[7] delayed key
      KEYS[8] paused key
      KEYS[9] meta key
      KEYS[10] pc priority counter
      KEYS[11] completed/failed key
      KEYS[12] jobId key
      KEYS[13] metrics key
      KEYS[14] marker key
      ARGV[1]  jobId
      ARGV[2]  timestamp
      ARGV[3]  msg property returnvalue / failedReason
      ARGV[4]  return value / failed reason
      ARGV[5]  target (completed/failed)
      ARGV[6]  fetch next?
      ARGV[7]  keys prefix
      ARGV[8]  opts
      opts - token - lock token
      opts - keepJobs
      opts - lockDuration - lock duration in milliseconds
      opts - attempts max attempts
      opts - maxMetricsSize
      opts - fpof - fail parent on fail
      opts - idof - ignore dependency on fail
      opts - rdof - remove dependency on fail
    Output:
      0 OK
      -1 Missing key.
      -2 Missing lock.
      -3 Job not in active set
      -4 Job has pending dependencies
      -6 Lock is not owned by this client
    Events:
      'completed/failed'
]]
local rcall = redis.call
--- Includes
--[[
  Functions to collect metrics based on a current and previous count of jobs.
  Granualarity is fixed at 1 minute.
]] 
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
local function collectMetrics(metaKey, dataPointsList, maxDataPoints,
                                 timestamp)
    -- Increment current count
    local count = rcall("HINCRBY", metaKey, "count", 1) - 1
    -- Compute how many data points we need to add to the list, N.
    local prevTS = rcall("HGET", metaKey, "prevTS")
    if not prevTS then
        -- If prevTS is nil, set it to the current timestamp
        rcall("HSET", metaKey, "prevTS", timestamp, "prevCount", 0)
        return
    end
    local N = math.min(math.floor(timestamp / 60000) - math.floor(prevTS / 60000), tonumber(maxDataPoints))
    if N > 0 then
        local delta = count - rcall("HGET", metaKey, "prevCount")
        -- If N > 1, add N-1 zeros to the list
        if N > 1 then
            local points = {}
            points[1] = delta
            for i = 2, N do
                points[i] = 0
            end
            for from, to in batches(#points, 7000) do
                rcall("LPUSH", dataPointsList, unpack(points, from, to))
            end
        else
            -- LPUSH delta to the list
            rcall("LPUSH", dataPointsList, delta)
        end
        -- LTRIM to keep list to its max size
        rcall("LTRIM", dataPointsList, 0, maxDataPoints - 1)
        -- update prev count with current count
        rcall("HSET", metaKey, "prevCount", count, "prevTS", timestamp)
    end
end
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPriorityToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to recursively move from waitingChildren to failed.
]]
-- Includes
--[[
  Validate and move parent to active if needed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey,
                                        parentKey, parentId, timestamp)
    local isParentActive = rcall("ZSCORE",
                                 parentQueueKey .. ":waiting-children", parentId)
    if rcall("SCARD", parentDependenciesKey) == 0 and isParentActive then
        rcall("ZREM", parentQueueKey .. ":waiting-children", parentId)
        local parentWaitKey = parentQueueKey .. ":wait"
        local parentPausedKey = parentQueueKey .. ":paused"
        local parentActiveKey = parentQueueKey .. ":active"
        local parentMetaKey = parentQueueKey .. ":meta"
        local parentMarkerKey = parentQueueKey .. ":marker"
        local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
        local priority = tonumber(jobAttributes[1]) or 0
        local delay = tonumber(jobAttributes[2]) or 0
        if delay > 0 then
            local delayedTimestamp = tonumber(timestamp) + delay
            local score = delayedTimestamp * 0x1000
            local parentDelayedKey = parentQueueKey .. ":delayed"
            rcall("ZADD", parentDelayedKey, score, parentId)
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed",
                  "jobId", parentId, "delay", delayedTimestamp)
            addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
        else
            if priority == 0 then
                local parentTarget, isParentPausedOrMaxed =
                    getTargetQueueList(parentMetaKey, parentActiveKey, parentWaitKey,
                                       parentPausedKey)
                addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed,
                    parentId)
            else
                local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
                addJobWithPriority(parentMarkerKey,
                                   parentQueueKey .. ":prioritized", priority,
                                   parentId, parentQueueKey .. ":pc", isPausedOrMaxed)
            end
            rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting",
                  "jobId", parentId, "prev", "waiting-children")
        end
    end
end
--[[
  Function to remove deduplication key if needed.
]]
local function removeDeduplicationKeyIfNeeded(prefixKey, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local pttl = rcall("PTTL", deduplicationKey)
    if pttl == 0 or pttl == -1 then
      rcall("DEL", deduplicationKey)
    end
  end
end
local function moveParentFromWaitingChildrenToFailed( parentQueueKey, parentKey, parentId, jobIdKey, timestamp)
  if rcall("ZREM", parentQueueKey .. ":waiting-children", parentId) == 1 then
    rcall("ZADD", parentQueueKey .. ":failed", timestamp, parentId)
    local failedReason = "child " .. jobIdKey .. " failed"
    rcall("HMSET", parentKey, "failedReason", failedReason, "finishedOn", timestamp)
    rcall("XADD", parentQueueKey .. ":events", "*", "event", "failed", "jobId", parentId, "failedReason",
      failedReason, "prev", "waiting-children")
    local jobAttributes = rcall("HMGET", parentKey, "parent", "deid")
    removeDeduplicationKeyIfNeeded(parentQueueKey .. ":", jobAttributes[2])
    if jobAttributes[1] then
      local parentData = cjson.decode(jobAttributes[1])
      if parentData['fpof'] then
        moveParentFromWaitingChildrenToFailed(
          parentData['queueKey'],
          parentData['queueKey'] .. ':' .. parentData['id'],
          parentData['id'],
          parentKey,
          timestamp
        )
      elseif parentData['idof'] or parentData['rdof'] then
        local grandParentKey = parentData['queueKey'] .. ':' .. parentData['id']
        local grandParentDependenciesSet = grandParentKey .. ":dependencies"
        if rcall("SREM", grandParentDependenciesSet, parentKey) == 1 then
          moveParentToWaitIfNeeded(parentData['queueKey'], grandParentDependenciesSet,
            grandParentKey, parentData['id'], timestamp)
          if parentData['idof'] then
            local grandParentFailedSet = grandParentKey .. ":failed"
            rcall("HSET", grandParentFailedSet, parentKey, failedReason)
          end
        end
      end
    end
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local limiterDuration = opts['limiter'] and opts['limiter']['duration']
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  local lockKey = jobKey .. ':lock'
  -- get a lock
  if opts['token'] ~= "0" then
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                addJobInTargetList(targetKey, markerKey, "LPUSH", isPaused, jobId)
            else
                addJobWithPriority(markerKey, prioritizedKey, priority,
                  jobId, priorityCounterKey, isPaused)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Functions to remove jobs by max age.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKey(baseKey, jobKey)
  end
  removeJobKeys(jobKey)
end
local function removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix,
  shouldRemoveDebounceKey)
  local start = timestamp - maxAge * 1000
  local jobIds = rcall("ZREVRANGEBYSCORE", targetSet, start, "-inf")
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYSCORE", targetSet, "-inf", start)
end
--[[
  Functions to remove jobs by max count.
]]
-- Includes
local function removeJobsByMaxCount(maxCount, targetSet, prefix)
  local start = maxCount
  local jobIds = rcall("ZREVRANGE", targetSet, start, -1)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYRANK", targetSet, 0, -(maxCount + 1))
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents ~= false then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNeeded(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local jobIdKey = KEYS[12]
if rcall("EXISTS", jobIdKey) == 1 then -- // Make sure job exists
    local opts = cmsgpack.unpack(ARGV[8])
    local token = opts['token']
    local errorCode = removeLock(jobIdKey, KEYS[5], token, ARGV[1])
    if errorCode < 0 then
        return errorCode
    end
    local attempts = opts['attempts']
    local maxMetricsSize = opts['maxMetricsSize']
    local maxCount = opts['keepJobs']['count']
    local maxAge = opts['keepJobs']['age']
    if rcall("SCARD", jobIdKey .. ":dependencies") ~= 0 then -- // Make sure it does not have pending dependencies
        return -4
    end
    local jobAttributes = rcall("HMGET", jobIdKey, "parentKey", "parent", "deid")
    local parentKey = jobAttributes[1] or ""
    local parentId = ""
    local parentQueueKey = ""
    if jobAttributes[2] ~= false then
        local jsonDecodedParent = cjson.decode(jobAttributes[2])
        parentId = jsonDecodedParent['id']
        parentQueueKey = jsonDecodedParent['queueKey']
    end
    local jobId = ARGV[1]
    local timestamp = ARGV[2]
    -- Remove from active list (if not active we shall return error)
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if (numRemovedElements < 1) then return -3 end
    local eventStreamKey = KEYS[4]
    local metaKey = KEYS[9]
    -- Trim events before emiting them to avoid trimming events emitted in this script
    trimEvents(metaKey, eventStreamKey)
    local prefix = ARGV[7]
    removeDeduplicationKeyIfNeeded(prefix, jobAttributes[3])
    -- If job has a parent we need to
    -- 1) remove this job id from parents dependencies
    -- 2) move the job Id to parent "processed" set
    -- 3) push the results into parent "results" list
    -- 4) if parent's dependencies is empty, then move parent to "wait/paused". Note it may be a different queue!.
    if parentId == "" and parentKey ~= "" then
        parentId = getJobIdFromKey(parentKey)
        parentQueueKey = getJobKeyPrefix(parentKey, ":" .. parentId)
    end
    if parentId ~= "" then
        if ARGV[5] == "completed" then
            local dependenciesSet = parentKey .. ":dependencies"
            if rcall("SREM", dependenciesSet, jobIdKey) == 1 then
                updateParentDepsIfNeeded(parentKey, parentQueueKey,
                                         dependenciesSet, parentId, jobIdKey,
                                         ARGV[4], timestamp)
            end
        else
            if opts['fpof'] then
                moveParentFromWaitingChildrenToFailed(parentQueueKey, parentKey,
                                                      parentId, jobIdKey,
                                                      timestamp)
            elseif opts['idof'] or opts['rdof'] then
                local dependenciesSet = parentKey .. ":dependencies"
                if rcall("SREM", dependenciesSet, jobIdKey) == 1 then
                    moveParentToWaitIfNeeded(parentQueueKey, dependenciesSet,
                                             parentKey, parentId, timestamp)
                    if opts['idof'] then
                        local failedSet = parentKey .. ":failed"
                        rcall("HSET", failedSet, jobIdKey, ARGV[4])
                    end
                end
            end
        end
    end
    local attemptsMade = rcall("HINCRBY", jobIdKey, "atm", 1)
    -- Remove job?
    if maxCount ~= 0 then
        local targetSet = KEYS[11]
        -- Add to complete/failed set
        rcall("ZADD", targetSet, timestamp, jobId)
        rcall("HMSET", jobIdKey, ARGV[3], ARGV[4], "finishedOn", timestamp)
        -- "returnvalue" / "failedReason" and "finishedOn"
        -- Remove old jobs?
        if maxAge ~= nil then
            removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix)
        end
        if maxCount ~= nil and maxCount > 0 then
            removeJobsByMaxCount(maxCount, targetSet, prefix)
        end
    else
        removeJobKeys(jobIdKey)
        if parentKey ~= "" then
            -- TODO: when a child is removed when finished, result or failure in parent
            -- must not be deleted, those value references should be deleted when the parent
            -- is deleted
            removeParentDependencyKey(jobIdKey, false, parentKey, jobAttributes[3])
        end
    end
    rcall("XADD", eventStreamKey, "*", "event", ARGV[5], "jobId", jobId, ARGV[3],
          ARGV[4])
    if ARGV[5] == "failed" then
        if tonumber(attemptsMade) >= tonumber(attempts) then
            rcall("XADD", eventStreamKey, "*", "event", "retries-exhausted", "jobId",
                  jobId, "attemptsMade", attemptsMade)
        end
    end
    -- Collect metrics
    if maxMetricsSize ~= "" then
        collectMetrics(KEYS[13], KEYS[13] .. ':data', maxMetricsSize, timestamp)
    end
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[6] == "1") then
        local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[2], KEYS[1], KEYS[8])
        -- Check if there are delayed jobs that can be promoted
        promoteDelayedJobs(KEYS[7], KEYS[14], target, KEYS[3], eventStreamKey, prefix,
                           timestamp, KEYS[10], isPausedOrMaxed)
        local maxJobs = tonumber(opts['limiter'] and opts['limiter']['max'])
        -- Check if we are rate limited first.
        local expireTime = getRateLimitTTL(maxJobs, KEYS[6])
        if expireTime > 0 then return {0, 0, expireTime, 0} end
        -- paused or maxed queue
        if isPausedOrMaxed then return {0, 0, 0, 0} end
        jobId = rcall("RPOPLPUSH", KEYS[1], KEYS[2])
        if jobId then
            -- Markers in waitlist DEPRECATED in v5: Remove in v6.
            if string.sub(jobId, 1, 2) == "0:" then
                rcall("LREM", KEYS[2], 1, jobId)
                -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
                -- but if ID is 0:0, then there is at least 1 prioritized job to process
                if jobId == "0:0" then
                    jobId = moveJobFromPriorityToActive(KEYS[3], KEYS[2],
                                                        KEYS[10])
                    return prepareJobForProcessing(prefix, KEYS[6], eventStreamKey, jobId,
                                                   timestamp, maxJobs,
                                                   opts)
                end
            else
                return prepareJobForProcessing(prefix, KEYS[6], eventStreamKey, jobId,
                                               timestamp, maxJobs,
                                               opts)
            end
        else
            jobId = moveJobFromPriorityToActive(KEYS[3], KEYS[2], KEYS[10])
            if jobId then
                return prepareJobForProcessing(prefix, KEYS[6], eventStreamKey, jobId,
                                               timestamp, maxJobs,
                                               opts)
            end
        end
        -- Return the timestamp for the next delayed job if any.
        local nextTimestamp = getNextDelayedTimestamp(KEYS[7])
        if nextTimestamp ~= nil then
            -- The result is guaranteed to be positive, since the
            -- ZRANGEBYSCORE command would have return a job otherwise.
            return {0, 0, 0, nextTimestamp}
        end
    end
    local waitLen = rcall("LLEN", KEYS[1])
    if waitLen == 0 then
        local activeLen = rcall("LLEN", KEYS[2])
        if activeLen == 0 then
            local prioritizedLen = rcall("ZCARD", KEYS[3])
            if prioritizedLen == 0 then
                rcall("XADD", eventStreamKey, "*", "event", "drained")
            end
        end
    end
    return 0
else
    return -1
end
`,keys:14};var KS={name:"moveToWaitingChildren",content:`--[[
  Moves job from active to waiting children set.
  Input:
    KEYS[1] lock key
    KEYS[2] active key
    KEYS[3] waitChildrenKey key
    KEYS[4] job key
    KEYS[5] stalled key
    ARGV[1] token
    ARGV[2] child key
    ARGV[3] timestamp
    ARGV[4] the id of the job
  Output:
    0 - OK
    1 - There are not pending dependencies.
   -1 - Missing job.
   -2 - Missing lock
   -3 - Job not in active set
]]
local rcall = redis.call
local stalledKey = KEYS[5]
--- Includes
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local function moveToWaitingChildren (activeKey, waitingChildrenKey, jobId,
    timestamp)
  local score = tonumber(timestamp)
  local numRemovedElements = rcall("LREM", activeKey, -1, jobId)
  if(numRemovedElements < 1) then
    return -3
  end
  rcall("ZADD", waitingChildrenKey, score, jobId)
  return 0
end
if rcall("EXISTS", KEYS[4]) == 1 then
  if ARGV[2] ~= "" then
    if rcall("SISMEMBER", KEYS[4] .. ":dependencies", ARGV[2]) ~= 0 then
      local errorCode = removeLock(KEYS[4], stalledKey, ARGV[1], ARGV[4])
      if errorCode < 0 then
        return errorCode
      end
      return moveToWaitingChildren(KEYS[2], KEYS[3], ARGV[4], ARGV[3])
    end
    return 1
  else
    if rcall("SCARD", KEYS[4] .. ":dependencies") ~= 0 then 
      local errorCode = removeLock(KEYS[4], stalledKey, ARGV[1], ARGV[4])
      if errorCode < 0 then
        return errorCode
      end
      return moveToWaitingChildren(KEYS[2], KEYS[3], ARGV[4], ARGV[3])
    end
    return 1
  end
end
return -1
`,keys:5};var zS={name:"obliterate",content:`--[[
  Completely obliterates a queue and all of its contents
  This command completely destroys a queue including all of its jobs, current or past 
  leaving no trace of its existence. Since this script needs to iterate to find all the job
  keys, consider that this call may be slow for very large queues.
  The queue needs to be "paused" or it will return an error
  If the queue has currently active jobs then the script by default will return error,
  however this behaviour can be overrided using the 'force' option.
  Input:
    KEYS[1] meta
    KEYS[2] base
    ARGV[1] count
    ARGV[2] force
]]
local maxCount = tonumber(ARGV[1])
local baseKey = KEYS[2]
local rcall = redis.call
-- Includes
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    removeDeduplicationKey(baseKey, jobKey)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
--[[
  Functions to remove jobs.
]]
-- Includes
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max)
  local jobs = getListItems(keyName, max)
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  -- filter out jobs to ignore
  if jobsToIgnore then
    local filteredJobs = {}
    for i = 1, #jobs do
      if not jobsToIgnore[jobs[i]] then
        table.insert(filteredJobs, jobs[i])
      end
    end
    jobs = filteredJobs
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
local function removeLockKeys(keys)
  for i, key in ipairs(keys) do
    rcall("DEL", baseKey .. key .. ':lock')
  end
end
-- 1) Check if paused, if not return with error.
if rcall("HEXISTS", KEYS[1], "paused") ~= 1 then
  return -1 -- Error, NotPaused
end
-- 2) Check if there are active jobs, if there are and not "force" return error.
local activeKey = baseKey .. 'active'
local activeJobs = getListItems(activeKey, maxCount)
if (#activeJobs > 0) then
  if(ARGV[2] == "") then 
    return -2 -- Error, ExistActiveJobs
  end
end
removeLockKeys(activeJobs)
maxCount = removeJobs(activeJobs, true, baseKey, maxCount)
rcall("LTRIM", activeKey, #activeJobs, -1)
if(maxCount <= 0) then
  return 1
end
local delayedKey = baseKey .. 'delayed'
maxCount = removeZSetJobs(delayedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local repeatKey = baseKey .. 'repeat'
local repeatJobsIds = getZSetItems(repeatKey, maxCount)
for i, key in ipairs(repeatJobsIds) do
  local jobKey = repeatKey .. ":" .. key
  rcall("DEL", jobKey)
end
if(#repeatJobsIds > 0) then
  for from, to in batches(#repeatJobsIds, 7000) do
    rcall("ZREM", repeatKey, unpack(repeatJobsIds, from, to))
  end
end
maxCount = maxCount - #repeatJobsIds
if(maxCount <= 0) then
  return 1
end
local completedKey = baseKey .. 'completed'
maxCount = removeZSetJobs(completedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local waitKey = baseKey .. 'paused'
maxCount = removeListJobs(waitKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local prioritizedKey = baseKey .. 'prioritized'
maxCount = removeZSetJobs(prioritizedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local failedKey = baseKey .. 'failed'
maxCount = removeZSetJobs(failedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
if(maxCount > 0) then
  rcall("DEL",
    baseKey .. 'events',
    baseKey .. 'delay', 
    baseKey .. 'stalled-check',
    baseKey .. 'stalled',
    baseKey .. 'id',
    baseKey .. 'pc',
    baseKey .. 'meta',
    baseKey .. 'metrics:completed',
    baseKey .. 'metrics:completed:data',
    baseKey .. 'metrics:failed',
    baseKey .. 'metrics:failed:data')
  return 0
else
  return 1
end
`,keys:2};var LS={name:"paginate",content:`--[[
    Paginate a set or hash
    Input:
      KEYS[1] key pointing to the set or hash to be paginated.
      ARGV[1]  page start offset
      ARGV[2]  page end offset (-1 for all the elements)
      ARGV[3]  cursor
      ARGV[4]  offset
      ARGV[5]  max iterations
      ARGV[6]  fetch jobs?
    Output:
      [cursor, offset, items, numItems]
]]
local rcall = redis.call
-- Includes
--[[
  Function to achieve pagination for a set or hash.
  This function simulates pagination in the most efficient way possible
  for a set using sscan or hscan.
  The main limitation is that sets are not order preserving, so the
  pagination is not stable. This means that if the set is modified
  between pages, the same element may appear in different pages.
]] -- Maximum number of elements to be returned by sscan per iteration.
local maxCount = 100
-- Finds the cursor, and returns the first elements available for the requested page.
local function findPage(key, command, pageStart, pageSize, cursor, offset,
                        maxIterations, fetchJobs)
    local items = {}
    local jobs = {}
    local iterations = 0
    repeat
        -- Iterate over the set using sscan/hscan.
        local result = rcall(command, key, cursor, "COUNT", maxCount)
        cursor = result[1]
        local members = result[2]
        local step = 1
        if command == "HSCAN" then
            step = 2
        end
        if #members == 0 then
            -- If the result is empty, we can return the result.
            return cursor, offset, items, jobs
        end
        local chunkStart = offset
        local chunkEnd = offset + #members / step
        local pageEnd = pageStart + pageSize
        if chunkEnd < pageStart then
            -- If the chunk is before the page, we can skip it.
            offset = chunkEnd
        elseif chunkStart > pageEnd then
            -- If the chunk is after the page, we can return the result.
            return cursor, offset, items, jobs
        else
            -- If the chunk is overlapping the page, we need to add the elements to the result.
            for i = 1, #members, step do
                if offset >= pageEnd then
                    return cursor, offset, items, jobs
                end
                if offset >= pageStart then
                    local index = #items + 1
                    if fetchJobs ~= nil then
                        jobs[#jobs+1] = rcall("HGETALL", members[i])
                    end
                    if step == 2 then
                        items[index] = {members[i], members[i + 1]}
                    else
                        items[index] = members[i]
                    end
                end
                offset = offset + 1
            end
        end
        iterations = iterations + 1
    until cursor == "0" or iterations >= maxIterations
    return cursor, offset, items, jobs
end
local key = KEYS[1]
local scanCommand = "SSCAN"
local countCommand = "SCARD"
local type = rcall("TYPE", key)["ok"]
if type == "none" then
    return {0, 0, {}, 0}
elseif type == "hash" then
    scanCommand = "HSCAN"
    countCommand = "HLEN"
elseif type ~= "set" then
    return
        redis.error_reply("Pagination is only supported for sets and hashes.")
end
local numItems = rcall(countCommand, key)
local startOffset = tonumber(ARGV[1])
local endOffset = tonumber(ARGV[2])
if endOffset == -1 then 
  endOffset = numItems
end
local pageSize = (endOffset - startOffset) + 1
local cursor, offset, items, jobs = findPage(key, scanCommand, startOffset,
                                       pageSize, ARGV[3], tonumber(ARGV[4]),
                                       tonumber(ARGV[5]), ARGV[6])
return {cursor, offset, items, numItems, jobs}
`,keys:1};var OS={name:"pause",content:`--[[
  Pauses or resumes a queue globably.
  Input:
    KEYS[1] 'wait' or 'paused''
    KEYS[2] 'paused' or 'wait'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] events stream key
    KEYS[6] 'delayed'
    KEYS|7] 'marker'
    ARGV[1] 'paused' or 'resumed'
  Event:
    publish paused or resumed event.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then 
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
local markerKey = KEYS[7]
local hasJobs = rcall("EXISTS", KEYS[1]) == 1
--TODO: check this logic to be reused when changing a delay
if hasJobs then rcall("RENAME", KEYS[1], KEYS[2]) end
if ARGV[1] == "paused" then
    rcall("HSET", KEYS[3], "paused", 1)
    rcall("DEL", markerKey)
else
    rcall("HDEL", KEYS[3], "paused")
    if hasJobs or rcall("ZCARD", KEYS[4]) > 0 then
        -- Add marker if there are waiting or priority jobs
        rcall("ZADD", markerKey, 0, "0")
    else
        addDelayMarkerIfNeeded(markerKey, KEYS[6])
    end
end
rcall("XADD", KEYS[5], "*", "event", ARGV[1]);
`,keys:7};var RS={name:"promote",content:`--[[
  Promotes a job that is currently "delayed" to the "waiting" state
    Input:
      KEYS[1] 'delayed'
      KEYS[2] 'wait'
      KEYS[3] 'paused'
      KEYS[4] 'meta'
      KEYS[5] 'prioritized'
      KEYS[6] 'active'
      KEYS[7] 'pc' priority counter
      KEYS[8] 'event stream'
      KEYS[9] 'marker'
      ARGV[1]  queue.toKey('')
      ARGV[2]  jobId
    Output:
       0 - OK
      -3 - Job not in delayed zset.
    Events:
      'waiting'
]]
local rcall = redis.call
local jobId = ARGV[2]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
if rcall("ZREM", KEYS[1], jobId) == 1 then
    local jobKey = ARGV[1] .. jobId
    local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
    local metaKey = KEYS[4]
    local markerKey = KEYS[9]
    -- Remove delayed "marker" from the wait list if there is any.
    -- Since we are adding a job we do not need the marker anymore.
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[6], KEYS[2], KEYS[3])
    local marker = rcall("LINDEX", target, 0)
    if marker and string.sub(marker, 1, 2) == "0:" then rcall("LPOP", target) end
    if priority == 0 then
        -- LIFO or FIFO
        addJobInTargetList(target, markerKey, "LPUSH", isPausedOrMaxed, jobId)
    else
        addJobWithPriority(markerKey, KEYS[5], priority, jobId, KEYS[7], isPausedOrMaxed)
    end
    -- Emit waiting event (wait..ing@token)
    rcall("XADD", KEYS[8], "*", "event", "waiting", "jobId", jobId, "prev",
          "delayed");
    rcall("HSET", jobKey, "delay", 0)
    return 0
else
    return -3
end
`,keys:9};var DS={name:"releaseLock",content:`--[[
  Release lock
    Input:
      KEYS[1] 'lock',
      ARGV[1]  token
      ARGV[2]  lock duration in milliseconds
    Output:
      "OK" if lock extented succesfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  return rcall("DEL", KEYS[1])
else
  return 0
end
`,keys:1};var _S={name:"removeChildDependency",content:`--[[
  Break parent-child dependency by removing
  child reference from parent
  Input:
    KEYS[1] 'key' prefix,
    ARGV[1] job key
    ARGV[2] parent key
    Output:
       0  - OK
       1  - There is not relationship.
      -1  - Missing job key
      -5  - Missing parent key
]]
local rcall = redis.call
local jobKey = ARGV[1]
local parentKey = ARGV[2]
-- Includes
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
if rcall("EXISTS", jobKey) ~= 1 then return -1 end
if rcall("EXISTS", parentKey) ~= 1 then return -5 end
if removeParentDependencyKey(jobKey, false, parentKey, KEYS[1], nil) then
  rcall("HDEL", jobKey, "parentKey", "parent")
  return 0
else
  return 1
end`,keys:1};var NS={name:"removeJob",content:`--[[
    Remove a job from all the queues it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] queue prefix
      KEYS[2] meta key
      ARGV[1] jobId
      ARGV[2] remove children
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
--[[
  Function to remove deduplication key.
]]
local function removeDeduplicationKey(prefixKey, jobKey)
  local deduplicationId = rcall("HGET", jobKey, "deid")
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    rcall("DEL", deduplicationKey)
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
local function moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              moveParentToWait(parentPrefix, parentId)
            end
          else
            moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                moveParentToWait(parentPrefix, parentId)
              end
            else
              moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(prefix, jobId, parentKey, removeChildren)
    local jobKey = prefix .. jobId;
    removeParentDependencyKey(jobKey, false, parentKey, nil)
    if removeChildren == "1" then
        -- Check if this job has children
        -- If so, we are going to try to remove the children recursively in deep first way because
        -- if some job is locked we must exit with and error.
        -- local countProcessed = rcall("HLEN", jobKey .. ":processed")
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if (#processed > 0) then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJob(childJobPrefix, childJobId, jobKey, removeChildren)
            end
        end
        local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
        if (#dependencies > 0) then
            for i, childJobKey in ipairs(dependencies) do
                -- We need to get the jobId for this job.
                local childJobId = getJobIdFromKey(childJobKey)
                local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
                removeJob(childJobPrefix, childJobId, jobKey, removeChildren)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if (#failed > 0) then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJob(childJobPrefix, childJobId, jobKey, removeChildren)
            end
        end
    end
    local prev = removeJobFromAnyState(prefix, jobId)
    removeDeduplicationKey(prefix, jobKey)
    if removeJobKeys(jobKey) > 0 then
        local maxEvents = getOrSetMaxEvents(KEYS[2])
        rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed", "jobId", jobId, "prev",
            prev)
    end
end
local prefix = KEYS[1]
local jobId = ARGV[1]
local shouldRemoveChildren = ARGV[2]
local jobKey = prefix .. jobId
-- Check if the job belongs to a job scheduler and it is in delayed state.
if rcall("ZSCORE", prefix .. "delayed", jobId) and rcall("HGET", jobKey, "rjk") then
    return -8 -- Return error code as the job is part of a job scheduler and is in delayed state.
end
if not isLocked(prefix, jobId, shouldRemoveChildren) then
    removeJob(prefix, jobId, nil, shouldRemoveChildren)
    return 1
end
return 0
`,keys:2};var qS={name:"removeJobScheduler",content:`--[[
  Removes a repeatable job
  Input:
    KEYS[1] job schedulers key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] job scheduler id
    ARGV[2] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
local jobSchedulerId = ARGV[1]
local prefix = ARGV[2]
local millis = rcall("ZSCORE", KEYS[1], jobSchedulerId)
if millis then
  -- Delete next programmed job.
  local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. millis
  if(rcall("ZREM", KEYS[2], delayedJobId) == 1) then
    removeJobKeys(prefix .. delayedJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", delayedJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], jobSchedulerId) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. jobSchedulerId)
  return 0
end
return 1
`,keys:3};var MS={name:"removeRepeatable",content:`--[[
  Removes a repeatable job
  Input:
    KEYS[1] repeat jobs key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] old repeat job id
    ARGV[2] options concat
    ARGV[3] repeat job key
    ARGV[4] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
local millis = rcall("ZSCORE", KEYS[1], ARGV[2])
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs',
    jobKey .. ':dependencies', jobKey .. ':processed', jobKey .. ':failed')
end
-- legacy removal TODO: remove in next breaking change
if millis then
  -- Delete next programmed job.
  local repeatJobId = ARGV[1] .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed");
  end
end
if(rcall("ZREM", KEYS[1], ARGV[2]) == 1) then
  return 0
end
-- new removal
millis = rcall("ZSCORE", KEYS[1], ARGV[3])
if millis then
  -- Delete next programmed job.
  local repeatJobId = "repeat:" .. ARGV[3] .. ":" .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], ARGV[3]) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. ARGV[3])
  return 0
end
return 1
`,keys:3};var ZS={name:"reprocessJob",content:`--[[
  Attempts to reprocess a job
  Input:
    KEYS[1] job key
    KEYS[2] events stream
    KEYS[3] job state
    KEYS[4] wait key
    KEYS[5] meta
    KEYS[6] paused key
    KEYS[7] active key
    KEYS[8] marker key
    ARGV[1] job.id
    ARGV[2] (job.opts.lifo ? 'R' : 'L') + 'PUSH'
    ARGV[3] propVal - failedReason/returnvalue
    ARGV[4] prev state - failed/completed
  Output:
     1 means the operation was a success
    -1 means the job does not exist
    -3 means the job was not found in the expected set.
]]
local rcall = redis.call;
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
if rcall("EXISTS", KEYS[1]) == 1 then
  local jobId = ARGV[1]
  if (rcall("ZREM", KEYS[3], jobId) == 1) then
    rcall("HDEL", KEYS[1], "finishedOn", "processedOn", ARGV[3])
    local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[7], KEYS[4], KEYS[6])
    addJobInTargetList(target, KEYS[8], ARGV[2], isPausedOrMaxed, jobId)
    local maxEvents = getOrSetMaxEvents(KEYS[5])
    -- Emit waiting event
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId, "prev", ARGV[4]);
    return 1
  else
    return -3
  end
else
  return -1
end
`,keys:8};var PS={name:"retryJob",content:`--[[
  Retries a failed job by moving it back to the wait queue.
    Input:
      KEYS[1]  'active',
      KEYS[2]  'wait'
      KEYS[3]  'paused'
      KEYS[4]  job key
      KEYS[5]  'meta'
      KEYS[6]  events stream
      KEYS[7]  delayed key
      KEYS[8]  prioritized key
      KEYS[9]  'pc' priority counter
      KEYS[10] 'marker'
      KEYS[11] 'stalled'
      ARGV[1]  key prefix
      ARGV[2]  timestamp
      ARGV[3]  pushCmd
      ARGV[4]  jobId
      ARGV[5]  token
    Events:
      'waiting'
    Output:
     0  - OK
     -1 - Missing key
     -2 - Missing lock
     -3 - Job not in active set
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local prioCounter = rcall("INCR", priorityCounterKey)
  local score = priority * 0x100000000 + prioCounter % 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return pausedKey, true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true
      else
        return waitKey, false
      end
    end
  end
  return waitKey, false
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                addJobInTargetList(targetKey, markerKey, "LPUSH", isPaused, jobId)
            else
                addJobWithPriority(markerKey, prioritizedKey, priority,
                  jobId, priorityCounterKey, isPaused)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
    end
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[1], KEYS[2], KEYS[3])
local markerKey = KEYS[10]
-- Check if there are delayed jobs that we can move to wait.
-- test example: when there are delayed jobs between retries
promoteDelayedJobs(KEYS[7], markerKey, target, KEYS[8], KEYS[6], ARGV[1], ARGV[2], KEYS[9], isPausedOrMaxed)
if rcall("EXISTS", KEYS[4]) == 1 then
  local errorCode = removeLock(KEYS[4], KEYS[11], ARGV[5], ARGV[4]) 
  if errorCode < 0 then
    return errorCode
  end
  local numRemovedElements = rcall("LREM", KEYS[1], -1, ARGV[4])
  if (numRemovedElements < 1) then return -3 end
  local priority = tonumber(rcall("HGET", KEYS[4], "priority")) or 0
  --need to re-evaluate after removing job from active
  isPausedOrMaxed = isQueuePausedOrMaxed(KEYS[5], KEYS[1])
  -- Standard or priority add
  if priority == 0 then
    addJobInTargetList(target, markerKey, ARGV[3], isPausedOrMaxed, ARGV[4])
  else
    addJobWithPriority(markerKey, KEYS[8], priority, ARGV[4], KEYS[9], isPausedOrMaxed)
  end
  rcall("HINCRBY", KEYS[4], "atm", 1)
  local maxEvents = getOrSetMaxEvents(KEYS[5])
  -- Emit waiting event
  rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", ARGV[4], "prev", "failed")
  return 0
else
  return -1
end
`,keys:11};var SS={name:"saveStacktrace",content:`--[[
  Save stacktrace and failedReason.
  Input:
    KEYS[1] job key
    ARGV[1]  stacktrace
    ARGV[2]  failedReason
  Output:
     0 - OK
    -1 - Missing key
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then
  rcall("HMSET", KEYS[1], "stacktrace", ARGV[1], "failedReason", ARGV[2])
  return 0
else
  return -1
end
`,keys:1};var IS={name:"updateData",content:`--[[
  Update job data
  Input:
    KEYS[1] Job id key
    ARGV[1] data
  Output:
    0 - OK
   -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS",KEYS[1]) == 1 then -- // Make sure job exists
  rcall("HSET", KEYS[1], "data", ARGV[1])
  return 0
else
  return -1
end
`,keys:1};var CS={name:"updateJobOption",content:`--[[
  Update a job option
  Input:
    KEYS[1] Job id key
    ARGV[1] field
    ARGV[2] value
  Output:
    0 - OK
   -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
    local opts = rcall("HGET", KEYS[1], "opts")
    local jsonOpts = cjson.decode(opts)
    jsonOpts[ARGV[1]] = ARGV[2]
    rcall("HSET", KEYS[1], "opts", cjson.encode(jsonOpts))
    return 0
else
    return -1
end
`,keys:1};var jS={name:"updateProgress",content:`--[[
  Update job progress
  Input:
    KEYS[1] Job id key
    KEYS[2] event stream key
    KEYS[3] meta key
    ARGV[1] id
    ARGV[2] progress
  Output:
     0 - OK
    -1 - Missing job.
  Event:
    progress(jobId, progress)
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
    local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
    if not maxEvents then
        maxEvents = 10000
        rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
    end
    return maxEvents
end
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
    local maxEvents = getOrSetMaxEvents(KEYS[3])
    rcall("HSET", KEYS[1], "progress", ARGV[2])
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "progress",
          "jobId", ARGV[1], "data", ARGV[2]);
    return 0
else
    return -1
end
`,keys:3};var TS={name:"updateRepeatableJobMillis",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      ARGV[1] next milliseconds
      ARGV[2] custom key
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local nextMillis = ARGV[1]
local customKey = ARGV[2]
local legacyCustomKey = ARGV[3]
if rcall("ZSCORE", repeatKey, customKey) ~= false then
    rcall("ZADD", repeatKey, nextMillis, customKey)
    return customKey
elseif rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
    rcall("ZADD", repeatKey, nextMillis, legacyCustomKey)
    return legacyCustomKey
end
return ''
`,keys:1};var xS=["BullMQ: WARNING! Your redis options maxRetriesPerRequest must be null","and will be overridden by BullMQ."].join(" "),vS="BullMQ: Your redis options maxRetriesPerRequest must be null.";class g0 extends kS{constructor($,X=!1,Y=!0,G=!1){super();if(this.shared=X,this.blocking=Y,this.capabilities={canDoubleTimeout:!1,canBlockFor1Ms:!0},this.status="initializing",!h$($)){if(this.checkBlockingOptions(xS,$),this.opts=Object.assign({port:6379,host:"127.0.0.1",retryStrategy:function(H){return Math.max(Math.min(Math.exp(H),20000),1000)}},$),this.blocking)this.opts.maxRetriesPerRequest=null}else{if(this._client=$,this._client.options.keyPrefix)throw new Error("BullMQ: ioredis does not support ioredis prefixes, use the prefix option instead.");if(Tw(this._client))this.opts=this._client.options.redisOptions;else this.opts=this._client.options;this.checkBlockingOptions(vS,this.opts,!0)}this.skipVersionCheck=G||!!(this.opts&&this.opts.skipVersionCheck),this.handleClientError=(H)=>{this.emit("error",H)},this.handleClientClose=()=>{this.emit("close")},this.handleClientReady=()=>{this.emit("ready")},this.initializing=this.init(),this.initializing.catch((H)=>this.emit("error",H))}checkBlockingOptions($,X,Y=!1){if(this.blocking&&X&&X.maxRetriesPerRequest)if(Y)throw new Error($);else console.error($)}static async waitUntilReady($){if($.status==="ready")return;if($.status==="wait")return $.connect();if($.status==="end")throw new Error($G.CONNECTION_CLOSED_ERROR_MSG);let X,Y,G;try{await new Promise((H,Q)=>{let J;G=(W)=>{J=W},X=()=>{H()},Y=()=>{if($.status!=="end")Q(J||new Error($G.CONNECTION_CLOSED_ERROR_MSG));else if(J)Q(J);else H()},b5($,3),$.once("ready",X),$.on("end",Y),$.once("error",G)})}finally{$.removeListener("end",Y),$.removeListener("error",G),$.removeListener("ready",X),C7($,3)}}get client(){return this.initializing}loadCommands($,X){let Y=X||tY;for(let G in Y){let H=`${Y[G].name}:${$}`;if(!this._client[H])this._client.defineCommand(H,{numberOfKeys:Y[G].keys,lua:Y[G].content})}}async init(){if(!this._client){let $=this.opts,{url:X}=$,Y=b$($,["url"]);this._client=X?new eY.default(X,Y):new eY.default(Y)}if(b5(this._client,3),this._client.on("error",this.handleClientError),this._client.on("close",this.handleClientClose),this._client.on("ready",this.handleClientReady),await g0.waitUntilReady(this._client),this.loadCommands(S6),this._client.status!=="end"){if(this.version=await this.getRedisVersion(),this.skipVersionCheck!==!0&&!this.closing){if(Q4(this.version,g0.minimumVersion))throw new Error(`Redis version needs to be greater or equal than ${g0.minimumVersion} Current: ${this.version}`);if(Q4(this.version,g0.recommendedMinimumVersion))console.warn(`It is highly recommended to use a minimum Redis version of ${g0.recommendedMinimumVersion}
             Current: ${this.version}`)}this.capabilities={canDoubleTimeout:!Q4(this.version,"6.0.0"),canBlockFor1Ms:!Q4(this.version,"7.0.8")},this.status="ready"}return this._client}async disconnect($=!0){let X=await this.client;if(X.status!=="end"){let Y,G;if(!$)return X.disconnect();let H=new Promise((Q,J)=>{b5(X,2),X.once("end",Q),X.once("error",J),Y=Q,G=J});X.disconnect();try{await H}finally{C7(X,2),X.removeListener("end",Y),X.removeListener("error",G)}}}async reconnect(){return(await this.client).connect()}async close($=!1){if(!this.closing){let X=this.status;this.status="closing",this.closing=!0;try{if(X==="ready")await this.initializing;if(!this.shared){if(X=="initializing"||$)this._client.disconnect();else await this._client.quit();this._client.status="end"}}catch(Y){if(x4(Y))throw Y}finally{this._client.off("error",this.handleClientError),this._client.off("close",this.handleClientClose),this._client.off("ready",this.handleClientReady),C7(this._client,3),this.removeAllListeners(),this.status="closed"}}}async getRedisVersion(){let $=await this._client.info(),X="redis_version:",Y="maxmemory_policy:",G=$.split("\r\n"),H;for(let Q=0;Q<G.length;Q++){if(G[Q].indexOf("maxmemory_policy:")===0){let J=G[Q].substr("maxmemory_policy:".length);if(J!=="noeviction")console.warn(`IMPORTANT! Eviction policy is ${J}. It should be "noeviction"`)}if(G[Q].indexOf("redis_version:")===0)H=G[Q].substr("redis_version:".length)}return H}get redisVersion(){return this.version}}g0.minimumVersion="5.0.0";g0.recommendedMinimumVersion="6.2.0";import{EventEmitter as fS}from"events";class S$ extends fS{constructor($,X={connection:{}},Y=g0){super();if(this.name=$,this.opts=X,this.closed=!1,this.opts=Object.assign({prefix:"bull"},X),!$)throw new Error("Queue name must be provided");if($.includes(":"))throw new Error("Queue name cannot contain :");this.connection=new Y(X.connection,h$(X.connection),X.blockingConnection,X.skipVersionCheck),this.connection.on("error",(H)=>this.emit("error",H)),this.connection.on("close",()=>{if(!this.closing)this.emit("ioredis:close")});let G=new s7(X.prefix);if(this.qualifiedName=G.getQueueQualifiedName($),this.keys=G.getKeys($),this.toKey=(H)=>G.toKey($,H),this.setScripts(),X===null||X===void 0?void 0:X.telemetry)this.tracer=X.telemetry.tracer}get client(){return this.connection.client}setScripts(){this.scripts=new l5(this)}get redisVersion(){return this.connection.redisVersion}get Job(){return n0}emit($,...X){try{return super.emit($,...X)}catch(Y){try{return super.emit("error",Y)}catch(G){return console.error(G),!1}}}waitUntilReady(){return this.client}base64Name(){return Buffer.from(this.name).toString("base64")}clientName($=""){let X=this.base64Name();return`${this.opts.prefix}:${X}${$}`}async close(){if(!this.closing)this.closing=this.connection.close();await this.closing,this.closed=!0}disconnect(){return this.connection.disconnect()}async checkConnectionError($,X=kw){try{return await $()}catch(Y){if(x4(Y))this.emit("error",Y);if(!this.closing&&X)await I7(X);else return}}async trace($,X,Y,G,H){if(!this.tracer)return G();let Q=this.opts.telemetry.contextManager.active(),J;if(H)J=this.opts.telemetry.contextManager.fromMetadata(Q,H);let W=`${X} ${Y}`,w=this.tracer.startSpan(W,{kind:$},J);try{w.setAttributes({[Y1.QueueName]:this.name,[Y1.QueueOperation]:X});let B,U;if($===N1.CONSUMER)B=w.setSpanOnContext(J);else B=w.setSpanOnContext(Q);if(G.length==2)U=this.opts.telemetry.contextManager.getMetadata(B);return await this.opts.telemetry.contextManager.with(B,()=>G(w,U))}catch(B){throw w.recordException(B),B}finally{w.end()}}}class XG extends S${getJob($){return this.Job.fromId(this,$)}commandByType($,X,Y){return $.map((G)=>{G=G==="waiting"?"wait":G;let H=this.toKey(G);switch(G){case"completed":case"failed":case"delayed":case"prioritized":case"repeat":case"waiting-children":return Y(H,X?"zcard":"zrange");case"active":case"wait":case"paused":return Y(H,X?"llen":"lrange")}})}get Job(){return n0}sanitizeJobTypes($){let X=typeof $==="string"?[$]:$;if(Array.isArray(X)&&X.length>0){let Y=[...X];if(Y.indexOf("waiting")!==-1)Y.push("paused");return[...new Set(Y)]}return["active","completed","delayed","failed","paused","prioritized","waiting","waiting-children"]}async count(){return await this.getJobCountByTypes("waiting","paused","delayed","prioritized","waiting-children")}async getRateLimitTtl($){return this.scripts.getRateLimitTtl($)}async getDebounceJobId($){return(await this.client).get(`${this.keys.de}:${$}`)}async getDeduplicationJobId($){return(await this.client).get(`${this.keys.de}:${$}`)}async getJobCountByTypes(...$){let X=await this.getJobCounts(...$);return Object.values(X).reduce((Y,G)=>Y+G,0)}async getJobCounts(...$){let X=this.sanitizeJobTypes($),Y=await this.scripts.getCounts(X),G={};return Y.forEach((H,Q)=>{G[X[Q]]=H||0}),G}getJobState($){return this.scripts.getState($)}getCompletedCount(){return this.getJobCountByTypes("completed")}getFailedCount(){return this.getJobCountByTypes("failed")}getDelayedCount(){return this.getJobCountByTypes("delayed")}getActiveCount(){return this.getJobCountByTypes("active")}getPrioritizedCount(){return this.getJobCountByTypes("prioritized")}async getCountsPerPriority($){let X=[...new Set($)],Y=await this.scripts.getCountsPerPriority(X),G={};return Y.forEach((H,Q)=>{G[`${X[Q]}`]=H||0}),G}getWaitingCount(){return this.getJobCountByTypes("waiting")}getWaitingChildrenCount(){return this.getJobCountByTypes("waiting-children")}getWaiting($=0,X=-1){return this.getJobs(["waiting"],$,X,!0)}getWaitingChildren($=0,X=-1){return this.getJobs(["waiting-children"],$,X,!0)}getActive($=0,X=-1){return this.getJobs(["active"],$,X,!0)}getDelayed($=0,X=-1){return this.getJobs(["delayed"],$,X,!0)}getPrioritized($=0,X=-1){return this.getJobs(["prioritized"],$,X,!0)}getCompleted($=0,X=-1){return this.getJobs(["completed"],$,X,!1)}getFailed($=0,X=-1){return this.getJobs(["failed"],$,X,!1)}async getDependencies($,X,Y,G){let H=this.toKey(X=="processed"?`${$}:processed`:`${$}:dependencies`),{items:Q,total:J,jobs:W}=await this.scripts.paginate(H,{start:Y,end:G,fetchJobs:!0});return{items:Q,jobs:W,total:J}}async getRanges($,X=0,Y=1,G=!1){let H=[];this.commandByType($,!1,(W,w)=>{switch(w){case"lrange":H.push("lrange");break;case"zrange":H.push("zrange");break}});let Q=await this.scripts.getRanges($,X,Y,G),J=[];return Q.forEach((W,w)=>{let B=W||[];if(G&&H[w]==="lrange")J=J.concat(B.reverse());else J=J.concat(B)}),[...new Set(J)]}async getJobs($,X=0,Y=-1,G=!1){let H=this.sanitizeJobTypes($),Q=await this.getRanges(H,X,Y,G);return Promise.all(Q.map((J)=>this.Job.fromId(this,J)))}async getJobLogs($,X=0,Y=-1,G=!0){let Q=(await this.client).multi(),J=this.toKey($+":logs");if(G)Q.lrange(J,X,Y);else Q.lrange(J,-(Y+1),-(X+1));Q.llen(J);let W=await Q.exec();if(!G)W[0][1].reverse();return{logs:W[0][1],count:W[1][1]}}async baseGetClients($){let X=await this.client;try{let Y=await X.client("LIST");return this.parseClientList(Y,$)}catch(Y){if(!KY.test(Y.message))throw Y;return[{name:"GCP does not support client list"}]}}getWorkers(){let $=`${this.clientName()}`,X=`${this.clientName()}:w:`,Y=(G)=>G&&(G===$||G.startsWith(X));return this.baseGetClients(Y)}async getWorkersCount(){return(await this.getWorkers()).length}async getQueueEvents(){let $=`${this.clientName()}${LY}`;return this.baseGetClients((X)=>X===$)}async getMetrics($,X=0,Y=-1){let G=await this.client,H=this.toKey(`metrics:${$}`),Q=`${H}:data`,J=G.multi();J.hmget(H,"count","prevTS","prevCount"),J.lrange(Q,X,Y),J.llen(Q);let[W,w,B]=await J.exec(),[U,[V,F,E]]=W,[K,A]=w,[P,_]=B;if(U||K)throw U||K||P;return{meta:{count:parseInt(V||"0",10),prevTS:parseInt(F||"0",10),prevCount:parseInt(E||"0",10)},data:A,count:_}}parseClientList($,X){let Y=$.split("\n"),G=[];return Y.forEach((H)=>{let Q={};H.split(" ").forEach(function(w){let B=w.indexOf("="),U=w.substring(0,B),V=w.substring(B+1);Q[U]=V});let W=Q.name;if(X(W))Q.name=this.name,Q.rawname=W,G.push(Q)}),G}}var XE=G$(IG(),1);import{createHash as iC}from"crypto";class X8 extends S${constructor($,X,Y){super($,X,Y);this.repeatStrategy=X.settings&&X.settings.repeatStrategy||nC,this.repeatKeyHashAlgorithm=X.settings&&X.settings.repeatKeyHashAlgorithm||"md5"}async updateRepeatableJob($,X,Y,{override:G}){var H,Q;let J=Object.assign({},Y.repeat);(H=J.pattern)!==null&&H!==void 0||(J.pattern=J.cron),delete J.cron;let W=J.count?J.count+1:1;if(typeof J.limit!=="undefined"&&W>J.limit)return;let w=Date.now(),{endDate:B}=J;if(typeof B!==void 0&&w>new Date(B).getTime())return;let U=Y.prevMillis||0;w=U<w?w:U;let V=await this.repeatStrategy(w,J,$),{every:F,pattern:E}=J,K=Boolean((F||E)&&J.immediately),A=K&&F?w-V:void 0;if(V){if(!U&&Y.jobId)J.jobId=Y.jobId;let P=$E($,J),_=(Q=Y.repeat.key)!==null&&Q!==void 0?Q:this.hash(P),C;if(G)C=await this.scripts.addRepeatableJob(_,V,{name:$,endDate:B?new Date(B).getTime():void 0,tz:J.tz,pattern:E,every:F},P);else{let p=await this.client;C=await this.scripts.updateRepeatableJobMillis(p,_,V,P)}let{immediately:b}=J,T=b$(J,["immediately"]);return this.createNextJob($,V,C,Object.assign(Object.assign({},Y),{repeat:Object.assign({offset:A},T)}),X,W,K)}}async createNextJob($,X,Y,G,H,Q,J){let W=this.getRepeatJobKey($,X,Y,H),w=Date.now(),B=X+(G.repeat.offset?G.repeat.offset:0)-w,U=Object.assign(Object.assign({},G),{jobId:W,delay:B<0||J?0:B,timestamp:w,prevMillis:X,repeatJobKey:Y});return U.repeat=Object.assign(Object.assign({},G.repeat),{count:Q}),this.Job.create(this,$,H,U)}getRepeatJobKey($,X,Y,G){if(Y.split(":").length>2)return this.getRepeatJobId({name:$,nextMillis:X,namespace:this.hash(Y),jobId:G===null||G===void 0?void 0:G.id});return this.getRepeatDelayedJobId({customKey:Y,nextMillis:X})}async removeRepeatable($,X,Y){var G;let H=$E($,Object.assign(Object.assign({},X),{jobId:Y})),Q=(G=X.key)!==null&&G!==void 0?G:this.hash(H),J=this.getRepeatJobId({name:$,nextMillis:"",namespace:this.hash(H),jobId:Y!==null&&Y!==void 0?Y:X.jobId,key:X.key});return this.scripts.removeRepeatable(J,H,Q)}async removeRepeatableByKey($){let X=this.keyToData($),Y=this.getRepeatJobId({name:X.name,nextMillis:"",namespace:this.hash($),jobId:X.id});return this.scripts.removeRepeatable(Y,"",$)}async getRepeatableData($,X,Y){let G=await $.hgetall(this.toKey("repeat:"+X));if(G)return{key:X,name:G.name,endDate:parseInt(G.endDate)||null,tz:G.tz||null,pattern:G.pattern||null,every:G.every||null,next:Y};return this.keyToData(X,Y)}keyToData($,X){let Y=$.split(":"),G=Y.slice(4).join(":")||null;return{key:$,name:Y[0],id:Y[1]||null,endDate:parseInt(Y[2])||null,tz:Y[3]||null,pattern:G,next:X}}async getRepeatableJobs($=0,X=-1,Y=!1){let G=await this.client,H=this.keys.repeat,Q=Y?await G.zrange(H,$,X,"WITHSCORES"):await G.zrevrange(H,$,X,"WITHSCORES"),J=[];for(let W=0;W<Q.length;W+=2)J.push(this.getRepeatableData(G,Q[W],parseInt(Q[W+1])));return Promise.all(J)}async getRepeatableCount(){return(await this.client).zcard(this.toKey("repeat"))}hash($){return iC(this.repeatKeyHashAlgorithm).update($).digest("hex")}getRepeatDelayedJobId({nextMillis:$,customKey:X}){return`repeat:${X}:${$}`}getRepeatJobId({name:$,nextMillis:X,namespace:Y,jobId:G,key:H}){return`repeat:${H!==null&&H!==void 0?H:this.hash(`${$}${G||""}${Y}`)}:${X}`}}function $E($,X){let Y=X.endDate?new Date(X.endDate).getTime():"",G=X.tz||"",H=X.pattern,Q=(H?H:String(X.every))||"",J=X.jobId?X.jobId:"";return`${$}:${J}:${Y}:${G}:${Q}`}var nC=($,X)=>{let Y=X.pattern;if(Y&&X.every)throw new Error("Both .pattern and .every options are defined for this repeatable job");if(X.every)return Math.floor($/X.every)*X.every+(X.immediately?0:X.every);let G=X.startDate&&new Date(X.startDate)>new Date($)?new Date(X.startDate):new Date($),H=XE.parseExpression(Y,Object.assign(Object.assign({},X),{currentDate:G}));try{if(X.immediately)return new Date().getTime();else return H.next().getTime()}catch(Q){}};var YE=G$(IG(),1);class Y8 extends S${constructor($,X,Y){super($,X,Y);this.repeatStrategy=X.settings&&X.settings.repeatStrategy||rC}async upsertJobScheduler($,X,Y,G,H,{override:Q}){let{every:J,pattern:W}=X;if(W&&J)throw new Error("Both .pattern and .every options are defined for this repeatable job");if(X.immediately&&X.startDate)throw new Error("Both .immediately and .startDate options are defined for this repeatable job");let w=X.count?X.count+1:1;if(typeof X.limit!=="undefined"&&w>X.limit)return;let B=Date.now(),{endDate:U}=X;if(typeof U!==void 0&&B>new Date(U).getTime())return;let V=H.prevMillis||0,{startDate:F}=X,E=b$(X,["startDate"]);if(F){let A=new Date(F).getTime();B=A>B?A:B}let K;if(J){if(K=V+J,K<B)K=B}else if(W)B=V<B?B:V,K=await this.repeatStrategy(B,X,Y);if(K){if(Q)await this.scripts.addJobScheduler($,K,{name:Y,endDate:U?new Date(U).getTime():void 0,tz:X.tz,pattern:W,every:J});else await this.scripts.updateJobSchedulerNextMillis($,K);return this.createNextJob(Y,K,$,Object.assign(Object.assign({},H),{repeat:E}),G,w)}}async createNextJob($,X,Y,G,H,Q){let J=this.getSchedulerNextJobId({jobSchedulerId:Y,nextMillis:X}),W=Date.now(),w=X-W,B=Object.assign(Object.assign({},G),{jobId:J,delay:w<0?0:w,timestamp:W,prevMillis:X,repeatJobKey:Y});return B.repeat=Object.assign(Object.assign({},G.repeat),{count:Q}),this.Job.create(this,$,H,B)}async removeJobScheduler($){return this.scripts.removeJobScheduler($)}async getSchedulerData($,X,Y){let G=await $.hgetall(this.toKey("repeat:"+X));if(G)return{key:X,name:G.name,endDate:parseInt(G.endDate)||null,tz:G.tz||null,pattern:G.pattern||null,every:G.every||null,next:Y};return this.keyToData(X,Y)}keyToData($,X){let Y=$.split(":"),G=Y.slice(4).join(":")||null;return{key:$,name:Y[0],id:Y[1]||null,endDate:parseInt(Y[2])||null,tz:Y[3]||null,pattern:G,next:X}}async getJobScheduler($){let Y=await(await this.client).hgetall(this.toKey("repeat:"+$));if(Y)return{key:$,name:Y.name,endDate:parseInt(Y.endDate)||null,tz:Y.tz||null,pattern:Y.pattern||null,every:Y.every||null}}async getJobSchedulers($=0,X=-1,Y=!1){let G=await this.client,H=this.keys.repeat,Q=Y?await G.zrange(H,$,X,"WITHSCORES"):await G.zrevrange(H,$,X,"WITHSCORES"),J=[];for(let W=0;W<Q.length;W+=2)J.push(this.getSchedulerData(G,Q[W],parseInt(Q[W+1])));return Promise.all(J)}async getSchedulersCount($,X,Y){return $.zcard(`${X}:${Y}:repeat`)}getSchedulerNextJobId({nextMillis:$,jobSchedulerId:X}){return`repeat:${X}:${$}`}}var rC=($,X)=>{let{pattern:Y}=X,G=new Date($),H=YE.parseExpression(Y,Object.assign(Object.assign({},X),{currentDate:G}));try{if(X.immediately)return new Date().getTime();else return H.next().getTime()}catch(Q){}};class AX extends XG{constructor($,X,Y){var G;super($,Object.assign({blockingConnection:!1},X),Y);this.token=k7(),this.libName="bullmq",this.jobsOpts=(G=X===null||X===void 0?void 0:X.defaultJobOptions)!==null&&G!==void 0?G:{},this.waitUntilReady().then((H)=>{if(!this.closing&&!(X===null||X===void 0?void 0:X.skipMetasUpdate))return H.hmset(this.keys.meta,this.metaValues)}).catch((H)=>{})}emit($,...X){return super.emit($,...X)}off($,X){return super.off($,X),this}on($,X){return super.on($,X),this}once($,X){return super.once($,X),this}get defaultJobOptions(){return Object.assign({},this.jobsOpts)}get metaValues(){var $,X,Y,G;return{"opts.maxLenEvents":(G=(Y=(X=($=this.opts)===null||$===void 0?void 0:$.streams)===null||X===void 0?void 0:X.events)===null||Y===void 0?void 0:Y.maxLen)!==null&&G!==void 0?G:1e4,version:`${this.libName}:${S6}`}}async getVersion(){return await(await this.client).hget(this.keys.meta,"version")}get repeat(){return new Promise(async($)=>{if(!this._repeat)this._repeat=new X8(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._repeat.on("error",(X)=>this.emit.bind(this,X));$(this._repeat)})}get jobScheduler(){return new Promise(async($)=>{if(!this._jobScheduler)this._jobScheduler=new Y8(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._jobScheduler.on("error",(X)=>this.emit.bind(this,X));$(this._jobScheduler)})}async getGlobalConcurrency(){let X=await(await this.client).hget(this.keys.meta,"concurrency");if(X)return Number(X);return null}async setGlobalConcurrency($){return(await this.client).hset(this.keys.meta,"concurrency",$)}async add($,X,Y){return this.trace(N1.PRODUCER,"add",`${this.name}.${$}`,async(G,H)=>{if(H)Y=Object.assign(Object.assign({},Y),{telemetryMetadata:H});if(Y&&Y.repeat){if(Y.repeat.endDate){if(+new Date(Y.repeat.endDate)<Date.now())throw new Error("End date must be greater than current timestamp")}return(await this.repeat).updateRepeatableJob($,X,Object.assign(Object.assign({},this.jobsOpts),Y),{override:!0})}else{let Q=Y===null||Y===void 0?void 0:Y.jobId;if(Q=="0"||(Q===null||Q===void 0?void 0:Q.startsWith("0:")))throw new Error("JobId cannot be '0' or start with 0:");let J=await this.Job.create(this,$,X,Object.assign(Object.assign(Object.assign({},this.jobsOpts),Y),{jobId:Q}));return this.emit("waiting",J),G===null||G===void 0||G.setAttributes({[Y1.JobId]:J.id}),J}})}async addBulk($){return this.trace(N1.PRODUCER,"addBulk",this.name,async(X,Y)=>{if(X)X.setAttributes({[Y1.BulkNames]:$.map((G)=>G.name),[Y1.BulkCount]:$.length});return await this.Job.createBulk(this,$.map((G)=>{var H;return{name:G.name,data:G.data,opts:Object.assign(Object.assign(Object.assign({},this.jobsOpts),G.opts),{jobId:(H=G.opts)===null||H===void 0?void 0:H.jobId,tm:X&&Y})}}))})}async upsertJobScheduler($,X,Y){var G,H;if(X.endDate){if(+new Date(X.endDate)<Date.now())throw new Error("End date must be greater than current timestamp")}return(await this.jobScheduler).upsertJobScheduler($,X,(G=Y===null||Y===void 0?void 0:Y.name)!==null&&G!==void 0?G:$,(H=Y===null||Y===void 0?void 0:Y.data)!==null&&H!==void 0?H:{},Object.assign(Object.assign({},this.jobsOpts),Y===null||Y===void 0?void 0:Y.opts),{override:!0})}async pause(){await this.trace(N1.INTERNAL,"pause",this.name,async()=>{await this.scripts.pause(!0),this.emit("paused")})}async close(){await this.trace(N1.INTERNAL,"close",this.name,async()=>{if(!this.closing){if(this._repeat)await this._repeat.close()}await super.close()})}async resume(){await this.trace(N1.INTERNAL,"resume",this.name,async()=>{await this.scripts.pause(!1),this.emit("resumed")})}async isPaused(){return await(await this.client).hexists(this.keys.meta,"paused")===1}isMaxed(){return this.scripts.isMaxed()}async getRepeatableJobs($,X,Y){return(await this.repeat).getRepeatableJobs($,X,Y)}async getJobScheduler($){return(await this.jobScheduler).getJobScheduler($)}async getJobSchedulers($,X,Y){return(await this.jobScheduler).getJobSchedulers($,X,Y)}async removeRepeatable($,X,Y){return this.trace(N1.INTERNAL,"removeRepeatable",`${this.name}.${$}`,async(G)=>{return G===null||G===void 0||G.setAttributes({[Y1.JobName]:$,[Y1.JobId]:Y}),!await(await this.repeat).removeRepeatable($,X,Y)})}async removeJobScheduler($){return!await(await this.jobScheduler).removeJobScheduler($)}async removeDebounceKey($){return this.trace(N1.INTERNAL,"removeDebounceKey",`${this.name}`,async(X)=>{return X===null||X===void 0||X.setAttributes({[Y1.JobKey]:$}),await(await this.client).del(`${this.keys.de}:${$}`)})}async removeDeduplicationKey($){return this.trace(N1.INTERNAL,"removeDeduplicationKey",`${this.name}`,async(X)=>{return X===null||X===void 0||X.setAttributes({[Y1.DeduplicationKey]:$}),(await this.client).del(`${this.keys.de}:${$}`)})}async removeRepeatableByKey($){return this.trace(N1.INTERNAL,"removeRepeatableByKey",`${this.name}`,async(X)=>{return X===null||X===void 0||X.setAttributes({[Y1.JobKey]:$}),!await(await this.repeat).removeRepeatableByKey($)})}async remove($,{removeChildren:X=!0}={}){return this.trace(N1.INTERNAL,"remove",this.name,async(Y)=>{return Y===null||Y===void 0||Y.setAttributes({[Y1.JobId]:$,[Y1.JobOptions]:JSON.stringify({removeChildren:X})}),await this.scripts.remove($,X)})}async updateJobProgress($,X){await this.trace(N1.INTERNAL,"updateJobProgress",this.name,async(Y)=>{Y===null||Y===void 0||Y.setAttributes({[Y1.JobId]:$,[Y1.JobProgress]:JSON.stringify(X)}),await this.scripts.updateProgress($,X)})}async addJobLog($,X,Y){return n0.addJobLog(this,$,X,Y)}async drain($=!1){await this.trace(N1.INTERNAL,"drain",this.name,async(X)=>{X===null||X===void 0||X.setAttributes({[Y1.QueueDrainDelay]:$}),await this.scripts.drain($)})}async clean($,X,Y="completed"){return this.trace(N1.INTERNAL,"clean",this.name,async(G)=>{let H=X||1/0,Q=Math.min(1e4,H),J=Date.now()-$,W=0,w=[];while(W<H){let B=await this.scripts.cleanJobsInSet(Y,J,Q);if(this.emit("cleaned",B,Y),W+=B.length,w.push(...B),B.length<Q)break}return G===null||G===void 0||G.setAttributes({[Y1.QueueGrace]:$,[Y1.JobType]:Y,[Y1.QueueCleanLimit]:H,[Y1.JobIds]:w}),w})}async obliterate($){await this.trace(N1.INTERNAL,"obliterate",this.name,async()=>{await this.pause();let X=0;do X=await this.scripts.obliterate(Object.assign({force:!1,count:1000},$));while(X)})}async retryJobs($={}){await this.trace(N1.PRODUCER,"retryJobs",this.name,async(X)=>{X===null||X===void 0||X.setAttributes({[Y1.QueueOptions]:JSON.stringify($)});let Y=0;do Y=await this.scripts.retryJobs($.state,$.count,$.timestamp);while(Y)})}async promoteJobs($={}){await this.trace(N1.INTERNAL,"promoteJobs",this.name,async(X)=>{X===null||X===void 0||X.setAttributes({[Y1.QueueOptions]:JSON.stringify($)});let Y=0;do Y=await this.scripts.promoteJobs($.count);while(Y)})}async trimEvents($){return this.trace(N1.INTERNAL,"trimEvents",this.name,async(X)=>{return X===null||X===void 0||X.setAttributes({[Y1.QueueEventMaxLength]:$}),await(await this.client).xtrim(this.keys.events,"MAXLEN","~",$)})}async removeDeprecatedPriorityKey(){return(await this.client).del(this.toKey("priority"))}}var sC=($,X)=>{return async function Y(G,H){let Q,J,W;try{let w=new Promise((B,U)=>{(async()=>{try{W=(F,E)=>{U(new Error("Unexpected exit code: "+F+" signal: "+E))},Q=await X.retain($,W),J=async(F)=>{var E,K;switch(F.cmd){case S0.Completed:B(F.value);break;case S0.Failed:case S0.Error:{let A=new Error;Object.assign(A,F.value),U(A);break}case S0.Progress:await G.updateProgress(F.value);break;case S0.Log:await G.log(F.value);break;case S0.MoveToDelayed:await G.moveToDelayed((E=F.value)===null||E===void 0?void 0:E.timestamp,(K=F.value)===null||K===void 0?void 0:K.token);break;case S0.Update:await G.updateData(F.value);break}},Q.on("message",J),Q.send({cmd:F6.Start,job:G.asJSONSandbox(),token:H})}catch(F){U(F)}})()});return await w,w}finally{if(Q)if(Q.off("message",J),Q.off("exit",W),Q.exitCode!==null||/SIG.*/.test(`${Q.signalCode}`))X.remove(Q);else X.release(Q)}}},GE=sC;import*as m6 from"fs";import{URL as aC}from"url";import*as E4 from"path";var JE=G$(QE(),1);var tC=10,eC=30000;class jG extends S${static RateLimitError(){return new DY}constructor($,X,Y,G){super($,Object.assign(Object.assign({},Y),{blockingConnection:!0}),G);if(this.abortDelayController=null,this.blockUntil=0,this.drained=!1,this.extendLocksTimer=null,this.limitUntil=0,this.waiting=null,this.running=!1,!Y||!Y.connection)throw new Error("Worker requires a connection");if(this.opts=Object.assign({drainDelay:5,concurrency:1,lockDuration:30000,maxStalledCount:1,stalledInterval:30000,autorun:!0,runRetryDelay:15000},this.opts),this.opts.stalledInterval<=0)throw new Error("stalledInterval must be greater than 0");if(this.opts.drainDelay<=0)throw new Error("drainDelay must be greater than 0");if(this.concurrency=this.opts.concurrency,this.opts.lockRenewTime=this.opts.lockRenewTime||this.opts.lockDuration/2,this.id=k7(),X){if(typeof X==="function")this.processFn=X;else{if(X instanceof aC){if(!m6.existsSync(X))throw new Error(`URL ${X} does not exist in the local file system`);X=X.href}else{let U=X+([".js",".ts",".flow",".cjs"].includes(E4.extname(X))?"":".js");if(!m6.existsSync(U))throw new Error(`File ${U} does not exist`)}let Q=E4.dirname("worker.js"),J=E4.join(Q,"main-worker.js"),W=E4.join(Q,"main.js"),w=this.opts.useWorkerThreads?J:W;try{m6.statSync(w)}catch(B){let U=this.opts.useWorkerThreads?"main-worker.js":"main.js";w=E4.join(process.cwd(),`dist/cjs/classes/${U}`),m6.statSync(w)}this.childPool=new L9({mainFile:w,useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions}),this.processFn=GE(X,this.childPool).bind(this)}if(this.opts.autorun)this.run().catch((Q)=>this.emit("error",Q))}let H=this.clientName()+(this.opts.name?`:w:${this.opts.name}`:"");this.blockingConnection=new g0(h$(Y.connection)?Y.connection.duplicate({connectionName:H}):Object.assign(Object.assign({},Y.connection),{connectionName:H}),!1,!0,Y.skipVersionCheck),this.blockingConnection.on("error",(Q)=>this.emit("error",Q)),this.blockingConnection.on("ready",()=>setTimeout(()=>this.emit("ready"),0))}emit($,...X){return super.emit($,...X)}off($,X){return super.off($,X),this}on($,X){return super.on($,X),this}once($,X){return super.once($,X),this}callProcessJob($,X){return this.processFn($,X)}createJob($,X){return this.Job.fromJSON(this,$,X)}async waitUntilReady(){return await super.waitUntilReady(),this.blockingConnection.client}set concurrency($){if(typeof $!=="number"||$<1||!isFinite($))throw new Error("concurrency must be a finite number greater than 0");this.opts.concurrency=$}get repeat(){return new Promise(async($)=>{if(!this._repeat){let X=await this.client;this._repeat=new X8(this.name,Object.assign(Object.assign({},this.opts),{connection:X})),this._repeat.on("error",(Y)=>this.emit.bind(this,Y))}$(this._repeat)})}get jobScheduler(){return new Promise(async($)=>{if(!this._jobScheduler){let X=await this.client;this._jobScheduler=new Y8(this.name,Object.assign(Object.assign({},this.opts),{connection:X})),this._jobScheduler.on("error",(Y)=>this.emit.bind(this,Y))}$(this._jobScheduler)})}async run(){if(!this.processFn)throw new Error("No process function is defined.");if(this.running)throw new Error("Worker is already running.");try{if(this.running=!0,this.closing)return;await this.startStalledCheckTimer();let $=new Set;this.startLockExtenderTimer($);let X=this.asyncFifoQueue=new K9,Y=0,G=await this.client,H=await this.blockingConnection.client;while(!this.closing){let Q=X.numTotal();while(!this.waiting&&Q<this.opts.concurrency&&(!this.limitUntil||Q==0)){let W=`${this.id}:${Y++}`,w=this.retryIfFailed(()=>this._getNextJob(G,H,W,{block:!0}),this.opts.runRetryDelay);if(X.add(w),Q=X.numTotal(),this.waiting&&Q>1)break;if(!await w&&Q>1)break;if(this.blockUntil)break}let J;do J=await X.fetch();while(!J&&X.numQueued()>0);if(J){let W=J.token;X.add(this.retryIfFailed(()=>this.processJob(J,W,()=>X.numTotal()<=this.opts.concurrency,$),this.opts.runRetryDelay))}}return this.running=!1,await X.waitAll()}catch($){throw this.running=!1,$}}async getNextJob($,{block:X=!0}={}){let Y=await this._getNextJob(await this.client,await this.blockingConnection.client,$,{block:X});return this.trace(N1.INTERNAL,"getNextJob",this.name,async(G)=>{return G===null||G===void 0||G.setAttributes({[Y1.WorkerId]:this.id,[Y1.QueueName]:this.name,[Y1.WorkerName]:this.opts.name,[Y1.WorkerOptions]:JSON.stringify({block:X}),[Y1.JobId]:Y===null||Y===void 0?void 0:Y.id}),Y},Y===null||Y===void 0?void 0:Y.opts.telemetryMetadata)}async _getNextJob($,X,Y,{block:G=!0}={}){var H;if(this.paused)if(G)await this.paused;else return;if(this.closing)return;if(this.drained&&G&&!this.limitUntil&&!this.waiting){this.waiting=this.waitForJob(X,this.blockUntil);try{if(this.blockUntil=await this.waiting,this.blockUntil<=0||this.blockUntil-Date.now()<1)return this.moveToActive($,Y,this.opts.name)}catch(Q){if(!(this.paused||this.closing)&&x4(Q))throw Q}finally{this.waiting=null}}else{let Q=this.limitUntil;if(Q)(H=this.abortDelayController)===null||H===void 0||H.abort(),this.abortDelayController=new JE.AbortController,await this.delay(this.getLimitUntil(Q),this.abortDelayController);return this.moveToActive($,Y,this.opts.name)}}async rateLimit($){await this.trace(N1.INTERNAL,"rateLimit",this.name,async(X)=>{X===null||X===void 0||X.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerRateLimit]:$}),await this.client.then((Y)=>Y.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,"PX",$))})}get minimumBlockTimeout(){return this.blockingConnection.capabilities.canBlockFor1Ms?0.001:0.002}async moveToActive($,X,Y){let[G,H,Q,J]=await this.scripts.moveToActive($,X,Y);return this.updateDelays(Q,J),this.nextJobFromJobData(G,H,X)}async waitForJob($,X){if(this.paused)return 1/0;let Y;try{if(!this.closing&&!this.limitUntil){let G=this.getBlockTimeout(X);if(G>0){G=this.blockingConnection.capabilities.canDoubleTimeout?G:Math.ceil(G),Y=setTimeout(async()=>{$.disconnect(!this.closing)},G*1000+1000),this.updateDelays();let H=await $.bzpopmin(this.keys.marker,G);if(H){let[Q,J,W]=H;if(J)return parseInt(W)}}return 0}}catch(G){if(x4(G))this.emit("error",G);if(!this.closing)await this.delay()}finally{clearTimeout(Y)}return 1/0}getBlockTimeout($){let X=this.opts;if($){let Y=$-Date.now();if(Y<=0)return Y;else if(Y<this.minimumBlockTimeout*1000)return this.minimumBlockTimeout;else return Math.min(Y/1000,tC)}else return Math.max(X.drainDelay,this.minimumBlockTimeout)}getLimitUntil($){return Math.min($,eC)}async delay($,X){await I7($||xw,X)}updateDelays($=0,X=0){this.limitUntil=Math.max($,0)||0,this.blockUntil=Math.max(X,0)||0}async nextJobFromJobData($,X,Y){if(!$){if(!this.drained)this.emit("drained"),this.drained=!0}else{this.drained=!1;let G=this.createJob($,X);if(G.token=Y,G.opts.repeat)if(G.repeatJobKey)await(await this.jobScheduler).upsertJobScheduler(G.repeatJobKey,G.opts.repeat,G.name,G.data,G.opts,{override:!1});else await(await this.repeat).updateRepeatableJob(G.name,G.data,G.opts,{override:!1});return G}}async processJob($,X,Y=()=>!0,G){if(!$||this.closing||this.paused)return;let{telemetryMetadata:H}=$.opts;return this.trace(N1.CONSUMER,"process",this.name,async(Q)=>{Q===null||Q===void 0||Q.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerName]:this.opts.name,[Y1.JobId]:$.id});let J=async(U)=>{if(!this.connection.closing){let V=await $.moveToCompleted(U,X,Y()&&!(this.closing||this.paused));this.emit("completed",$,U,"active"),Q===null||Q===void 0||Q.addEvent("job completed",{[Y1.JobResult]:JSON.stringify(U)});let[F,E,K,A]=V||[];return this.updateDelays(K,A),this.nextJobFromJobData(F,E,X)}},W=async(U)=>{if(!this.connection.closing)try{if(U.message==fw){this.limitUntil=await this.moveLimitedBackToWait($,X);return}if(U instanceof OY||U.name=="DelayedError"||U instanceof _Y||U.name=="WaitingChildrenError")return;let V=await $.moveToFailed(U,X,!0);if(this.emit("failed",$,U,"active"),Q===null||Q===void 0||Q.addEvent("job failed",{[Y1.JobFailedReason]:U.message}),V){let[F,E,K,A]=V;return this.updateDelays(K,A),this.nextJobFromJobData(F,E,X)}}catch(V){this.emit("error",V),Q===null||Q===void 0||Q.recordException(V.message)}};this.emit("active",$,"waiting");let w=Date.now(),B={job:$,ts:w};try{G.add(B);let U=await this.callProcessJob($,X);return await J(U)}catch(U){return await W(U)}finally{Q===null||Q===void 0||Q.setAttributes({[Y1.JobFinishedTimestamp]:Date.now(),[Y1.JobProcessedTimestamp]:w}),G.delete(B)}},H)}async pause($){await this.trace(N1.INTERNAL,"pause",this.name,async(X)=>{if(X===null||X===void 0||X.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerName]:this.opts.name,[Y1.WorkerDoNotWaitActive]:$}),!this.paused)this.paused=new Promise((Y)=>{this.resumeWorker=function(){Y(),this.paused=null,this.resumeWorker=null}}),await(!$&&this.whenCurrentJobsFinished()),this.emit("paused")})}resume(){if(this.resumeWorker)this.trace(N1.INTERNAL,"resume",this.name,($)=>{$===null||$===void 0||$.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerName]:this.opts.name}),this.resumeWorker(),this.emit("resumed")})}isPaused(){return!!this.paused}isRunning(){return this.running}async close($=!1){if(this.closing)return this.closing;await this.trace(N1.INTERNAL,"close",this.name,async(X)=>{return X===null||X===void 0||X.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerName]:this.opts.name,[Y1.WorkerForceClose]:$}),this.closing=(async()=>{var Y,G;this.emit("closing","closing queue"),(Y=this.abortDelayController)===null||Y===void 0||Y.abort(),this.resume();let H=[()=>{return $||this.whenCurrentJobsFinished(!1)},()=>{var Q;return(Q=this.childPool)===null||Q===void 0?void 0:Q.clean()},()=>this.blockingConnection.close($),()=>this.connection.close($)];for(let Q of H)try{await Q()}catch(J){this.emit("error",J)}clearTimeout(this.extendLocksTimer),(G=this.stalledCheckStopper)===null||G===void 0||G.call(this),this.closed=!0,this.emit("closed")})(),await this.closing})}async startStalledCheckTimer(){if(!this.opts.skipStalledCheck){if(!this.closing)await this.trace(N1.INTERNAL,"startStalledCheckTimer",this.name,async($)=>{$===null||$===void 0||$.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerName]:this.opts.name}),this.stalledChecker().catch((X)=>{this.emit("error",X)})})}}async stalledChecker(){while(!this.closing){try{await this.checkConnectionError(()=>this.moveStalledJobsToWait())}catch($){this.emit("error",$)}await new Promise(($)=>{let X=setTimeout($,this.opts.stalledInterval);this.stalledCheckStopper=()=>{clearTimeout(X),$()}})}}startLockExtenderTimer($){if(!this.opts.skipLockRenewal){if(clearTimeout(this.extendLocksTimer),!this.closed)this.extendLocksTimer=setTimeout(async()=>{let X=Date.now(),Y=[];for(let G of $){let{job:H,ts:Q}=G;if(!Q){G.ts=X;continue}if(Q+this.opts.lockRenewTime/2<X)G.ts=X,Y.push(H)}try{if(Y.length)await this.extendLocks(Y)}catch(G){this.emit("error",G)}this.startLockExtenderTimer($)},this.opts.lockRenewTime/2)}}async whenCurrentJobsFinished($=!0){if(this.waiting)await this.blockingConnection.disconnect($);else $=!1;if(this.asyncFifoQueue)await this.asyncFifoQueue.waitAll();$&&await this.blockingConnection.reconnect()}async retryIfFailed($,X){do try{return await $()}catch(G){if(this.emit("error",G),X)await this.delay(X);else return}while(1)}async extendLocks($){await this.trace(N1.INTERNAL,"extendLocks",this.name,async(X)=>{X===null||X===void 0||X.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerName]:this.opts.name,[Y1.WorkerJobsToExtendLocks]:$.map((Y)=>Y.id)});try{let Y=(await this.client).pipeline();for(let H of $)await this.scripts.extendLock(H.id,H.token,this.opts.lockDuration,Y);let G=await Y.exec();for(let[H,Q]of G)if(H)this.emit("error",new Error(`could not renew lock for job ${Q}`))}catch(Y){this.emit("error",Y)}})}async moveStalledJobsToWait(){await this.trace(N1.INTERNAL,"moveStalledJobsToWait",this.name,async($)=>{let[Y,G]=await this.scripts.moveStalledJobsToWait();$===null||$===void 0||$.setAttributes({[Y1.WorkerId]:this.id,[Y1.WorkerName]:this.opts.name,[Y1.WorkerStalledJobs]:G,[Y1.WorkerFailedJobs]:Y}),G.forEach((Q)=>{$===null||$===void 0||$.addEvent("job stalled",{[Y1.JobId]:Q}),this.emit("stalled",Q,"active")});let H=[];for(let Q=0;Q<Y.length;Q++)if(H.push(n0.fromId(this,Y[Q])),(Q+1)%50===0)this.notifyFailedJobs(await Promise.all(H)),H.length=0;this.notifyFailedJobs(await Promise.all(H))})}notifyFailedJobs($,X){$.forEach((G)=>{X===null||X===void 0||X.addEvent("job failed",{[Y1.JobId]:G.id,[Y1.JobName]:G.name,[Y1.JobFailedReason]:"job stalled more than allowable limit"}),this.emit("failed",G,new Error("job stalled more than allowable limit"),"active")})}moveLimitedBackToWait($,X){return this.scripts.moveJobFromActiveToWait($.id,X)}}var WE;(function($){$.blocking="blocking",$.normal="normal"})(WE||(WE={}));import qj from"os";import Mj from"fs";var zX=new Map,TG=new Map,kG=Symbol("OriginError"),u6={};class t0 extends Promise{constructor($,X,Y,G,H={}){let Q,J;super((W,w)=>{Q=W,J=w});this.tagged=Array.isArray($.raw),this.strings=$,this.args=X,this.handler=Y,this.canceller=G,this.options=H,this.state=null,this.statement=null,this.resolve=(W)=>(this.active=!1,Q(W)),this.reject=(W)=>(this.active=!1,J(W)),this.active=!1,this.cancelled=null,this.executed=!1,this.signature="",this[kG]=this.handler.debug?new Error:this.tagged&&$j(this.strings)}get origin(){return(this.handler.debug?this[kG].stack:this.tagged&&TG.has(this.strings)?TG.get(this.strings):TG.set(this.strings,this[kG].stack).get(this.strings))||""}static get[Symbol.species](){return Promise}cancel(){return this.canceller&&(this.canceller(this),this.canceller=null)}simple(){return this.options.simple=!0,this.options.prepare=!1,this}async readable(){return this.simple(),this.streaming=!0,this}async writable(){return this.simple(),this.streaming=!0,this}cursor($=1,X){if(this.options.simple=!1,typeof $==="function")X=$,$=1;if(this.cursorRows=$,typeof X==="function")return this.cursorFn=X,this;let Y;return{[Symbol.asyncIterator]:()=>({next:()=>{if(this.executed&&!this.active)return{done:!0};Y&&Y();let G=new Promise((H,Q)=>{this.cursorFn=(J)=>{return H({value:J,done:!1}),new Promise((W)=>Y=W)},this.resolve=()=>(this.active=!1,H({done:!0})),this.reject=(J)=>(this.active=!1,Q(J))});return this.execute(),G},return(){return Y&&Y(u6),{done:!0}}})}}describe(){return this.options.simple=!1,this.onlyDescribe=this.options.prepare=!0,this}stream(){throw new Error(".stream has been renamed to .forEach")}forEach($){return this.forEachFn=$,this.handle(),this}raw(){return this.isRaw=!0,this}values(){return this.isRaw="values",this}async handle(){!this.executed&&(this.executed=!0)&&await 1&&this.handler(this)}execute(){return this.handle(),this}then(){return this.handle(),super.then.apply(this,arguments)}catch(){return this.handle(),super.catch.apply(this,arguments)}finally(){return this.handle(),super.finally.apply(this,arguments)}}function $j($){if(zX.has($))return zX.get($);let X=Error.stackTraceLimit;return Error.stackTraceLimit=4,zX.set($,new Error),Error.stackTraceLimit=X,zX.get($)}class p6 extends Error{constructor($){super($.message);this.name=this.constructor.name,Object.assign(this,$)}}var t1={connection:wE,postgres:BE,generic:UE,notSupported:VE};function wE($,X,Y){let{host:G,port:H}=Y||X,Q=Object.assign(new Error("write "+$+" "+(X.path||G+":"+H)),{code:$,errno:$,address:X.path||G},X.path?{}:{port:H});return Error.captureStackTrace(Q,wE),Q}function BE($){let X=new p6($);return Error.captureStackTrace(X,BE),X}function UE($,X){let Y=Object.assign(new Error($+": "+X),{code:$});return Error.captureStackTrace(Y,UE),Y}function VE($){let X=Object.assign(new Error($+" (B) is not supported"),{code:"MESSAGE_NOT_SUPPORTED",name:$});return Error.captureStackTrace(X,VE),X}var Xj={string:{to:25,from:null,serialize:($)=>""+$},number:{to:0,from:[21,23,26,700,701],serialize:($)=>""+$,parse:($)=>+$},json:{to:114,from:[114,3802],serialize:($)=>JSON.stringify($),parse:($)=>JSON.parse($)},boolean:{to:16,from:16,serialize:($)=>$===!0?"t":"f",parse:($)=>$==="t"},date:{to:1184,from:[1082,1114,1184],serialize:($)=>($ instanceof Date?$:new Date($)).toISOString(),parse:($)=>new Date($)},bytea:{to:17,from:17,serialize:($)=>"\\x"+Buffer.from($).toString("hex"),parse:($)=>Buffer.from($.slice(2),"hex")}};class RX{then(){xG()}catch(){xG()}finally(){xG()}}class J8 extends RX{constructor($){super();this.value=NX($)}}class C$ extends RX{constructor($,X,Y){super();this.value=$,this.type=X,this.array=Y}}class DX extends RX{constructor($,X){super();this.first=$,this.rest=X}build($,X,Y,G){let H=Yj.map(([Q,J])=>({fn:J,i:$.search(Q)})).sort((Q,J)=>Q.i-J.i).pop();return H.i===-1?bG(this.first,G):H.fn(this.first,this.rest,X,Y,G)}}function _X($,X,Y,G){let H=$ instanceof C$?$.value:$;if(H===void 0){if($ instanceof C$?$.value=G.transform.undefined:H=$=G.transform.undefined,H===void 0)throw t1.generic("UNDEFINED_VALUE","Undefined values are not allowed")}return"$"+Y.push($ instanceof C$?(X.push($.value),$.array?$.array[$.type||OX($.value)]||$.type||KE($.value):$.type):(X.push($),OX($)))}var EE=LE(Xj);function hG($,X,Y,G,H,Q){for(let J=1;J<$.strings.length;J++)X+=yG(X,Y,G,H,Q)+$.strings[J],Y=$.args[J];return X}function yG($,X,Y,G,H){return X instanceof DX?X.build($,Y,G,H):X instanceof t0?fG(X,Y,G,H):X instanceof J8?X.value:X&&X[0]instanceof t0?X.reduce((Q,J)=>Q+" "+fG(J,Y,G,H),""):_X(X,Y,G,H)}function fG($,X,Y,G){return $.fragment=!0,hG($,$.strings[0],$.args[0],X,Y,G)}function AE($,X,Y,G,H){return $.map((Q)=>"("+G.map((J)=>yG("values",Q[J],X,Y,H)).join(",")+")").join(",")}function FE($,X,Y,G,H){let Q=Array.isArray($[0]),J=X.length?X.flat():Object.keys(Q?$[0]:$);return AE(Q?$:[$],Y,G,J,H)}function LX($,X,Y,G,H){if(typeof $==="string"&&($=[$].concat(X)),Array.isArray($))return bG($,H);let Q;return(X.length?X.flat():Object.keys($)).map((W)=>{return Q=$[W],(Q instanceof t0?fG(Q,Y,G,H):Q instanceof J8?Q.value:_X(Q,Y,G,H))+" as "+NX(H.transform.column.to?H.transform.column.to(W):W)}).join(",")}var Yj=Object.entries({values:FE,in:(...$)=>{let X=FE(...$);return X==="()"?"(null)":X},select:LX,as:LX,returning:LX,"\\(":LX,update($,X,Y,G,H){return(X.length?X.flat():Object.keys($)).map((Q)=>NX(H.transform.column.to?H.transform.column.to(Q):Q)+"="+yG("values",$[Q],Y,G,H))},insert($,X,Y,G,H){let Q=X.length?X.flat():Object.keys(Array.isArray($)?$[0]:$);return"("+bG(Q,H)+")values"+AE(Array.isArray($)?$:[$],Y,G,Q,H)}}).map(([$,X])=>[new RegExp("((?:^|[\\s(])"+$+"(?:$|[\\s(]))(?![\\s\\S]*\\1)","i"),X]);function xG(){throw t1.generic("NOT_TAGGED_CALL","Query not called as a tagged template literal")}var{serializers:Gj,parsers:Hj}=EE;function KE($){if(Array.isArray($))return KE($[0]);return typeof $==="string"?1009:0}var zE=function($){let X=LE($||{});return{serializers:Object.assign({},Gj,X.serializers),parsers:Object.assign({},Hj,X.parsers)}};function LE($){return Object.keys($).reduce((X,Y)=>{if($[Y].from&&[].concat($[Y].from).forEach((G)=>X.parsers[G]=$[Y].parse),$[Y].serialize)X.serializers[$[Y].to]=$[Y].serialize,$[Y].from&&[].concat($[Y].from).forEach((G)=>X.serializers[G]=$[Y].serialize);return X},{parsers:{},serializers:{}})}function bG($,{transform:{column:X}}){return $.map((Y)=>NX(X.to?X.to(Y):Y)).join(",")}var NX=function $(X){return'"'+X.replace(/"/g,'""').replace(/\./g,'"."')+'"'},OX=function $(X){return X instanceof C$?X.type:X instanceof Date?1184:X instanceof Uint8Array?17:X===!0||X===!1?16:typeof X==="bigint"?20:Array.isArray(X)?$(X[0]):0},Qj=/\\/g,Jj=/"/g;function Wj($){return $.replace(Qj,"\\\\").replace(Jj,'\\"')}var OE=function $(X,Y,G,H){if(Array.isArray(X)===!1)return X;if(!X.length)return"{}";let Q=X[0],J=H===1020?";":",";if(Array.isArray(Q)&&!Q.type)return"{"+X.map((W)=>$(W,Y,G,H)).join(J)+"}";return"{"+X.map((W)=>{if(W===void 0){if(W=G.transform.undefined,W===void 0)throw t1.generic("UNDEFINED_VALUE","Undefined values are not allowed")}return W===null?"null":'"'+Wj(Y?Y(W.type?W.value:W):""+W)+'"'}).join(J)+"}"},vG={i:0,char:null,str:"",quoted:!1,last:0},RE=function $(X,Y,G){return vG.i=vG.last=0,DE(vG,X,Y,G)};function DE($,X,Y,G){let H=[],Q=G===1020?";":",";for(;$.i<X.length;$.i++){if($.char=X[$.i],$.quoted)if($.char==="\\")$.str+=X[++$.i];else if($.char==='"')H.push(Y?Y($.str):$.str),$.str="",$.quoted=X[$.i+1]==='"',$.last=$.i+2;else $.str+=$.char;else if($.char==='"')$.quoted=!0;else if($.char==="{")$.last=++$.i,H.push(DE($,X,Y,G));else if($.char==="}"){$.quoted=!1,$.last<$.i&&H.push(Y?Y(X.slice($.last,$.i)):X.slice($.last,$.i)),$.last=$.i+1;break}else if($.char===Q&&$.p!=="}"&&$.p!=='"')H.push(Y?Y(X.slice($.last,$.i)):X.slice($.last,$.i)),$.last=$.i+1;$.p=$.char}return $.last<$.i&&H.push(Y?Y(X.slice($.last,$.i+1)):X.slice($.last,$.i+1)),H}var r4=($)=>{let X=$[0];for(let Y=1;Y<$.length;Y++)X+=$[Y]==="_"?$[++Y].toUpperCase():$[Y];return X},s4=($)=>{let X=$[0].toUpperCase();for(let Y=1;Y<$.length;Y++)X+=$[Y]==="_"?$[++Y].toUpperCase():$[Y];return X},o4=($)=>$.replace(/_/g,"-"),G8=($)=>$.replace(/([A-Z])/g,"_$1").toLowerCase(),H8=($)=>($.slice(0,1)+$.slice(1).replace(/([A-Z])/g,"_$1")).toLowerCase(),Q8=($)=>$.replace(/-/g,"_");function gG($){return function X(Y,G){return typeof Y==="object"&&Y!==null&&(G.type===114||G.type===3802)?Array.isArray(Y)?Y.map((H)=>X(H,G)):Object.entries(Y).reduce((H,[Q,J])=>Object.assign(H,{[$(Q)]:X(J,G)}),{}):Y}}r4.column={from:r4};r4.value={from:gG(r4)};G8.column={to:G8};var mG={...r4};mG.column.to=G8;s4.column={from:s4};s4.value={from:gG(s4)};H8.column={to:H8};var uG={...s4};uG.column.to=H8;o4.column={from:o4};o4.value={from:gG(o4)};Q8.column={to:Q8};var pG={...o4};pG.column.to=Q8;import _E from"net";import Vj from"tls";import W8 from"crypto";import cG from"stream";import{performance as NE}from"perf_hooks";class a4 extends Array{constructor(){super();Object.defineProperties(this,{count:{value:null,writable:!0},state:{value:null,writable:!0},command:{value:null,writable:!0},columns:{value:null,writable:!0},statement:{value:null,writable:!0}})}static get[Symbol.species](){return Array}}var u0=wj;function wj($=[]){let X=$.slice(),Y=0;return{get length(){return X.length-Y},remove:(G)=>{let H=X.indexOf(G);return H===-1?null:(X.splice(H,1),G)},push:(G)=>(X.push(G),G),shift:()=>{let G=X[Y++];if(Y===X.length)Y=0,X=[];else X[Y-1]=void 0;return G}}}var z0=Buffer.allocUnsafe(256),Bj="BCcDdEFfHPpQSX".split("").reduce(($,X)=>{let Y=X.charCodeAt(0);return $[X]=()=>{return z0[0]=Y,I1.i=5,I1},$},{}),I1=Object.assign(Uj,Bj,{N:String.fromCharCode(0),i:0,inc($){return I1.i+=$,I1},str($){let X=Buffer.byteLength($);return qX(X),I1.i+=z0.write($,I1.i,X,"utf8"),I1},i16($){return qX(2),z0.writeUInt16BE($,I1.i),I1.i+=2,I1},i32($,X){if(X||X===0)return z0.writeUInt32BE($,X),I1;return qX(4),z0.writeUInt32BE($,I1.i),I1.i+=4,I1},z($){return qX($),z0.fill(0,I1.i,I1.i+$),I1.i+=$,I1},raw($){return z0=Buffer.concat([z0.subarray(0,I1.i),$]),I1.i=z0.length,I1},end($=1){z0.writeUInt32BE(I1.i-$,$);let X=z0.subarray(0,I1.i);return I1.i=0,z0=Buffer.allocUnsafe(256),X}}),J1=I1;function qX($){if(z0.length-I1.i<$){let X=z0,Y=X.length;z0=Buffer.allocUnsafe(Y+(Y>>1)+$),X.copy(z0)}}function Uj(){return I1.i=0,I1}var iG=ZE,Fj=1,A4=J1().S().end(),qE=J1().H().end(),Ej=J1().i32(8).i32(80877103).end(8),Aj=Buffer.concat([J1().E().str(J1.N).i32(0).end(),A4]),Kj=J1().D().str("S").str(J1.N).end(),c6=()=>{},zj=new Set(["FetchPreparedStatement","RevalidateCachedQuery","transformAssignedExpr"]),Lj={83:"severity_local",86:"severity",67:"code",77:"message",68:"detail",72:"hint",80:"position",112:"internal_position",113:"internal_query",87:"where",115:"schema_name",116:"table_name",99:"column_name",100:"data type_name",110:"constraint_name",70:"file",76:"line",82:"routine"};function ZE($,X={},{onopen:Y=c6,onend:G=c6,onclose:H=c6}={}){let{ssl:Q,max:J,user:W,host:w,port:B,database:U,parsers:V,transform:F,onnotice:E,onnotify:K,onparameter:A,max_pipeline:P,keep_alive:_,backoff:C,target_session_attrs:b}=$,T=u0(),p=Fj++,k={pid:null,secret:null},x=lG(nX,$.idle_timeout),S=lG(nX,$.max_lifetime),d=lG(qK,$.connect_timeout),Z=null,s,$1=new a4,R=Buffer.alloc(0),j=$.fetch_types,v={},f={},u=Math.random().toString(36).slice(2),M=1,m=0,i=0,H1=0,U1=0,w1=0,D1=0,j1=0,u1=null,f1=null,w0=!1,T1=null,X$=null,B0=null,n$=null,e1=null,h1=null,Y$=null,L$=null,l=null,E5=null,U0={queue:X.closed,idleTimer:x,connect(z){B0=z||!0,sH()},terminate:K5,execute:A5,cancel:RK,end:nX,count:0,id:p};return X.closed&&X.closed.push(U0),U0;async function OK(){let z;try{z=$.socket?await Promise.resolve($.socket($)):new _E.Socket}catch(q){J6(q);return}return z.on("error",J6),z.on("close",oH),z.on("drain",nH),z}async function RK({pid:z,secret:q},W1,Z1){try{s=J1().i32(16).i32(80877102).i32(z).i32(q).end(16),await rH(),Z.once("error",Z1),Z.once("close",W1)}catch(n1){Z1(n1)}}function A5(z){if(w0)return f8(z,t1.connection("CONNECTION_DESTROYED",$));if(z.cancelled)return;try{return z.state=k,l?T.push(z):(l=z,l.active=!0),NK(z),H0(DK(z))&&!z.describeFirst&&!z.cursorFn&&T.length<P&&(!z.options.onexecute||z.options.onexecute(U0))}catch(q){return T.length===0&&H0(A4),O$(q),!0}}function DK(z){if(z.parameters.length>=65534)throw t1.generic("MAX_PARAMETERS_EXCEEDED","Max number of parameters (65534) exceeded");return z.options.simple?J1().Q().str(z.statement.string+J1.N).end():z.describeFirst?Buffer.concat([dH(z),qE]):z.prepare?z.prepared?v8(z):Buffer.concat([dH(z),v8(z)]):_K(z)}function dH(z){return Buffer.concat([tH(z.statement.string,z.parameters,z.statement.types,z.statement.name),Wz("S",z.statement.name)])}function v8(z){return Buffer.concat([Jz(z.parameters,z.statement.types,z.statement.name,z.cursorName),z.cursorFn?eH("",z.cursorRows):Aj])}function _K(z){return Buffer.concat([tH(z.statement.string,z.parameters,z.statement.types),Kj,v8(z)])}function NK(z){let q=[],W1=[],Z1=hG(z,z.strings[0],z.args[0],q,W1,$);!z.tagged&&z.args.forEach((n1)=>_X(n1,q,W1,$)),z.prepare=$.prepare&&("prepare"in z.options?z.options.prepare:!0),z.string=Z1,z.signature=z.prepare&&W1+Z1,z.onlyDescribe&&delete f[z.signature],z.parameters=z.parameters||q,z.prepared=z.prepare&&z.signature in f,z.describeFirst=z.onlyDescribe||q.length&&!z.prepared,z.statement=z.prepared?f[z.signature]:{string:Z1,types:W1,name:z.prepare?u+M++:""},typeof $.debug==="function"&&$.debug(p,Z1,q,W1)}function H0(z,q){if(h1=h1?Buffer.concat([h1,z]):Buffer.from(z),q||h1.length>=1024)return lH(q);return f1===null&&(f1=setImmediate(lH)),!0}function lH(z){let q=Z.write(h1,z);return f1!==null&&clearImmediate(f1),h1=f1=null,q}function qK(){O$(t1.connection("CONNECT_TIMEOUT",$,Z)),Z.destroy()}async function iH(){if(H0(Ej),!await new Promise((q)=>Z.once("data",(W1)=>q(W1[0]===83)))&&Q==="prefer")return Q6();Z.removeAllListeners(),Z=Vj.connect({socket:Z,servername:_E.isIP(Z.host)?void 0:Z.host,...Q==="require"||Q==="allow"||Q==="prefer"?{rejectUnauthorized:!1}:Q==="verify-full"?{}:typeof Q==="object"?Q:{}}),Z.on("secureConnect",Q6),Z.on("error",J6),Z.on("close",oH),Z.on("drain",nH)}function nH(){!l&&Y(U0)}function iX(z){if(T1){if(T1.push(z),i-=z.length,i>=0)return}R=T1?Buffer.concat(T1,w1-i):R.length===0?z:Buffer.concat([R,z],R.length+z.length);while(R.length>4){if(w1=R.readUInt32BE(1),w1>=R.length){i=w1-R.length,T1=[R];break}try{MK(R.subarray(0,w1+1))}catch(q){l&&(l.cursorFn||l.describeFirst)&&H0(A4),O$(q)}R=R.subarray(w1+1),i=0,T1=null}}async function rH(){if(w0=!1,v={},Z||(Z=await OK()),!Z)return;if(d.start(),$.socket)return Q?iH():Q6();if(Z.on("connect",Q?iH:Q6),$.path)return Z.connect($.path);Z.ssl=Q,Z.connect(B[H1],w[H1]),Z.host=w[H1],Z.port=B[H1],H1=(H1+1)%B.length}function sH(){setTimeout(rH,m?m+D1-NE.now():0)}function Q6(){try{f={},j=$.fetch_types,u=Math.random().toString(36).slice(2),M=1,S.start(),Z.on("data",iX),_&&Z.setKeepAlive&&Z.setKeepAlive(!0,1000*_);let z=Bz();H0(z)}catch(z){J6(z)}}function J6(z){if(U0.queue===X.connecting&&$.host[U1+1])return;O$(z);while(T.length)f8(T.shift(),z)}function O$(z){e1&&(e1.destroy(z),e1=null),l&&f8(l,z),B0&&(f8(B0,z),B0=null)}function f8(z,q){"query"in q||"parameters"in q||Object.defineProperties(q,{stack:{value:q.stack+z.origin.replace(/.*\n/,"\n"),enumerable:$.debug},query:{value:z.string,enumerable:$.debug},parameters:{value:z.parameters,enumerable:$.debug},args:{value:z.args,enumerable:$.debug},types:{value:z.statement&&z.statement.types,enumerable:$.debug}}),z.reject(q)}function nX(){return n$||(!U0.reserved&&G(U0),!U0.reserved&&!B0&&!l&&T.length===0?(K5(),new Promise((z)=>Z&&Z.readyState!=="closed"?Z.once("close",z):z())):n$=new Promise((z)=>Y$=z))}function K5(){if(w0=!0,e1||l||B0||T.length)J6(t1.connection("CONNECTION_DESTROYED",$));if(clearImmediate(f1),Z)Z.removeListener("data",iX),Z.removeListener("connect",Q6),Z.readyState==="open"&&Z.end(J1().X().end());Y$&&(Y$(),n$=Y$=null)}async function oH(z){if(R=Buffer.alloc(0),i=0,T1=null,clearImmediate(f1),Z.removeListener("data",iX),Z.removeListener("connect",Q6),x.cancel(),S.cancel(),d.cancel(),Z.removeAllListeners(),Z=null,B0)return sH();!z&&(l||T.length)&&J6(t1.connection("CONNECTION_CLOSED",$,Z)),m=NE.now(),z&&$.shared.retries++,D1=(typeof C==="function"?C($.shared.retries):C)*1000,H(U0,t1.connection("CONNECTION_CLOSED",$,Z))}function MK(z,q=z[0]){(q===68?ZK:q===100?tK:q===65?iK:q===83?PK:q===90?SK:q===67?IK:q===50?aH:q===49?CK:q===116?jK:q===84?TK:q===82?kK:q===110?bK:q===75?gK:q===69?dK:q===115?nK:q===51?rK:q===71?sK:q===78?$z:q===72?oK:q===99?eK:q===73?Xz:q===86?Yz:q===118?Gz:q===87?aK:Hz)(z)}function ZK(z){let q=7,W1,Z1,n1,V0=l.isRaw?new Array(l.statement.columns.length):{};for(let O0=0;O0<l.statement.columns.length;O0++)Z1=l.statement.columns[O0],W1=z.readInt32BE(q),q+=4,n1=W1===-1?null:l.isRaw===!0?z.subarray(q,q+=W1):Z1.parser===void 0?z.toString("utf8",q,q+=W1):Z1.parser.array===!0?Z1.parser(z.toString("utf8",q+1,q+=W1)):Z1.parser(z.toString("utf8",q,q+=W1)),l.isRaw?V0[O0]=l.isRaw===!0?n1:F.value.from?F.value.from(n1,Z1):n1:V0[Z1.name]=F.value.from?F.value.from(n1,Z1):n1;l.forEachFn?l.forEachFn(F.row.from?F.row.from(V0):V0,$1):$1[j1++]=F.row.from?F.row.from(V0):V0}function PK(z){let[q,W1]=z.toString("utf8",5,z.length-1).split(J1.N);if(v[q]=W1,$.parameters[q]!==W1)$.parameters[q]=W1,A&&A(q,W1)}function SK(z){if(l&&l.options.simple&&l.resolve(X$||$1),l=X$=null,$1=new a4,d.cancel(),B0){if(b){if(!v.in_hot_standby||!v.default_transaction_read_only)return cK();else if(pK(b,v))return K5()}if(j)return B0===!0&&(B0=null),mK();B0!==!0&&A5(B0),$.shared.retries=U1=0,B0=null;return}while(T.length&&(l=T.shift())&&(l.active=!0,l.cancelled))ZE($).cancel(l.state,l.cancelled.resolve,l.cancelled.reject);if(l)return;U0.reserved?!U0.reserved.release&&z[5]===73?n$?K5():(U0.reserved=null,Y(U0)):U0.reserved():n$?K5():Y(U0)}function IK(z){j1=0;for(let q=z.length-1;q>0;q--){if(z[q]===32&&z[q+1]<58&&$1.count===null)$1.count=+z.toString("utf8",q+1,z.length-1);if(z[q-1]>=65){$1.command=z.toString("utf8",5,q),$1.state=k;break}}if(E5&&(E5(),E5=null),$1.command==="BEGIN"&&J!==1&&!U0.reserved)return O$(t1.generic("UNSAFE_TRANSACTION","Only use sql.begin, sql.reserved or max: 1"));if(l.options.simple)return aH();if(l.cursorFn)$1.count&&l.cursorFn($1),H0(A4);l.resolve($1)}function CK(){l.parsing=!1}function aH(){!$1.statement&&($1.statement=l.statement),$1.columns=l.statement.columns}function jK(z){let q=z.readUInt16BE(5);for(let W1=0;W1<q;++W1)!l.statement.types[W1]&&(l.statement.types[W1]=z.readUInt32BE(7+W1*4));l.prepare&&(f[l.signature]=l.statement),l.describeFirst&&!l.onlyDescribe&&(H0(v8(l)),l.describeFirst=!1)}function TK(z){if($1.command)X$=X$||[$1],X$.push($1=new a4),$1.count=null,l.statement.columns=null;let q=z.readUInt16BE(5),W1=7,Z1;l.statement.columns=Array(q);for(let n1=0;n1<q;++n1){Z1=W1;while(z[W1++]!==0);let V0=z.readUInt32BE(W1),O0=z.readUInt16BE(W1+4),r$=z.readUInt32BE(W1+6);l.statement.columns[n1]={name:F.column.from?F.column.from(z.toString("utf8",Z1,W1-1)):z.toString("utf8",Z1,W1-1),parser:V[r$],table:V0,number:O0,type:r$},W1+=18}if($1.statement=l.statement,l.onlyDescribe)return l.resolve(l.statement),H0(A4)}async function kK(z,q=z.readUInt32BE(5)){(q===3?xK:q===5?vK:q===10?fK:q===11?hK:q===12?yK:q!==0?Qz:c6)(z,q)}async function xK(){let z=await rX();H0(J1().p().str(z).z(1).end())}async function vK(z){let q="md5"+await ME(Buffer.concat([Buffer.from(await ME(await rX()+W)),z.subarray(9)]));H0(J1().p().str(q).z(1).end())}async function fK(){L$=(await W8.randomBytes(18)).toString("base64"),J1().p().str("SCRAM-SHA-256"+J1.N);let z=J1.i;H0(J1.inc(4).str("n,,n=*,r="+L$).i32(J1.i-z-4,z).end())}async function hK(z){let q=z.toString("utf8",9).split(",").reduce((O0,r$)=>(O0[r$[0]]=r$.slice(2),O0),{}),W1=await W8.pbkdf2Sync(await rX(),Buffer.from(q.s,"base64"),parseInt(q.i),32,"sha256"),Z1=await MX(W1,"Client Key"),n1="n=*,r="+L$+",r="+q.r+",s="+q.s+",i="+q.i+",c=biws,r="+q.r;u1=(await MX(await MX(W1,"Server Key"),n1)).toString("base64");let V0="c=biws,r="+q.r+",p="+Rj(Z1,Buffer.from(await MX(await Oj(Z1),n1))).toString("base64");H0(J1().p().str(V0).end())}function yK(z){if(z.toString("utf8",9).split(J1.N,1)[0].slice(2)===u1)return;O$(t1.generic("SASL_SIGNATURE_MISMATCH","The server did not return the correct signature")),Z.destroy()}function rX(){return Promise.resolve(typeof $.pass==="function"?$.pass():$.pass)}function bK(){if($1.statement=l.statement,$1.statement.columns=[],l.onlyDescribe)return l.resolve(l.statement),H0(A4)}function gK(z){k.pid=z.readUInt32BE(5),k.secret=z.readUInt32BE(9)}async function mK(){j=!1,(await new t0([`
      select b.oid, b.typarray
      from pg_catalog.pg_type a
      left join pg_catalog.pg_type b on b.oid = a.typelem
      where a.typcategory = 'A'
      group by b.oid, b.typarray
      order by b.oid
    `],[],A5)).forEach(({oid:q,typarray:W1})=>uK(q,W1))}function uK(z,q){if(!!$.parsers[q]&&!!$.serializers[q])return;let W1=$.parsers[z];$.shared.typeArrayMap[z]=q,$.parsers[q]=(Z1)=>RE(Z1,W1,q),$.parsers[q].array=!0,$.serializers[q]=(Z1)=>OE(Z1,$.serializers[z],$,q)}function pK(z,q){return z==="read-write"&&q.default_transaction_read_only==="on"||z==="read-only"&&q.default_transaction_read_only==="off"||z==="primary"&&q.in_hot_standby==="on"||z==="standby"&&q.in_hot_standby==="off"||z==="prefer-standby"&&q.in_hot_standby==="off"&&$.host[U1]}function cK(){let z=new t0([`
      show transaction_read_only;
      select pg_catalog.pg_is_in_recovery()
    `],[],A5,null,{simple:!0});z.resolve=([[q],[W1]])=>{v.default_transaction_read_only=q.transaction_read_only,v.in_hot_standby=W1.pg_is_in_recovery?"on":"off"},z.execute()}function dK(z){l&&(l.cursorFn||l.describeFirst)&&H0(A4);let q=t1.postgres(dG(z));l&&l.retried?O$(l.retried):l&&l.prepared&&zj.has(q.routine)?lK(l,q):O$(q)}function lK(z,q){delete f[z.signature],z.retried=q,A5(z)}function iK(z){if(!K)return;let q=9;while(z[q++]!==0);K(z.toString("utf8",9,q-1),z.toString("utf8",q,z.length-1))}async function nK(){try{let z=await Promise.resolve(l.cursorFn($1));j1=0,z===u6?H0(wz(l.portal)):($1=new a4,H0(eH("",l.cursorRows)))}catch(z){H0(A4),l.reject(z)}}function rK(){$1.count&&l.cursorFn($1),l.resolve($1)}function sK(){e1=new cG.Writable({autoDestroy:!0,write(z,q,W1){Z.write(J1().d().raw(z).end(),W1)},destroy(z,q){q(z),Z.write(J1().f().str(z+J1.N).end()),e1=null},final(z){Z.write(J1().c().end()),E5=z}}),l.resolve(e1)}function oK(){e1=new cG.Readable({read(){Z.resume()}}),l.resolve(e1)}function aK(){e1=new cG.Duplex({autoDestroy:!0,read(){Z.resume()},write(z,q,W1){Z.write(J1().d().raw(z).end(),W1)},destroy(z,q){q(z),Z.write(J1().f().str(z+J1.N).end()),e1=null},final(z){Z.write(J1().c().end()),E5=z}}),l.resolve(e1)}function tK(z){e1&&(e1.push(z.subarray(5))||Z.pause())}function eK(){e1&&e1.push(null),e1=null}function $z(z){E?E(dG(z)):console.log(dG(z))}function Xz(){}function Yz(){O$(t1.notSupported("FunctionCallResponse"))}function Gz(){O$(t1.notSupported("NegotiateProtocolVersion"))}function Hz(z){console.error("Postgres.js : Unknown Message:",z[0])}function Qz(z,q){console.error("Postgres.js : Unknown Auth:",q)}function Jz(z,q,W1="",Z1=""){let n1,V0;return J1().B().str(Z1+J1.N).str(W1+J1.N).i16(0).i16(z.length),z.forEach((O0,r$)=>{if(O0===null)return J1.i32(4294967295);V0=q[r$],z[r$]=O0=V0 in $.serializers?$.serializers[V0](O0):""+O0,n1=J1.i,J1.inc(4).str(O0).i32(J1.i-n1-4,n1)}),J1.i16(0),J1.end()}function tH(z,q,W1,Z1=""){return J1().P().str(Z1+J1.N).str(z+J1.N).i16(q.length),q.forEach((n1,V0)=>J1.i32(W1[V0]||0)),J1.end()}function Wz(z,q=""){return J1().D().str(z).str(q+J1.N).end()}function eH(z="",q=0){return Buffer.concat([J1().E().str(z+J1.N).i32(q).end(),qE])}function wz(z=""){return Buffer.concat([J1().C().str("P").str(z+J1.N).end(),J1().S().end()])}function Bz(){return s||J1().inc(4).i16(3).z(2).str(Object.entries(Object.assign({user:W,database:U,client_encoding:"UTF8"},$.connection)).filter(([,z])=>z).map(([z,q])=>z+J1.N+q).join(J1.N)).z(2).end(0)}}function dG($){let X={},Y=5;for(let G=5;G<$.length-1;G++)if($[G]===0)X[Lj[$[Y]]]=$.toString("utf8",Y+1,G),Y=G+1;return X}function ME($){return W8.createHash("md5").update($).digest("hex")}function MX($,X){return W8.createHmac("sha256",$).update(X).digest()}function Oj($){return W8.createHash("sha256").update($).digest()}function Rj($,X){let Y=Math.max($.length,X.length),G=Buffer.allocUnsafe(Y);for(let H=0;H<Y;H++)G[H]=$[H]^X[H];return G}function lG($,X){if(X=typeof X==="function"?X():X,!X)return{cancel:c6,start:c6};let Y;return{cancel(){Y&&(clearTimeout(Y),Y=null)},start(){Y&&clearTimeout(Y),Y=setTimeout(G,X*1000,arguments)}};function G(H){$.apply(null,H),Y=null}}var PE=()=>{};function nG($,X){let Y=new Map,G="postgresjs_"+Math.random().toString(36).slice(2),H={},Q,J,W=!1,w=V.sql=$({...X,transform:{column:{},value:{},row:{}},max:1,fetch_types:!1,idle_timeout:null,max_lifetime:null,connection:{...X.connection,replication:"database"},onclose:async function(){if(W)return;J=null,H.pid=H.secret=void 0,F(await E(w,G,X.publications)),Y.forEach((A)=>A.forEach(({onsubscribe:P})=>P()))},no_subscribe:!0}),B=w.end,U=w.close;return w.end=async()=>{return W=!0,J&&await new Promise((A)=>(J.once("close",A),J.end())),B()},w.close=async()=>{return J&&await new Promise((A)=>(J.once("close",A),J.end())),U()},V;async function V(A,P,_=PE,C=PE){if(A=Nj(A),!Q)Q=E(w,G,X.publications);let b={fn:P,onsubscribe:_},T=Y.has(A)?Y.get(A).add(b):Y.set(A,new Set([b])).get(A),p=()=>{T.delete(b),T.size===0&&Y.delete(A)};return Q.then((k)=>{return F(k),_(),J&&J.on("error",C),{unsubscribe:p,state:H,sql:w}})}function F(A){J=A.stream,H.pid=A.state.pid,H.secret=A.state.secret}async function E(A,P,_){if(!_)throw new Error("Missing publication names");let C=await A.unsafe(`CREATE_REPLICATION_SLOT ${P} TEMPORARY LOGICAL pgoutput NOEXPORT_SNAPSHOT`),[b]=C,T=await A.unsafe(`START_REPLICATION SLOT ${P} LOGICAL ${b.consistent_point} (proto_version '1', publication_names '${_}')`).writable(),p={lsn:Buffer.concat(b.consistent_point.split("/").map((Z)=>Buffer.from(("00000000"+Z).slice(-8),"hex")))};return T.on("data",x),T.on("error",k),T.on("close",A.close),{stream:T,state:C.state};function k(Z){console.error("Unexpected error during logical streaming - reconnecting",Z)}function x(Z){if(Z[0]===119)_j(Z.subarray(25),p,A.options.parsers,S,X.transform);else if(Z[0]===107&&Z[17])p.lsn=Z.subarray(1,9),d()}function S(Z,s){let $1=s.relation.schema+"."+s.relation.table;K("*",Z,s),K("*:"+$1,Z,s),s.relation.keys.length&&K("*:"+$1+"="+s.relation.keys.map((R)=>Z[R.name]),Z,s),K(s.command,Z,s),K(s.command+":"+$1,Z,s),s.relation.keys.length&&K(s.command+":"+$1+"="+s.relation.keys.map((R)=>Z[R.name]),Z,s)}function d(){let Z=Buffer.alloc(34);Z[0]="r".charCodeAt(0),Z.fill(p.lsn,1),Z.writeBigInt64BE(BigInt(Date.now()-Date.UTC(2000,0,1))*BigInt(1000),25),T.write(Z)}}function K(A,P,_){Y.has(A)&&Y.get(A).forEach(({fn:C})=>C(P,_,A))}}function Dj($){return new Date(Date.UTC(2000,0,1)+Number($/BigInt(1000)))}function _j($,X,Y,G,H){let Q=(J,[W,w])=>(J[W.charCodeAt(0)]=w,J);Object.entries({R:(J)=>{let W=1,w=X[J.readUInt32BE(W)]={schema:J.toString("utf8",W+=4,W=J.indexOf(0,W))||"pg_catalog",table:J.toString("utf8",W+1,W=J.indexOf(0,W+1)),columns:Array(J.readUInt16BE(W+=2)),keys:[]};W+=2;let B=0,U;while(W<J.length)U=w.columns[B++]={key:J[W++],name:H.column.from?H.column.from(J.toString("utf8",W,W=J.indexOf(0,W))):J.toString("utf8",W,W=J.indexOf(0,W)),type:J.readUInt32BE(W+=1),parser:Y[J.readUInt32BE(W)],atttypmod:J.readUInt32BE(W+=4)},U.key&&w.keys.push(U),W+=4},Y:()=>{},O:()=>{},B:(J)=>{X.date=Dj(J.readBigInt64BE(9)),X.lsn=J.subarray(1,9)},I:(J)=>{let W=1,w=X[J.readUInt32BE(W)],{row:B}=ZX(J,w.columns,W+=7,H);G(B,{command:"insert",relation:w})},D:(J)=>{let W=1,w=X[J.readUInt32BE(W)];W+=4;let B=J[W]===75;G(B||J[W]===79?ZX(J,w.columns,W+=3,H).row:null,{command:"delete",relation:w,key:B})},U:(J)=>{let W=1,w=X[J.readUInt32BE(W)];W+=4;let B=J[W]===75,U=B||J[W]===79?ZX(J,w.columns,W+=3,H):null;U&&(W=U.i);let{row:V}=ZX(J,w.columns,W+3,H);G(V,{command:"update",relation:w,key:B,old:U&&U.row})},T:()=>{},C:()=>{}}).reduce(Q,{})[$[0]]($)}function ZX($,X,Y,G){let H,Q,J,W=G.raw?new Array(X.length):{};for(let w=0;w<X.length;w++)H=$[Y++],Q=X[w],J=H===110?null:H===117?void 0:Q.parser===void 0?$.toString("utf8",Y+4,Y+=4+$.readUInt32BE(Y)):Q.parser.array===!0?Q.parser($.toString("utf8",Y+5,Y+=4+$.readUInt32BE(Y))):Q.parser($.toString("utf8",Y+4,Y+=4+$.readUInt32BE(Y))),G.raw?W[w]=G.raw===!0?J:G.value.from?G.value.from(J,Q):J:W[Q.name]=G.value.from?G.value.from(J,Q):J;return{i:Y,row:G.row.from?G.row.from(W):W}}function Nj($){let X=$.match(/^(\*|insert|update|delete)?:?([^.]+?\.?[^=]+)?=?(.+)?/i)||[];if(!X)throw new Error("Malformed subscribe pattern: "+$);let[,Y,G,H]=X;return(Y||"*")+(G?":"+(G.indexOf(".")===-1?"public."+G:G):"")+(H?"="+H:"")}import SE from"stream";function rG($,X,Y=393216){return new Promise(async(G,H)=>{await $.begin(async(Q)=>{let J;!X&&([{oid:X}]=await Q`select lo_creat(-1) as oid`);let[{fd:W}]=await Q`select lo_open(${X}, ${Y}) as fd`,w={writable:U,readable:B,close:()=>Q`select lo_close(${W})`.then(J),tell:()=>Q`select lo_tell64(${W})`,read:(V)=>Q`select loread(${W}, ${V}) as data`,write:(V)=>Q`select lowrite(${W}, ${V})`,truncate:(V)=>Q`select lo_truncate64(${W}, ${V})`,seek:(V,F=0)=>Q`select lo_lseek64(${W}, ${V}, ${F})`,size:()=>Q`
          select
            lo_lseek64(${W}, location, 0) as position,
            seek.size
          from (
            select
              lo_lseek64($1, 0, 2) as size,
              tell.location
            from (select lo_tell64($1) as location) tell
          ) seek
        `};return G(w),new Promise(async(V)=>J=V);async function B({highWaterMark:V=16384,start:F=0,end:E=1/0}={}){let K=E-F;return F&&await w.seek(F),new SE.Readable({highWaterMark:V,async read(A){let P=A>K?A-K:A;K-=A;let[{data:_}]=await w.read(P);if(this.push(_),_.length<A)this.push(null)}})}async function U({highWaterMark:V=16384,start:F=0}={}){return F&&await w.seek(F),new SE.Writable({highWaterMark:V,write(E,K,A){w.write(E).then(()=>A(),A)}})}}).catch(H)})}Object.assign(PX,{PostgresError:p6,toPascal:s4,pascal:uG,toCamel:r4,camel:mG,toKebab:o4,kebab:pG,fromPascal:H8,fromCamel:G8,fromKebab:Q8,BigInt:{to:20,from:[20],parse:($)=>BigInt($),serialize:($)=>$.toString()}});var d6=PX;function PX($,X){let Y=Zj($,X),G=Y.no_subscribe||nG(PX,{...Y}),H=!1,Q=u0(),J=u0(),W=u0(),w=u0(),B=u0(),U=u0(),V=u0(),F=u0(),E={connecting:J,reserved:W,closed:w,ended:B,open:U,busy:V,full:F},K=[...Array(Y.max)].map(()=>iG(Y,E,{onopen:f,onend:v,onclose:u})),A=P(S);return Object.assign(A,{get parameters(){return Y.parameters},largeObject:rG.bind(null,A),subscribe:G,CLOSE:u6,END:u6,PostgresError:p6,options:Y,reserve:b,listen:_,begin:T,close:$1,end:s}),A;function P(M){return M.debug=Y.debug,Object.entries(Y.types).reduce((w1,[D1,j1])=>{return w1[D1]=(u1)=>new C$(u1,j1.to),w1},m),Object.assign(i,{types:m,typed:m,unsafe:H1,notify:C,array:x,json:k,file:U1}),i;function m(w1,D1){return new C$(w1,D1)}function i(w1,...D1){return w1&&Array.isArray(w1.raw)?new t0(w1,D1,M,Z):typeof w1==="string"&&!D1.length?new J8(Y.transform.column.to?Y.transform.column.to(w1):w1):new DX(w1,D1)}function H1(w1,D1=[],j1={}){return arguments.length===2&&!Array.isArray(D1)&&(j1=D1,D1=[]),new t0([w1],D1,M,Z,{prepare:!1,...j1,simple:"simple"in j1?j1.simple:D1.length===0})}function U1(w1,D1=[],j1={}){return arguments.length===2&&!Array.isArray(D1)&&(j1=D1,D1=[]),new t0([],D1,(f1)=>{Mj.readFile(w1,"utf8",(w0,T1)=>{if(w0)return f1.reject(w0);f1.strings=[T1],M(f1)})},Z,{...j1,simple:"simple"in j1?j1.simple:D1.length===0})}}async function _(M,m,i){let H1={fn:m,onlisten:i},U1=_.sql||(_.sql=PX({...Y,max:1,idle_timeout:null,max_lifetime:null,fetch_types:!1,onclose(){Object.entries(_.channels).forEach(([f1,{listeners:w0}])=>{delete _.channels[f1],Promise.all(w0.map((T1)=>_(f1,T1.fn,T1.onlisten).catch(()=>{})))})},onnotify(f1,w0){f1 in _.channels&&_.channels[f1].listeners.forEach((T1)=>T1.fn(w0))}})),w1=_.channels||(_.channels={});if(M in w1){w1[M].listeners.push(H1);let f1=await w1[M].result;return H1.onlisten&&H1.onlisten(),{state:f1.state,unlisten:u1}}w1[M]={result:U1`listen ${U1.unsafe('"'+M.replace(/"/g,'""')+'"')}`,listeners:[H1]};let j1=await w1[M].result;return H1.onlisten&&H1.onlisten(),{state:j1.state,unlisten:u1};async function u1(){if(M in w1===!1)return;if(w1[M].listeners=w1[M].listeners.filter((f1)=>f1!==H1),w1[M].listeners.length)return;return delete w1[M],U1`unlisten ${U1.unsafe('"'+M.replace(/"/g,'""')+'"')}`}}async function C(M,m){return await A`select pg_notify(${M}, ${""+m})`}async function b(){let M=u0(),m=U.length?U.shift():await new Promise((U1)=>{Q.push({reserve:U1}),w.length&&j(w.shift())});p(m,W),m.reserved=()=>M.length?m.execute(M.shift()):p(m,W),m.reserved.release=!0;let i=P(H1);return i.release=()=>{m.reserved=null,f(m)},i;function H1(U1){m.queue===F?M.push(U1):m.execute(U1)||p(m,F)}}async function T(M,m){!m&&(m=M,M="");let i=u0(),H1=0,U1,w1=null;try{return await A.unsafe("begin "+M.replace(/[^a-z ]/ig,""),[],{onexecute:j1}).execute(),await Promise.race([D1(U1,m),new Promise((u1,f1)=>U1.onclose=f1)])}catch(u1){throw u1}async function D1(u1,f1,w0){let T1=P(e1);T1.savepoint=n$,T1.prepare=(h1)=>w1=h1.replace(/[^a-z0-9$-_. ]/gi);let X$,B0;w0&&await T1`savepoint ${T1(w0)}`;try{if(B0=await new Promise((h1,Y$)=>{let L$=f1(T1);Promise.resolve(Array.isArray(L$)?Promise.all(L$):L$).then(h1,Y$)}),X$)throw X$}catch(h1){throw await(w0?T1`rollback to ${T1(w0)}`:T1`rollback`),h1 instanceof p6&&h1.code==="25P02"&&X$||h1}if(!w0)w1?await T1`prepare transaction '${T1.unsafe(w1)}'`:await T1`commit`;return B0;function n$(h1,Y$){if(h1&&Array.isArray(h1.raw))return n$((L$)=>L$.apply(L$,arguments));return arguments.length===1&&(Y$=h1,h1=null),D1(u1,Y$,"s"+H1+++(h1?"_"+h1:""))}function e1(h1){h1.catch((Y$)=>X$||(X$=Y$)),u1.queue===F?i.push(h1):u1.execute(h1)||p(u1,F)}}function j1(u1){U1=u1,p(u1,W),u1.reserved=()=>i.length?u1.execute(i.shift()):p(u1,W)}}function p(M,m){return M.queue.remove(M),m.push(M),M.queue=m,m===U?M.idleTimer.start():M.idleTimer.cancel(),M}function k(M){return new C$(M,3802)}function x(M,m){if(!Array.isArray(M))return x(Array.from(arguments));return new C$(M,m||(M.length?OX(M)||25:0),Y.shared.typeArrayMap)}function S(M){if(H)return M.reject(t1.connection("CONNECTION_ENDED",Y,Y));if(U.length)return d(U.shift(),M);if(w.length)return j(w.shift(),M);V.length?d(V.shift(),M):Q.push(M)}function d(M,m){return M.execute(m)?p(M,V):p(M,F)}function Z(M){return new Promise((m,i)=>{M.state?M.active?iG(Y).cancel(M.state,m,i):M.cancelled={resolve:m,reject:i}:(Q.remove(M),M.cancelled=!0,M.reject(t1.generic("57014","canceling statement due to user request")),m())})}async function s({timeout:M=null}={}){if(H)return H;await 1;let m;return H=Promise.race([new Promise((i)=>M!==null&&(m=setTimeout(R,M*1000,i))),Promise.all(K.map((i)=>i.end()).concat(_.sql?_.sql.end({timeout:0}):[],G.sql?G.sql.end({timeout:0}):[]))]).then(()=>clearTimeout(m))}async function $1(){await Promise.all(K.map((M)=>M.end()))}async function R(M){await Promise.all(K.map((m)=>m.terminate()));while(Q.length)Q.shift().reject(t1.connection("CONNECTION_DESTROYED",Y));M()}function j(M,m){return p(M,J),M.connect(m),M}function v(M){p(M,B)}function f(M){if(Q.length===0)return p(M,U);let m=Math.ceil(Q.length/(J.length+1)),i=!0;while(i&&Q.length&&m-- >0){let H1=Q.shift();if(H1.reserve)return H1.reserve(M);i=M.execute(H1)}i?p(M,V):p(M,F)}function u(M,m){p(M,w),M.reserved=null,M.onclose&&(M.onclose(m),M.onclose=null),Y.onclose&&Y.onclose(M.id),Q.length&&j(M,Q.shift())}}function Zj($,X){if($&&$.shared)return $;let Y=process.env,G=(!$||typeof $==="string"?X:$)||{},{url:H,multihost:Q}=jj($),J=[...H.searchParams].reduce((F,[E,K])=>(F[E]=K,F),{}),W=G.hostname||G.host||Q||H.hostname||Y.PGHOST||"localhost",w=G.port||H.port||Y.PGPORT||5432,B=G.user||G.username||H.username||Y.PGUSERNAME||Y.PGUSER||Tj();G.no_prepare&&(G.prepare=!1),J.sslmode&&(J.ssl=J.sslmode,delete J.sslmode),"timeout"in G&&(console.log("The timeout option is deprecated, use idle_timeout instead"),G.idle_timeout=G.timeout),J.sslrootcert==="system"&&(J.ssl="verify-full");let U=["idle_timeout","connect_timeout","max_lifetime","max_pipeline","backoff","keep_alive"],V={max:10,ssl:!1,idle_timeout:null,connect_timeout:30,max_lifetime:Ij,max_pipeline:100,backoff:Sj,keep_alive:60,prepare:!0,debug:!1,fetch_types:!0,publications:"alltables",target_session_attrs:null};return{host:Array.isArray(W)?W:W.split(",").map((F)=>F.split(":")[0]),port:Array.isArray(w)?w:W.split(",").map((F)=>parseInt(F.split(":")[1]||w)),path:G.path||W.indexOf("/")>-1&&W+"/.s.PGSQL."+w,database:G.database||G.db||(H.pathname||"").slice(1)||Y.PGDATABASE||B,user:B,pass:G.pass||G.password||H.password||Y.PGPASSWORD||"",...Object.entries(V).reduce((F,[E,K])=>{let A=E in G?G[E]:(E in J)?J[E]==="disable"||J[E]==="false"?!1:J[E]:Y["PG"+E.toUpperCase()]||K;return F[E]=typeof A==="string"&&U.includes(E)?+A:A,F},{}),connection:{application_name:"postgres.js",...G.connection,...Object.entries(J).reduce((F,[E,K])=>((E in V)||(F[E]=K),F),{})},types:G.types||{},target_session_attrs:Pj(G,H,Y),onnotice:G.onnotice,onnotify:G.onnotify,onclose:G.onclose,onparameter:G.onparameter,socket:G.socket,transform:Cj(G.transform||{undefined:void 0}),parameters:{},shared:{retries:0,typeArrayMap:{}},...zE(G.types)}}function Pj($,X,Y){let G=$.target_session_attrs||X.searchParams.get("target_session_attrs")||Y.PGTARGETSESSIONATTRS;if(!G||["read-write","read-only","primary","standby","prefer-standby"].includes(G))return G;throw new Error("target_session_attrs "+G+" is not supported")}function Sj($){return(0.5+Math.random()/2)*Math.min(3**$/100,20)}function Ij(){return 60*(30+Math.random()*30)}function Cj($){return{undefined:$.undefined,column:{from:typeof $.column==="function"?$.column:$.column&&$.column.from,to:$.column&&$.column.to},value:{from:typeof $.value==="function"?$.value:$.value&&$.value.from,to:$.value&&$.value.to},row:{from:typeof $.row==="function"?$.row:$.row&&$.row.from,to:$.row&&$.row.to}}}function jj($){if(!$||typeof $!=="string")return{url:{searchParams:new Map}};let X=$;X=X.slice(X.indexOf("://")+3).split(/[?/]/)[0],X=decodeURIComponent(X.slice(X.indexOf("@")+1));let Y=new URL($.replace(X,X.split(",")[0]));return{url:{username:decodeURIComponent(Y.username),password:decodeURIComponent(Y.password),host:Y.host,hostname:Y.hostname,port:Y.port,pathname:Y.pathname,searchParams:Y.searchParams},multihost:X.indexOf(",")>-1&&X}}function Tj(){try{return qj.userInfo().username}catch($){return process.env.USERNAME||"a4arpon"}}var h=Symbol.for("drizzle:entityKind"),Jc=Symbol.for("drizzle:hasOwnEntityKind");function y($,X){if(!$||typeof $!=="object")return!1;if($ instanceof X)return!0;if(!Object.prototype.hasOwnProperty.call(X,h))throw new Error(`Class "${X.name??"<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);let Y=Object.getPrototypeOf($).constructor;if(Y)while(Y){if(h in Y&&Y[h]===X[h])return!0;Y=Object.getPrototypeOf(Y)}return!1}class IE{static[h]="ConsoleLogWriter";write($){console.log($)}}class sG{static[h]="DefaultLogger";writer;constructor($){this.writer=$?.writer??new IE}logQuery($,X){let Y=X.map((H)=>{try{return JSON.stringify(H)}catch{return String(H)}}),G=Y.length?` -- params: [${Y.join(", ")}]`:"";this.writer.write(`Query: ${$}${G}`)}}class oG{static[h]="NoopLogger";logQuery(){}}class M0{static[h]="QueryPromise";[Symbol.toStringTag]="QueryPromise";catch($){return this.then(void 0,$)}finally($){return this.then((X)=>{return $?.(),X},(X)=>{throw $?.(),X})}then($,X){return this.execute().then($,X)}}var K4=Symbol.for("drizzle:Name");var SX=Symbol.for("drizzle:Schema"),CE=Symbol.for("drizzle:Columns"),jE=Symbol.for("drizzle:ExtraConfigColumns"),aG=Symbol.for("drizzle:OriginalName"),tG=Symbol.for("drizzle:BaseName"),TE=Symbol.for("drizzle:IsAlias"),kE=Symbol.for("drizzle:ExtraConfigBuilder"),kj=Symbol.for("drizzle:IsDrizzleTable");class X1{static[h]="Table";static Symbol={Name:K4,Schema:SX,OriginalName:aG,Columns:CE,ExtraConfigColumns:jE,BaseName:tG,IsAlias:TE,ExtraConfigBuilder:kE};[K4];[aG];[SX];[CE];[jE];[tG];[TE]=!1;[kj]=!0;[kE]=void 0;constructor($,X,Y){this[K4]=this[aG]=$,this[SX]=X,this[tG]=Y}}function z4($){return $[K4]}function t4($){return`${$[SX]??"public"}.${$[K4]}`}function xE($,...X){return $(...X)}var vE="0.36.0";var eG,$H,C1={startActiveSpan($,X){if(!eG)return X();if(!$H)$H=eG.trace.getTracer("drizzle-orm",vE);return xE((Y,G)=>G.startActiveSpan($,(H)=>{try{return X(H)}catch(Q){throw H.setStatus({code:Y.SpanStatusCode.ERROR,message:Q instanceof Error?Q.message:"Unknown error"}),Q}finally{H.end()}}),eG,$H)}};class v1{constructor($,X){this.table=$,this.config=X,this.name=X.name,this.keyAsName=X.keyAsName,this.notNull=X.notNull,this.default=X.default,this.defaultFn=X.defaultFn,this.onUpdateFn=X.onUpdateFn,this.hasDefault=X.hasDefault,this.primary=X.primaryKey,this.isUnique=X.isUnique,this.uniqueName=X.uniqueName,this.uniqueType=X.uniqueType,this.dataType=X.dataType,this.columnType=X.columnType,this.generated=X.generated,this.generatedIdentity=X.generatedIdentity}static[h]="Column";name;keyAsName;primary;notNull;default;defaultFn;onUpdateFn;hasDefault;isUnique;uniqueName;uniqueType;dataType;columnType;enumValues=void 0;generated=void 0;generatedIdentity=void 0;config;mapFromDriverValue($){return $}mapToDriverValue($){return $}shouldDisableInsert(){return this.config.generated!==void 0&&this.config.generated.type!=="byDefault"}}function fE($,X){return`${$[K4]}_${X.join("_")}_unique`}class m1 extends v1{constructor($,X){if(!X.uniqueName)X.uniqueName=fE($,[X.name]);super($,X);this.table=$}static[h]="PgColumn"}class xj extends m1{static[h]="ExtraConfigColumn";getSQLType(){return this.getSQLType()}indexConfig={order:this.config.order??"asc",nulls:this.config.nulls??"last",opClass:this.config.opClass};defaultConfig={order:"asc",nulls:"last",opClass:void 0};asc(){return this.indexConfig.order="asc",this}desc(){return this.indexConfig.order="desc",this}nullsFirst(){return this.indexConfig.nulls="first",this}nullsLast(){return this.indexConfig.nulls="last",this}op($){return this.indexConfig.opClass=$,this}}var hE=Symbol.for("drizzle:isPgEnum");function yE($){return!!$&&typeof $==="function"&&hE in $&&$[hE]===!0}class vj extends m1{static[h]="PgEnumColumn";enum=this.config.enum;enumValues=this.config.enum.enumValues;constructor($,X){super($,X);this.enum=X.enum}getSQLType(){return this.enum.enumName}}class W0{static[h]="Subquery";constructor($,X,Y,G=!1){this._={brand:"Subquery",sql:$,selectedFields:X,alias:Y,isWith:G}}}class w8 extends W0{static[h]="WithSubquery"}var l1=Symbol.for("drizzle:ViewBaseConfig");function XH($){return $!==null&&$!==void 0&&typeof $.getSQL==="function"}function fj($){let X={sql:"",params:[]};for(let Y of $)if(X.sql+=Y.sql,X.params.push(...Y.params),Y.typings?.length){if(!X.typings)X.typings=[];X.typings.push(...Y.typings)}return X}class X0{static[h]="StringChunk";value;constructor($){this.value=Array.isArray($)?$:[$]}getSQL(){return new G1([this])}}class G1{constructor($){this.queryChunks=$}static[h]="SQL";decoder=gE;shouldInlineParams=!1;append($){return this.queryChunks.push(...$.queryChunks),this}toQuery($){return C1.startActiveSpan("drizzle.buildSQL",(X)=>{let Y=this.buildQueryFromSourceParams(this.queryChunks,$);return X?.setAttributes({"drizzle.query.text":Y.sql,"drizzle.query.params":JSON.stringify(Y.params)}),Y})}buildQueryFromSourceParams($,X){let Y=Object.assign({},X,{inlineParams:X.inlineParams||this.shouldInlineParams,paramStartIndex:X.paramStartIndex||{value:0}}),{casing:G,escapeName:H,escapeParam:Q,prepareTyping:J,inlineParams:W,paramStartIndex:w}=Y;return fj($.map((B)=>{if(y(B,X0))return{sql:B.value.join(""),params:[]};if(y(B,CX))return{sql:H(B.value),params:[]};if(B===void 0)return{sql:"",params:[]};if(Array.isArray(B)){let U=[new X0("(")];for(let[V,F]of B.entries())if(U.push(F),V<B.length-1)U.push(new X0(", "));return U.push(new X0(")")),this.buildQueryFromSourceParams(U,Y)}if(y(B,G1))return this.buildQueryFromSourceParams(B.queryChunks,{...Y,inlineParams:W||B.shouldInlineParams});if(y(B,X1)){let U=B[X1.Symbol.Schema],V=B[X1.Symbol.Name];return{sql:U===void 0?H(V):H(U)+"."+H(V),params:[]}}if(y(B,v1)){let U=G.getColumnCasing(B);if(X.invokeSource==="indexes")return{sql:H(U),params:[]};return{sql:H(B.table[X1.Symbol.Name])+"."+H(U),params:[]}}if(y(B,T0)){let U=B[l1].schema,V=B[l1].name;return{sql:U===void 0?H(V):H(U)+"."+H(V),params:[]}}if(y(B,p0)){if(y(B.value,L4))return{sql:Q(w.value++,B),params:[B],typings:["none"]};let U=B.value===null?null:B.encoder.mapToDriverValue(B.value);if(y(U,G1))return this.buildQueryFromSourceParams([U],Y);if(W)return{sql:this.mapInlineParam(U,Y),params:[]};let V=["none"];if(J)V=[J(B.encoder)];return{sql:Q(w.value++,U),params:[U],typings:V}}if(y(B,L4))return{sql:Q(w.value++,B),params:[B],typings:["none"]};if(y(B,G1.Aliased)&&B.fieldAlias!==void 0)return{sql:H(B.fieldAlias),params:[]};if(y(B,W0)){if(B._.isWith)return{sql:H(B._.alias),params:[]};return this.buildQueryFromSourceParams([new X0("("),B._.sql,new X0(") "),new CX(B._.alias)],Y)}if(yE(B)){if(B.schema)return{sql:H(B.schema)+"."+H(B.enumName),params:[]};return{sql:H(B.enumName),params:[]}}if(XH(B)){if(B.shouldOmitSQLParens?.())return this.buildQueryFromSourceParams([B.getSQL()],Y);return this.buildQueryFromSourceParams([new X0("("),B.getSQL(),new X0(")")],Y)}if(W)return{sql:this.mapInlineParam(B,Y),params:[]};return{sql:Q(w.value++,B),params:[B],typings:["none"]}}))}mapInlineParam($,{escapeString:X}){if($===null)return"null";if(typeof $==="number"||typeof $==="boolean")return $.toString();if(typeof $==="string")return X($);if(typeof $==="object"){let Y=$.toString();if(Y==="[object Object]")return X(JSON.stringify($));return X(Y)}throw new Error("Unexpected param value: "+$)}getSQL(){return this}as($){if($===void 0)return this;return new G1.Aliased(this,$)}mapWith($){return this.decoder=typeof $==="function"?{mapFromDriverValue:$}:$,this}inlineParams(){return this.shouldInlineParams=!0,this}if($){return $?this:void 0}}class CX{constructor($){this.value=$}static[h]="Name";brand;getSQL(){return new G1([this])}}function bE($){return typeof $==="object"&&$!==null&&"mapToDriverValue"in $&&typeof $.mapToDriverValue==="function"}var gE={mapFromDriverValue:($)=>$},mE={mapToDriverValue:($)=>$},pc={...gE,...mE};class p0{constructor($,X=mE){this.value=$,this.encoder=X}static[h]="Param";brand;getSQL(){return new G1([this])}}function O($,...X){let Y=[];if(X.length>0||$.length>0&&$[0]!=="")Y.push(new X0($[0]));for(let[G,H]of X.entries())Y.push(H,new X0($[G+1]));return new G1(Y)}(($)=>{function X(){return new G1([])}$.empty=X;function Y(w){return new G1(w)}$.fromList=Y;function G(w){return new G1([new X0(w)])}$.raw=G;function H(w,B){let U=[];for(let[V,F]of w.entries()){if(V>0&&B!==void 0)U.push(B);U.push(F)}return new G1(U)}$.join=H;function Q(w){return new CX(w)}$.identifier=Q;function J(w){return new L4(w)}$.placeholder=J;function W(w,B){return new p0(w,B)}$.param=W})(O||(O={}));(($)=>{class X{constructor(Y,G){this.sql=Y,this.fieldAlias=G}static[h]="SQL.Aliased";isSelectionField=!1;getSQL(){return this.sql}clone(){return new X(this.sql,this.fieldAlias)}}$.Aliased=X})(G1||(G1={}));class L4{constructor($){this.name=$}static[h]="Placeholder";getSQL(){return new G1([this])}}function YH($,X){return $.map((Y)=>{if(y(Y,L4)){if(!(Y.name in X))throw new Error(`No value for placeholder "${Y.name}" was provided`);return X[Y.name]}if(y(Y,p0)&&y(Y.value,L4)){if(!(Y.value.name in X))throw new Error(`No value for placeholder "${Y.value.name}" was provided`);return Y.encoder.mapToDriverValue(X[Y.value.name])}return Y})}class T0{static[h]="View";[l1];constructor({name:$,schema:X,selectedFields:Y,query:G}){this[l1]={name:$,originalName:$,schema:X,selectedFields:Y,query:G,isExisting:!G,isAlias:!1}}getSQL(){return new G1([this])}}v1.prototype.getSQL=function(){return new G1([this])};X1.prototype.getSQL=function(){return new G1([this])};W0.prototype.getSQL=function(){return new G1([this])};function uE($,X,Y){let G={},H=$.reduce((Q,{path:J,field:W},w)=>{let B;if(y(W,v1))B=W;else if(y(W,G1))B=W.decoder;else B=W.sql.decoder;let U=Q;for(let[V,F]of J.entries())if(V<J.length-1){if(!(F in U))U[F]={};U=U[F]}else{let E=X[w],K=U[F]=E===null?null:B.mapFromDriverValue(E);if(Y&&y(W,v1)&&J.length===2){let A=J[0];if(!(A in G))G[A]=K===null?z4(W.table):!1;else if(typeof G[A]==="string"&&G[A]!==z4(W.table))G[A]=!1}}return Q},{});if(Y&&Object.keys(G).length>0){for(let[Q,J]of Object.entries(G))if(typeof J==="string"&&!Y[J])H[Q]=null}return H}function e0($,X){return Object.entries($).reduce((Y,[G,H])=>{if(typeof G!=="string")return Y;let Q=X?[...X,G]:[G];if(y(H,v1)||y(H,G1)||y(H,G1.Aliased))Y.push({path:Q,field:H});else if(y(H,X1))Y.push(...e0(H[X1.Symbol.Columns],Q));else Y.push(...e0(H,Q));return Y},[])}function GH($,X){let Y=Object.keys($),G=Object.keys(X);if(Y.length!==G.length)return!1;for(let[H,Q]of Y.entries())if(Q!==G[H])return!1;return!0}function jX($,X){let Y=Object.entries(X).filter(([,G])=>G!==void 0).map(([G,H])=>{if(y(H,G1))return[G,H];else return[G,new p0(H,$[X1.Symbol.Columns][G])]});if(Y.length===0)throw new Error("No values to set");return Object.fromEntries(Y)}function pE($,X){for(let Y of X)for(let G of Object.getOwnPropertyNames(Y.prototype)){if(G==="constructor")continue;Object.defineProperty($.prototype,G,Object.getOwnPropertyDescriptor(Y.prototype,G)||Object.create(null))}}function cE($){return $[X1.Symbol.Columns]}function HH($){return y($,W0)?$._.alias:y($,T0)?$[l1].name:y($,G1)?void 0:$[X1.Symbol.IsAlias]?$[X1.Symbol.Name]:$[X1.Symbol.BaseName]}function dE($){if(typeof $!=="object"||$===null)return!1;if($.constructor.name!=="Object")return!1;if("logger"in $){let X=typeof $.logger;if(X!=="boolean"&&(X!=="object"||typeof $.logger.logQuery!=="function")&&X!=="undefined")return!1;return!0}if("schema"in $){let X=typeof $.logger;if(X!=="object"&&X!=="undefined")return!1;return!0}if("casing"in $){let X=typeof $.logger;if(X!=="string"&&X!=="undefined")return!1;return!0}if("mode"in $){if($.mode!=="default"||$.mode!=="planetscale"||$.mode!==void 0)return!1;return!0}if("connection"in $){let X=typeof $.connection;if(X!=="string"&&X!=="object"&&X!=="undefined")return!1;return!0}if("client"in $){let X=typeof $.client;if(X!=="object"&&X!=="function"&&X!=="undefined")return!1;return!0}if(Object.keys($).length===0)return!0;return!1}class TX extends M0{constructor($,X,Y,G){super();this.session=X,this.dialect=Y,this.config={table:$,withList:G}}static[h]="PgDelete";config;where($){return this.config.where=$,this}returning($=this.config.table[X1.Symbol.Columns]){return this.config.returning=e0($),this}getSQL(){return this.dialect.buildDeleteQuery(this.config)}toSQL(){let{typings:$,...X}=this.dialect.sqlToQuery(this.getSQL());return X}_prepare($){return C1.startActiveSpan("drizzle.prepareQuery",()=>{return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()),this.config.returning,$,!0)})}prepare($){return this._prepare($)}execute=($)=>{return C1.startActiveSpan("drizzle.operation",()=>{return this._prepare().execute($)})};$dynamic(){return this}}class kX{constructor($,X,Y,G){this.table=$,this.session=X,this.dialect=Y,this.withList=G}static[h]="PgInsertBuilder";values($){if($=Array.isArray($)?$:[$],$.length===0)throw new Error("values() must be called with at least one value");let X=$.map((Y)=>{let G={},H=this.table[X1.Symbol.Columns];for(let Q of Object.keys(Y)){let J=Y[Q];G[Q]=y(J,G1)?J:new p0(J,H[Q])}return G});return new lE(this.table,X,this.session,this.dialect,this.withList)}}class lE extends M0{constructor($,X,Y,G,H){super();this.session=Y,this.dialect=G,this.config={table:$,values:X,withList:H}}static[h]="PgInsert";config;returning($=this.config.table[X1.Symbol.Columns]){return this.config.returning=e0($),this}onConflictDoNothing($={}){if($.target===void 0)this.config.onConflict=O`do nothing`;else{let X="";X=Array.isArray($.target)?$.target.map((G)=>this.dialect.escapeName(this.dialect.casing.getColumnCasing(G))).join(","):this.dialect.escapeName(this.dialect.casing.getColumnCasing($.target));let Y=$.where?O` where ${$.where}`:void 0;this.config.onConflict=O`(${O.raw(X)})${Y} do nothing`}return this}onConflictDoUpdate($){if($.where&&($.targetWhere||$.setWhere))throw new Error('You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.');let X=$.where?O` where ${$.where}`:void 0,Y=$.targetWhere?O` where ${$.targetWhere}`:void 0,G=$.setWhere?O` where ${$.setWhere}`:void 0,H=this.dialect.buildUpdateSet(this.config.table,jX(this.config.table,$.set)),Q="";return Q=Array.isArray($.target)?$.target.map((J)=>this.dialect.escapeName(this.dialect.casing.getColumnCasing(J))).join(","):this.dialect.escapeName(this.dialect.casing.getColumnCasing($.target)),this.config.onConflict=O`(${O.raw(Q)})${Y} do update set ${H}${X}${G}`,this}getSQL(){return this.dialect.buildInsertQuery(this.config)}toSQL(){let{typings:$,...X}=this.dialect.sqlToQuery(this.getSQL());return X}_prepare($){return C1.startActiveSpan("drizzle.prepareQuery",()=>{return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()),this.config.returning,$,!0)})}prepare($){return this._prepare($)}execute=($)=>{return C1.startActiveSpan("drizzle.operation",()=>{return this._prepare().execute($)})};$dynamic(){return this}}class l6{constructor($){this.table=$}static[h]="ColumnAliasProxyHandler";get($,X){if(X==="table")return this.table;return $[X]}}class B8{constructor($,X){this.alias=$,this.replaceOriginalName=X}static[h]="TableAliasProxyHandler";get($,X){if(X===X1.Symbol.IsAlias)return!0;if(X===X1.Symbol.Name)return this.alias;if(this.replaceOriginalName&&X===X1.Symbol.OriginalName)return this.alias;if(X===l1)return{...$[l1],name:this.alias,isAlias:!0};if(X===X1.Symbol.Columns){let G=$[X1.Symbol.Columns];if(!G)return G;let H={};return Object.keys(G).map((Q)=>{H[Q]=new Proxy(G[Q],new l6(new Proxy($,this)))}),H}let Y=$[X];if(y(Y,v1))return new Proxy(Y,new l6(new Proxy($,this)));return Y}}function xX($,X){return new Proxy($,new B8(X,!1))}function j$($,X){return new Proxy($,new l6(new Proxy($.table,new B8(X,!1))))}function QH($,X){return new G1.Aliased(U8($.sql,X),$.fieldAlias)}function U8($,X){return O.join($.queryChunks.map((Y)=>{if(y(Y,v1))return j$(Y,X);if(y(Y,G1))return U8(Y,X);if(y(Y,G1.Aliased))return QH(Y,X);return Y}))}function hj($){return($.replace(/['\u2019]/g,"").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g)??[]).map((Y)=>Y.toLowerCase()).join("_")}function yj($){return($.replace(/['\u2019]/g,"").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g)??[]).reduce((Y,G,H)=>{let Q=H===0?G.toLowerCase():`${G[0].toUpperCase()}${G.slice(1)}`;return Y+Q},"")}function bj($){return $}class JH{static[h]="CasingCache";cache={};cachedTables={};convert;constructor($){this.convert=$==="snake_case"?hj:$==="camelCase"?yj:bj}getColumnCasing($){if(!$.keyAsName)return $.name;let X=$.table[X1.Symbol.Schema]??"public",Y=$.table[X1.Symbol.OriginalName],G=`${X}.${Y}.${$.name}`;if(!this.cache[G])this.cacheTable($.table);return this.cache[G]}cacheTable($){let X=$[X1.Symbol.Schema]??"public",Y=$[X1.Symbol.OriginalName],G=`${X}.${Y}`;if(!this.cachedTables[G]){for(let H of Object.values($[X1.Symbol.Columns])){let Q=`${G}.${H.name}`;this.cache[Q]=this.convert(H.name)}this.cachedTables[G]=!0}}clearCache(){this.cache={},this.cachedTables={}}}class vX extends Error{static[h]="DrizzleError";constructor({message:$,cause:X}){super($);this.name="DrizzleError",this.cause=X}}class WH extends vX{static[h]="TransactionRollbackError";constructor(){super({message:"Rollback"})}}class wH extends m1{static[h]="PgDate";getSQLType(){return"date"}mapFromDriverValue($){return new Date($)}mapToDriverValue($){return $.toISOString()}}class BH extends m1{static[h]="PgDateString";getSQLType(){return"date"}}class UH extends m1{static[h]="PgJson";constructor($,X){super($,X)}getSQLType(){return"json"}mapToDriverValue($){return JSON.stringify($)}mapFromDriverValue($){if(typeof $==="string")try{return JSON.parse($)}catch{return $}return $}}class VH extends m1{static[h]="PgJsonb";constructor($,X){super($,X)}getSQLType(){return"jsonb"}mapToDriverValue($){return JSON.stringify($)}mapFromDriverValue($){if(typeof $==="string")try{return JSON.parse($)}catch{return $}return $}}class FH extends m1{static[h]="PgNumeric";precision;scale;constructor($,X){super($,X);this.precision=X.precision,this.scale=X.scale}getSQLType(){if(this.precision!==void 0&&this.scale!==void 0)return`numeric(${this.precision}, ${this.scale})`;else if(this.precision===void 0)return"numeric";else return`numeric(${this.precision})`}}class EH extends m1{static[h]="PgTime";withTimezone;precision;constructor($,X){super($,X);this.withTimezone=X.withTimezone,this.precision=X.precision}getSQLType(){return`time${this.precision===void 0?"":`(${this.precision})`}${this.withTimezone?" with time zone":""}`}}class AH extends m1{static[h]="PgTimestamp";withTimezone;precision;constructor($,X){super($,X);this.withTimezone=X.withTimezone,this.precision=X.precision}getSQLType(){return`timestamp${this.precision===void 0?"":` (${this.precision})`}${this.withTimezone?" with time zone":""}`}mapFromDriverValue=($)=>{return new Date(this.withTimezone?$:$+"+0000")};mapToDriverValue=($)=>{return $.toISOString()}}class KH extends m1{static[h]="PgTimestampString";withTimezone;precision;constructor($,X){super($,X);this.withTimezone=X.withTimezone,this.precision=X.precision}getSQLType(){return`timestamp${this.precision===void 0?"":`(${this.precision})`}${this.withTimezone?" with time zone":""}`}}class zH extends m1{static[h]="PgUUID";getSQLType(){return"uuid"}}var iE=Symbol.for("drizzle:PgInlineForeignKeys"),nE=Symbol.for("drizzle:EnableRLS");class c$ extends X1{static[h]="PgTable";static Symbol=Object.assign({},X1.Symbol,{InlineForeignKeys:iE,EnableRLS:nE});[iE]=[];[nE]=!1;[X1.Symbol.ExtraConfigBuilder]=void 0}class LH{static[h]="PgPrimaryKeyBuilder";columns;name;constructor($,X){this.columns=$,this.name=X}build($){return new rE($,this.columns,this.name)}}class rE{constructor($,X,Y){this.table=$,this.columns=X,this.name=Y}static[h]="PgPrimaryKey";columns;name;getName(){return this.name??`${this.table[c$.Symbol.Name]}_${this.columns.map(($)=>$.name).join("_")}_pk`}}function k0($,X){if(bE(X)&&!XH($)&&!y($,p0)&&!y($,L4)&&!y($,v1)&&!y($,X1)&&!y($,T0))return new p0($,X);return $}var fX=($,X)=>{return O`${$} = ${k0(X,$)}`},sE=($,X)=>{return O`${$} <> ${k0(X,$)}`};function V8(...$){let X=$.filter((Y)=>Y!==void 0);if(X.length===0)return;if(X.length===1)return new G1(X);return new G1([new X0("("),O.join(X,new X0(" and ")),new X0(")")])}function oE(...$){let X=$.filter((Y)=>Y!==void 0);if(X.length===0)return;if(X.length===1)return new G1(X);return new G1([new X0("("),O.join(X,new X0(" or ")),new X0(")")])}function aE($){return O`not ${$}`}var tE=($,X)=>{return O`${$} > ${k0(X,$)}`},eE=($,X)=>{return O`${$} >= ${k0(X,$)}`},$A=($,X)=>{return O`${$} < ${k0(X,$)}`},XA=($,X)=>{return O`${$} <= ${k0(X,$)}`};function YA($,X){if(Array.isArray(X)){if(X.length===0)return O`false`;return O`${$} in ${X.map((Y)=>k0(Y,$))}`}return O`${$} in ${k0(X,$)}`}function GA($,X){if(Array.isArray(X)){if(X.length===0)return O`true`;return O`${$} not in ${X.map((Y)=>k0(Y,$))}`}return O`${$} not in ${k0(X,$)}`}function HA($){return O`${$} is null`}function QA($){return O`${$} is not null`}function JA($){return O`exists ${$}`}function WA($){return O`not exists ${$}`}function wA($,X,Y){return O`${$} between ${k0(X,$)} and ${k0(Y,$)}`}function BA($,X,Y){return O`${$} not between ${k0(X,$)} and ${k0(Y,$)}`}function UA($,X){return O`${$} like ${X}`}function VA($,X){return O`${$} not like ${X}`}function FA($,X){return O`${$} ilike ${X}`}function EA($,X){return O`${$} not ilike ${X}`}function AA($){return O`${$} asc`}function KA($){return O`${$} desc`}class OH{constructor($,X,Y){this.sourceTable=$,this.referencedTable=X,this.relationName=Y,this.referencedTableName=X[X1.Symbol.Name]}static[h]="Relation";referencedTableName;fieldName}class zA{constructor($,X){this.table=$,this.config=X}static[h]="Relations"}class O4 extends OH{constructor($,X,Y,G){super($,X,Y?.relationName);this.config=Y,this.isNullable=G}static[h]="One";withFieldName($){let X=new O4(this.sourceTable,this.referencedTable,this.config,this.isNullable);return X.fieldName=$,X}}class F8 extends OH{constructor($,X,Y){super($,X,Y?.relationName);this.config=Y}static[h]="Many";withFieldName($){let X=new F8(this.sourceTable,this.referencedTable,this.config);return X.fieldName=$,X}}function LA(){return{and:V8,between:wA,eq:fX,exists:JA,gt:tE,gte:eE,ilike:FA,inArray:YA,isNull:HA,isNotNull:QA,like:UA,lt:$A,lte:XA,ne:sE,not:aE,notBetween:BA,notExists:WA,notLike:VA,notIlike:EA,notInArray:GA,or:oE,sql:O}}function OA(){return{sql:O,asc:AA,desc:KA}}function RA($,X){if(Object.keys($).length===1&&"default"in $&&!y($.default,X1))$=$.default;let Y={},G={},H={};for(let[Q,J]of Object.entries($))if(y(J,X1)){let W=t4(J),w=G[W];Y[W]=Q,H[Q]={tsName:Q,dbName:J[X1.Symbol.Name],schema:J[X1.Symbol.Schema],columns:J[X1.Symbol.Columns],relations:w?.relations??{},primaryKey:w?.primaryKey??[]};for(let U of Object.values(J[X1.Symbol.Columns]))if(U.primary)H[Q].primaryKey.push(U);let B=J[X1.Symbol.ExtraConfigBuilder]?.(J[X1.Symbol.ExtraConfigColumns]);if(B){for(let U of Object.values(B))if(y(U,LH))H[Q].primaryKey.push(...U.columns)}}else if(y(J,zA)){let W=t4(J.table),w=Y[W],B=J.config(X(J.table)),U;for(let[V,F]of Object.entries(B))if(w){let E=H[w];if(E.relations[V]=F,U)E.primaryKey.push(...U)}else{if(!(W in G))G[W]={relations:{},primaryKey:U};G[W].relations[V]=F}}return{tables:H,tableNamesMap:Y}}function gj($){return function X(Y,G){return new O4($,Y,G,G?.fields.reduce((H,Q)=>H&&Q.notNull,!0)??!1)}}function mj($){return function X(Y,G){return new F8($,Y,G)}}function DA($,X,Y){if(y(Y,O4)&&Y.config)return{fields:Y.config.fields,references:Y.config.references};let G=X[t4(Y.referencedTable)];if(!G)throw new Error(`Table "${Y.referencedTable[X1.Symbol.Name]}" not found in schema`);let H=$[G];if(!H)throw new Error(`Table "${G}" not found in schema`);let Q=Y.sourceTable,J=X[t4(Q)];if(!J)throw new Error(`Table "${Q[X1.Symbol.Name]}" not found in schema`);let W=[];for(let w of Object.values(H.relations))if(Y.relationName&&Y!==w&&w.relationName===Y.relationName||!Y.relationName&&w.referencedTable===Y.sourceTable)W.push(w);if(W.length>1)throw Y.relationName?new Error(`There are multiple relations with name "${Y.relationName}" in table "${G}"`):new Error(`There are multiple relations between "${G}" and "${Y.sourceTable[X1.Symbol.Name]}". Please specify relation name`);if(W[0]&&y(W[0],O4)&&W[0].config)return{fields:W[0].config.references,references:W[0].config.fields};throw new Error(`There is not enough information to infer relation "${J}.${Y.fieldName}"`)}function _A($){return{one:gj($),many:mj($)}}function hX($,X,Y,G,H=(Q)=>Q){let Q={};for(let[J,W]of G.entries())if(W.isJson){let w=X.relations[W.tsKey],B=Y[J],U=typeof B==="string"?JSON.parse(B):B;Q[W.tsKey]=y(w,O4)?U&&hX($,$[W.relationTableTsKey],U,W.selection,H):U.map((V)=>hX($,$[W.relationTableTsKey],V,W.selection,H))}else{let w=H(Y[J]),B=W.field,U;if(y(B,v1))U=B;else if(y(B,G1))U=B.decoder;else U=B.sql.decoder;Q[W.tsKey]=w===null?null:U.mapFromDriverValue(w)}return Q}class E8 extends T0{static[h]="PgViewBase"}class e4{static[h]="PgDialect";casing;constructor($){this.casing=new JH($?.casing)}async migrate($,X,Y){let G=typeof Y==="string"?"__drizzle_migrations":Y.migrationsTable??"__drizzle_migrations",H=typeof Y==="string"?"drizzle":Y.migrationsSchema??"drizzle",Q=O`
			CREATE TABLE IF NOT EXISTS ${O.identifier(H)}.${O.identifier(G)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;await X.execute(O`CREATE SCHEMA IF NOT EXISTS ${O.identifier(H)}`),await X.execute(Q);let W=(await X.all(O`select id, hash, created_at from ${O.identifier(H)}.${O.identifier(G)} order by created_at desc limit 1`))[0];await X.transaction(async(w)=>{for await(let B of $)if(!W||Number(W.created_at)<B.folderMillis){for(let U of B.sql)await w.execute(O.raw(U));await w.execute(O`insert into ${O.identifier(H)}.${O.identifier(G)} ("hash", "created_at") values(${B.hash}, ${B.folderMillis})`)}})}escapeName($){return`"${$}"`}escapeParam($){return`\$${$+1}`}escapeString($){return`'${$.replace(/'/g,"''")}'`}buildWithCTE($){if(!$?.length)return;let X=[O`with `];for(let[Y,G]of $.entries())if(X.push(O`${O.identifier(G._.alias)} as (${G._.sql})`),Y<$.length-1)X.push(O`, `);return X.push(O` `),O.join(X)}buildDeleteQuery({table:$,where:X,returning:Y,withList:G}){let H=this.buildWithCTE(G),Q=Y?O` returning ${this.buildSelection(Y,{isSingleTable:!0})}`:void 0,J=X?O` where ${X}`:void 0;return O`${H}delete from ${$}${J}${Q}`}buildUpdateSet($,X){let Y=$[X1.Symbol.Columns],G=Object.keys(Y).filter((Q)=>X[Q]!==void 0||Y[Q]?.onUpdateFn!==void 0),H=G.length;return O.join(G.flatMap((Q,J)=>{let W=Y[Q],w=X[Q]??O.param(W.onUpdateFn(),W),B=O`${O.identifier(this.casing.getColumnCasing(W))} = ${w}`;if(J<H-1)return[B,O.raw(", ")];return[B]}))}buildUpdateQuery({table:$,set:X,where:Y,returning:G,withList:H}){let Q=this.buildWithCTE(H),J=this.buildUpdateSet($,X),W=G?O` returning ${this.buildSelection(G,{isSingleTable:!0})}`:void 0,w=Y?O` where ${Y}`:void 0;return O`${Q}update ${$} set ${J}${w}${W}`}buildSelection($,{isSingleTable:X=!1}={}){let Y=$.length,G=$.flatMap(({field:H},Q)=>{let J=[];if(y(H,G1.Aliased)&&H.isSelectionField)J.push(O.identifier(H.fieldAlias));else if(y(H,G1.Aliased)||y(H,G1)){let W=y(H,G1.Aliased)?H.sql:H;if(X)J.push(new G1(W.queryChunks.map((w)=>{if(y(w,m1))return O.identifier(this.casing.getColumnCasing(w));return w})));else J.push(W);if(y(H,G1.Aliased))J.push(O` as ${O.identifier(H.fieldAlias)}`)}else if(y(H,v1))if(X)J.push(O.identifier(this.casing.getColumnCasing(H)));else J.push(H);if(Q<Y-1)J.push(O`, `);return J});return O.join(G)}buildSelectQuery({withList:$,fields:X,fieldsFlat:Y,where:G,having:H,table:Q,joins:J,orderBy:W,groupBy:w,limit:B,offset:U,lockingClause:V,distinct:F,setOperators:E}){let K=Y??e0(X);for(let j of K)if(y(j.field,v1)&&z4(j.field.table)!==(y(Q,W0)?Q._.alias:y(Q,E8)?Q[l1].name:y(Q,G1)?void 0:z4(Q))&&!((v)=>J?.some(({alias:f})=>f===(v[X1.Symbol.IsAlias]?z4(v):v[X1.Symbol.BaseName])))(j.field.table)){let v=z4(j.field.table);throw new Error(`Your "${j.path.join("->")}" field references a column "${v}"."${j.field.name}", but the table "${v}" is not part of the query! Did you forget to join it?`)}let A=!J||J.length===0,P=this.buildWithCTE($),_;if(F)_=F===!0?O` distinct`:O` distinct on (${O.join(F.on,O`, `)})`;let C=this.buildSelection(K,{isSingleTable:A}),b=(()=>{if(y(Q,X1)&&Q[X1.Symbol.OriginalName]!==Q[X1.Symbol.Name]){let j=O`${O.identifier(Q[X1.Symbol.OriginalName])}`;if(Q[X1.Symbol.Schema])j=O`${O.identifier(Q[X1.Symbol.Schema])}.${j}`;return O`${j} ${O.identifier(Q[X1.Symbol.Name])}`}return Q})(),T=[];if(J)for(let[j,v]of J.entries()){if(j===0)T.push(O` `);let f=v.table,u=v.lateral?O` lateral`:void 0;if(y(f,c$)){let M=f[c$.Symbol.Name],m=f[c$.Symbol.Schema],i=f[c$.Symbol.OriginalName],H1=M===i?void 0:v.alias;T.push(O`${O.raw(v.joinType)} join${u} ${m?O`${O.identifier(m)}.`:void 0}${O.identifier(i)}${H1&&O` ${O.identifier(H1)}`} on ${v.on}`)}else if(y(f,T0)){let M=f[l1].name,m=f[l1].schema,i=f[l1].originalName,H1=M===i?void 0:v.alias;T.push(O`${O.raw(v.joinType)} join${u} ${m?O`${O.identifier(m)}.`:void 0}${O.identifier(i)}${H1&&O` ${O.identifier(H1)}`} on ${v.on}`)}else T.push(O`${O.raw(v.joinType)} join${u} ${f} on ${v.on}`);if(j<J.length-1)T.push(O` `)}let p=O.join(T),k=G?O` where ${G}`:void 0,x=H?O` having ${H}`:void 0,S;if(W&&W.length>0)S=O` order by ${O.join(W,O`, `)}`;let d;if(w&&w.length>0)d=O` group by ${O.join(w,O`, `)}`;let Z=typeof B==="object"||typeof B==="number"&&B>=0?O` limit ${B}`:void 0,s=U?O` offset ${U}`:void 0,$1=O.empty();if(V){let j=O` for ${O.raw(V.strength)}`;if(V.config.of)j.append(O` of ${O.join(Array.isArray(V.config.of)?V.config.of:[V.config.of],O`, `)}`);if(V.config.noWait)j.append(O` no wait`);else if(V.config.skipLocked)j.append(O` skip locked`);$1.append(j)}let R=O`${P}select${_} ${C} from ${b}${p}${k}${d}${x}${S}${Z}${s}${$1}`;if(E.length>0)return this.buildSetOperations(R,E);return R}buildSetOperations($,X){let[Y,...G]=X;if(!Y)throw new Error("Cannot pass undefined values to any set operator");if(G.length===0)return this.buildSetOperationQuery({leftSelect:$,setOperator:Y});return this.buildSetOperations(this.buildSetOperationQuery({leftSelect:$,setOperator:Y}),G)}buildSetOperationQuery({leftSelect:$,setOperator:{type:X,isAll:Y,rightSelect:G,limit:H,orderBy:Q,offset:J}}){let W=O`(${$.getSQL()}) `,w=O`(${G.getSQL()})`,B;if(Q&&Q.length>0){let E=[];for(let K of Q)if(y(K,m1))E.push(O.identifier(K.name));else if(y(K,G1)){for(let A=0;A<K.queryChunks.length;A++){let P=K.queryChunks[A];if(y(P,m1))K.queryChunks[A]=O.identifier(P.name)}E.push(O`${K}`)}else E.push(O`${K}`);B=O` order by ${O.join(E,O`, `)} `}let U=typeof H==="object"||typeof H==="number"&&H>=0?O` limit ${H}`:void 0,V=O.raw(`${X} ${Y?"all ":""}`),F=J?O` offset ${J}`:void 0;return O`${W}${V}${w}${B}${U}${F}`}buildInsertQuery({table:$,values:X,onConflict:Y,returning:G,withList:H}){let Q=[],J=$[X1.Symbol.Columns],W=Object.entries(J).filter(([E,K])=>!K.shouldDisableInsert()),w=W.map(([,E])=>O.identifier(this.casing.getColumnCasing(E)));for(let[E,K]of X.entries()){let A=[];for(let[P,_]of W){let C=K[P];if(C===void 0||y(C,p0)&&C.value===void 0)if(_.defaultFn!==void 0){let b=_.defaultFn(),T=y(b,G1)?b:O.param(b,_);A.push(T)}else if(!_.default&&_.onUpdateFn!==void 0){let b=_.onUpdateFn(),T=y(b,G1)?b:O.param(b,_);A.push(T)}else A.push(O`default`);else A.push(C)}if(Q.push(A),E<X.length-1)Q.push(O`, `)}let B=this.buildWithCTE(H),U=O.join(Q),V=G?O` returning ${this.buildSelection(G,{isSingleTable:!0})}`:void 0,F=Y?O` on conflict ${Y}`:void 0;return O`${B}insert into ${$} ${w} values ${U}${F}${V}`}buildRefreshMaterializedViewQuery({view:$,concurrently:X,withNoData:Y}){let G=X?O` concurrently`:void 0,H=Y?O` with no data`:void 0;return O`refresh materialized view${G} ${$}${H}`}prepareTyping($){if(y($,VH)||y($,UH))return"json";else if(y($,FH))return"decimal";else if(y($,EH))return"time";else if(y($,AH)||y($,KH))return"timestamp";else if(y($,wH)||y($,BH))return"date";else if(y($,zH))return"uuid";else return"none"}sqlToQuery($,X){return $.toQuery({casing:this.casing,escapeName:this.escapeName,escapeParam:this.escapeParam,escapeString:this.escapeString,prepareTyping:this.prepareTyping,invokeSource:X})}buildRelationalQueryWithoutPK({fullSchema:$,schema:X,tableNamesMap:Y,table:G,tableConfig:H,queryConfig:Q,tableAlias:J,nestedQueryRelation:W,joinOn:w}){let B=[],U,V,F=[],E,K=[];if(Q===!0)B=Object.entries(H.columns).map(([_,C])=>({dbKey:C.name,tsKey:_,field:j$(C,J),relationTableTsKey:void 0,isJson:!1,selection:[]}));else{let P=Object.fromEntries(Object.entries(H.columns).map(([k,x])=>[k,j$(x,J)]));if(Q.where){let k=typeof Q.where==="function"?Q.where(P,LA()):Q.where;E=k&&U8(k,J)}let _=[],C=[];if(Q.columns){let k=!1;for(let[x,S]of Object.entries(Q.columns)){if(S===void 0)continue;if(x in H.columns){if(!k&&S===!0)k=!0;C.push(x)}}if(C.length>0)C=k?C.filter((x)=>Q.columns?.[x]===!0):Object.keys(H.columns).filter((x)=>!C.includes(x))}else C=Object.keys(H.columns);for(let k of C){let x=H.columns[k];_.push({tsKey:k,value:x})}let b=[];if(Q.with)b=Object.entries(Q.with).filter((k)=>!!k[1]).map(([k,x])=>({tsKey:k,queryConfig:x,relation:H.relations[k]}));let T;if(Q.extras){T=typeof Q.extras==="function"?Q.extras(P,{sql:O}):Q.extras;for(let[k,x]of Object.entries(T))_.push({tsKey:k,value:QH(x,J)})}for(let{tsKey:k,value:x}of _)B.push({dbKey:y(x,G1.Aliased)?x.fieldAlias:H.columns[k].name,tsKey:k,field:y(x,v1)?j$(x,J):x,relationTableTsKey:void 0,isJson:!1,selection:[]});let p=typeof Q.orderBy==="function"?Q.orderBy(P,OA()):Q.orderBy??[];if(!Array.isArray(p))p=[p];F=p.map((k)=>{if(y(k,v1))return j$(k,J);return U8(k,J)}),U=Q.limit,V=Q.offset;for(let{tsKey:k,queryConfig:x,relation:S}of b){let d=DA(X,Y,S),Z=t4(S.referencedTable),s=Y[Z],$1=`${J}_${k}`,R=V8(...d.fields.map((f,u)=>fX(j$(d.references[u],$1),j$(f,J)))),j=this.buildRelationalQueryWithoutPK({fullSchema:$,schema:X,tableNamesMap:Y,table:$[s],tableConfig:X[s],queryConfig:y(S,O4)?x===!0?{limit:1}:{...x,limit:1}:x,tableAlias:$1,joinOn:R,nestedQueryRelation:S}),v=O`${O.identifier($1)}.${O.identifier("data")}`.as(k);K.push({on:O`true`,table:new W0(j.sql,{},$1),alias:$1,joinType:"left",lateral:!0}),B.push({dbKey:k,tsKey:k,field:v,relationTableTsKey:s,isJson:!0,selection:j.selection})}}if(B.length===0)throw new vX({message:`No fields selected for table "${H.tsName}" ("${J}")`});let A;if(E=V8(w,E),W){let P=O`json_build_array(${O.join(B.map(({field:b,tsKey:T,isJson:p})=>p?O`${O.identifier(`${J}_${T}`)}.${O.identifier("data")}`:y(b,G1.Aliased)?b.sql:b),O`, `)})`;if(y(W,F8))P=O`coalesce(json_agg(${P}${F.length>0?O` order by ${O.join(F,O`, `)}`:void 0}), '[]'::json)`;let _=[{dbKey:"data",tsKey:"data",field:P.as("data"),isJson:!0,relationTableTsKey:H.tsName,selection:B}];if(U!==void 0||V!==void 0||F.length>0)A=this.buildSelectQuery({table:xX(G,J),fields:{},fieldsFlat:[{path:[],field:O.raw("*")}],where:E,limit:U,offset:V,orderBy:F,setOperators:[]}),E=void 0,U=void 0,V=void 0,F=[];else A=xX(G,J);A=this.buildSelectQuery({table:y(A,c$)?A:new W0(A,{},J),fields:{},fieldsFlat:_.map(({field:b})=>({path:[],field:y(b,v1)?j$(b,J):b})),joins:K,where:E,limit:U,offset:V,orderBy:F,setOperators:[]})}else A=this.buildSelectQuery({table:xX(G,J),fields:{},fieldsFlat:B.map(({field:P})=>({path:[],field:y(P,v1)?j$(P,J):P})),joins:K,where:E,limit:U,offset:V,orderBy:F,setOperators:[]});return{tableTsKey:H.tsName,sql:A,selection:B}}}class x0{static[h]="SelectionProxyHandler";config;constructor($){this.config={...$}}get($,X){if(X==="_")return{...$._,selectedFields:new Proxy($._.selectedFields,this)};if(X===l1)return{...$[l1],selectedFields:new Proxy($[l1].selectedFields,this)};if(typeof X==="symbol")return $[X];let G=(y($,W0)?$._.selectedFields:y($,T0)?$[l1].selectedFields:$)[X];if(y(G,G1.Aliased)){if(this.config.sqlAliasedBehavior==="sql"&&!G.isSelectionField)return G.sql;let H=G.clone();return H.isSelectionField=!0,H}if(y(G,G1)){if(this.config.sqlBehavior==="sql")return G;throw new Error(`You tried to reference "${X}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`)}if(y(G,v1)){if(this.config.alias)return new Proxy(G,new l6(new Proxy(G.table,new B8(this.config.alias,this.config.replaceOriginalName??!1))));return G}if(typeof G!=="object"||G===null)return G;return new Proxy(G,new x0(this.config))}}class RH{static[h]="TypedQueryBuilder";getSelectedFields(){return this._.selectedFields}}class Z0{static[h]="PgSelectBuilder";fields;session;dialect;withList=[];distinct;constructor($){if(this.fields=$.fields,this.session=$.session,this.dialect=$.dialect,$.withList)this.withList=$.withList;this.distinct=$.distinct}from($){let X=!!this.fields,Y;if(this.fields)Y=this.fields;else if(y($,W0))Y=Object.fromEntries(Object.keys($._.selectedFields).map((G)=>[G,$[G]]));else if(y($,E8))Y=$[l1].selectedFields;else if(y($,G1))Y={};else Y=cE($);return new DH({table:$,fields:Y,isPartialSelect:X,session:this.session,dialect:this.dialect,withList:this.withList,distinct:this.distinct})}}class NA extends RH{static[h]="PgSelectQueryBuilder";_;config;joinsNotNullableMap;tableName;isPartialSelect;session;dialect;constructor({table:$,fields:X,isPartialSelect:Y,session:G,dialect:H,withList:Q,distinct:J}){super();this.config={withList:Q,table:$,fields:{...X},distinct:J,setOperators:[]},this.isPartialSelect=Y,this.session=G,this.dialect=H,this._={selectedFields:X},this.tableName=HH($),this.joinsNotNullableMap=typeof this.tableName==="string"?{[this.tableName]:!0}:{}}createJoin($){return(X,Y)=>{let G=this.tableName,H=HH(X);if(typeof H==="string"&&this.config.joins?.some((Q)=>Q.alias===H))throw new Error(`Alias "${H}" is already used in this query`);if(!this.isPartialSelect){if(Object.keys(this.joinsNotNullableMap).length===1&&typeof G==="string")this.config.fields={[G]:this.config.fields};if(typeof H==="string"&&!y(X,G1)){let Q=y(X,W0)?X._.selectedFields:y(X,T0)?X[l1].selectedFields:X[X1.Symbol.Columns];this.config.fields[H]=Q}}if(typeof Y==="function")Y=Y(new Proxy(this.config.fields,new x0({sqlAliasedBehavior:"sql",sqlBehavior:"sql"})));if(!this.config.joins)this.config.joins=[];if(this.config.joins.push({on:Y,table:X,joinType:$,alias:H}),typeof H==="string")switch($){case"left":{this.joinsNotNullableMap[H]=!1;break}case"right":{this.joinsNotNullableMap=Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([Q])=>[Q,!1])),this.joinsNotNullableMap[H]=!0;break}case"inner":{this.joinsNotNullableMap[H]=!0;break}case"full":{this.joinsNotNullableMap=Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([Q])=>[Q,!1])),this.joinsNotNullableMap[H]=!1;break}}return this}}leftJoin=this.createJoin("left");rightJoin=this.createJoin("right");innerJoin=this.createJoin("inner");fullJoin=this.createJoin("full");createSetOperator($,X){return(Y)=>{let G=typeof Y==="function"?Y(uj()):Y;if(!GH(this.getSelectedFields(),G.getSelectedFields()))throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");return this.config.setOperators.push({type:$,isAll:X,rightSelect:G}),this}}union=this.createSetOperator("union",!1);unionAll=this.createSetOperator("union",!0);intersect=this.createSetOperator("intersect",!1);intersectAll=this.createSetOperator("intersect",!0);except=this.createSetOperator("except",!1);exceptAll=this.createSetOperator("except",!0);addSetOperators($){return this.config.setOperators.push(...$),this}where($){if(typeof $==="function")$=$(new Proxy(this.config.fields,new x0({sqlAliasedBehavior:"sql",sqlBehavior:"sql"})));return this.config.where=$,this}having($){if(typeof $==="function")$=$(new Proxy(this.config.fields,new x0({sqlAliasedBehavior:"sql",sqlBehavior:"sql"})));return this.config.having=$,this}groupBy(...$){if(typeof $[0]==="function"){let X=$[0](new Proxy(this.config.fields,new x0({sqlAliasedBehavior:"alias",sqlBehavior:"sql"})));this.config.groupBy=Array.isArray(X)?X:[X]}else this.config.groupBy=$;return this}orderBy(...$){if(typeof $[0]==="function"){let X=$[0](new Proxy(this.config.fields,new x0({sqlAliasedBehavior:"alias",sqlBehavior:"sql"}))),Y=Array.isArray(X)?X:[X];if(this.config.setOperators.length>0)this.config.setOperators.at(-1).orderBy=Y;else this.config.orderBy=Y}else{let X=$;if(this.config.setOperators.length>0)this.config.setOperators.at(-1).orderBy=X;else this.config.orderBy=X}return this}limit($){if(this.config.setOperators.length>0)this.config.setOperators.at(-1).limit=$;else this.config.limit=$;return this}offset($){if(this.config.setOperators.length>0)this.config.setOperators.at(-1).offset=$;else this.config.offset=$;return this}for($,X={}){return this.config.lockingClause={strength:$,config:X},this}getSQL(){return this.dialect.buildSelectQuery(this.config)}toSQL(){let{typings:$,...X}=this.dialect.sqlToQuery(this.getSQL());return X}as($){return new Proxy(new W0(this.getSQL(),this.config.fields,$),new x0({alias:$,sqlAliasedBehavior:"alias",sqlBehavior:"error"}))}getSelectedFields(){return new Proxy(this.config.fields,new x0({alias:this.tableName,sqlAliasedBehavior:"alias",sqlBehavior:"error"}))}$dynamic(){return this}}class DH extends NA{static[h]="PgSelect";_prepare($){let{session:X,config:Y,dialect:G,joinsNotNullableMap:H}=this;if(!X)throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");return C1.startActiveSpan("drizzle.prepareQuery",()=>{let Q=e0(Y.fields),J=X.prepareQuery(G.sqlToQuery(this.getSQL()),Q,$,!0);return J.joinsNotNullableMap=H,J})}prepare($){return this._prepare($)}execute=($)=>{return C1.startActiveSpan("drizzle.operation",()=>{return this._prepare().execute($)})}}pE(DH,[M0]);function i6($,X){return(Y,G,...H)=>{let Q=[G,...H].map((J)=>({type:$,isAll:X,rightSelect:J}));for(let J of Q)if(!GH(Y.getSelectedFields(),J.rightSelect.getSelectedFields()))throw new Error("Set operator error (union / intersect / except): selected fields are not the same or are in a different order");return Y.addSetOperators(Q)}}var uj=()=>({union:pj,unionAll:cj,intersect:dj,intersectAll:lj,except:ij,exceptAll:nj}),pj=i6("union",!1),cj=i6("union",!0),dj=i6("intersect",!1),lj=i6("intersect",!0),ij=i6("except",!1),nj=i6("except",!0);class _H{static[h]="PgQueryBuilder";dialect;dialectConfig;constructor($){this.dialect=y($,e4)?$:void 0,this.dialectConfig=y($,e4)?void 0:$}$with($){let X=this;return{as(Y){if(typeof Y==="function")Y=Y(X);return new Proxy(new w8(Y.getSQL(),Y.getSelectedFields(),$,!0),new x0({alias:$,sqlAliasedBehavior:"alias",sqlBehavior:"error"}))}}}with(...$){let X=this;function Y(Q){return new Z0({fields:Q??void 0,session:void 0,dialect:X.getDialect(),withList:$})}function G(Q){return new Z0({fields:Q??void 0,session:void 0,dialect:X.getDialect(),distinct:!0})}function H(Q,J){return new Z0({fields:J??void 0,session:void 0,dialect:X.getDialect(),distinct:{on:Q}})}return{select:Y,selectDistinct:G,selectDistinctOn:H}}select($){return new Z0({fields:$??void 0,session:void 0,dialect:this.getDialect()})}selectDistinct($){return new Z0({fields:$??void 0,session:void 0,dialect:this.getDialect(),distinct:!0})}selectDistinctOn($,X){return new Z0({fields:X??void 0,session:void 0,dialect:this.getDialect(),distinct:{on:$}})}getDialect(){if(!this.dialect)this.dialect=new e4(this.dialectConfig);return this.dialect}}class NH extends M0{constructor($,X,Y){super();this.session=X,this.dialect=Y,this.config={view:$}}static[h]="PgRefreshMaterializedView";config;concurrently(){if(this.config.withNoData!==void 0)throw new Error("Cannot use concurrently and withNoData together");return this.config.concurrently=!0,this}withNoData(){if(this.config.concurrently!==void 0)throw new Error("Cannot use concurrently and withNoData together");return this.config.withNoData=!0,this}getSQL(){return this.dialect.buildRefreshMaterializedViewQuery(this.config)}toSQL(){let{typings:$,...X}=this.dialect.sqlToQuery(this.getSQL());return X}_prepare($){return C1.startActiveSpan("drizzle.prepareQuery",()=>{return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()),void 0,$,!0)})}prepare($){return this._prepare($)}execute=($)=>{return C1.startActiveSpan("drizzle.operation",()=>{return this._prepare().execute($)})}}class yX{constructor($,X,Y,G){this.table=$,this.session=X,this.dialect=Y,this.withList=G}static[h]="PgUpdateBuilder";set($){return new qA(this.table,jX(this.table,$),this.session,this.dialect,this.withList)}}class qA extends M0{constructor($,X,Y,G,H){super();this.session=Y,this.dialect=G,this.config={set:X,table:$,withList:H}}static[h]="PgUpdate";config;where($){return this.config.where=$,this}returning($=this.config.table[X1.Symbol.Columns]){return this.config.returning=e0($),this}getSQL(){return this.dialect.buildUpdateQuery(this.config)}toSQL(){let{typings:$,...X}=this.dialect.sqlToQuery(this.getSQL());return X}_prepare($){return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()),this.config.returning,$,!0)}prepare($){return this._prepare($)}execute=($)=>{return this._prepare().execute($)};$dynamic(){return this}}class A8 extends G1{constructor($){super(A8.buildEmbeddedCount($.source,$.filters).queryChunks);this.params=$,this.mapWith(Number),this.session=$.session,this.sql=A8.buildCount($.source,$.filters)}sql;static[h]="PgCountBuilder";[Symbol.toStringTag]="PgCountBuilder";session;static buildEmbeddedCount($,X){return O`(select count(*) from ${$}${O.raw(" where ").if(X)}${X})`}static buildCount($,X){return O`select count(*) as count from ${$}${O.raw(" where ").if(X)}${X};`}then($,X){return Promise.resolve(this.session.count(this.sql)).then($,X)}catch($){return this.then(void 0,$)}finally($){return this.then((X)=>{return $?.(),X},(X)=>{throw $?.(),X})}}class MH{constructor($,X,Y,G,H,Q,J){this.fullSchema=$,this.schema=X,this.tableNamesMap=Y,this.table=G,this.tableConfig=H,this.dialect=Q,this.session=J}static[h]="PgRelationalQueryBuilder";findMany($){return new qH(this.fullSchema,this.schema,this.tableNamesMap,this.table,this.tableConfig,this.dialect,this.session,$?$:{},"many")}findFirst($){return new qH(this.fullSchema,this.schema,this.tableNamesMap,this.table,this.tableConfig,this.dialect,this.session,$?{...$,limit:1}:{limit:1},"first")}}class qH extends M0{constructor($,X,Y,G,H,Q,J,W,w){super();this.fullSchema=$,this.schema=X,this.tableNamesMap=Y,this.table=G,this.tableConfig=H,this.dialect=Q,this.session=J,this.config=W,this.mode=w}static[h]="PgRelationalQuery";_prepare($){return C1.startActiveSpan("drizzle.prepareQuery",()=>{let{query:X,builtQuery:Y}=this._toSQL();return this.session.prepareQuery(Y,void 0,$,!0,(G,H)=>{let Q=G.map((J)=>hX(this.schema,this.tableConfig,J,X.selection,H));if(this.mode==="first")return Q[0];return Q})})}prepare($){return this._prepare($)}_getQuery(){return this.dialect.buildRelationalQueryWithoutPK({fullSchema:this.fullSchema,schema:this.schema,tableNamesMap:this.tableNamesMap,table:this.table,tableConfig:this.tableConfig,queryConfig:this.config,tableAlias:this.tableConfig.tsName})}getSQL(){return this._getQuery().sql}_toSQL(){let $=this._getQuery(),X=this.dialect.sqlToQuery($.sql);return{query:$,builtQuery:X}}toSQL(){return this._toSQL().builtQuery}execute(){return C1.startActiveSpan("drizzle.operation",()=>{return this._prepare().execute()})}}class ZH extends M0{constructor($,X,Y,G){super();this.execute=$,this.sql=X,this.query=Y,this.mapBatchResult=G}static[h]="PgRaw";getSQL(){return this.sql}getQuery(){return this.query}mapResult($,X){return X?this.mapBatchResult($):$}_prepare(){return this}isResponseInArrayMode(){return!1}}class K8{constructor($,X,Y){if(this.dialect=$,this.session=X,this._=Y?{schema:Y.schema,fullSchema:Y.fullSchema,tableNamesMap:Y.tableNamesMap,session:X}:{schema:void 0,fullSchema:{},tableNamesMap:{},session:X},this.query={},this._.schema)for(let[G,H]of Object.entries(this._.schema))this.query[G]=new MH(Y.fullSchema,this._.schema,this._.tableNamesMap,Y.fullSchema[G],H,$,X)}static[h]="PgDatabase";query;$with($){let X=this;return{as(Y){if(typeof Y==="function")Y=Y(new _H(X.dialect));return new Proxy(new w8(Y.getSQL(),Y.getSelectedFields(),$,!0),new x0({alias:$,sqlAliasedBehavior:"alias",sqlBehavior:"error"}))}}}$count($,X){return new A8({source:$,filters:X,session:this.session})}with(...$){let X=this;function Y(w){return new Z0({fields:w??void 0,session:X.session,dialect:X.dialect,withList:$})}function G(w){return new Z0({fields:w??void 0,session:X.session,dialect:X.dialect,withList:$,distinct:!0})}function H(w,B){return new Z0({fields:B??void 0,session:X.session,dialect:X.dialect,withList:$,distinct:{on:w}})}function Q(w){return new yX(w,X.session,X.dialect,$)}function J(w){return new kX(w,X.session,X.dialect,$)}function W(w){return new TX(w,X.session,X.dialect,$)}return{select:Y,selectDistinct:G,selectDistinctOn:H,update:Q,insert:J,delete:W}}select($){return new Z0({fields:$??void 0,session:this.session,dialect:this.dialect})}selectDistinct($){return new Z0({fields:$??void 0,session:this.session,dialect:this.dialect,distinct:!0})}selectDistinctOn($,X){return new Z0({fields:X??void 0,session:this.session,dialect:this.dialect,distinct:{on:$}})}update($){return new yX($,this.session,this.dialect)}insert($){return new kX($,this.session,this.dialect)}delete($){return new TX($,this.session,this.dialect)}refreshMaterializedView($){return new NH($,this.session,this.dialect)}execute($){let X=typeof $==="string"?O.raw($):$.getSQL(),Y=this.dialect.sqlToQuery(X),G=this.session.prepareQuery(Y,void 0,void 0,!1);return new ZH(()=>G.execute(),X,Y,(H)=>G.mapResult(H,!0))}transaction($,X){return this.session.transaction($,X)}}class PH{constructor($){this.query=$}getQuery(){return this.query}mapResult($,X){return $}static[h]="PgPreparedQuery";joinsNotNullableMap}class SH{constructor($){this.dialect=$}static[h]="PgSession";execute($){return C1.startActiveSpan("drizzle.operation",()=>{return C1.startActiveSpan("drizzle.prepareQuery",()=>{return this.prepareQuery(this.dialect.sqlToQuery($),void 0,void 0,!1)}).execute()})}all($){return this.prepareQuery(this.dialect.sqlToQuery($),void 0,void 0,!1).all()}async count($){let X=await this.execute($);return Number(X[0].count)}}class IH extends K8{constructor($,X,Y,G=0){super($,X,Y);this.schema=Y,this.nestedIndex=G}static[h]="PgTransaction";rollback(){throw new WH}getTransactionConfigSQL($){let X=[];if($.isolationLevel)X.push(`isolation level ${$.isolationLevel}`);if($.accessMode)X.push($.accessMode);if(typeof $.deferrable==="boolean")X.push($.deferrable?"deferrable":"not deferrable");return O.raw(X.join(" "))}setTransaction($){return this.session.execute(O`set transaction ${this.getTransactionConfigSQL($)}`)}}class MA extends PH{constructor($,X,Y,G,H,Q,J){super({sql:X,params:Y});this.client=$,this.queryString=X,this.params=Y,this.logger=G,this.fields=H,this._isResponseInArrayMode=Q,this.customResultMapper=J}static[h]="PostgresJsPreparedQuery";async execute($={}){return C1.startActiveSpan("drizzle.execute",async(X)=>{let Y=YH(this.params,$);X?.setAttributes({"drizzle.query.text":this.queryString,"drizzle.query.params":JSON.stringify(Y)}),this.logger.logQuery(this.queryString,Y);let{fields:G,queryString:H,client:Q,joinsNotNullableMap:J,customResultMapper:W}=this;if(!G&&!W)return C1.startActiveSpan("drizzle.driver.execute",()=>{return Q.unsafe(H,Y)});let w=await C1.startActiveSpan("drizzle.driver.execute",()=>{return X?.setAttributes({"drizzle.query.text":H,"drizzle.query.params":JSON.stringify(Y)}),Q.unsafe(H,Y).values()});return C1.startActiveSpan("drizzle.mapResponse",()=>{return W?W(w):w.map((B)=>uE(G,B,J))})})}all($={}){return C1.startActiveSpan("drizzle.execute",async(X)=>{let Y=YH(this.params,$);return X?.setAttributes({"drizzle.query.text":this.queryString,"drizzle.query.params":JSON.stringify(Y)}),this.logger.logQuery(this.queryString,Y),C1.startActiveSpan("drizzle.driver.execute",()=>{return X?.setAttributes({"drizzle.query.text":this.queryString,"drizzle.query.params":JSON.stringify(Y)}),this.client.unsafe(this.queryString,Y)})})}isResponseInArrayMode(){return this._isResponseInArrayMode}}class z8 extends SH{constructor($,X,Y,G={}){super(X);this.client=$,this.schema=Y,this.options=G,this.logger=G.logger??new oG}static[h]="PostgresJsSession";logger;prepareQuery($,X,Y,G,H){return new MA(this.client,$.sql,$.params,this.logger,X,G,H)}query($,X){return this.logger.logQuery($,X),this.client.unsafe($,X).values()}queryObjects($,X){return this.client.unsafe($,X)}transaction($,X){return this.client.begin(async(Y)=>{let G=new z8(Y,this.dialect,this.schema,this.options),H=new CH(this.dialect,G,this.schema);if(X)await H.setTransaction(X);return $(H)})}}class CH extends IH{constructor($,X,Y,G=0){super($,X,Y,G);this.session=X}static[h]="PostgresJsTransaction";transaction($){return this.session.client.savepoint((X)=>{let Y=new z8(X,this.dialect,this.schema,this.session.options),G=new CH(this.dialect,Y,this.schema);return $(G)})}}class ZA extends K8{static[h]="PostgresJsDatabase"}function n6($,X={}){let Y=(w)=>w;for(let w of["1184","1082","1083","1114"])$.options.parsers[w]=Y,$.options.serializers[w]=Y;$.options.serializers["114"]=Y,$.options.serializers["3802"]=Y;let G=new e4({casing:X.casing}),H;if(X.logger===!0)H=new sG;else if(X.logger!==!1)H=X.logger;let Q;if(X.schema){let w=RA(X.schema,_A);Q={fullSchema:X.schema,schema:w.tables,tableNamesMap:w.tableNamesMap}}let J=new z8($,G,Q,{logger:H}),W=new ZA(G,J,Q);return W.$client=$,W}function bX(...$){if(typeof $[0]==="string"){let X=d6($[0]);return n6(X,$[1])}if(dE($[0])){let{connection:X,client:Y,...G}=$[0];if(Y)return n6(Y,G);if(typeof X==="object"&&X.url!==void 0){let{url:Q,...J}=X,W=d6(Q,J);return n6(W,G)}let H=d6(X);return n6(H,G)}return n6($[0],$[1])}(($)=>{function X(Y){return n6({},Y)}$.mock=X})(bX||(bX={}));var PA=G$(A7(),1);var r6=new PA.default(V6.REDIS_URL,{maxRetriesPerRequest:null});r6.on("ready",()=>{console.log("Redis Connected...")});r6.on("error",($)=>{console.error("Redis Connection Error:",$),process.exit(1)});var Hn=new AX("mail-queue",{connection:r6}),s6=new AX("notification-queue",{connection:r6}),Qn=bX(d6(V6.DATABASE_URL),{logger:!1});class jH{worker;constructor(){this.worker=new jG(s6.name,async($)=>this.processing($),{autorun:!1,connection:r6}),this.worker.on("ready",this.ready),this.worker.on("failed",($,X)=>this.failed(X,$)),this.worker.on("completed",($)=>this.completed($))}failed($,X){if(X)console.error(s6.name,"Job Failed :",X.id,$);else console.error(s6.name,"Job Not Found :",$)}ready=()=>{console.log(s6.name,"Ready...")};completed($){console.log(s6.name,"Job Completed :",$.id)}async processing($){console.log($.data)}}var SA=O2([V9,A9]),IA=[jH];function R8($,X){var Y={};for(var G in $)if(Object.prototype.hasOwnProperty.call($,G)&&X.indexOf(G)<0)Y[G]=$[G];if($!=null&&typeof Object.getOwnPropertySymbols==="function"){for(var H=0,G=Object.getOwnPropertySymbols($);H<G.length;H++)if(X.indexOf(G[H])<0&&Object.prototype.propertyIsEnumerable.call($,G[H]))Y[G[H]]=$[G[H]]}return Y}function O1($,X){var Y;return((Y=$===null||$===void 0?void 0:$._def)===null||Y===void 0?void 0:Y.typeName)===X}function rj($){return"_def"in $}function L8($,X){let Y=$.ZodType.prototype[X];$.ZodType.prototype[X]=function(...G){let H=Y.apply(this,G);return H._def.openapi=this._def.openapi,H}}function jA($){if(typeof $.ZodType.prototype.openapi!=="undefined")return;$.ZodType.prototype.openapi=function(H,Q){var J,W,w,B,U,V;let F=typeof H==="string"?Q:H,E=F!==null&&F!==void 0?F:{},{param:K}=E,A=R8(E,["param"]),P=Object.assign(Object.assign({},(J=this._def.openapi)===null||J===void 0?void 0:J._internal),typeof H==="string"?{refId:H}:void 0),_=Object.assign(Object.assign(Object.assign({},(W=this._def.openapi)===null||W===void 0?void 0:W.metadata),A),((B=(w=this._def.openapi)===null||w===void 0?void 0:w.metadata)===null||B===void 0?void 0:B.param)||K?{param:Object.assign(Object.assign({},(V=(U=this._def.openapi)===null||U===void 0?void 0:U.metadata)===null||V===void 0?void 0:V.param),K)}:void 0),C=new this.constructor(Object.assign(Object.assign({},this._def),{openapi:Object.assign(Object.assign({},Object.keys(P).length>0?{_internal:P}:void 0),Object.keys(_).length>0?{metadata:_}:void 0)}));if(O1(this,"ZodObject")){let b=this.extend;C.extend=function(...T){var p,k,x,S,d,Z;let s=b.apply(this,T);return s._def.openapi={_internal:{extendedFrom:((k=(p=this._def.openapi)===null||p===void 0?void 0:p._internal)===null||k===void 0?void 0:k.refId)?{refId:(S=(x=this._def.openapi)===null||x===void 0?void 0:x._internal)===null||S===void 0?void 0:S.refId,schema:this}:(d=this._def.openapi)===null||d===void 0?void 0:d._internal.extendedFrom},metadata:(Z=s._def.openapi)===null||Z===void 0?void 0:Z.metadata},s}}return C},L8($,"optional"),L8($,"nullable"),L8($,"default"),L8($,"transform"),L8($,"refine");let X=$.ZodObject.prototype.deepPartial;$.ZodObject.prototype.deepPartial=function(){let H=this._def.shape(),Q=X.apply(this),J=Q._def.shape();return Object.entries(J).forEach(([W,w])=>{var B,U;w._def.openapi=(U=(B=H[W])===null||B===void 0?void 0:B._def)===null||U===void 0?void 0:U.openapi}),Q._def.openapi=void 0,Q};let Y=$.ZodObject.prototype.pick;$.ZodObject.prototype.pick=function(...H){let Q=Y.apply(this,H);return Q._def.openapi=void 0,Q};let G=$.ZodObject.prototype.omit;$.ZodObject.prototype.omit=function(...H){let Q=G.apply(this,H);return Q._def.openapi=void 0,Q}}function gX($,X){if($===null||$===void 0||X===null||X===void 0)return $===X;if($===X||$.valueOf()===X.valueOf())return!0;if(Array.isArray($)){if(!Array.isArray(X))return!1;if($.length!==X.length)return!1}if(!($ instanceof Object)||!(X instanceof Object))return!1;let Y=Object.keys($);return Object.keys(X).every((G)=>Y.indexOf(G)!==-1)&&Y.every((G)=>gX($[G],X[G]))}class TA{constructor(){this.buckets=new Map}put($){let X=this.hashCodeOf($),Y=this.buckets.get(X);if(!Y){this.buckets.set(X,[$]);return}if(!Y.some((H)=>gX(H,$)))Y.push($)}contains($){let X=this.hashCodeOf($),Y=this.buckets.get(X);if(!Y)return!1;return Y.some((G)=>gX(G,$))}values(){return[...this.buckets.values()].flat()}stats(){let $=0,X=0,Y=0;for(let H of this.buckets.values())if($+=1,X+=H.length,H.length>1)Y+=1;let G=$/X;return{totalBuckets:$,collisions:Y,totalValues:X,hashEffectiveness:G}}hashCodeOf($){let X=0;if(Array.isArray($)){for(let Y=0;Y<$.length;Y++)X^=this.hashCodeOf($[Y])*Y;return X}if(typeof $==="string"){for(let Y=0;Y<$.length;Y++)X^=$.charCodeAt(Y)*Y;return X}if(typeof $==="number")return $;if(typeof $==="object")for(let[Y,G]of Object.entries($))X^=this.hashCodeOf(Y)+this.hashCodeOf(G!==null&&G!==void 0?G:"");return X}}function D8($){return $===null||$===void 0}function _8($,X){let Y={};return Object.entries($).forEach(([G,H])=>{Y[G]=X(H)}),Y}function sj($,X){let Y={};return Object.entries($).forEach(([G,H])=>{if(!X.some((Q)=>Q===G))Y[G]=H}),Y}function a6($,X){let Y={};return Object.entries($).forEach(([G,H])=>{if(!X(H,G))Y[G]=H}),Y}function CA($){return $.filter((X)=>!D8(X))}var TH=gX;function oj($){let X=new TA;return $.forEach((Y)=>X.put(Y)),[...X.values()]}function kA($){return typeof $==="string"}class kH{constructor($){this.parents=$,this._definitions=[]}get definitions(){var $,X;return[...(X=($=this.parents)===null||$===void 0?void 0:$.flatMap((G)=>G.definitions))!==null&&X!==void 0?X:[],...this._definitions]}register($,X){let Y=this.schemaWithRefId($,X);return this._definitions.push({type:"schema",schema:Y}),Y}registerParameter($,X){var Y,G,H;let Q=this.schemaWithRefId($,X),J=(Y=Q._def.openapi)===null||Y===void 0?void 0:Y.metadata,W=Q.openapi(Object.assign(Object.assign({},J),{param:Object.assign(Object.assign({},J===null||J===void 0?void 0:J.param),{name:(H=(G=J===null||J===void 0?void 0:J.param)===null||G===void 0?void 0:G.name)!==null&&H!==void 0?H:$})}));return this._definitions.push({type:"parameter",schema:W}),W}registerPath($){this._definitions.push({type:"route",route:$})}registerWebhook($){this._definitions.push({type:"webhook",webhook:$})}registerComponent($,X,Y){return this._definitions.push({type:"component",componentType:$,name:X,component:Y}),{name:X,ref:{$ref:`#/components/${$}/${X}`}}}schemaWithRefId($,X){return X.openapi($)}}class q8{constructor($){this.message=$}}class o6 extends q8{constructor($,X){super($);this.data=X}}class N8 extends q8{constructor($){super(`Missing parameter data, please specify \`${$.missingField}\` and other OpenAPI parameter props using the \`param\` field of \`ZodSchema.openapi\``);this.data=$}}function O8($,X){try{return $()}catch(Y){if(Y instanceof N8)throw new N8(Object.assign(Object.assign({},Y.data),X));throw Y}}class xA extends q8{constructor($){super("Unknown zod object type, please specify \`type\` and other OpenAPI props using \`ZodSchema.openapi\`.");this.data=$}}class b1{static getMetadata($){var X;let Y=this.unwrapChained($),G=$._def.openapi?$._def.openapi:Y._def.openapi,H=(X=$.description)!==null&&X!==void 0?X:Y.description;return{_internal:G===null||G===void 0?void 0:G._internal,metadata:Object.assign({description:H},G===null||G===void 0?void 0:G.metadata)}}static getInternalMetadata($){let X=this.unwrapChained($),Y=$._def.openapi?$._def.openapi:X._def.openapi;return Y===null||Y===void 0?void 0:Y._internal}static getParamMetadata($){var X,Y;let G=this.unwrapChained($),H=$._def.openapi?$._def.openapi:G._def.openapi,Q=(X=$.description)!==null&&X!==void 0?X:G.description;return{_internal:H===null||H===void 0?void 0:H._internal,metadata:Object.assign(Object.assign({},H===null||H===void 0?void 0:H.metadata),{param:Object.assign({description:Q},(Y=H===null||H===void 0?void 0:H.metadata)===null||Y===void 0?void 0:Y.param)})}}static buildSchemaMetadata($){return a6(sj($,["param"]),D8)}static buildParameterMetadata($){return a6($,D8)}static applySchemaMetadata($,X){return a6(Object.assign(Object.assign({},$),this.buildSchemaMetadata(X)),D8)}static getRefId($){var X;return(X=this.getInternalMetadata($))===null||X===void 0?void 0:X.refId}static unwrapChained($){return this.unwrapUntil($)}static getDefaultValue($){let X=this.unwrapUntil($,"ZodDefault");return X===null||X===void 0?void 0:X._def.defaultValue()}static unwrapUntil($,X){if(X&&O1($,X))return $;if(O1($,"ZodOptional")||O1($,"ZodNullable")||O1($,"ZodBranded"))return this.unwrapUntil($.unwrap(),X);if(O1($,"ZodDefault")||O1($,"ZodReadonly"))return this.unwrapUntil($._def.innerType,X);if(O1($,"ZodEffects"))return this.unwrapUntil($._def.schema,X);if(O1($,"ZodPipeline"))return this.unwrapUntil($._def.in,X);return X?void 0:$}static isOptionalSchema($){if(O1($,"ZodEffects"))return this.isOptionalSchema($._def.schema);return $.isOptional()}}class vA{transform($,X,Y){var G,H;let Q=$._def.type;return Object.assign(Object.assign({},X("array")),{items:Y(Q),minItems:(G=$._def.minLength)===null||G===void 0?void 0:G.value,maxItems:(H=$._def.maxLength)===null||H===void 0?void 0:H.value})}}class fA{transform($){return Object.assign(Object.assign({},$("string")),{pattern:"^d+$"})}}class hA{transform($,X,Y,G,H){let Q=[...$.options.values()],J=Q.map(G);if(X)return{oneOf:Y(J,X)};return{oneOf:J,discriminator:this.mapDiscriminator(Q,$.discriminator,H)}}mapDiscriminator($,X,Y){if($.some((H)=>b1.getRefId(H)===void 0))return;let G={};return $.forEach((H)=>{var Q;let J=b1.getRefId(H),W=(Q=H.shape)===null||Q===void 0?void 0:Q[X];if(O1(W,"ZodEnum")||O1(W,"ZodNativeEnum")){Object.values(W.enum).filter(kA).forEach((U)=>{G[U]=Y(J)});return}let w=W===null||W===void 0?void 0:W._def.value;if(typeof w!=="string")throw new Error(`Discriminator ${X} could not be found in one of the values of a discriminated union`);G[w]=Y(J)}),{propertyName:X,mapping:G}}}class yA{transform($,X){return Object.assign(Object.assign({},X("string")),{enum:$._def.values})}}class bA{transform($,X,Y,G){let Q={allOf:this.flattenIntersectionTypes($).map(G)};if(X)return{anyOf:Y([Q],X)};return Q}flattenIntersectionTypes($){if(!O1($,"ZodIntersection"))return[$];let X=this.flattenIntersectionTypes($._def.left),Y=this.flattenIntersectionTypes($._def.right);return[...X,...Y]}}class gA{transform($,X){return Object.assign(Object.assign({},X(typeof $._def.value)),{enum:[$._def.value]})}}function aj($){let Y=Object.keys($).filter((Q)=>typeof $[$[Q]]!=="number").map((Q)=>$[Q]),G=Y.filter((Q)=>typeof Q==="number").length,H=G===0?"string":G===Y.length?"numeric":"mixed";return{values:Y,type:H}}class mA{transform($,X){let{type:Y,values:G}=aj($._def.values);if(Y==="mixed")throw new q8("Enum has mixed string and number values, please specify the OpenAPI type manually");return Object.assign(Object.assign({},X(Y==="numeric"?"integer":"string")),{enum:G})}}class uA{transform($,X,Y){return Object.assign(Object.assign({},X($.isInt?"integer":"number")),Y($._def.checks))}}class pA{transform($,X,Y,G){var H;let Q=(H=b1.getInternalMetadata($))===null||H===void 0?void 0:H.extendedFrom,J=this.requiredKeysOf($),W=_8($._def.shape(),G);if(!Q)return Object.assign(Object.assign(Object.assign(Object.assign({},Y("object")),{properties:W,default:X}),J.length>0?{required:J}:{}),this.generateAdditionalProperties($,G));let w=Q.schema;G(w);let B=this.requiredKeysOf(w),U=_8(w===null||w===void 0?void 0:w._def.shape(),G),V=Object.fromEntries(Object.entries(W).filter(([K,A])=>{return!TH(U[K],A)})),F=J.filter((K)=>!B.includes(K)),E=Object.assign(Object.assign(Object.assign(Object.assign({},Y("object")),{default:X,properties:V}),F.length>0?{required:F}:{}),this.generateAdditionalProperties($,G));return{allOf:[{$ref:`#/components/schemas/${Q.refId}`},E]}}generateAdditionalProperties($,X){let Y=$._def.unknownKeys,G=$._def.catchall;if(O1(G,"ZodNever")){if(Y==="strict")return{additionalProperties:!1};return{}}return{additionalProperties:X(G)}}requiredKeysOf($){return Object.entries($._def.shape()).filter(([X,Y])=>!b1.isOptionalSchema(Y)).map(([X,Y])=>X)}}class cA{transform($,X,Y){let G=$._def.valueType,H=$._def.keyType,Q=Y(G);if(O1(H,"ZodEnum")||O1(H,"ZodNativeEnum")){let W=Object.values(H.enum).filter(kA).reduce((w,B)=>Object.assign(Object.assign({},w),{[B]:Q}),{});return Object.assign(Object.assign({},X("object")),{properties:W})}return Object.assign(Object.assign({},X("object")),{additionalProperties:Q})}}class dA{transform($,X){var Y,G,H;let Q=this.getZodStringCheck($,"regex"),J=(Y=this.getZodStringCheck($,"length"))===null||Y===void 0?void 0:Y.value,W=Number.isFinite($.minLength)?(G=$.minLength)!==null&&G!==void 0?G:void 0:void 0,w=Number.isFinite($.maxLength)?(H=$.maxLength)!==null&&H!==void 0?H:void 0:void 0;return Object.assign(Object.assign({},X("string")),{minLength:J!==null&&J!==void 0?J:W,maxLength:J!==null&&J!==void 0?J:w,format:this.mapStringFormat($),pattern:Q===null||Q===void 0?void 0:Q.regex.source})}mapStringFormat($){if($.isUUID)return"uuid";if($.isEmail)return"email";if($.isURL)return"uri";if($.isDatetime)return"date-time";if($.isCUID)return"cuid";if($.isCUID2)return"cuid2";if($.isULID)return"ulid";if($.isIP)return"ip";if($.isEmoji)return"emoji";return}getZodStringCheck($,X){return $._def.checks.find((Y)=>{return Y.kind===X})}}class lA{constructor($){this.versionSpecifics=$}transform($,X,Y){let{items:G}=$._def,H=G.map(Y);return Object.assign(Object.assign({},X("array")),this.versionSpecifics.mapTupleItems(H))}}class iA{transform($,X,Y){let H=this.flattenUnionTypes($).map((Q)=>{let J=this.unwrapNullable(Q);return Y(J)});return{anyOf:X(H)}}flattenUnionTypes($){if(!O1($,"ZodUnion"))return[$];return $._def.options.flatMap((Y)=>this.flattenUnionTypes(Y))}unwrapNullable($){if(O1($,"ZodNullable"))return this.unwrapNullable($.unwrap());return $}}class nA{constructor($){this.versionSpecifics=$,this.objectTransformer=new pA,this.stringTransformer=new dA,this.numberTransformer=new uA,this.bigIntTransformer=new fA,this.literalTransformer=new gA,this.enumTransformer=new yA,this.nativeEnumTransformer=new mA,this.arrayTransformer=new vA,this.unionTransformer=new iA,this.discriminatedUnionTransformer=new hA,this.intersectionTransformer=new bA,this.recordTransformer=new cA,this.tupleTransformer=new lA($)}transform($,X,Y,G,H){if(O1($,"ZodNull"))return this.versionSpecifics.nullType;if(O1($,"ZodUnknown")||O1($,"ZodAny"))return this.versionSpecifics.mapNullableType(void 0,X);if(O1($,"ZodObject"))return this.objectTransformer.transform($,H,(J)=>this.versionSpecifics.mapNullableType(J,X),Y);let Q=this.transformSchemaWithoutDefault($,X,Y,G);return Object.assign(Object.assign({},Q),{default:H})}transformSchemaWithoutDefault($,X,Y,G){if(O1($,"ZodUnknown")||O1($,"ZodAny"))return this.versionSpecifics.mapNullableType(void 0,X);if(O1($,"ZodString"))return this.stringTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X));if(O1($,"ZodNumber"))return this.numberTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X),(Q)=>this.versionSpecifics.getNumberChecks(Q));if(O1($,"ZodBigInt"))return this.bigIntTransformer.transform((Q)=>this.versionSpecifics.mapNullableType(Q,X));if(O1($,"ZodBoolean"))return this.versionSpecifics.mapNullableType("boolean",X);if(O1($,"ZodLiteral"))return this.literalTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X));if(O1($,"ZodEnum"))return this.enumTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X));if(O1($,"ZodNativeEnum"))return this.nativeEnumTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X));if(O1($,"ZodArray"))return this.arrayTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X),Y);if(O1($,"ZodTuple"))return this.tupleTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X),Y);if(O1($,"ZodUnion"))return this.unionTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableOfArray(Q,X),Y);if(O1($,"ZodDiscriminatedUnion"))return this.discriminatedUnionTransformer.transform($,X,(Q)=>this.versionSpecifics.mapNullableOfArray(Q,X),Y,G);if(O1($,"ZodIntersection"))return this.intersectionTransformer.transform($,X,(Q)=>this.versionSpecifics.mapNullableOfArray(Q,X),Y);if(O1($,"ZodRecord"))return this.recordTransformer.transform($,(Q)=>this.versionSpecifics.mapNullableType(Q,X),Y);if(O1($,"ZodDate"))return this.versionSpecifics.mapNullableType("string",X);let H=b1.getRefId($);throw new xA({currentSchema:$._def,schemaName:H})}}class xH{constructor($,X){this.definitions=$,this.versionSpecifics=X,this.schemaRefs={},this.paramRefs={},this.pathRefs={},this.rawComponents=[],this.openApiTransformer=new nA(X),this.sortDefinitions()}generateDocumentData(){return this.definitions.forEach(($)=>this.generateSingle($)),{components:this.buildComponents(),paths:this.pathRefs}}generateComponents(){return this.definitions.forEach(($)=>this.generateSingle($)),{components:this.buildComponents()}}buildComponents(){var $,X;let Y={};return this.rawComponents.forEach(({componentType:G,name:H,component:Q})=>{var J;(J=Y[G])!==null&&J!==void 0||(Y[G]={}),Y[G][H]=Q}),Object.assign(Object.assign({},Y),{schemas:Object.assign(Object.assign({},($=Y.schemas)!==null&&$!==void 0?$:{}),this.schemaRefs),parameters:Object.assign(Object.assign({},(X=Y.parameters)!==null&&X!==void 0?X:{}),this.paramRefs)})}sortDefinitions(){let $=["schema","parameter","component","route"];this.definitions.sort((X,Y)=>{if(!("type"in X)){if(!("type"in Y))return 0;return-1}if(!("type"in Y))return 1;let G=$.findIndex((Q)=>Q===X.type),H=$.findIndex((Q)=>Q===Y.type);return G-H})}generateSingle($){if(!("type"in $)){this.generateSchemaWithRef($);return}switch($.type){case"parameter":this.generateParameterDefinition($.schema);return;case"schema":this.generateSchemaWithRef($.schema);return;case"route":this.generateSingleRoute($.route);return;case"component":this.rawComponents.push($);return}}generateParameterDefinition($){let X=b1.getRefId($),Y=this.generateParameter($);if(X)this.paramRefs[X]=Y;return Y}getParameterRef($,X){var Y,G,H,Q,J;let W=(Y=$===null||$===void 0?void 0:$.metadata)===null||Y===void 0?void 0:Y.param,w=((G=$===null||$===void 0?void 0:$._internal)===null||G===void 0?void 0:G.refId)?this.paramRefs[(H=$._internal)===null||H===void 0?void 0:H.refId]:void 0;if(!((Q=$===null||$===void 0?void 0:$._internal)===null||Q===void 0?void 0:Q.refId)||!w)return;if(W&&w.in!==W.in||(X===null||X===void 0?void 0:X.in)&&w.in!==X.in)throw new o6(`Conflicting location for parameter ${w.name}`,{key:"in",values:CA([w.in,X===null||X===void 0?void 0:X.in,W===null||W===void 0?void 0:W.in])});if(W&&w.name!==W.name||(X===null||X===void 0?void 0:X.name)&&w.name!==(X===null||X===void 0?void 0:X.name))throw new o6("Conflicting names for parameter",{key:"name",values:CA([w.name,X===null||X===void 0?void 0:X.name,W===null||W===void 0?void 0:W.name])});return{$ref:`#/components/parameters/${(J=$._internal)===null||J===void 0?void 0:J.refId}`}}generateInlineParameters($,X){var Y;let G=b1.getMetadata($),H=(Y=G===null||G===void 0?void 0:G.metadata)===null||Y===void 0?void 0:Y.param,Q=this.getParameterRef(G,{in:X});if(Q)return[Q];if(O1($,"ZodObject")){let J=$._def.shape();return Object.entries(J).map(([w,B])=>{var U,V;let F=b1.getMetadata(B),E=this.getParameterRef(F,{in:X,name:w});if(E)return E;let K=(U=F===null||F===void 0?void 0:F.metadata)===null||U===void 0?void 0:U.param;if((K===null||K===void 0?void 0:K.name)&&K.name!==w)throw new o6("Conflicting names for parameter",{key:"name",values:[w,K.name]});if((K===null||K===void 0?void 0:K.in)&&K.in!==X)throw new o6(`Conflicting location for parameter ${(V=K.name)!==null&&V!==void 0?V:w}`,{key:"in",values:[X,K.in]});return this.generateParameter(B.openapi({param:{name:w,in:X}}))})}if((H===null||H===void 0?void 0:H.in)&&H.in!==X)throw new o6(`Conflicting location for parameter ${H.name}`,{key:"in",values:[X,H.in]});return[this.generateParameter($.openapi({param:{in:X}}))]}generateSimpleParameter($){var X;let Y=b1.getParamMetadata($),G=(X=Y===null||Y===void 0?void 0:Y.metadata)===null||X===void 0?void 0:X.param,H=!b1.isOptionalSchema($)&&!$.isNullable(),Q=this.generateSchemaWithRef($);return Object.assign({schema:Q,required:H},G?b1.buildParameterMetadata(G):{})}generateParameter($){var X;let Y=b1.getMetadata($),G=(X=Y===null||Y===void 0?void 0:Y.metadata)===null||X===void 0?void 0:X.param,H=G===null||G===void 0?void 0:G.name,Q=G===null||G===void 0?void 0:G.in;if(!H)throw new N8({missingField:"name"});if(!Q)throw new N8({missingField:"in",paramName:H});let J=this.generateSimpleParameter($);return Object.assign(Object.assign({},J),{in:Q,name:H})}generateSchemaWithMetadata($){var X;let Y=b1.unwrapChained($),G=b1.getMetadata($),H=b1.getDefaultValue($),Q=((X=G===null||G===void 0?void 0:G.metadata)===null||X===void 0?void 0:X.type)?{type:G===null||G===void 0?void 0:G.metadata.type}:this.toOpenAPISchema(Y,$.isNullable(),H);return(G===null||G===void 0?void 0:G.metadata)?b1.applySchemaMetadata(Q,G.metadata):a6(Q,D8)}constructReferencedOpenAPISchema($){var X;let Y=b1.getMetadata($),G=b1.unwrapChained($),H=b1.getDefaultValue($),Q=$.isNullable();if((X=Y===null||Y===void 0?void 0:Y.metadata)===null||X===void 0?void 0:X.type)return this.versionSpecifics.mapNullableType(Y.metadata.type,Q);return this.toOpenAPISchema(G,Q,H)}generateSimpleSchema($){var X;let Y=b1.getMetadata($),G=b1.getRefId($);if(!G||!this.schemaRefs[G])return this.generateSchemaWithMetadata($);let H=this.schemaRefs[G],Q={$ref:this.generateSchemaRef(G)},J=a6(b1.buildSchemaMetadata((X=Y===null||Y===void 0?void 0:Y.metadata)!==null&&X!==void 0?X:{}),(B,U)=>B===void 0||TH(B,H[U]));if(J.type)return{allOf:[Q,J]};let W=a6(this.constructReferencedOpenAPISchema($),(B,U)=>B===void 0||TH(B,H[U])),w=b1.applySchemaMetadata(W,J);if(Object.keys(w).length>0)return{allOf:[Q,w]};return Q}generateSchemaWithRef($){let X=b1.getRefId($),Y=this.generateSimpleSchema($);if(X&&this.schemaRefs[X]===void 0)return this.schemaRefs[X]=Y,{$ref:this.generateSchemaRef(X)};return Y}generateSchemaRef($){return`#/components/schemas/${$}`}getRequestBody($){if(!$)return;let{content:X}=$,Y=R8($,["content"]),G=this.getBodyContent(X);return Object.assign(Object.assign({},Y),{content:G})}getParameters($){if(!$)return[];let{headers:X}=$,Y=this.cleanParameter($.query),G=this.cleanParameter($.params),H=this.cleanParameter($.cookies),Q=O8(()=>Y?this.generateInlineParameters(Y,"query"):[],{location:"query"}),J=O8(()=>G?this.generateInlineParameters(G,"path"):[],{location:"path"}),W=O8(()=>H?this.generateInlineParameters(H,"cookie"):[],{location:"cookie"}),w=O8(()=>{if(Array.isArray(X))return X.flatMap((U)=>this.generateInlineParameters(U,"header"));let B=this.cleanParameter(X);return B?this.generateInlineParameters(B,"header"):[]},{location:"header"});return[...J,...Q,...w,...W]}cleanParameter($){if(!$)return;return O1($,"ZodEffects")?this.cleanParameter($._def.schema):$}generatePath($){let{method:X,path:Y,request:G,responses:H}=$,Q=R8($,["method","path","request","responses"]),J=_8(H,(U)=>{return this.getResponse(U)}),W=O8(()=>this.getParameters(G),{route:`${X} ${Y}`}),w=this.getRequestBody(G===null||G===void 0?void 0:G.body);return{[X]:Object.assign(Object.assign(Object.assign(Object.assign({},Q),W.length>0?{parameters:[...Q.parameters||[],...W]}:{}),w?{requestBody:w}:{}),{responses:J})}}generateSingleRoute($){let X=this.generatePath($);return this.pathRefs[$.path]=Object.assign(Object.assign({},this.pathRefs[$.path]),X),X}getResponse($){var{content:X,headers:Y}=$,G=R8($,["content","headers"]);let H=X?{content:this.getBodyContent(X)}:{};if(!Y)return Object.assign(Object.assign({},G),H);let Q=O1(Y,"ZodObject")?this.getResponseHeaders(Y):Y;return Object.assign(Object.assign(Object.assign({},G),{headers:Q}),H)}getResponseHeaders($){let X=$._def.shape();return _8(X,(G)=>this.generateSimpleParameter(G))}getBodyContent($){return _8($,(X)=>{if(!X||!rj(X.schema))return X;let{schema:Y}=X,G=R8(X,["schema"]),H=this.generateSchemaWithRef(Y);return Object.assign({schema:H},G)})}toOpenAPISchema($,X,Y){return this.openApiTransformer.transform($,X,(G)=>this.generateSchemaWithRef(G),(G)=>this.generateSchemaRef(G),Y)}}class rA{get nullType(){return{nullable:!0}}mapNullableOfArray($,X){if(X)return[...$,this.nullType];return $}mapNullableType($,X){return Object.assign(Object.assign({},$?{type:$}:void 0),X?this.nullType:void 0)}mapTupleItems($){let X=oj($);return{items:X.length===1?X[0]:{anyOf:X},minItems:$.length,maxItems:$.length}}getNumberChecks($){return Object.assign({},...$.map((X)=>{switch(X.kind){case"min":return X.inclusive?{minimum:Number(X.value)}:{minimum:Number(X.value),exclusiveMinimum:!0};case"max":return X.inclusive?{maximum:Number(X.value)}:{maximum:Number(X.value),exclusiveMaximum:!0};default:return{}}}))}}class vH{constructor($){let X=new rA;this.generator=new xH($,X)}generateDocument($){let X=this.generator.generateDocumentData();return Object.assign(Object.assign({},$),X)}generateComponents(){return this.generator.generateComponents()}}class sA{get nullType(){return{type:"null"}}mapNullableOfArray($,X){if(X)return[...$,this.nullType];return $}mapNullableType($,X){if(!$)return{};if(X)return{type:Array.isArray($)?[...$,"null"]:[$,"null"]};return{type:$}}mapTupleItems($){return{prefixItems:$}}getNumberChecks($){return Object.assign({},...$.map((X)=>{switch(X.kind){case"min":return X.inclusive?{minimum:Number(X.value)}:{exclusiveMinimum:Number(X.value)};case"max":return X.inclusive?{maximum:Number(X.value)}:{exclusiveMaximum:Number(X.value)};default:return{}}}))}}function tj($){return"type"in $&&$.type==="webhook"}class fH{constructor($){this.definitions=$,this.webhookRefs={};let X=new sA;this.generator=new xH(this.definitions,X)}generateDocument($){let X=this.generator.generateDocumentData();return this.definitions.filter(tj).forEach((Y)=>this.generateSingleWebhook(Y.webhook)),Object.assign(Object.assign(Object.assign({},$),X),{webhooks:this.webhookRefs})}generateComponents(){return this.generator.generateComponents()}generateSingleWebhook($){let X=this.generator.generatePath($);return this.webhookRefs[$.path]=Object.assign(Object.assign({},this.webhookRefs[$.path]),X),X}}var ej=/^[\w!#$%&'*.^`|~+-]+$/,$T=/^[ !#-:<-[\]-~]*$/,hH=($,X)=>{return $.trim().split(";").reduce((G,H)=>{H=H.trim();let Q=H.indexOf("=");if(Q===-1)return G;let J=H.substring(0,Q).trim();if(X&&X!==J||!ej.test(J))return G;let W=H.substring(Q+1).trim();if(W.startsWith('"')&&W.endsWith('"'))W=W.slice(1,-1);if($T.test(W))G[J]=W6(W);return G},{})};var oA=($,X,Y)=>{let G=$.req.raw.headers.get("Cookie");if(typeof X==="string"){if(!G)return;let Q=X;if(Y==="secure")Q="__Secure-"+X;else if(Y==="host")Q="__Host-"+X;return hH(G,Q)[Q]}if(!G)return{};return hH(G)};var aA=($,X)=>{return new Response($,{headers:{"Content-Type":X}}).formData()};var XT=/^application\/([a-z-\.]+\+)?json(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/,YT=/^multipart\/form-data(;\s?boundary=[a-zA-Z0-9'"()+_,\-./:=?]+)?$/,GT=/^application\/x-www-form-urlencoded(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/,yH=($,X)=>{return async(Y,G)=>{let H={},Q=Y.req.header("Content-Type");switch($){case"json":if(!Q||!XT.test(Q))break;try{H=await Y.req.json()}catch{throw new o$(400,{message:"Malformed JSON in request body"})}break;case"form":{if(!Q||!(YT.test(Q)||GT.test(Q)))break;let W;if(Y.req.bodyCache.formData)W=await Y.req.bodyCache.formData;else try{let B=await Y.req.arrayBuffer();W=await aA(B,Q),Y.req.bodyCache.formData=W}catch(B){let U="Malformed FormData request.";throw U+=B instanceof Error?` ${B.message}`:` ${String(B)}`,new o$(400,{message:U})}let w={};W.forEach((B,U)=>{if(U.endsWith("[]"))(w[U]??=[]).push(B);else if(Array.isArray(w[U]))w[U].push(B);else if(U in w)w[U]=[w[U],B];else w[U]=B}),H=w;break}case"query":H=Object.fromEntries(Object.entries(Y.req.queries()).map(([W,w])=>{return w.length===1?[W,w[0]]:[W,w]}));break;case"param":H=Y.req.param();break;case"header":H=Y.req.header();break;case"cookie":H=oA(Y);break}let J=await X(H,Y);if(J instanceof Response)return J;Y.req.addValidatedData($,J),await G()}};var $6=($,X,Y)=>yH($,async(G,H)=>{let Q=await X.safeParseAsync(G);if(Y){let J=await Y({data:G,...Q,target:$},H);if(J){if(J instanceof Response)return J;if("response"in J)return J.response}}if(!Q.success)return H.json(Q,400);return Q.data});var M1;(function($){$.assertEqual=(H)=>H;function X(H){}$.assertIs=X;function Y(H){throw new Error}$.assertNever=Y,$.arrayToEnum=(H)=>{let Q={};for(let J of H)Q[J]=J;return Q},$.getValidEnumValues=(H)=>{let Q=$.objectKeys(H).filter((W)=>typeof H[H[W]]!=="number"),J={};for(let W of Q)J[W]=H[W];return $.objectValues(J)},$.objectValues=(H)=>{return $.objectKeys(H).map(function(Q){return H[Q]})},$.objectKeys=typeof Object.keys==="function"?(H)=>Object.keys(H):(H)=>{let Q=[];for(let J in H)if(Object.prototype.hasOwnProperty.call(H,J))Q.push(J);return Q},$.find=(H,Q)=>{for(let J of H)if(Q(J))return J;return},$.isInteger=typeof Number.isInteger==="function"?(H)=>Number.isInteger(H):(H)=>typeof H==="number"&&isFinite(H)&&Math.floor(H)===H;function G(H,Q=" | "){return H.map((J)=>typeof J==="string"?`'${J}'`:J).join(Q)}$.joinValues=G,$.jsonStringifyReplacer=(H,Q)=>{if(typeof Q==="bigint")return Q.toString();return Q}})(M1||(M1={}));var gH;(function($){$.mergeShapes=(X,Y)=>{return{...X,...Y}}})(gH||(gH={}));var a=M1.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),R4=($)=>{switch(typeof $){case"undefined":return a.undefined;case"string":return a.string;case"number":return isNaN($)?a.nan:a.number;case"boolean":return a.boolean;case"function":return a.function;case"bigint":return a.bigint;case"symbol":return a.symbol;case"object":if(Array.isArray($))return a.array;if($===null)return a.null;if($.then&&typeof $.then==="function"&&$.catch&&typeof $.catch==="function")return a.promise;if(typeof Map!=="undefined"&&$ instanceof Map)return a.map;if(typeof Set!=="undefined"&&$ instanceof Set)return a.set;if(typeof Date!=="undefined"&&$ instanceof Date)return a.date;return a.object;default:return a.unknown}},g=M1.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),HT=($)=>{return JSON.stringify($,null,2).replace(/"([^"]+)":/g,"$1:")};class c0 extends Error{constructor($){super();this.issues=[],this.addIssue=(Y)=>{this.issues=[...this.issues,Y]},this.addIssues=(Y=[])=>{this.issues=[...this.issues,...Y]};let X=new.target.prototype;if(Object.setPrototypeOf)Object.setPrototypeOf(this,X);else this.__proto__=X;this.name="ZodError",this.issues=$}get errors(){return this.issues}format($){let X=$||function(H){return H.message},Y={_errors:[]},G=(H)=>{for(let Q of H.issues)if(Q.code==="invalid_union")Q.unionErrors.map(G);else if(Q.code==="invalid_return_type")G(Q.returnTypeError);else if(Q.code==="invalid_arguments")G(Q.argumentsError);else if(Q.path.length===0)Y._errors.push(X(Q));else{let J=Y,W=0;while(W<Q.path.length){let w=Q.path[W];if(W!==Q.path.length-1)J[w]=J[w]||{_errors:[]};else J[w]=J[w]||{_errors:[]},J[w]._errors.push(X(Q));J=J[w],W++}}};return G(this),Y}static assert($){if(!($ instanceof c0))throw new Error(`Not a ZodError: ${$}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,M1.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten($=(X)=>X.message){let X={},Y=[];for(let G of this.issues)if(G.path.length>0)X[G.path[0]]=X[G.path[0]]||[],X[G.path[0]].push($(G));else Y.push($(G));return{formErrors:Y,fieldErrors:X}}get formErrors(){return this.flatten()}}c0.create=($)=>{return new c0($)};var X5=($,X)=>{let Y;switch($.code){case g.invalid_type:if($.received===a.undefined)Y="Required";else Y=`Expected ${$.expected}, received ${$.received}`;break;case g.invalid_literal:Y=`Invalid literal value, expected ${JSON.stringify($.expected,M1.jsonStringifyReplacer)}`;break;case g.unrecognized_keys:Y=`Unrecognized key(s) in object: ${M1.joinValues($.keys,", ")}`;break;case g.invalid_union:Y="Invalid input";break;case g.invalid_union_discriminator:Y=`Invalid discriminator value. Expected ${M1.joinValues($.options)}`;break;case g.invalid_enum_value:Y=`Invalid enum value. Expected ${M1.joinValues($.options)}, received '${$.received}'`;break;case g.invalid_arguments:Y="Invalid function arguments";break;case g.invalid_return_type:Y="Invalid function return type";break;case g.invalid_date:Y="Invalid date";break;case g.invalid_string:if(typeof $.validation==="object")if("includes"in $.validation){if(Y=`Invalid input: must include "${$.validation.includes}"`,typeof $.validation.position==="number")Y=`${Y} at one or more positions greater than or equal to ${$.validation.position}`}else if("startsWith"in $.validation)Y=`Invalid input: must start with "${$.validation.startsWith}"`;else if("endsWith"in $.validation)Y=`Invalid input: must end with "${$.validation.endsWith}"`;else M1.assertNever($.validation);else if($.validation!=="regex")Y=`Invalid ${$.validation}`;else Y="Invalid";break;case g.too_small:if($.type==="array")Y=`Array must contain ${$.exact?"exactly":$.inclusive?"at least":"more than"} ${$.minimum} element(s)`;else if($.type==="string")Y=`String must contain ${$.exact?"exactly":$.inclusive?"at least":"over"} ${$.minimum} character(s)`;else if($.type==="number")Y=`Number must be ${$.exact?"exactly equal to ":$.inclusive?"greater than or equal to ":"greater than "}${$.minimum}`;else if($.type==="date")Y=`Date must be ${$.exact?"exactly equal to ":$.inclusive?"greater than or equal to ":"greater than "}${new Date(Number($.minimum))}`;else Y="Invalid input";break;case g.too_big:if($.type==="array")Y=`Array must contain ${$.exact?"exactly":$.inclusive?"at most":"less than"} ${$.maximum} element(s)`;else if($.type==="string")Y=`String must contain ${$.exact?"exactly":$.inclusive?"at most":"under"} ${$.maximum} character(s)`;else if($.type==="number")Y=`Number must be ${$.exact?"exactly":$.inclusive?"less than or equal to":"less than"} ${$.maximum}`;else if($.type==="bigint")Y=`BigInt must be ${$.exact?"exactly":$.inclusive?"less than or equal to":"less than"} ${$.maximum}`;else if($.type==="date")Y=`Date must be ${$.exact?"exactly":$.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number($.maximum))}`;else Y="Invalid input";break;case g.custom:Y="Invalid input";break;case g.invalid_intersection_types:Y="Intersection results could not be merged";break;case g.not_multiple_of:Y=`Number must be a multiple of ${$.multipleOf}`;break;case g.not_finite:Y="Number must be finite";break;default:Y=X.defaultError,M1.assertNever($)}return{message:Y}},$K=X5;function QT($){$K=$}function mX(){return $K}var uX=($)=>{let{data:X,path:Y,errorMaps:G,issueData:H}=$,Q=[...Y,...H.path||[]],J={...H,path:Q};if(H.message!==void 0)return{...H,path:Q,message:H.message};let W="",w=G.filter((B)=>!!B).slice().reverse();for(let B of w)W=B(J,{data:X,defaultError:W}).message;return{...H,path:Q,message:W}},JT=[];function r($,X){let Y=mX(),G=uX({issueData:X,data:$.data,path:$.path,errorMaps:[$.common.contextualErrorMap,$.schemaErrorMap,Y,Y===X5?void 0:X5].filter((H)=>!!H)});$.common.issues.push(G)}class L0{constructor(){this.value="valid"}dirty(){if(this.value==="valid")this.value="dirty"}abort(){if(this.value!=="aborted")this.value="aborted"}static mergeArray($,X){let Y=[];for(let G of X){if(G.status==="aborted")return V1;if(G.status==="dirty")$.dirty();Y.push(G.value)}return{status:$.value,value:Y}}static async mergeObjectAsync($,X){let Y=[];for(let G of X){let H=await G.key,Q=await G.value;Y.push({key:H,value:Q})}return L0.mergeObjectSync($,Y)}static mergeObjectSync($,X){let Y={};for(let G of X){let{key:H,value:Q}=G;if(H.status==="aborted")return V1;if(Q.status==="aborted")return V1;if(H.status==="dirty")$.dirty();if(Q.status==="dirty")$.dirty();if(H.value!=="__proto__"&&(typeof Q.value!=="undefined"||G.alwaysSet))Y[H.value]=Q.value}return{status:$.value,value:Y}}}var V1=Object.freeze({status:"aborted"}),e6=($)=>({status:"dirty",value:$}),P0=($)=>({status:"valid",value:$}),mH=($)=>$.status==="aborted",uH=($)=>$.status==="dirty",P8=($)=>$.status==="valid",S8=($)=>typeof Promise!=="undefined"&&$ instanceof Promise;function pX($,X,Y,G){if(Y==="a"&&!G)throw new TypeError("Private accessor was defined without a getter");if(typeof X==="function"?$!==X||!G:!X.has($))throw new TypeError("Cannot read private member from an object whose class did not declare it");return Y==="m"?G:Y==="a"?G.call($):G?G.value:X.get($)}function XK($,X,Y,G,H){if(G==="m")throw new TypeError("Private method is not writable");if(G==="a"&&!H)throw new TypeError("Private accessor was defined without a setter");if(typeof X==="function"?$!==X||!H:!X.has($))throw new TypeError("Cannot write private member to an object whose class did not declare it");return G==="a"?H.call($,Y):H?H.value=Y:X.set($,Y),Y}var Q1;(function($){$.errToObj=(X)=>typeof X==="string"?{message:X}:X||{},$.toString=(X)=>typeof X==="string"?X:X===null||X===void 0?void 0:X.message})(Q1||(Q1={}));var M8,Z8;class z${constructor($,X,Y,G){this._cachedPath=[],this.parent=$,this.data=X,this._path=Y,this._key=G}get path(){if(!this._cachedPath.length)if(this._key instanceof Array)this._cachedPath.push(...this._path,...this._key);else this._cachedPath.push(...this._path,this._key);return this._cachedPath}}var tA=($,X)=>{if(P8(X))return{success:!0,data:X.value};else{if(!$.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let Y=new c0($.common.issues);return this._error=Y,this._error}}}};function L1($){if(!$)return{};let{errorMap:X,invalid_type_error:Y,required_error:G,description:H}=$;if(X&&(Y||G))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);if(X)return{errorMap:X,description:H};return{errorMap:(J,W)=>{var w,B;let{message:U}=$;if(J.code==="invalid_enum_value")return{message:U!==null&&U!==void 0?U:W.defaultError};if(typeof W.data==="undefined")return{message:(w=U!==null&&U!==void 0?U:G)!==null&&w!==void 0?w:W.defaultError};if(J.code!=="invalid_type")return{message:W.defaultError};return{message:(B=U!==null&&U!==void 0?U:Y)!==null&&B!==void 0?B:W.defaultError}},description:H}}class z1{constructor($){this.spa=this.safeParseAsync,this._def=$,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType($){return R4($.data)}_getOrReturnCtx($,X){return X||{common:$.parent.common,data:$.data,parsedType:R4($.data),schemaErrorMap:this._def.errorMap,path:$.path,parent:$.parent}}_processInputParams($){return{status:new L0,ctx:{common:$.parent.common,data:$.data,parsedType:R4($.data),schemaErrorMap:this._def.errorMap,path:$.path,parent:$.parent}}}_parseSync($){let X=this._parse($);if(S8(X))throw new Error("Synchronous parse encountered promise.");return X}_parseAsync($){let X=this._parse($);return Promise.resolve(X)}parse($,X){let Y=this.safeParse($,X);if(Y.success)return Y.data;throw Y.error}safeParse($,X){var Y;let G={common:{issues:[],async:(Y=X===null||X===void 0?void 0:X.async)!==null&&Y!==void 0?Y:!1,contextualErrorMap:X===null||X===void 0?void 0:X.errorMap},path:(X===null||X===void 0?void 0:X.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:$,parsedType:R4($)},H=this._parseSync({data:$,path:G.path,parent:G});return tA(G,H)}async parseAsync($,X){let Y=await this.safeParseAsync($,X);if(Y.success)return Y.data;throw Y.error}async safeParseAsync($,X){let Y={common:{issues:[],contextualErrorMap:X===null||X===void 0?void 0:X.errorMap,async:!0},path:(X===null||X===void 0?void 0:X.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:$,parsedType:R4($)},G=this._parse({data:$,path:Y.path,parent:Y}),H=await(S8(G)?G:Promise.resolve(G));return tA(Y,H)}refine($,X){let Y=(G)=>{if(typeof X==="string"||typeof X==="undefined")return{message:X};else if(typeof X==="function")return X(G);else return X};return this._refinement((G,H)=>{let Q=$(G),J=()=>H.addIssue({code:g.custom,...Y(G)});if(typeof Promise!=="undefined"&&Q instanceof Promise)return Q.then((W)=>{if(!W)return J(),!1;else return!0});if(!Q)return J(),!1;else return!0})}refinement($,X){return this._refinement((Y,G)=>{if(!$(Y))return G.addIssue(typeof X==="function"?X(Y,G):X),!1;else return!0})}_refinement($){return new $$({schema:this,typeName:B1.ZodEffects,effect:{type:"refinement",refinement:$}})}superRefine($){return this._refinement($)}optional(){return K$.create(this,this._def)}nullable(){return l$.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return A$.create(this,this._def)}promise(){return H6.create(this,this._def)}or($){return Q5.create([this,$],this._def)}and($){return J5.create(this,$,this._def)}transform($){return new $$({...L1(this._def),schema:this,typeName:B1.ZodEffects,effect:{type:"transform",transform:$}})}default($){let X=typeof $==="function"?$:()=>$;return new U5({...L1(this._def),innerType:this,defaultValue:X,typeName:B1.ZodDefault})}brand(){return new dX({typeName:B1.ZodBranded,type:this,...L1(this._def)})}catch($){let X=typeof $==="function"?$:()=>$;return new V5({...L1(this._def),innerType:this,catchValue:X,typeName:B1.ZodCatch})}describe($){return new this.constructor({...this._def,description:$})}pipe($){return x8.create(this,$)}readonly(){return F5.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}var WT=/^c[^\s-]{8,}$/i,wT=/^[0-9a-z]+$/,BT=/^[0-9A-HJKMNP-TV-Z]{26}$/,UT=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,VT=/^[a-z0-9_-]{21}$/i,FT=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,ET=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,AT="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",bH,KT=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,zT=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,LT=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,YK="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",OT=new RegExp(`^${YK}\$`);function GK($){let X="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";if($.precision)X=`${X}\\.\\d{${$.precision}}`;else if($.precision==null)X=`${X}(\\.\\d+)?`;return X}function RT($){return new RegExp(`^${GK($)}\$`)}function HK($){let X=`${YK}T${GK($)}`,Y=[];if(Y.push($.local?"Z?":"Z"),$.offset)Y.push("([+-]\\d{2}:?\\d{2})");return X=`${X}(${Y.join("|")})`,new RegExp(`^${X}\$`)}function DT($,X){if((X==="v4"||!X)&&KT.test($))return!0;if((X==="v6"||!X)&&zT.test($))return!0;return!1}class E$ extends z1{_parse($){if(this._def.coerce)$.data=String($.data);if(this._getType($)!==a.string){let H=this._getOrReturnCtx($);return r(H,{code:g.invalid_type,expected:a.string,received:H.parsedType}),V1}let Y=new L0,G=void 0;for(let H of this._def.checks)if(H.kind==="min"){if($.data.length<H.value)G=this._getOrReturnCtx($,G),r(G,{code:g.too_small,minimum:H.value,type:"string",inclusive:!0,exact:!1,message:H.message}),Y.dirty()}else if(H.kind==="max"){if($.data.length>H.value)G=this._getOrReturnCtx($,G),r(G,{code:g.too_big,maximum:H.value,type:"string",inclusive:!0,exact:!1,message:H.message}),Y.dirty()}else if(H.kind==="length"){let Q=$.data.length>H.value,J=$.data.length<H.value;if(Q||J){if(G=this._getOrReturnCtx($,G),Q)r(G,{code:g.too_big,maximum:H.value,type:"string",inclusive:!0,exact:!0,message:H.message});else if(J)r(G,{code:g.too_small,minimum:H.value,type:"string",inclusive:!0,exact:!0,message:H.message});Y.dirty()}}else if(H.kind==="email"){if(!ET.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"email",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="emoji"){if(!bH)bH=new RegExp(AT,"u");if(!bH.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"emoji",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="uuid"){if(!UT.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"uuid",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="nanoid"){if(!VT.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"nanoid",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="cuid"){if(!WT.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"cuid",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="cuid2"){if(!wT.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"cuid2",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="ulid"){if(!BT.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"ulid",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="url")try{new URL($.data)}catch(Q){G=this._getOrReturnCtx($,G),r(G,{validation:"url",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="regex"){if(H.regex.lastIndex=0,!H.regex.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"regex",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="trim")$.data=$.data.trim();else if(H.kind==="includes"){if(!$.data.includes(H.value,H.position))G=this._getOrReturnCtx($,G),r(G,{code:g.invalid_string,validation:{includes:H.value,position:H.position},message:H.message}),Y.dirty()}else if(H.kind==="toLowerCase")$.data=$.data.toLowerCase();else if(H.kind==="toUpperCase")$.data=$.data.toUpperCase();else if(H.kind==="startsWith"){if(!$.data.startsWith(H.value))G=this._getOrReturnCtx($,G),r(G,{code:g.invalid_string,validation:{startsWith:H.value},message:H.message}),Y.dirty()}else if(H.kind==="endsWith"){if(!$.data.endsWith(H.value))G=this._getOrReturnCtx($,G),r(G,{code:g.invalid_string,validation:{endsWith:H.value},message:H.message}),Y.dirty()}else if(H.kind==="datetime"){if(!HK(H).test($.data))G=this._getOrReturnCtx($,G),r(G,{code:g.invalid_string,validation:"datetime",message:H.message}),Y.dirty()}else if(H.kind==="date"){if(!OT.test($.data))G=this._getOrReturnCtx($,G),r(G,{code:g.invalid_string,validation:"date",message:H.message}),Y.dirty()}else if(H.kind==="time"){if(!RT(H).test($.data))G=this._getOrReturnCtx($,G),r(G,{code:g.invalid_string,validation:"time",message:H.message}),Y.dirty()}else if(H.kind==="duration"){if(!FT.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"duration",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="ip"){if(!DT($.data,H.version))G=this._getOrReturnCtx($,G),r(G,{validation:"ip",code:g.invalid_string,message:H.message}),Y.dirty()}else if(H.kind==="base64"){if(!LT.test($.data))G=this._getOrReturnCtx($,G),r(G,{validation:"base64",code:g.invalid_string,message:H.message}),Y.dirty()}else M1.assertNever(H);return{status:Y.value,value:$.data}}_regex($,X,Y){return this.refinement((G)=>$.test(G),{validation:X,code:g.invalid_string,...Q1.errToObj(Y)})}_addCheck($){return new E$({...this._def,checks:[...this._def.checks,$]})}email($){return this._addCheck({kind:"email",...Q1.errToObj($)})}url($){return this._addCheck({kind:"url",...Q1.errToObj($)})}emoji($){return this._addCheck({kind:"emoji",...Q1.errToObj($)})}uuid($){return this._addCheck({kind:"uuid",...Q1.errToObj($)})}nanoid($){return this._addCheck({kind:"nanoid",...Q1.errToObj($)})}cuid($){return this._addCheck({kind:"cuid",...Q1.errToObj($)})}cuid2($){return this._addCheck({kind:"cuid2",...Q1.errToObj($)})}ulid($){return this._addCheck({kind:"ulid",...Q1.errToObj($)})}base64($){return this._addCheck({kind:"base64",...Q1.errToObj($)})}ip($){return this._addCheck({kind:"ip",...Q1.errToObj($)})}datetime($){var X,Y;if(typeof $==="string")return this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:$});return this._addCheck({kind:"datetime",precision:typeof($===null||$===void 0?void 0:$.precision)==="undefined"?null:$===null||$===void 0?void 0:$.precision,offset:(X=$===null||$===void 0?void 0:$.offset)!==null&&X!==void 0?X:!1,local:(Y=$===null||$===void 0?void 0:$.local)!==null&&Y!==void 0?Y:!1,...Q1.errToObj($===null||$===void 0?void 0:$.message)})}date($){return this._addCheck({kind:"date",message:$})}time($){if(typeof $==="string")return this._addCheck({kind:"time",precision:null,message:$});return this._addCheck({kind:"time",precision:typeof($===null||$===void 0?void 0:$.precision)==="undefined"?null:$===null||$===void 0?void 0:$.precision,...Q1.errToObj($===null||$===void 0?void 0:$.message)})}duration($){return this._addCheck({kind:"duration",...Q1.errToObj($)})}regex($,X){return this._addCheck({kind:"regex",regex:$,...Q1.errToObj(X)})}includes($,X){return this._addCheck({kind:"includes",value:$,position:X===null||X===void 0?void 0:X.position,...Q1.errToObj(X===null||X===void 0?void 0:X.message)})}startsWith($,X){return this._addCheck({kind:"startsWith",value:$,...Q1.errToObj(X)})}endsWith($,X){return this._addCheck({kind:"endsWith",value:$,...Q1.errToObj(X)})}min($,X){return this._addCheck({kind:"min",value:$,...Q1.errToObj(X)})}max($,X){return this._addCheck({kind:"max",value:$,...Q1.errToObj(X)})}length($,X){return this._addCheck({kind:"length",value:$,...Q1.errToObj(X)})}nonempty($){return this.min(1,Q1.errToObj($))}trim(){return new E$({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new E$({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new E$({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(($)=>$.kind==="datetime")}get isDate(){return!!this._def.checks.find(($)=>$.kind==="date")}get isTime(){return!!this._def.checks.find(($)=>$.kind==="time")}get isDuration(){return!!this._def.checks.find(($)=>$.kind==="duration")}get isEmail(){return!!this._def.checks.find(($)=>$.kind==="email")}get isURL(){return!!this._def.checks.find(($)=>$.kind==="url")}get isEmoji(){return!!this._def.checks.find(($)=>$.kind==="emoji")}get isUUID(){return!!this._def.checks.find(($)=>$.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(($)=>$.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(($)=>$.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(($)=>$.kind==="cuid2")}get isULID(){return!!this._def.checks.find(($)=>$.kind==="ulid")}get isIP(){return!!this._def.checks.find(($)=>$.kind==="ip")}get isBase64(){return!!this._def.checks.find(($)=>$.kind==="base64")}get minLength(){let $=null;for(let X of this._def.checks)if(X.kind==="min"){if($===null||X.value>$)$=X.value}return $}get maxLength(){let $=null;for(let X of this._def.checks)if(X.kind==="max"){if($===null||X.value<$)$=X.value}return $}}E$.create=($)=>{var X;return new E$({checks:[],typeName:B1.ZodString,coerce:(X=$===null||$===void 0?void 0:$.coerce)!==null&&X!==void 0?X:!1,...L1($)})};function _T($,X){let Y=($.toString().split(".")[1]||"").length,G=(X.toString().split(".")[1]||"").length,H=Y>G?Y:G,Q=parseInt($.toFixed(H).replace(".","")),J=parseInt(X.toFixed(H).replace(".",""));return Q%J/Math.pow(10,H)}class _4 extends z1{constructor(){super(...arguments);this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse($){if(this._def.coerce)$.data=Number($.data);if(this._getType($)!==a.number){let H=this._getOrReturnCtx($);return r(H,{code:g.invalid_type,expected:a.number,received:H.parsedType}),V1}let Y=void 0,G=new L0;for(let H of this._def.checks)if(H.kind==="int"){if(!M1.isInteger($.data))Y=this._getOrReturnCtx($,Y),r(Y,{code:g.invalid_type,expected:"integer",received:"float",message:H.message}),G.dirty()}else if(H.kind==="min"){if(H.inclusive?$.data<H.value:$.data<=H.value)Y=this._getOrReturnCtx($,Y),r(Y,{code:g.too_small,minimum:H.value,type:"number",inclusive:H.inclusive,exact:!1,message:H.message}),G.dirty()}else if(H.kind==="max"){if(H.inclusive?$.data>H.value:$.data>=H.value)Y=this._getOrReturnCtx($,Y),r(Y,{code:g.too_big,maximum:H.value,type:"number",inclusive:H.inclusive,exact:!1,message:H.message}),G.dirty()}else if(H.kind==="multipleOf"){if(_T($.data,H.value)!==0)Y=this._getOrReturnCtx($,Y),r(Y,{code:g.not_multiple_of,multipleOf:H.value,message:H.message}),G.dirty()}else if(H.kind==="finite"){if(!Number.isFinite($.data))Y=this._getOrReturnCtx($,Y),r(Y,{code:g.not_finite,message:H.message}),G.dirty()}else M1.assertNever(H);return{status:G.value,value:$.data}}gte($,X){return this.setLimit("min",$,!0,Q1.toString(X))}gt($,X){return this.setLimit("min",$,!1,Q1.toString(X))}lte($,X){return this.setLimit("max",$,!0,Q1.toString(X))}lt($,X){return this.setLimit("max",$,!1,Q1.toString(X))}setLimit($,X,Y,G){return new _4({...this._def,checks:[...this._def.checks,{kind:$,value:X,inclusive:Y,message:Q1.toString(G)}]})}_addCheck($){return new _4({...this._def,checks:[...this._def.checks,$]})}int($){return this._addCheck({kind:"int",message:Q1.toString($)})}positive($){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Q1.toString($)})}negative($){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Q1.toString($)})}nonpositive($){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Q1.toString($)})}nonnegative($){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Q1.toString($)})}multipleOf($,X){return this._addCheck({kind:"multipleOf",value:$,message:Q1.toString(X)})}finite($){return this._addCheck({kind:"finite",message:Q1.toString($)})}safe($){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Q1.toString($)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Q1.toString($)})}get minValue(){let $=null;for(let X of this._def.checks)if(X.kind==="min"){if($===null||X.value>$)$=X.value}return $}get maxValue(){let $=null;for(let X of this._def.checks)if(X.kind==="max"){if($===null||X.value<$)$=X.value}return $}get isInt(){return!!this._def.checks.find(($)=>$.kind==="int"||$.kind==="multipleOf"&&M1.isInteger($.value))}get isFinite(){let $=null,X=null;for(let Y of this._def.checks)if(Y.kind==="finite"||Y.kind==="int"||Y.kind==="multipleOf")return!0;else if(Y.kind==="min"){if(X===null||Y.value>X)X=Y.value}else if(Y.kind==="max"){if($===null||Y.value<$)$=Y.value}return Number.isFinite(X)&&Number.isFinite($)}}_4.create=($)=>{return new _4({checks:[],typeName:B1.ZodNumber,coerce:($===null||$===void 0?void 0:$.coerce)||!1,...L1($)})};class N4 extends z1{constructor(){super(...arguments);this.min=this.gte,this.max=this.lte}_parse($){if(this._def.coerce)$.data=BigInt($.data);if(this._getType($)!==a.bigint){let H=this._getOrReturnCtx($);return r(H,{code:g.invalid_type,expected:a.bigint,received:H.parsedType}),V1}let Y=void 0,G=new L0;for(let H of this._def.checks)if(H.kind==="min"){if(H.inclusive?$.data<H.value:$.data<=H.value)Y=this._getOrReturnCtx($,Y),r(Y,{code:g.too_small,type:"bigint",minimum:H.value,inclusive:H.inclusive,message:H.message}),G.dirty()}else if(H.kind==="max"){if(H.inclusive?$.data>H.value:$.data>=H.value)Y=this._getOrReturnCtx($,Y),r(Y,{code:g.too_big,type:"bigint",maximum:H.value,inclusive:H.inclusive,message:H.message}),G.dirty()}else if(H.kind==="multipleOf"){if($.data%H.value!==BigInt(0))Y=this._getOrReturnCtx($,Y),r(Y,{code:g.not_multiple_of,multipleOf:H.value,message:H.message}),G.dirty()}else M1.assertNever(H);return{status:G.value,value:$.data}}gte($,X){return this.setLimit("min",$,!0,Q1.toString(X))}gt($,X){return this.setLimit("min",$,!1,Q1.toString(X))}lte($,X){return this.setLimit("max",$,!0,Q1.toString(X))}lt($,X){return this.setLimit("max",$,!1,Q1.toString(X))}setLimit($,X,Y,G){return new N4({...this._def,checks:[...this._def.checks,{kind:$,value:X,inclusive:Y,message:Q1.toString(G)}]})}_addCheck($){return new N4({...this._def,checks:[...this._def.checks,$]})}positive($){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Q1.toString($)})}negative($){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Q1.toString($)})}nonpositive($){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Q1.toString($)})}nonnegative($){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Q1.toString($)})}multipleOf($,X){return this._addCheck({kind:"multipleOf",value:$,message:Q1.toString(X)})}get minValue(){let $=null;for(let X of this._def.checks)if(X.kind==="min"){if($===null||X.value>$)$=X.value}return $}get maxValue(){let $=null;for(let X of this._def.checks)if(X.kind==="max"){if($===null||X.value<$)$=X.value}return $}}N4.create=($)=>{var X;return new N4({checks:[],typeName:B1.ZodBigInt,coerce:(X=$===null||$===void 0?void 0:$.coerce)!==null&&X!==void 0?X:!1,...L1($)})};class Y5 extends z1{_parse($){if(this._def.coerce)$.data=Boolean($.data);if(this._getType($)!==a.boolean){let Y=this._getOrReturnCtx($);return r(Y,{code:g.invalid_type,expected:a.boolean,received:Y.parsedType}),V1}return P0($.data)}}Y5.create=($)=>{return new Y5({typeName:B1.ZodBoolean,coerce:($===null||$===void 0?void 0:$.coerce)||!1,...L1($)})};class X6 extends z1{_parse($){if(this._def.coerce)$.data=new Date($.data);if(this._getType($)!==a.date){let H=this._getOrReturnCtx($);return r(H,{code:g.invalid_type,expected:a.date,received:H.parsedType}),V1}if(isNaN($.data.getTime())){let H=this._getOrReturnCtx($);return r(H,{code:g.invalid_date}),V1}let Y=new L0,G=void 0;for(let H of this._def.checks)if(H.kind==="min"){if($.data.getTime()<H.value)G=this._getOrReturnCtx($,G),r(G,{code:g.too_small,message:H.message,inclusive:!0,exact:!1,minimum:H.value,type:"date"}),Y.dirty()}else if(H.kind==="max"){if($.data.getTime()>H.value)G=this._getOrReturnCtx($,G),r(G,{code:g.too_big,message:H.message,inclusive:!0,exact:!1,maximum:H.value,type:"date"}),Y.dirty()}else M1.assertNever(H);return{status:Y.value,value:new Date($.data.getTime())}}_addCheck($){return new X6({...this._def,checks:[...this._def.checks,$]})}min($,X){return this._addCheck({kind:"min",value:$.getTime(),message:Q1.toString(X)})}max($,X){return this._addCheck({kind:"max",value:$.getTime(),message:Q1.toString(X)})}get minDate(){let $=null;for(let X of this._def.checks)if(X.kind==="min"){if($===null||X.value>$)$=X.value}return $!=null?new Date($):null}get maxDate(){let $=null;for(let X of this._def.checks)if(X.kind==="max"){if($===null||X.value<$)$=X.value}return $!=null?new Date($):null}}X6.create=($)=>{return new X6({checks:[],coerce:($===null||$===void 0?void 0:$.coerce)||!1,typeName:B1.ZodDate,...L1($)})};class I8 extends z1{_parse($){if(this._getType($)!==a.symbol){let Y=this._getOrReturnCtx($);return r(Y,{code:g.invalid_type,expected:a.symbol,received:Y.parsedType}),V1}return P0($.data)}}I8.create=($)=>{return new I8({typeName:B1.ZodSymbol,...L1($)})};class G5 extends z1{_parse($){if(this._getType($)!==a.undefined){let Y=this._getOrReturnCtx($);return r(Y,{code:g.invalid_type,expected:a.undefined,received:Y.parsedType}),V1}return P0($.data)}}G5.create=($)=>{return new G5({typeName:B1.ZodUndefined,...L1($)})};class H5 extends z1{_parse($){if(this._getType($)!==a.null){let Y=this._getOrReturnCtx($);return r(Y,{code:g.invalid_type,expected:a.null,received:Y.parsedType}),V1}return P0($.data)}}H5.create=($)=>{return new H5({typeName:B1.ZodNull,...L1($)})};class Y6 extends z1{constructor(){super(...arguments);this._any=!0}_parse($){return P0($.data)}}Y6.create=($)=>{return new Y6({typeName:B1.ZodAny,...L1($)})};class D4 extends z1{constructor(){super(...arguments);this._unknown=!0}_parse($){return P0($.data)}}D4.create=($)=>{return new D4({typeName:B1.ZodUnknown,...L1($)})};class T$ extends z1{_parse($){let X=this._getOrReturnCtx($);return r(X,{code:g.invalid_type,expected:a.never,received:X.parsedType}),V1}}T$.create=($)=>{return new T$({typeName:B1.ZodNever,...L1($)})};class C8 extends z1{_parse($){if(this._getType($)!==a.undefined){let Y=this._getOrReturnCtx($);return r(Y,{code:g.invalid_type,expected:a.void,received:Y.parsedType}),V1}return P0($.data)}}C8.create=($)=>{return new C8({typeName:B1.ZodVoid,...L1($)})};class A$ extends z1{_parse($){let{ctx:X,status:Y}=this._processInputParams($),G=this._def;if(X.parsedType!==a.array)return r(X,{code:g.invalid_type,expected:a.array,received:X.parsedType}),V1;if(G.exactLength!==null){let Q=X.data.length>G.exactLength.value,J=X.data.length<G.exactLength.value;if(Q||J)r(X,{code:Q?g.too_big:g.too_small,minimum:J?G.exactLength.value:void 0,maximum:Q?G.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:G.exactLength.message}),Y.dirty()}if(G.minLength!==null){if(X.data.length<G.minLength.value)r(X,{code:g.too_small,minimum:G.minLength.value,type:"array",inclusive:!0,exact:!1,message:G.minLength.message}),Y.dirty()}if(G.maxLength!==null){if(X.data.length>G.maxLength.value)r(X,{code:g.too_big,maximum:G.maxLength.value,type:"array",inclusive:!0,exact:!1,message:G.maxLength.message}),Y.dirty()}if(X.common.async)return Promise.all([...X.data].map((Q,J)=>{return G.type._parseAsync(new z$(X,Q,X.path,J))})).then((Q)=>{return L0.mergeArray(Y,Q)});let H=[...X.data].map((Q,J)=>{return G.type._parseSync(new z$(X,Q,X.path,J))});return L0.mergeArray(Y,H)}get element(){return this._def.type}min($,X){return new A$({...this._def,minLength:{value:$,message:Q1.toString(X)}})}max($,X){return new A$({...this._def,maxLength:{value:$,message:Q1.toString(X)}})}length($,X){return new A$({...this._def,exactLength:{value:$,message:Q1.toString(X)}})}nonempty($){return this.min(1,$)}}A$.create=($,X)=>{return new A$({type:$,minLength:null,maxLength:null,exactLength:null,typeName:B1.ZodArray,...L1(X)})};function t6($){if($ instanceof i1){let X={};for(let Y in $.shape){let G=$.shape[Y];X[Y]=K$.create(t6(G))}return new i1({...$._def,shape:()=>X})}else if($ instanceof A$)return new A$({...$._def,type:t6($.element)});else if($ instanceof K$)return K$.create(t6($.unwrap()));else if($ instanceof l$)return l$.create(t6($.unwrap()));else if($ instanceof k$)return k$.create($.items.map((X)=>t6(X)));else return $}class i1 extends z1{constructor(){super(...arguments);this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let $=this._def.shape(),X=M1.objectKeys($);return this._cached={shape:$,keys:X}}_parse($){if(this._getType($)!==a.object){let w=this._getOrReturnCtx($);return r(w,{code:g.invalid_type,expected:a.object,received:w.parsedType}),V1}let{status:Y,ctx:G}=this._processInputParams($),{shape:H,keys:Q}=this._getCached(),J=[];if(!(this._def.catchall instanceof T$&&this._def.unknownKeys==="strip")){for(let w in G.data)if(!Q.includes(w))J.push(w)}let W=[];for(let w of Q){let B=H[w],U=G.data[w];W.push({key:{status:"valid",value:w},value:B._parse(new z$(G,U,G.path,w)),alwaysSet:w in G.data})}if(this._def.catchall instanceof T$){let w=this._def.unknownKeys;if(w==="passthrough")for(let B of J)W.push({key:{status:"valid",value:B},value:{status:"valid",value:G.data[B]}});else if(w==="strict"){if(J.length>0)r(G,{code:g.unrecognized_keys,keys:J}),Y.dirty()}else if(w==="strip");else throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let w=this._def.catchall;for(let B of J){let U=G.data[B];W.push({key:{status:"valid",value:B},value:w._parse(new z$(G,U,G.path,B)),alwaysSet:B in G.data})}}if(G.common.async)return Promise.resolve().then(async()=>{let w=[];for(let B of W){let U=await B.key,V=await B.value;w.push({key:U,value:V,alwaysSet:B.alwaysSet})}return w}).then((w)=>{return L0.mergeObjectSync(Y,w)});else return L0.mergeObjectSync(Y,W)}get shape(){return this._def.shape()}strict($){return Q1.errToObj,new i1({...this._def,unknownKeys:"strict",...$!==void 0?{errorMap:(X,Y)=>{var G,H,Q,J;let W=(Q=(H=(G=this._def).errorMap)===null||H===void 0?void 0:H.call(G,X,Y).message)!==null&&Q!==void 0?Q:Y.defaultError;if(X.code==="unrecognized_keys")return{message:(J=Q1.errToObj($).message)!==null&&J!==void 0?J:W};return{message:W}}}:{}})}strip(){return new i1({...this._def,unknownKeys:"strip"})}passthrough(){return new i1({...this._def,unknownKeys:"passthrough"})}extend($){return new i1({...this._def,shape:()=>({...this._def.shape(),...$})})}merge($){return new i1({unknownKeys:$._def.unknownKeys,catchall:$._def.catchall,shape:()=>({...this._def.shape(),...$._def.shape()}),typeName:B1.ZodObject})}setKey($,X){return this.augment({[$]:X})}catchall($){return new i1({...this._def,catchall:$})}pick($){let X={};return M1.objectKeys($).forEach((Y)=>{if($[Y]&&this.shape[Y])X[Y]=this.shape[Y]}),new i1({...this._def,shape:()=>X})}omit($){let X={};return M1.objectKeys(this.shape).forEach((Y)=>{if(!$[Y])X[Y]=this.shape[Y]}),new i1({...this._def,shape:()=>X})}deepPartial(){return t6(this)}partial($){let X={};return M1.objectKeys(this.shape).forEach((Y)=>{let G=this.shape[Y];if($&&!$[Y])X[Y]=G;else X[Y]=G.optional()}),new i1({...this._def,shape:()=>X})}required($){let X={};return M1.objectKeys(this.shape).forEach((Y)=>{if($&&!$[Y])X[Y]=this.shape[Y];else{let H=this.shape[Y];while(H instanceof K$)H=H._def.innerType;X[Y]=H}}),new i1({...this._def,shape:()=>X})}keyof(){return QK(M1.objectKeys(this.shape))}}i1.create=($,X)=>{return new i1({shape:()=>$,unknownKeys:"strip",catchall:T$.create(),typeName:B1.ZodObject,...L1(X)})};i1.strictCreate=($,X)=>{return new i1({shape:()=>$,unknownKeys:"strict",catchall:T$.create(),typeName:B1.ZodObject,...L1(X)})};i1.lazycreate=($,X)=>{return new i1({shape:$,unknownKeys:"strip",catchall:T$.create(),typeName:B1.ZodObject,...L1(X)})};class Q5 extends z1{_parse($){let{ctx:X}=this._processInputParams($),Y=this._def.options;function G(H){for(let J of H)if(J.result.status==="valid")return J.result;for(let J of H)if(J.result.status==="dirty")return X.common.issues.push(...J.ctx.common.issues),J.result;let Q=H.map((J)=>new c0(J.ctx.common.issues));return r(X,{code:g.invalid_union,unionErrors:Q}),V1}if(X.common.async)return Promise.all(Y.map(async(H)=>{let Q={...X,common:{...X.common,issues:[]},parent:null};return{result:await H._parseAsync({data:X.data,path:X.path,parent:Q}),ctx:Q}})).then(G);else{let H=void 0,Q=[];for(let W of Y){let w={...X,common:{...X.common,issues:[]},parent:null},B=W._parseSync({data:X.data,path:X.path,parent:w});if(B.status==="valid")return B;else if(B.status==="dirty"&&!H)H={result:B,ctx:w};if(w.common.issues.length)Q.push(w.common.issues)}if(H)return X.common.issues.push(...H.ctx.common.issues),H.result;let J=Q.map((W)=>new c0(W));return r(X,{code:g.invalid_union,unionErrors:J}),V1}}get options(){return this._def.options}}Q5.create=($,X)=>{return new Q5({options:$,typeName:B1.ZodUnion,...L1(X)})};var d$=($)=>{if($ instanceof W5)return d$($.schema);else if($ instanceof $$)return d$($.innerType());else if($ instanceof w5)return[$.value];else if($ instanceof q4)return $.options;else if($ instanceof B5)return M1.objectValues($.enum);else if($ instanceof U5)return d$($._def.innerType);else if($ instanceof G5)return[void 0];else if($ instanceof H5)return[null];else if($ instanceof K$)return[void 0,...d$($.unwrap())];else if($ instanceof l$)return[null,...d$($.unwrap())];else if($ instanceof dX)return d$($.unwrap());else if($ instanceof F5)return d$($.unwrap());else if($ instanceof V5)return d$($._def.innerType);else return[]};class cX extends z1{_parse($){let{ctx:X}=this._processInputParams($);if(X.parsedType!==a.object)return r(X,{code:g.invalid_type,expected:a.object,received:X.parsedType}),V1;let Y=this.discriminator,G=X.data[Y],H=this.optionsMap.get(G);if(!H)return r(X,{code:g.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[Y]}),V1;if(X.common.async)return H._parseAsync({data:X.data,path:X.path,parent:X});else return H._parseSync({data:X.data,path:X.path,parent:X})}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create($,X,Y){let G=new Map;for(let H of X){let Q=d$(H.shape[$]);if(!Q.length)throw new Error(`A discriminator value for key \`${$}\` could not be extracted from all schema options`);for(let J of Q){if(G.has(J))throw new Error(`Discriminator property ${String($)} has duplicate value ${String(J)}`);G.set(J,H)}}return new cX({typeName:B1.ZodDiscriminatedUnion,discriminator:$,options:X,optionsMap:G,...L1(Y)})}}function pH($,X){let Y=R4($),G=R4(X);if($===X)return{valid:!0,data:$};else if(Y===a.object&&G===a.object){let H=M1.objectKeys(X),Q=M1.objectKeys($).filter((W)=>H.indexOf(W)!==-1),J={...$,...X};for(let W of Q){let w=pH($[W],X[W]);if(!w.valid)return{valid:!1};J[W]=w.data}return{valid:!0,data:J}}else if(Y===a.array&&G===a.array){if($.length!==X.length)return{valid:!1};let H=[];for(let Q=0;Q<$.length;Q++){let J=$[Q],W=X[Q],w=pH(J,W);if(!w.valid)return{valid:!1};H.push(w.data)}return{valid:!0,data:H}}else if(Y===a.date&&G===a.date&&+$===+X)return{valid:!0,data:$};else return{valid:!1}}class J5 extends z1{_parse($){let{status:X,ctx:Y}=this._processInputParams($),G=(H,Q)=>{if(mH(H)||mH(Q))return V1;let J=pH(H.value,Q.value);if(!J.valid)return r(Y,{code:g.invalid_intersection_types}),V1;if(uH(H)||uH(Q))X.dirty();return{status:X.value,value:J.data}};if(Y.common.async)return Promise.all([this._def.left._parseAsync({data:Y.data,path:Y.path,parent:Y}),this._def.right._parseAsync({data:Y.data,path:Y.path,parent:Y})]).then(([H,Q])=>G(H,Q));else return G(this._def.left._parseSync({data:Y.data,path:Y.path,parent:Y}),this._def.right._parseSync({data:Y.data,path:Y.path,parent:Y}))}}J5.create=($,X,Y)=>{return new J5({left:$,right:X,typeName:B1.ZodIntersection,...L1(Y)})};class k$ extends z1{_parse($){let{status:X,ctx:Y}=this._processInputParams($);if(Y.parsedType!==a.array)return r(Y,{code:g.invalid_type,expected:a.array,received:Y.parsedType}),V1;if(Y.data.length<this._def.items.length)return r(Y,{code:g.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),V1;if(!this._def.rest&&Y.data.length>this._def.items.length)r(Y,{code:g.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),X.dirty();let H=[...Y.data].map((Q,J)=>{let W=this._def.items[J]||this._def.rest;if(!W)return null;return W._parse(new z$(Y,Q,Y.path,J))}).filter((Q)=>!!Q);if(Y.common.async)return Promise.all(H).then((Q)=>{return L0.mergeArray(X,Q)});else return L0.mergeArray(X,H)}get items(){return this._def.items}rest($){return new k$({...this._def,rest:$})}}k$.create=($,X)=>{if(!Array.isArray($))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new k$({items:$,typeName:B1.ZodTuple,rest:null,...L1(X)})};class j8 extends z1{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse($){let{status:X,ctx:Y}=this._processInputParams($);if(Y.parsedType!==a.object)return r(Y,{code:g.invalid_type,expected:a.object,received:Y.parsedType}),V1;let G=[],H=this._def.keyType,Q=this._def.valueType;for(let J in Y.data)G.push({key:H._parse(new z$(Y,J,Y.path,J)),value:Q._parse(new z$(Y,Y.data[J],Y.path,J)),alwaysSet:J in Y.data});if(Y.common.async)return L0.mergeObjectAsync(X,G);else return L0.mergeObjectSync(X,G)}get element(){return this._def.valueType}static create($,X,Y){if(X instanceof z1)return new j8({keyType:$,valueType:X,typeName:B1.ZodRecord,...L1(Y)});return new j8({keyType:E$.create(),valueType:$,typeName:B1.ZodRecord,...L1(X)})}}class T8 extends z1{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse($){let{status:X,ctx:Y}=this._processInputParams($);if(Y.parsedType!==a.map)return r(Y,{code:g.invalid_type,expected:a.map,received:Y.parsedType}),V1;let G=this._def.keyType,H=this._def.valueType,Q=[...Y.data.entries()].map(([J,W],w)=>{return{key:G._parse(new z$(Y,J,Y.path,[w,"key"])),value:H._parse(new z$(Y,W,Y.path,[w,"value"]))}});if(Y.common.async){let J=new Map;return Promise.resolve().then(async()=>{for(let W of Q){let w=await W.key,B=await W.value;if(w.status==="aborted"||B.status==="aborted")return V1;if(w.status==="dirty"||B.status==="dirty")X.dirty();J.set(w.value,B.value)}return{status:X.value,value:J}})}else{let J=new Map;for(let W of Q){let{key:w,value:B}=W;if(w.status==="aborted"||B.status==="aborted")return V1;if(w.status==="dirty"||B.status==="dirty")X.dirty();J.set(w.value,B.value)}return{status:X.value,value:J}}}}T8.create=($,X,Y)=>{return new T8({valueType:X,keyType:$,typeName:B1.ZodMap,...L1(Y)})};class G6 extends z1{_parse($){let{status:X,ctx:Y}=this._processInputParams($);if(Y.parsedType!==a.set)return r(Y,{code:g.invalid_type,expected:a.set,received:Y.parsedType}),V1;let G=this._def;if(G.minSize!==null){if(Y.data.size<G.minSize.value)r(Y,{code:g.too_small,minimum:G.minSize.value,type:"set",inclusive:!0,exact:!1,message:G.minSize.message}),X.dirty()}if(G.maxSize!==null){if(Y.data.size>G.maxSize.value)r(Y,{code:g.too_big,maximum:G.maxSize.value,type:"set",inclusive:!0,exact:!1,message:G.maxSize.message}),X.dirty()}let H=this._def.valueType;function Q(W){let w=new Set;for(let B of W){if(B.status==="aborted")return V1;if(B.status==="dirty")X.dirty();w.add(B.value)}return{status:X.value,value:w}}let J=[...Y.data.values()].map((W,w)=>H._parse(new z$(Y,W,Y.path,w)));if(Y.common.async)return Promise.all(J).then((W)=>Q(W));else return Q(J)}min($,X){return new G6({...this._def,minSize:{value:$,message:Q1.toString(X)}})}max($,X){return new G6({...this._def,maxSize:{value:$,message:Q1.toString(X)}})}size($,X){return this.min($,X).max($,X)}nonempty($){return this.min(1,$)}}G6.create=($,X)=>{return new G6({valueType:$,minSize:null,maxSize:null,typeName:B1.ZodSet,...L1(X)})};class $5 extends z1{constructor(){super(...arguments);this.validate=this.implement}_parse($){let{ctx:X}=this._processInputParams($);if(X.parsedType!==a.function)return r(X,{code:g.invalid_type,expected:a.function,received:X.parsedType}),V1;function Y(J,W){return uX({data:J,path:X.path,errorMaps:[X.common.contextualErrorMap,X.schemaErrorMap,mX(),X5].filter((w)=>!!w),issueData:{code:g.invalid_arguments,argumentsError:W}})}function G(J,W){return uX({data:J,path:X.path,errorMaps:[X.common.contextualErrorMap,X.schemaErrorMap,mX(),X5].filter((w)=>!!w),issueData:{code:g.invalid_return_type,returnTypeError:W}})}let H={errorMap:X.common.contextualErrorMap},Q=X.data;if(this._def.returns instanceof H6){let J=this;return P0(async function(...W){let w=new c0([]),B=await J._def.args.parseAsync(W,H).catch((F)=>{throw w.addIssue(Y(W,F)),w}),U=await Reflect.apply(Q,this,B);return await J._def.returns._def.type.parseAsync(U,H).catch((F)=>{throw w.addIssue(G(U,F)),w})})}else{let J=this;return P0(function(...W){let w=J._def.args.safeParse(W,H);if(!w.success)throw new c0([Y(W,w.error)]);let B=Reflect.apply(Q,this,w.data),U=J._def.returns.safeParse(B,H);if(!U.success)throw new c0([G(B,U.error)]);return U.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...$){return new $5({...this._def,args:k$.create($).rest(D4.create())})}returns($){return new $5({...this._def,returns:$})}implement($){return this.parse($)}strictImplement($){return this.parse($)}static create($,X,Y){return new $5({args:$?$:k$.create([]).rest(D4.create()),returns:X||D4.create(),typeName:B1.ZodFunction,...L1(Y)})}}class W5 extends z1{get schema(){return this._def.getter()}_parse($){let{ctx:X}=this._processInputParams($);return this._def.getter()._parse({data:X.data,path:X.path,parent:X})}}W5.create=($,X)=>{return new W5({getter:$,typeName:B1.ZodLazy,...L1(X)})};class w5 extends z1{_parse($){if($.data!==this._def.value){let X=this._getOrReturnCtx($);return r(X,{received:X.data,code:g.invalid_literal,expected:this._def.value}),V1}return{status:"valid",value:$.data}}get value(){return this._def.value}}w5.create=($,X)=>{return new w5({value:$,typeName:B1.ZodLiteral,...L1(X)})};function QK($,X){return new q4({values:$,typeName:B1.ZodEnum,...L1(X)})}class q4 extends z1{constructor(){super(...arguments);M8.set(this,void 0)}_parse($){if(typeof $.data!=="string"){let X=this._getOrReturnCtx($),Y=this._def.values;return r(X,{expected:M1.joinValues(Y),received:X.parsedType,code:g.invalid_type}),V1}if(!pX(this,M8,"f"))XK(this,M8,new Set(this._def.values),"f");if(!pX(this,M8,"f").has($.data)){let X=this._getOrReturnCtx($),Y=this._def.values;return r(X,{received:X.data,code:g.invalid_enum_value,options:Y}),V1}return P0($.data)}get options(){return this._def.values}get enum(){let $={};for(let X of this._def.values)$[X]=X;return $}get Values(){let $={};for(let X of this._def.values)$[X]=X;return $}get Enum(){let $={};for(let X of this._def.values)$[X]=X;return $}extract($,X=this._def){return q4.create($,{...this._def,...X})}exclude($,X=this._def){return q4.create(this.options.filter((Y)=>!$.includes(Y)),{...this._def,...X})}}M8=new WeakMap;q4.create=QK;class B5 extends z1{constructor(){super(...arguments);Z8.set(this,void 0)}_parse($){let X=M1.getValidEnumValues(this._def.values),Y=this._getOrReturnCtx($);if(Y.parsedType!==a.string&&Y.parsedType!==a.number){let G=M1.objectValues(X);return r(Y,{expected:M1.joinValues(G),received:Y.parsedType,code:g.invalid_type}),V1}if(!pX(this,Z8,"f"))XK(this,Z8,new Set(M1.getValidEnumValues(this._def.values)),"f");if(!pX(this,Z8,"f").has($.data)){let G=M1.objectValues(X);return r(Y,{received:Y.data,code:g.invalid_enum_value,options:G}),V1}return P0($.data)}get enum(){return this._def.values}}Z8=new WeakMap;B5.create=($,X)=>{return new B5({values:$,typeName:B1.ZodNativeEnum,...L1(X)})};class H6 extends z1{unwrap(){return this._def.type}_parse($){let{ctx:X}=this._processInputParams($);if(X.parsedType!==a.promise&&X.common.async===!1)return r(X,{code:g.invalid_type,expected:a.promise,received:X.parsedType}),V1;let Y=X.parsedType===a.promise?X.data:Promise.resolve(X.data);return P0(Y.then((G)=>{return this._def.type.parseAsync(G,{path:X.path,errorMap:X.common.contextualErrorMap})}))}}H6.create=($,X)=>{return new H6({type:$,typeName:B1.ZodPromise,...L1(X)})};class $$ extends z1{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===B1.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse($){let{status:X,ctx:Y}=this._processInputParams($),G=this._def.effect||null,H={addIssue:(Q)=>{if(r(Y,Q),Q.fatal)X.abort();else X.dirty()},get path(){return Y.path}};if(H.addIssue=H.addIssue.bind(H),G.type==="preprocess"){let Q=G.transform(Y.data,H);if(Y.common.async)return Promise.resolve(Q).then(async(J)=>{if(X.value==="aborted")return V1;let W=await this._def.schema._parseAsync({data:J,path:Y.path,parent:Y});if(W.status==="aborted")return V1;if(W.status==="dirty")return e6(W.value);if(X.value==="dirty")return e6(W.value);return W});else{if(X.value==="aborted")return V1;let J=this._def.schema._parseSync({data:Q,path:Y.path,parent:Y});if(J.status==="aborted")return V1;if(J.status==="dirty")return e6(J.value);if(X.value==="dirty")return e6(J.value);return J}}if(G.type==="refinement"){let Q=(J)=>{let W=G.refinement(J,H);if(Y.common.async)return Promise.resolve(W);if(W instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return J};if(Y.common.async===!1){let J=this._def.schema._parseSync({data:Y.data,path:Y.path,parent:Y});if(J.status==="aborted")return V1;if(J.status==="dirty")X.dirty();return Q(J.value),{status:X.value,value:J.value}}else return this._def.schema._parseAsync({data:Y.data,path:Y.path,parent:Y}).then((J)=>{if(J.status==="aborted")return V1;if(J.status==="dirty")X.dirty();return Q(J.value).then(()=>{return{status:X.value,value:J.value}})})}if(G.type==="transform")if(Y.common.async===!1){let Q=this._def.schema._parseSync({data:Y.data,path:Y.path,parent:Y});if(!P8(Q))return Q;let J=G.transform(Q.value,H);if(J instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:X.value,value:J}}else return this._def.schema._parseAsync({data:Y.data,path:Y.path,parent:Y}).then((Q)=>{if(!P8(Q))return Q;return Promise.resolve(G.transform(Q.value,H)).then((J)=>({status:X.value,value:J}))});M1.assertNever(G)}}$$.create=($,X,Y)=>{return new $$({schema:$,typeName:B1.ZodEffects,effect:X,...L1(Y)})};$$.createWithPreprocess=($,X,Y)=>{return new $$({schema:X,effect:{type:"preprocess",transform:$},typeName:B1.ZodEffects,...L1(Y)})};class K$ extends z1{_parse($){if(this._getType($)===a.undefined)return P0(void 0);return this._def.innerType._parse($)}unwrap(){return this._def.innerType}}K$.create=($,X)=>{return new K$({innerType:$,typeName:B1.ZodOptional,...L1(X)})};class l$ extends z1{_parse($){if(this._getType($)===a.null)return P0(null);return this._def.innerType._parse($)}unwrap(){return this._def.innerType}}l$.create=($,X)=>{return new l$({innerType:$,typeName:B1.ZodNullable,...L1(X)})};class U5 extends z1{_parse($){let{ctx:X}=this._processInputParams($),Y=X.data;if(X.parsedType===a.undefined)Y=this._def.defaultValue();return this._def.innerType._parse({data:Y,path:X.path,parent:X})}removeDefault(){return this._def.innerType}}U5.create=($,X)=>{return new U5({innerType:$,typeName:B1.ZodDefault,defaultValue:typeof X.default==="function"?X.default:()=>X.default,...L1(X)})};class V5 extends z1{_parse($){let{ctx:X}=this._processInputParams($),Y={...X,common:{...X.common,issues:[]}},G=this._def.innerType._parse({data:Y.data,path:Y.path,parent:{...Y}});if(S8(G))return G.then((H)=>{return{status:"valid",value:H.status==="valid"?H.value:this._def.catchValue({get error(){return new c0(Y.common.issues)},input:Y.data})}});else return{status:"valid",value:G.status==="valid"?G.value:this._def.catchValue({get error(){return new c0(Y.common.issues)},input:Y.data})}}removeCatch(){return this._def.innerType}}V5.create=($,X)=>{return new V5({innerType:$,typeName:B1.ZodCatch,catchValue:typeof X.catch==="function"?X.catch:()=>X.catch,...L1(X)})};class k8 extends z1{_parse($){if(this._getType($)!==a.nan){let Y=this._getOrReturnCtx($);return r(Y,{code:g.invalid_type,expected:a.nan,received:Y.parsedType}),V1}return{status:"valid",value:$.data}}}k8.create=($)=>{return new k8({typeName:B1.ZodNaN,...L1($)})};var NT=Symbol("zod_brand");class dX extends z1{_parse($){let{ctx:X}=this._processInputParams($),Y=X.data;return this._def.type._parse({data:Y,path:X.path,parent:X})}unwrap(){return this._def.type}}class x8 extends z1{_parse($){let{status:X,ctx:Y}=this._processInputParams($);if(Y.common.async)return(async()=>{let H=await this._def.in._parseAsync({data:Y.data,path:Y.path,parent:Y});if(H.status==="aborted")return V1;if(H.status==="dirty")return X.dirty(),e6(H.value);else return this._def.out._parseAsync({data:H.value,path:Y.path,parent:Y})})();else{let G=this._def.in._parseSync({data:Y.data,path:Y.path,parent:Y});if(G.status==="aborted")return V1;if(G.status==="dirty")return X.dirty(),{status:"dirty",value:G.value};else return this._def.out._parseSync({data:G.value,path:Y.path,parent:Y})}}static create($,X){return new x8({in:$,out:X,typeName:B1.ZodPipeline})}}class F5 extends z1{_parse($){let X=this._def.innerType._parse($),Y=(G)=>{if(P8(G))G.value=Object.freeze(G.value);return G};return S8(X)?X.then((G)=>Y(G)):Y(X)}unwrap(){return this._def.innerType}}F5.create=($,X)=>{return new F5({innerType:$,typeName:B1.ZodReadonly,...L1(X)})};function JK($,X={},Y){if($)return Y6.create().superRefine((G,H)=>{var Q,J;if(!$(G)){let W=typeof X==="function"?X(G):typeof X==="string"?{message:X}:X,w=(J=(Q=W.fatal)!==null&&Q!==void 0?Q:Y)!==null&&J!==void 0?J:!0,B=typeof W==="string"?{message:W}:W;H.addIssue({code:"custom",...B,fatal:w})}});return Y6.create()}var qT={object:i1.lazycreate},B1;(function($){$.ZodString="ZodString",$.ZodNumber="ZodNumber",$.ZodNaN="ZodNaN",$.ZodBigInt="ZodBigInt",$.ZodBoolean="ZodBoolean",$.ZodDate="ZodDate",$.ZodSymbol="ZodSymbol",$.ZodUndefined="ZodUndefined",$.ZodNull="ZodNull",$.ZodAny="ZodAny",$.ZodUnknown="ZodUnknown",$.ZodNever="ZodNever",$.ZodVoid="ZodVoid",$.ZodArray="ZodArray",$.ZodObject="ZodObject",$.ZodUnion="ZodUnion",$.ZodDiscriminatedUnion="ZodDiscriminatedUnion",$.ZodIntersection="ZodIntersection",$.ZodTuple="ZodTuple",$.ZodRecord="ZodRecord",$.ZodMap="ZodMap",$.ZodSet="ZodSet",$.ZodFunction="ZodFunction",$.ZodLazy="ZodLazy",$.ZodLiteral="ZodLiteral",$.ZodEnum="ZodEnum",$.ZodEffects="ZodEffects",$.ZodNativeEnum="ZodNativeEnum",$.ZodOptional="ZodOptional",$.ZodNullable="ZodNullable",$.ZodDefault="ZodDefault",$.ZodCatch="ZodCatch",$.ZodPromise="ZodPromise",$.ZodBranded="ZodBranded",$.ZodPipeline="ZodPipeline",$.ZodReadonly="ZodReadonly"})(B1||(B1={}));var MT=($,X={message:`Input not instance of ${$.name}`})=>JK((Y)=>Y instanceof $,X),WK=E$.create,wK=_4.create,ZT=k8.create,PT=N4.create,BK=Y5.create,ST=X6.create,IT=I8.create,CT=G5.create,jT=H5.create,TT=Y6.create,kT=D4.create,xT=T$.create,vT=C8.create,fT=A$.create,hT=i1.create,yT=i1.strictCreate,bT=Q5.create,gT=cX.create,mT=J5.create,uT=k$.create,pT=j8.create,cT=T8.create,dT=G6.create,lT=$5.create,iT=W5.create,nT=w5.create,rT=q4.create,sT=B5.create,oT=H6.create,eA=$$.create,aT=K$.create,tT=l$.create,eT=$$.createWithPreprocess,$k=x8.create,Xk=()=>WK().optional(),Yk=()=>wK().optional(),Gk=()=>BK().optional(),Hk={string:($)=>E$.create({...$,coerce:!0}),number:($)=>_4.create({...$,coerce:!0}),boolean:($)=>Y5.create({...$,coerce:!0}),bigint:($)=>N4.create({...$,coerce:!0}),date:($)=>X6.create({...$,coerce:!0})},Qk=V1,i$=Object.freeze({__proto__:null,defaultErrorMap:X5,setErrorMap:QT,getErrorMap:mX,makeIssue:uX,EMPTY_PATH:JT,addIssueToContext:r,ParseStatus:L0,INVALID:V1,DIRTY:e6,OK:P0,isAborted:mH,isDirty:uH,isValid:P8,isAsync:S8,get util(){return M1},get objectUtil(){return gH},ZodParsedType:a,getParsedType:R4,ZodType:z1,datetimeRegex:HK,ZodString:E$,ZodNumber:_4,ZodBigInt:N4,ZodBoolean:Y5,ZodDate:X6,ZodSymbol:I8,ZodUndefined:G5,ZodNull:H5,ZodAny:Y6,ZodUnknown:D4,ZodNever:T$,ZodVoid:C8,ZodArray:A$,ZodObject:i1,ZodUnion:Q5,ZodDiscriminatedUnion:cX,ZodIntersection:J5,ZodTuple:k$,ZodRecord:j8,ZodMap:T8,ZodSet:G6,ZodFunction:$5,ZodLazy:W5,ZodLiteral:w5,ZodEnum:q4,ZodNativeEnum:B5,ZodPromise:H6,ZodEffects:$$,ZodTransformer:$$,ZodOptional:K$,ZodNullable:l$,ZodDefault:U5,ZodCatch:V5,ZodNaN:k8,BRAND:NT,ZodBranded:dX,ZodPipeline:x8,ZodReadonly:F5,custom:JK,Schema:z1,ZodSchema:z1,late:qT,get ZodFirstPartyTypeKind(){return B1},coerce:Hk,any:TT,array:fT,bigint:PT,boolean:BK,date:ST,discriminatedUnion:gT,effect:eA,enum:rT,function:lT,instanceof:MT,intersection:mT,lazy:iT,literal:nT,map:cT,nan:ZT,nativeEnum:sT,never:xT,null:jT,nullable:tT,number:wK,object:hT,oboolean:Gk,onumber:Yk,optional:aT,ostring:Xk,pipeline:$k,preprocess:eT,promise:oT,record:pT,set:dT,strictObject:yT,string:WK,symbol:IT,transformer:eA,tuple:uT,undefined:CT,union:bT,unknown:kT,void:vT,NEVER:Qk,ZodIssueCode:g,quotelessJson:HT,ZodError:c0});var EK=class $ extends H${openAPIRegistry;defaultHook;constructor(X){super(X);this.openAPIRegistry=new kH,this.defaultHook=X?.defaultHook}openapi=({middleware:X,...Y},G,H=this.defaultHook)=>{this.openAPIRegistry.registerPath(Y);let Q=[];if(Y.request?.query){let w=$6("query",Y.request.query,H);Q.push(w)}if(Y.request?.params){let w=$6("param",Y.request.params,H);Q.push(w)}if(Y.request?.headers){let w=$6("header",Y.request.headers,H);Q.push(w)}if(Y.request?.cookies){let w=$6("cookie",Y.request.cookies,H);Q.push(w)}let J=Y.request?.body?.content;if(J)for(let w of Object.keys(J)){if(!J[w])continue;let B=J[w].schema;if(!(B instanceof z1))continue;if(VK(w)){let U=$6("json",B,H);if(Y.request?.body?.required)Q.push(U);else{let V=async(F,E)=>{if(F.req.header("content-type")){if(VK(F.req.header("content-type")))return await U(F,E)}F.req.addValidatedData("json",{}),await E()};Q.push(V)}}if(FK(w)){let U=$6("form",B,H);if(Y.request?.body?.required)Q.push(U);else{let V=async(F,E)=>{if(F.req.header("content-type")){if(FK(F.req.header("content-type")))return await U(F,E)}F.req.addValidatedData("form",{}),await E()};Q.push(V)}}}let W=X?Array.isArray(X)?X:[X]:[];return this.on([Y.method],Y.path.replaceAll(/\/{(.+?)}/g,"/:$1"),...W,...Q,G),this};getOpenAPIDocument=(X)=>{let G=new vH(this.openAPIRegistry.definitions).generateDocument(X);return this._basePath?UK(G,this._basePath):G};getOpenAPI31Document=(X)=>{let G=new fH(this.openAPIRegistry.definitions).generateDocument(X);return this._basePath?UK(G,this._basePath):G};doc=(X,Y)=>{return this.get(X,(G)=>{let H=typeof Y==="function"?Y(G):Y;try{let Q=this.getOpenAPIDocument(H);return G.json(Q)}catch(Q){return G.json(Q,500)}})};doc31=(X,Y)=>{return this.get(X,(G)=>{let H=typeof Y==="function"?Y(G):Y;try{let Q=this.getOpenAPI31Document(H);return G.json(Q)}catch(Q){return G.json(Q,500)}})};route(X,Y){let G=X.replaceAll(/:([^\/]+)/g,"{$1}");if(super.route(X,Y),!(Y instanceof $))return this;return Y.openAPIRegistry.definitions.forEach((H)=>{switch(H.type){case"component":return this.openAPIRegistry.registerComponent(H.componentType,H.name,H.component);case"route":return this.openAPIRegistry.registerPath({...H.route,path:R$(G,H.route.path)});case"webhook":return this.openAPIRegistry.registerWebhook({...H.webhook,path:R$(G,H.webhook.path)});case"schema":return this.openAPIRegistry.register(H.schema._def.openapi._internal.refId,H.schema);case"parameter":return this.openAPIRegistry.registerParameter(H.schema._def.openapi._internal.refId,H.schema);default:throw new Error(`Unknown registry type: ${H}`)}}),this}basePath(X){return new $({...super.basePath(X),defaultHook:this.defaultHook})}},AK=($)=>{let X={...$,getRoutingPath(){return $.path.replaceAll(/\/{(.+?)}/g,"/:$1")}};return Object.defineProperty(X,"getRoutingPath",{enumerable:!1})};jA(i$);function UK($,X){let Y={};return Object.keys($.paths).forEach((G)=>{Y[R$(X,G)]=$.paths[G]}),{...$,paths:Y}}function VK($){return/^application\/([a-z-\.]+\+)?json/.test($)}function FK($){return $.startsWith("multipart/form-data")||$.startsWith("application/x-www-form-urlencoded")}var lX=new EK,Jk=AK({method:"get",path:"/users/{id}",request:{params:i$.object({id:i$.string()}),body:{content:{"application/json":{schema:i$.object({id:i$.string()})}}}},responses:{200:{content:{"application/json":{schema:i$.object({id:i$.string()})}},description:"Retrieve the user"}}});lX.openapi(Jk,($)=>{let{id:X}=$.req.valid("param");return $.json({id:X,age:20,name:"Ultra-man"})});lX.doc("/swagger-doc",{openapi:"3.0.0",info:{version:"1.0.0",title:"Hono OpenAPI"}});var KK=($,...X)=>{let Y=[""];for(let G=0,H=$.length-1;G<H;G++){Y[0]+=$[G];let Q=X[G]instanceof Array?X[G].flat(1/0):[X[G]];for(let J=0,W=Q.length;J<W;J++){let w=Q[J];if(typeof w==="string")g8(w,Y);else if(typeof w==="number")Y[0]+=w;else if(typeof w==="boolean"||w===null||w===void 0)continue;else if(typeof w==="object"&&w.isEscaped)if(w.callbacks)Y.unshift("",w);else{let B=w.toString();if(B instanceof Promise)Y.unshift("",B);else Y[0]+=B}else if(w instanceof Promise)Y.unshift("",w);else g8(w.toString(),Y)}}return Y[0]+=$[$.length-1],Y.length===1?"callbacks"in Y?s$(W2(s$(Y[0],Y.callbacks))):s$(Y[0]):J2(Y,Y.callbacks)};var zK=`
.light-mode {
  color-scheme: light;
  --scalar-color-1: #2a2f45;
  --scalar-color-2: #757575;
  --scalar-color-3: #8e8e8e;
  --scalar-color-disabled: #b4b1b1;
  --scalar-color-ghost: #a7a7a7;
  --scalar-color-accent: #0099ff;
  --scalar-background-1: #fff;
  --scalar-background-2: #f6f6f6;
  --scalar-background-3: #e7e7e7;
  --scalar-background-4: rgba(0, 0, 0, 0.06);
  --scalar-background-accent: #8ab4f81f;

  --scalar-border-color: rgba(0, 0, 0, 0.1);
  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);
  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);
  --scalar-lifted-brightness: 1;
  --scalar-backdrop-brightness: 1;

  --scalar-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.11);
  --scalar-shadow-2: rgba(0, 0, 0, 0.08) 0px 13px 20px 0px,
    rgba(0, 0, 0, 0.08) 0px 3px 8px 0px, #eeeeed 0px 0 0 1px;

  --scalar-button-1: rgb(49 53 56);
  --scalar-button-1-color: #fff;
  --scalar-button-1-hover: rgb(28 31 33);

  --scalar-color-green: #069061;
  --scalar-color-red: #ef0006;
  --scalar-color-yellow: #edbe20;
  --scalar-color-blue: #0082d0;
  --scalar-color-orange: #fb892c;
  --scalar-color-purple: #5203d1;
}

.dark-mode {
  color-scheme: dark;
  --scalar-color-1: rgba(255, 255, 245, .86);
  --scalar-color-2: rgba(255, 255, 245, .6);
  --scalar-color-3: rgba(255, 255, 245, .38);
  --scalar-color-disabled: rgba(255, 255, 245, .25);
  --scalar-color-ghost: rgba(255, 255, 245, .25);
  --scalar-color-accent: #e36002;
  --scalar-background-1: #1e1e20;
  --scalar-background-2: #2a2a2a;
  --scalar-background-3: #505053;
  --scalar-background-4: rgba(255, 255, 255, 0.06);
  --scalar-background-accent: #e360021f;

  --scalar-border-color: rgba(255, 255, 255, 0.1);
  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);
  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);
  --scalar-lifted-brightness: 1.45;
  --scalar-backdrop-brightness: 0.5;

  --scalar-shadow-1: 0 1px 3px 0 rgb(0, 0, 0, 0.1);
  --scalar-shadow-2: rgba(15, 15, 15, 0.2) 0px 3px 6px,
    rgba(15, 15, 15, 0.4) 0px 9px 24px, 0 0 0 1px rgba(255, 255, 255, 0.1);

  --scalar-button-1: #f6f6f6;
  --scalar-button-1-color: #000;
  --scalar-button-1-hover: #e7e7e7;

  --scalar-color-green: #3dd68c;
  --scalar-color-red: #f66f81;
  --scalar-color-yellow: #f9b44e;
  --scalar-color-blue: #5c73e7;
  --scalar-color-orange: #ff8d4d;
  --scalar-color-purple: #b191f9;
}
/* Sidebar */
.light-mode .t-doc__sidebar {
  --scalar-sidebar-background-1: var(--scalar-background-1);
  --scalar-sidebar-item-hover-color: currentColor;
  --scalar-sidebar-item-hover-background: var(--scalar-background-2);
  --scalar-sidebar-item-active-background: var(--scalar-background-accent);
  --scalar-sidebar-border-color: var(--scalar-border-color);
  --scalar-sidebar-color-1: var(--scalar-color-1);
  --scalar-sidebar-color-2: var(--scalar-color-2);
  --scalar-sidebar-color-active: var(--scalar-color-accent);
  --scalar-sidebar-search-background: var(--scalar-background-2);
  --scalar-sidebar-search-border-color: var(--scalar-sidebar-border-color);
  --scalar-sidebar-search-color: var(--scalar-color-3);
}

.dark-mode .sidebar {
  --scalar-sidebar-background-1: #161618;
  --scalar-sidebar-item-hover-color: var(--scalar-color-accent);
  --scalar-sidebar-item-hover-background: transparent;
  --scalar-sidebar-item-active-background: transparent;
  --scalar-sidebar-border-color: transparent;
  --scalar-sidebar-color-1: var(--scalar-color-1);
  --scalar-sidebar-color-2: var(--scalar-color-2);
  --scalar-sidebar-color-active: var(--scalar-color-accent);
  --scalar-sidebar-search-background: #252529;
  --scalar-sidebar-search-border-color: transparent;
  --scalar-sidebar-search-color: var(--scalar-color-3);
}
`,LK=($)=>{let X={_integration:"hono"};return KK`
    <script
      id="api-reference"
      type="application/json"
      data-configuration="${JSON.stringify({...X,...$}).split('"').join("&quot;")}">
      ${s$($.spec?.content?typeof $.spec?.content==="function"?JSON.stringify($.spec?.content()):JSON.stringify($.spec?.content):"")}
    </script>
    <script src="${$.cdn||"https://cdn.jsdelivr.net/npm/@scalar/api-reference"}"></script>
  `},cH=($)=>async(X)=>{return X.html(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${$?.pageTitle??"API Reference"}</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1" />
          <style>
            ${$.theme?null:zK}
          </style>
        </head>
        <body>
          ${LK($)}
        </body>
      </html>
    `)};async function Wk(){let $=new H$().use(R2(P2)).use(w9(Z2)).use(D2()).use(q2());$.get("/",(X)=>{return X.json(x$("Api server online..."))}),$.route("/",lX),$.get("/docs",cH({theme:"purple",layout:"classic",spec:{url:"/swagger-doc"}})),$.route("/",SA),Bun.serve({fetch:$.fetch,port:V6.PORT,reusePort:!0})}Wk().then(async()=>{await S2(IA)}).then(()=>{console.log(`Application Running on http://localhost:${V6.PORT}`)}).catch(($)=>{console.error("Application Runtime Error",$),process.exit(1)});

//# debugId=57F305E83DC1F04664756E2164756E21
