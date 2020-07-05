if (!loadedVersions.includes('m15Devoid')) {
	loadedVersions.push("m15Devoid")
	loadFrameImages([
		['White Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameW.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Blue Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameU.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Black Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameB.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Red Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameR.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Green Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameG.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Multicolored Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameM.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Artifact Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameA.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Land Devoid Frame', 'data/images/m15/devoid/m15DevoidFrameL.png', 0, 0, 1, 1, ['Full', 'Pinline (m15)', 'Title (m15)', 'Type (m15)', 'Rules (m15)', 'Frame (m15)', 'Border (m15)', 'Pinline Super (m15)']],
		['Devoid Power/Toughness', 'data/images/m15/m15NicknamePTC.png', 1136/1500, 1858/2100, 282/1500, 154/2100, ['Full']]
	], 'frameClassM15Devoid')
}

if (currentVersion != 'm15Devoid') {
	currentVersion = 'm15Devoid'

	artX = scaleX(60 / 1500)
	artY = scaleY(218 / 2100)
	artWidth = scaleX(1380 / 1500)
	artHeight = scaleY(1720 / 2100)
}

hideFrameImages('frameClassM15Devoid')