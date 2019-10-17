/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var Fx = require('../../components/fx');
var Lib = require('../../lib');
var constants = require('./constants');

// var Axes = require('../../plots/cartesian/axes');

module.exports = function hoverPoints(pointData, xval, yval) {
    var cd0 = pointData.cd[0];
    var trace = cd0.trace;
    var xa = pointData.xa;
    var ya = pointData.ya;

    // Return early if not on image
    if(Fx.inbox(xval - cd0.x0, xval - (cd0.x0 + cd0.w * trace.dx), 0) > 0 ||
            Fx.inbox(yval - cd0.y0, yval - (cd0.y0 + cd0.h * trace.dy), 0) > 0) {
        return;
    }

    // Find nearest pixel's index and pixel center
    var nx = Math.floor((xval - cd0.x0) / trace.dx);
    var ny = Math.floor(Math.abs(yval - cd0.y0) / trace.dy);

    var colormodel = trace.colormodel;
    var dims = colormodel.length;
    var hoverinfo = cd0.hi || trace.hoverinfo;
    var c = trace._scaler(cd0.z[ny][nx]);
    var s = constants.colormodel[colormodel].suffix;

    var colorstring = [];
    if(trace.hovertemplate || hoverinfo && hoverinfo.split('+').indexOf('color') !== -1) {
        colorstring.push('[' + [c[0] + s[0], c[1] + s[1], c[2] + s[2]].join(', '));
        if(dims === 4) colorstring.push(', ' + c[3] + s[3]);
        colorstring.push(']');
        colorstring = colorstring.join('');
        pointData.extraText = '<span style="text-transform:uppercase">' + colormodel + '</span>: ' + colorstring;
    }

    var py = ya.c2p(cd0.y0 + (ny + 0.5) * trace.dy);
    var xVal = cd0.x0 + (nx + 0.5) * trace.dx;
    var yVal = cd0.y0 + (ny + 0.5) * trace.dy;
    var zLabel = '[' + cd0.z[ny][nx].slice(0, trace.colormodel.length).join(', ') + ']';
    return [Lib.extendFlat(pointData, {
        index: [ny, nx],
        x0: xa.c2p(cd0.x0 + nx * trace.dx),
        x1: xa.c2p(cd0.x0 + (nx + 1) * trace.dx),
        y0: py,
        y1: py,
        c: c,
        xVal: xVal,
        xLabelVal: xVal,
        yVal: yVal,
        yLabelVal: yVal,
        zLabelVal: zLabel,
        hovertemplateLabels: {
            'zLabel': zLabel,
            'cLabel': colorstring,
            'c[0]Label': c[0] + s[0],
            'c[1]Label': c[1] + s[1],
            'c[2]Label': c[2] + s[2]
        }
    })];
};
