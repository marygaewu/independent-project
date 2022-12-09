// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function PlayerOne(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerOne expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerOne expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v231 = stdlib.protect(ctc0, interact.amount, 'for PlayerOne\'s interact field amount');
  const v232 = stdlib.protect(ctc0, interact.deadline, 'for PlayerOne\'s interact field deadline');
  
  const v235 = stdlib.protect(ctc0, await interact.getRandomCountry(), {
    at: './index.rsh:42:65:application',
    fs: ['at ./index.rsh:40:17:application call to [unknown function] (defined at: ./index.rsh:40:21:function exp)'],
    msg: 'getRandomCountry',
    who: 'PlayerOne'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v231, v235, v232],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v231, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v237, v238, v239], secs: v241, time: v240, didSend: v33, from: v236 } = txn1;
      
      sim_r.txns.push({
        amt: v237,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v250 = stdlib.safeAdd(v240, v239);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v237, v238, v239], secs: v241, time: v240, didSend: v33, from: v236 } = txn1;
  ;
  const v250 = stdlib.safeAdd(v240, v239);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: ['time', v250],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v236, v237, v238, v239, v250],
      evt_cnt: 0,
      funcNum: 2,
      lct: v240,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v380, time: v379, didSend: v197, from: v378 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v236,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v380, time: v379, didSend: v197, from: v378 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:37:29:application',
      fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:54:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'PlayerOne'
      });
    
    return;
    
    }
  else {
    const {data: [v256], secs: v258, time: v257, didSend: v44, from: v255 } = txn2;
    const v260 = stdlib.add(v237, v237);
    ;
    const v261 = stdlib.safeAdd(v256, v238);
    const v262 = stdlib.safeDiv(v261, stdlib.checkedBigNumberify('./index.rsh:56:57:decimal', stdlib.UInt_max, '2'));
    let v263 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v264 = v257;
    let v271 = v260;
    
    let txn3 = txn2;
    while (await (async () => {
      const v279 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v279;})()) {
      const v282 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:63:48:application',
        fs: ['at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:23:function exp)'],
        msg: 'getGuess',
        who: 'PlayerOne'
        });
      const v283 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:64:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:62:19:application call to [unknown function] (defined at: ./index.rsh:62:23:function exp)'],
        msg: 'random',
        who: 'PlayerOne'
        });
      const v284 = stdlib.digest([ctc0, ctc0], [v283, v282]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v236, v237, v239, v255, v262, v271, v284],
        evt_cnt: 1,
        funcNum: 4,
        lct: v264,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:70:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v287], secs: v289, time: v288, didSend: v72, from: v286 } = txn4;
          
          ;
          const v297 = stdlib.safeAdd(v288, v239);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [v287], secs: v289, time: v288, didSend: v72, from: v286 } = txn4;
      ;
      const v290 = stdlib.addressEq(v236, v286);
      stdlib.assert(v290, {
        at: './index.rsh:70:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'PlayerOne'
        });
      const v297 = stdlib.safeAdd(v288, v239);
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v297],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v236, v237, v239, v255, v262, v271, v287, v297],
          evt_cnt: 0,
          funcNum: 6,
          lct: v288,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v349, time: v348, didSend: v153, from: v347 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v236,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v349, time: v348, didSend: v153, from: v347 } = txn6;
        ;
        const v350 = stdlib.addressEq(v236, v347);
        const v351 = stdlib.addressEq(v255, v347);
        const v352 = v350 ? true : v351;
        stdlib.assert(v352, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:78:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'PlayerOne'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:37:29:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:78:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'PlayerOne'
          });
        
        return;
        
        }
      else {
        const {data: [v303], secs: v305, time: v304, didSend: v82, from: v302 } = txn5;
        ;
        const v306 = stdlib.addressEq(v255, v302);
        stdlib.assert(v306, {
          at: './index.rsh:77:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'PlayerOne'
          });
        const v313 = stdlib.safeAdd(v304, v239);
        const txn6 = await (ctc.sendrecv({
          args: [v236, v237, v239, v255, v262, v271, v287, v303, v313, v283, v282],
          evt_cnt: 2,
          funcNum: 7,
          lct: v304,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:85:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v318, v319], secs: v321, time: v320, didSend: v92, from: v317 } = txn6;
            
            ;
            const v326 = stdlib.eq(v303, v319);
            const v327 = stdlib.eq(v303, v262);
            const v328 = stdlib.eq(v319, v262);
            const v393 = v328 ? stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:12:12:decimal', stdlib.UInt_max, '1');
            const v394 = v327 ? stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0') : v393;
            const v325 = v326 ? stdlib.checkedBigNumberify('./index.rsh:6:12:decimal', stdlib.UInt_max, '1') : v394;
            const cv263 = v325;
            const cv264 = v320;
            const cv271 = v271;
            
            await (async () => {
              const v263 = cv263;
              const v264 = cv264;
              const v271 = cv271;
              
              if (await (async () => {
                const v279 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                
                return v279;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v365 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v237);
                const v366 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:94:38:decimal', stdlib.UInt_max, '2'));
                const v367 = v366 ? v236 : v255;
                sim_r.txns.push({
                  kind: 'from',
                  to: v367,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v313],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v236, v237, v239, v255, v262, v271, v287, v303, v313],
            evt_cnt: 0,
            funcNum: 8,
            lct: v304,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v331, time: v330, didSend: v119, from: v329 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v255,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v331, time: v330, didSend: v119, from: v329 } = txn7;
          ;
          const v332 = stdlib.addressEq(v236, v329);
          const v333 = stdlib.addressEq(v255, v329);
          const v334 = v332 ? true : v333;
          stdlib.assert(v334, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:87:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'PlayerOne'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:37:29:application',
            fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:87:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'PlayerOne'
            });
          
          return;
          
          }
        else {
          const {data: [v318, v319], secs: v321, time: v320, didSend: v92, from: v317 } = txn6;
          ;
          const v322 = stdlib.addressEq(v236, v317);
          stdlib.assert(v322, {
            at: './index.rsh:85:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerOne'
            });
          const v323 = stdlib.digest([ctc0, ctc0], [v318, v319]);
          const v324 = stdlib.digestEq(v287, v323);
          stdlib.assert(v324, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:89:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerOne'
            });
          const v326 = stdlib.eq(v303, v319);
          const v327 = stdlib.eq(v303, v262);
          const v328 = stdlib.eq(v319, v262);
          const v393 = v328 ? stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:12:12:decimal', stdlib.UInt_max, '1');
          const v394 = v327 ? stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0') : v393;
          const v325 = v326 ? stdlib.checkedBigNumberify('./index.rsh:6:12:decimal', stdlib.UInt_max, '1') : v394;
          const cv263 = v325;
          const cv264 = v320;
          const cv271 = v271;
          
          v263 = cv263;
          v264 = cv264;
          v271 = cv271;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v365 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v237);
    const v366 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:94:38:decimal', stdlib.UInt_max, '2'));
    const v367 = v366 ? v236 : v255;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v263, v262), {
      at: './index.rsh:97:24:application',
      fs: ['at ./index.rsh:96:7:application call to [unknown function] (defined at: ./index.rsh:96:35:function exp)'],
      msg: 'seeOutcome',
      who: 'PlayerOne'
      });
    
    return;
    }
  
  
  
  };
export async function PlayerTwo(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for PlayerTwo expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PlayerTwo expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v237, v238, v239], secs: v241, time: v240, didSend: v33, from: v236 } = txn1;
  ;
  const v250 = stdlib.safeAdd(v240, v239);
  stdlib.protect(ctc1, await interact.acceptWager(v237), {
    at: './index.rsh:49:25:application',
    fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
    msg: 'acceptWager',
    who: 'PlayerTwo'
    });
  const v254 = stdlib.protect(ctc0, await interact.getRandomCountry(), {
    at: './index.rsh:50:65:application',
    fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
    msg: 'getRandomCountry',
    who: 'PlayerTwo'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v236, v237, v238, v239, v250, v254],
    evt_cnt: 1,
    funcNum: 1,
    lct: v240,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v237, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v256], secs: v258, time: v257, didSend: v44, from: v255 } = txn2;
      
      const v260 = stdlib.add(v237, v237);
      sim_r.txns.push({
        amt: v237,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v261 = stdlib.safeAdd(v256, v238);
      const v262 = stdlib.safeDiv(v261, stdlib.checkedBigNumberify('./index.rsh:56:57:decimal', stdlib.UInt_max, '2'));
      const v263 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v264 = v257;
      const v271 = v260;
      
      if (await (async () => {
        const v279 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v279;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v365 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v237);
        const v366 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:94:38:decimal', stdlib.UInt_max, '2'));
        const v367 = v366 ? v236 : v255;
        sim_r.txns.push({
          kind: 'from',
          to: v367,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v250],
    tys: [ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v236, v237, v238, v239, v250],
      evt_cnt: 0,
      funcNum: 2,
      lct: v240,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v380, time: v379, didSend: v197, from: v378 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v236,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v380, time: v379, didSend: v197, from: v378 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:37:29:application',
      fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:54:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'PlayerTwo'
      });
    
    return;
    
    }
  else {
    const {data: [v256], secs: v258, time: v257, didSend: v44, from: v255 } = txn2;
    const v260 = stdlib.add(v237, v237);
    ;
    const v261 = stdlib.safeAdd(v256, v238);
    const v262 = stdlib.safeDiv(v261, stdlib.checkedBigNumberify('./index.rsh:56:57:decimal', stdlib.UInt_max, '2'));
    let v263 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v264 = v257;
    let v271 = v260;
    
    let txn3 = txn2;
    while (await (async () => {
      const v279 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v279;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v287], secs: v289, time: v288, didSend: v72, from: v286 } = txn4;
      ;
      const v290 = stdlib.addressEq(v236, v286);
      stdlib.assert(v290, {
        at: './index.rsh:70:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'PlayerTwo'
        });
      const v297 = stdlib.safeAdd(v288, v239);
      const v301 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:75:58:application',
        fs: ['at ./index.rsh:74:19:application call to [unknown function] (defined at: ./index.rsh:74:23:function exp)'],
        msg: 'getGuess',
        who: 'PlayerTwo'
        });
      
      const txn5 = await (ctc.sendrecv({
        args: [v236, v237, v239, v255, v262, v271, v287, v297, v301],
        evt_cnt: 1,
        funcNum: 5,
        lct: v288,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:77:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v303], secs: v305, time: v304, didSend: v82, from: v302 } = txn5;
          
          ;
          const v313 = stdlib.safeAdd(v304, v239);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v297],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v236, v237, v239, v255, v262, v271, v287, v297],
          evt_cnt: 0,
          funcNum: 6,
          lct: v288,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v349, time: v348, didSend: v153, from: v347 } = txn6;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v236,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v349, time: v348, didSend: v153, from: v347 } = txn6;
        ;
        const v350 = stdlib.addressEq(v236, v347);
        const v351 = stdlib.addressEq(v255, v347);
        const v352 = v350 ? true : v351;
        stdlib.assert(v352, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:78:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'PlayerTwo'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:37:29:application',
          fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:78:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'PlayerTwo'
          });
        
        return;
        
        }
      else {
        const {data: [v303], secs: v305, time: v304, didSend: v82, from: v302 } = txn5;
        ;
        const v306 = stdlib.addressEq(v255, v302);
        stdlib.assert(v306, {
          at: './index.rsh:77:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'PlayerTwo'
          });
        const v313 = stdlib.safeAdd(v304, v239);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v313],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v236, v237, v239, v255, v262, v271, v287, v303, v313],
            evt_cnt: 0,
            funcNum: 8,
            lct: v304,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v331, time: v330, didSend: v119, from: v329 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v255,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v331, time: v330, didSend: v119, from: v329 } = txn7;
          ;
          const v332 = stdlib.addressEq(v236, v329);
          const v333 = stdlib.addressEq(v255, v329);
          const v334 = v332 ? true : v333;
          stdlib.assert(v334, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:87:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'PlayerTwo'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:37:29:application',
            fs: ['at ./index.rsh:36:9:application call to [unknown function] (defined at: ./index.rsh:36:37:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:35:28:function exp)', 'at ./index.rsh:87:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'PlayerTwo'
            });
          
          return;
          
          }
        else {
          const {data: [v318, v319], secs: v321, time: v320, didSend: v92, from: v317 } = txn6;
          ;
          const v322 = stdlib.addressEq(v236, v317);
          stdlib.assert(v322, {
            at: './index.rsh:85:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'PlayerTwo'
            });
          const v323 = stdlib.digest([ctc0, ctc0], [v318, v319]);
          const v324 = stdlib.digestEq(v287, v323);
          stdlib.assert(v324, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:89:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'PlayerTwo'
            });
          const v326 = stdlib.eq(v303, v319);
          const v327 = stdlib.eq(v303, v262);
          const v328 = stdlib.eq(v319, v262);
          const v393 = v328 ? stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:12:12:decimal', stdlib.UInt_max, '1');
          const v394 = v327 ? stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0') : v393;
          const v325 = v326 ? stdlib.checkedBigNumberify('./index.rsh:6:12:decimal', stdlib.UInt_max, '1') : v394;
          const cv263 = v325;
          const cv264 = v320;
          const cv271 = v271;
          
          v263 = cv263;
          v264 = cv264;
          v271 = cv271;
          
          txn3 = txn6;
          continue;}
        
        }
      
      
      
      }
    const v365 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v237);
    const v366 = stdlib.eq(v263, stdlib.checkedBigNumberify('./index.rsh:94:38:decimal', stdlib.UInt_max, '2'));
    const v367 = v366 ? v236 : v255;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v263, v262), {
      at: './index.rsh:97:24:application',
      fs: ['at ./index.rsh:96:7:application call to [unknown function] (defined at: ./index.rsh:96:35:function exp)'],
      msg: 'seeOutcome',
      who: 'PlayerTwo'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByANAAEIAlggBSgGUIABiAE4JgMBAAEBACI1ADEYQQRzKmRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEGDEAB9EmBBwxAAPFJJAxAAFUkEkQkNAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEF/zbLrAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhBFuyCCOyEDT/sgezQgOTSCQ0ARJENARJIhJMNAISEUQoZClkUEk1A0lJVwAgNf8hCVs1/iEKWzX9STUFSSJbNfwkWzX7gASCa3t2NPwWUDT7FlCwMgY0AyELWwxENP8xABJENANXYCA0/BY0+xZQARJENP80AyEFWzQDIQdbNANXMCA0/iMlNPs0/hJNIjT9NP4STSM0/TT7Ek0yBjQDIQRbQgKiSSEIDEAAVEghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywMgY0AyEKWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQRbsggjshA0/7IHs0ICokghCDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/IQVbNf4hB1s1/VcwIDX8IQlbNfshBFs1+ldgIDX5STUFFzX4gASBqprPNPgWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX3NP80/hZQNP0WUDT8UDT7FlA0+hZQNPlQNPgWUDT3FlAoSwFXAH9nKUsBV38RZ0gkNQEyBjUCQgIdSSUMQADRSYEEDEAAikghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKVwAgNf8hBVs1/iEHWzX9VzAgNfwhCVs1+yEEWzX6STUFNfmABDiwIy00+VCwNP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5UDT4FlAoSwFXAH9nKUsBV38JZ0ghCDUBMgY1AkIBhiUSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDFsPRLEisgE0AyEFW7III7IQNANXACCyB7NCASpJIwxAAFxIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQVbNf9JNQUXNf6ABNUVGRQ0/hZQsDIGNAMhDFsMRDT/iAFYNANXACA0/zQDgTBbMQA0/jQDIQdbCCUKIzIGNP9JCEIAbUiBoI0GiAEuIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yRbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULA0/4gA9DIGNP0INfwxADT/FlA0/hZQNP0WUDT8FlAoSwFXAEBnSCM1ATIGNQJCAHc1/zX+Nf01/DX7Nfo1+TX4NP0jEkEAKDT4NPkWUDT6FlA0+1A0/BZQNP8WUChLAVcAYGdIIQY1ATIGNQJCADixIrIBJTT5C7III7IQNPs0+DT9JRJNsgezQgAAMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 144,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"internalType":"struct T0","name":"v540","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"},{"internalType":"uint256","name":"elem3","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T9","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v542","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v547","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T5","name":"v549","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T2","name":"v551","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v553","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T9","name":"v555","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T4","name":"v560","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001dd09081380391601f1980601f85011683019360018060401b03928486108487111762000396578160809286926040988952833981010312620003ac57835160808101818110848211176200039657855283518152602080850151908083019182526060878701519688850197885201519260608101938452436003558751926200008e84620003b1565b6000809452885190620000a182620003b1565b84825260049260ff8454166200037f577f6622a74fae23ff344b23c0a826edeb727037dd46564326abb779eb5465429ceb60a08c513381528351888201528d8551908201528c51606082015289516080820152a151801590811562000372575b50156200035b578051340362000344578551430180431162000331574381106200032d57825289519160a083018381108a8211176200031a578b52848301968688528b84019a878c5260608501938885526080860195898752339052518952518b52518252518252600198898655438a558a51963386890152518b8801525160608701525160808601525160a085015260a0845260c0840184811087821117620003075788528351958611620002f457600254908782811c92168015620002e9575b83831014620002d65750601f81116200028a575b508093601f8611600114620002225750509183949184939462000216575b50501b916000199060031b1c1916176002555b51611a029081620003ce8239f35b015192503880620001f5565b600283528183209493928692918316915b888383106200026f575050501062000255575b505050811b0160025562000208565b015160001960f88460031b161c1916905538808062000246565b85870151885590960195948501948793509081019062000233565b60028352818320601f870160051c810191838810620002cb575b601f0160051c019087905b828110620002bf575050620001d7565b848155018790620002af565b9091508190620002a4565b634e487b7160e01b845260229052602483fd5b91607f1691620001c3565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b875260418552602487fd5b8580fd5b634e487b7160e01b865260118452602486fd5b895163100960cb60e01b8152600981850152602490fd5b895163100960cb60e01b8152600881850152602490fd5b9050600154143862000101565b8a5163100960cb60e01b8152600781860152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620003965760405256fe608080604052600436101561001a575b50361561001857005b005b60003560e01c90816306a72303146113db5750806313777274146110ae5780631e93b0f1146110905780632e92842114610f015780634b2f7b4214610b6d5780638323075714610b4f578063ab53f2c614610adb578063d750a598146105bc578063e3342bfa1461021f5763f5a239bc14610095573861000f565b602036600319011261021a5760006040516100af816115a8565b526100b936611899565b60ff60045416610201577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a604051806100f38433836118c9565b0390a16001600054036101e85761011a61010b611631565b60208082518301019101611759565b905180159081156101dc575b50156101c357608081015143106101aa573461019157600080808093602060018060a01b0382511691015190828215610188575bf11561017c57600080556000600155610171611821565b602060405160008152f35b6040513d6000823e3d90fd5b506108fc61015a565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610126565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b604036600319011261021a576000604051610239816115a8565b52610243366116e6565b60405190610250826115a8565b6000825260ff600454166105a3577f2b488b46f65093e5cc34b7a23106f60902da34f9221ba5c98d129851d4f8efe66040518061028e84338361171e565b0390a160056000540361058a576102a3611631565b9160c08380518101031261021a5760c0604051936102c0856115c3565b6102cc60208201611745565b855260408101516020860152606081015160408601526102ee60808201611745565b606086015260a08101516080860152015160a08401528151801590811561057e575b5015610565573461054c578251336001600160a01b03909116036105335761033c6040840151436117f6565b81526103466117b8565b9060018060a01b03845116928383526020850151946020840195865260408101516040850190815260018060a01b03606083015116906060860191825260e0602060a060808601519560808a0196875201519560a0890196875201519560c08801968752519601958652600660005560019743895560405197602089015251604088015251606087015260018060a01b0390511660808601525160a08501525160c08401525160e08301525161010090818301528152610405816115de565b8051906001600160401b03821161051d5761042160025461156e565b601f81116104d5575b50602090601f831160011461046f57928293918392600094610464575b50501b916000199060031b1c191617600255602060405160008152f35b015192508480610447565b90601f1983169160026000528360206000209360005b878282106104bc575050106104a3575b505050811b01600255610171565b015160001960f88460031b161c19169055828080610495565b8486015187559095019460209485019487935001610485565b600260005261050d906000805160206119d6833981519152601f850160051c81019160208610610513575b601f0160051c019061180a565b8361042a565b9091508190610500565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541484610310565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b606036600319011261021a5760006040516105d6816115a8565b52604051606081016001600160401b0381118282101761051d576040526004358152602081019060243582526040810191604435835260ff60045416610ac2577f836f3f3c14b23746a2883fac5c0c1d66ccfa134a61ca0ba1151626eba1a9f41b6080604051338152845160208201528351604082015285516060820152a1600860005403610aa95761067961066a611631565b60208082518301019101611956565b91518015908115610a9d575b5015610a8457610100820151431015610a6b5734610a52578151336001600160a01b0390911603610a395760c0820151905183516040805160208101938452808201929092528152606081019290916001600160401b0384118385101761051d57836040528251902003610a225750506106fd6117b8565b9160018060a01b03825116908184526020830151928360208601526040810151604086015260018060a01b0360608201511691826060870152608082018051608088015260e08301519151908183146000146109f65750505060a06001915b82828801524360c0880152015160e08601526001811460001461093a575050505060a060405161078b816115c3565b600081526000602082015260006040820152600060608201526000608082015260008282015260e0600180841b03845116938483526020810151602084015260408101516040840152600180851b036060820151166060840152608081015160808401520151828201526005600055436001556040519260208401526020810151604084015260408101516060840152600180831b036060820151166080840152608081015182840152015160c082015260c0815261084981611616565b80516001600160401b03811161051d5761086460025461156e565b601f81116108fd575b50602091601f82116001146108b2579181926000926108a7575b50508160011b916000199060031b1c191617600255602060405160008152f35b015190508280610887565b601f19821692600260005260206000209160005b8581106108e5575083600195106104a357505050811b01600255610171565b919260206001819286850151815501940192016108c6565b6002600052610934906000805160206119d6833981519152601f840160051c8101916020851061051357601f0160051c019061180a565b8261086d565b92935090916002036109ef57505b600091801590811561099b575b501561021a576000808093819382908215610991575b6001600160a01b031690f11561017c5760008055600060015561098c611821565b610171565b6108fc915061096b565b9092506001600160ff1b0381116001166109d9578060011b926109c357820460021483610955565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b9050610948565b51918203610a0b57505060a060005b9161075c565b03610a195760a06002610a05565b60a06001610a05565b63100960cb60e01b8252602b606490910152602490fd5b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b60405163100960cb60e01b815260276004820152602490fd5b90506001541484610685565b60405163100960cb60e01b815260266004820152602490fd5b60405163100960cb60e01b815260256004820152602490fd5b3461021a57600036600319011261021a57600054610af7611631565b6040519182528160206040818301528251908160408401526000935b828510610b36575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610b13565b3461021a57600036600319011261021a576020600154604051908152f35b604036600319011261021a576000604051610b87816115a8565b52610b91366116e6565b604051610b9d816115a8565b6000815260ff60045416610ee8577ff410ae3157431721924ef1b12812af4e6e901fb5ee3d00e646d08375df1ca36260405180610bdb85338361171e565b0390a1600660005403610ecf57610c02610bf3611631565b602080825183010191016118e3565b9082518015908115610ec3575b5015610eaa5760e0820151431015610e915734610e78576060820151336001600160a01b0390911603610e5f57610c4a6040830151436117f6565b8152602060405193610c5b856115de565b60008552600082860152600060408601526000606086015260006080860152600060a0860152600060c0860152600060e0860152600061010086015260c060018060a01b038551169485875283810151848801526040810151604088015260018060a01b0360608201511660608801526080810151608088015260a081015160a0880152015160c0860152015160e0840152516101008301526008600055610100600192438455604051926020840152602081015160408401526040810151606084015260018060a01b036060820151166080840152608081015160a084015260a081015160c084015260c081015160e084015260e08101518284015201516101209081830152815261014081019060018060401b03918181108382111761051d57604052805191821161051d57610d9460025461156e565b601f8111610e22575b50602090601f8311600114610dd6579282939183926000946104645750501b916000199060031b1c191617600255602060405160008152f35b90601f1983169160026000528360206000209360005b87828210610e09575050106104a357505050811b01600255610171565b8486015187559095019460209485019487935001610dec565b6002600052610e59906000805160206119d6833981519152601f850160051c8101916020861061051357601f0160051c019061180a565b83610d9d565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b60405163100960cb60e01b8152601b6004820152602490fd5b90506001541484610c0f565b60405163100960cb60e01b8152601a6004820152602490fd5b60405163100960cb60e01b815260196004820152602490fd5b602036600319011261021a576000604051610f1b816115a8565b52610f2536611899565b60ff60045416611077577f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd60405180610f5f8433836118c9565b0390a160066000540361105e57610f77610bf3611631565b90518015908115611052575b50156110395760e0810151431061102057346110075780516001600160a01b039081163303610ff95760015b15610fe257600080808460a082958251169101519082821561018857f11561017c57600080556000600155610171611821565b602460405163100960cb60e01b8152816004820152fd5b338160608401511614610faf565b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b60405163100960cb60e01b815260216004820152602490fd5b90506001541482610f83565b60405163100960cb60e01b815260206004820152602490fd5b60405163100960cb60e01b8152601f6004820152602490fd5b3461021a57600036600319011261021a576020600354604051908152f35b604036600319011261021a5760006040516110c8816115a8565b526110d2366116e6565b60ff600454166113c2577fe5de0525b632040f86734209a760b5d584fc6591da321a373e0ad15b2a7639246040518061110c84338361171e565b0390a1600180600054036113a957611122611631565b91611137602093848082518301019101611759565b8151801590811561139e575b501561138557608081015143101561136c57838101908151340361135357600091829161116e6117b8565b60018060a01b03928383511682528051908983019182526111ab6060850151946040850195865260408c606087019b338d520151910151906117f6565b891c90608084019182528960a08501524360c0850152519060e08401918001825285604051998a966111dc886115c3565b8988528d8801958a87528360408a01988c8a5260a060608c019b8e8d52608081019e8f52019d8e525116809d525186525186525116855251865251865260056000554388556040519689880152516040870152516060860152511660808401525160a08301525160c082015260c0815261125581611616565b8051906001600160401b03821161051d5761127160025461156e565b601f8111611322575b508390601f83116001146112bd579282939183926000946112b2575b50501b916000199060031b1c1916176002555b60405160008152f35b015192508580611296565b90601f19831691600260005283866000209360005b888883831061130b57505050106112f2575b505050811b016002556112a9565b015160001960f88460031b161c191690558380806112e4565b8686015188559096019594850194879350016112d2565b61134d90600260005285600020601f850160051c81019187861061051357601f0160051c019061180a565b8461127a565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b905083541485611143565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b602036600319011261021a57806113f36000926115a8565b526113fd36611899565b60ff60045416611555577f90a060bb9517819ff9fcae31809040edc14dc784a4ce151b7d5b20fea1b5cc6b604051806114378433836118c9565b0390a160086000540361153c5761144f61066a611631565b90518015908115611530575b50156115175761010081015143106114fe57346114e55780516001600160a01b0390811633036114d75760015b156114be57600080808460a082956060830151169101519082821561018857f11561017c57600080556000600155610171611821565b60405163100960cb60e01b815260316004820152602490fd5b338160608401511614611488565b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b9050600154148261145b565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b90600182811c9216801561159e575b602083101461158857565b634e487b7160e01b600052602260045260246000fd5b91607f169161157d565b602081019081106001600160401b0382111761051d57604052565b60c081019081106001600160401b0382111761051d57604052565b61012081019081106001600160401b0382111761051d57604052565b61010081019081106001600160401b0382111761051d57604052565b60e081019081106001600160401b0382111761051d57604052565b6040519060006002546116438161156e565b8085526001918083169081156116c75750600114611681575b5050829003601f01601f191682016001600160401b0381118382101761051d57604052565b600260009081526020935091836000805160206119d68339815191525b8385106116b35750505050830101388061165c565b80548886018301529301928490820161169e565b919250506020925060ff191682850152151560051b830101388061165c565b604090600319011261021a5760408051919082016001600160401b0381118382101761051d5760405260043582526024356020830152565b6001600160a01b039091168152815160208083019190915290910151604082015260600190565b51906001600160a01b038216820361021a57565b908160a091031261021a576040519060a08201906001600160401b0382118383101761051d5760809160405261178e81611745565b83526020810151602084015260408101516040840152606081015160608401520151608082015290565b604051906117c5826115fa565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201528260c08201520152565b91908201918281116109d957821061021a57565b818110611815575050565b6000815560010161180a565b61182c60025461156e565b806118345750565b601f811160011461184757506000600255565b600260005261188c90601f0160051c6000805160206119d6833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61180a565b6000602081208160025555565b602090600319011261021a5760405190602082016001600160401b0381118382101761051d576040526004358252565b6001600160a01b0390911681529051602082015260400190565b908161010091031261021a5760e0604051916118fe836115fa565b61190781611745565b8352602081015160208401526040810151604084015261192960608201611745565b60608401526080810151608084015260a081015160a084015260c081015160c0840152015160e082015290565b908161012091031261021a576040519061196f826115de565b61197881611745565b8252602081015160208301526040810151604083015261199a60608201611745565b60608301526080810151608083015260a081015160a083015260c081015160c083015260e081015160e083015261010080910151908201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 7632,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:46:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:54:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:61:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:71:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:78:14:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:87:20:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "PlayerOne": PlayerOne,
  "PlayerTwo": PlayerTwo
  };
export const _APIs = {
  };
