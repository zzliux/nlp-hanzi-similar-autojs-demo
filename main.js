runtime.unloadDex('./assets/nlp-hanzi-similar-1.3.0.dex');
runtime.loadDex('./assets/nlp-hanzi-similar-1.3.0.dex');

let hanZiSimilarBridge = null;
function nlpSimilarity(s1, s2) {
	if (!hanZiSimilarBridge) {
		hanZiSimilarBridge = new Packages.cn.zzliux.HanZiSimilarBridge();
		hanZiSimilarBridge.init(
			files.read(files.cwd() + '/assets/data/bihuashu.txt'),
			files.read(files.cwd() + '/assets/data/bushou.txt'),
			files.read(files.cwd() + '/assets/data/jiegou.txt'),
			files.read(files.cwd() + '/assets/data/sijiao.txt'),
			files.read(files.cwd() + '/assets/data/userdefine.txt')
		);
	}
	const result = hanZiSimilarBridge.similarity(s1, s2);
	return result;
}



console.log("防御,坊御: ", nlpSimilarity("防御", "坊御")); // 0.8175824175824176
console.log("人鬼情未了,入免晴末子: ", nlpSimilarity("人鬼情未了", "入免晴末子")); // 0.6670940170940172
console.log("金币,全部: ", nlpSimilarity("金币", "全部")); // 0.4211538461538462
console.log("金,全: " , nlpSimilarity("金", "全")); // 0.6884615384615385
console.log("沒有,没有: ", nlpSimilarity("沒有", "没有")); // 1
console.log("戰鬥,战斗: ", nlpSimilarity("戰鬥", "战斗")); // 0.4985576923076923
console.log("abc,qbc: ", nlpSimilarity("abc", "qbc")); // 0.9
console.log("未,末: ", nlpSimilarity("未", "末")); // 1

