var MOCKS = [
    // Cartesian
    { name: 'cartesian - 10', file: '10.json' },
    { name: 'cartesian - 14', file: '14.json' },
    { name: 'cartesian - 12', file: '12.json' },
    { name: 'cartesian - 17', file: '17.json' },
    { name: 'cartesian - 22', file: '22.json' },
    { name: 'cartesian - 24', file: '24.json' },
    { name: 'cartesian - 28', file: '28.json' },
    { name: 'cartesian - 30', file: '30.json' },
    { name: 'cartesian - 32', file: '32.json' },
    { name: 'cartesian - axes booleans', file: 'axes_booleans.json' },
    { name: 'cartesian - axes labels', file: 'axes_labels.json' },
    { name: 'cartesian - axes lines', file: 'axes_lines.json' },
    { name: 'cartesian - axes range manual', file: 'axes_range_manual.json' },
    { name: 'cartesian - axes range type', file: 'axes_range_type.json' },
    { name: 'cartesian - axes range mode', file: 'axes_range_mode.json' },
    { name: 'cartesian - basic error bar', file: 'basic_error_bar.json' },
    { name: 'cartesian - bubble markersize', file: 'bubble_markersize0.json' },
    { name: 'cartesian - bubble nonnumeric sizes', file: 'bubble_nonnumeric-sizes.json' },
    { name: 'cartesian - date axes', file: 'date_axes.json' },
    { name: 'cartesian - error bar asymmetric array', file: 'error_bar_asymmetric_array.json' },
    { name: 'cartesian - error bar asymmetric constant', file: 'error_bar_asymmetric_constant.json' },
    { name: 'cartesian - error bar horizontal', file: 'error_bar_horizontal.json' },
    { name: 'cartesian - error bar style', file: 'error_bar_style.json' },
    { name: 'cartesian - fonts', file: 'fonts.json' },
    { name: 'cartesian - global font', file: 'global_font.json' },
    { name: 'cartesian - legend inside', file: 'legend_inside.json' },
    { name: 'cartesian - legend labels', file: 'legend_labels.json' },
    { name: 'cartesian - legend outside', file: 'legend_outside.json' },
    { name: 'cartesian - legend style', file: 'legend_style.json' },
    { name: 'cartesian - line style', file: 'line_style.json' },
    { name: 'cartesian - multiple subplots', file: 'multiple_subplots.json' },
    { name: 'cartesian - scatter colorscale colorbar', file: 'scatter-colorscale-colorbar.json' },
    { name: 'cartesian - scatter marker line colorscales', 'file': 'scatter-marker-line-colorscales.json' },
    { name: 'cartesian - show legend', file: 'show_legend.json' },
    { name: 'cartesian - simple inset', file: 'simple_inset.json' },
    { name: 'cartesian - size margins', file: 'size_margins.json' },
    { name: 'cartesian - stacked coupled subplots', file: 'stacked_coupled_subplots.json' },
    { name: 'cartesian - stacked subplots', file: 'stacked_subplots.json' },

    // Geo
    { name: 'geo - first', file: 'geo_first.json' },
    { name: 'geo - second', file: 'geo_second.json' },
    { name: 'geo - kavrayskiy7', file: 'geo_kavrayskiy7.json' },
    { name: 'geo - custom colorscale', file: 'geo_custom-colorscale.json' },
    { name: 'geo - scattergeo locations', file: 'geo_scattergeo-locations.json' },
    { name: 'geo - multi geos', file: 'geo_multi-geos.json' },
    { name: 'geo - usa states', file: 'geo_usa-states.json' },
    { name: 'geo - legend only', file: 'geo_legendonly.json' },
    { name: 'geo - europe bubbles', file: 'geo_europe-bubbles.json' },
    { name: 'geo - orthographic', file: 'geo_orthographic.json' },
    { name: 'geo - big frame', file: 'geo_big-frame.json' },
    { name: 'geo - background color', file: 'geo_bg-color.json' },
    { name: 'geo - canadian cities', file: 'geo_canadian-cites.json' },
    { name: 'geo - conic conformal', file: 'geo_conic-conformal.json' },
    { name: 'geo - stereograpic', file: 'geo_stereographic.json' },
    { name: 'geo - choropleth text', file: 'geo_choropleth-text.json' },
    { name: 'geo - choropleth usa', file: 'geo_choropleth-usa.json' },
    { name: 'geo - country names', file: 'geo_country-names.json' },

    // gl2d
    { name: 'gl2d - 10', file: 'gl2d_10.json' },
    { name: 'gl2d - 14', file: 'gl2d_14.json' },
    { name: 'gl2d - 12', file: 'gl2d_12.json' },
    { name: 'gl2d - 17', file: 'gl2d_17.json' },
    { name: 'gl2d - 22', file: 'gl2d_22.json' },
    { name: 'gl2d - 24', file: 'gl2d_24.json' },
    { name: 'gl2d - 28', file: 'gl2d_28.json' },
    { name: 'gl2d - 30', file: 'gl2d_30.json' },
    { name: 'gl2d - 32', file: 'gl2d_32.json' },
    { name: 'gl2d - axes booleans', file: 'gl2d_axes_booleans.json' },
    { name: 'gl2d - axes labels', file: 'gl2d_axes_labels.json' },
    { name: 'gl2d - axes lines', file: 'gl2d_axes_lines.json' },
    { name: 'gl2d - axes range_manual', file: 'gl2d_axes_range_manual.json' },
    { name: 'gl2d - axes range_type', file: 'gl2d_axes_range_type.json' },
    { name: 'gl2d - axes range_mode', file: 'gl2d_axes_range_mode.json' },
    { name: 'gl2d - basic error_bar', file: 'gl2d_basic_error_bar.json' },
    { name: 'gl2d - bubble markersize0', file: 'gl2d_bubble_markersize0.json' },
    { name: 'gl2d - bubble nonnumeric-sizes', file: 'gl2d_bubble_nonnumeric-sizes.json' },
    { name: 'gl2d - date axes', file: 'gl2d_date_axes.json' },
    { name: 'gl2d - error bar asymmetric array', file: 'gl2d_error_bar_asymmetric_array.json' },
    { name: 'gl2d - error bar asymmetric constant', file: 'gl2d_error_bar_asymmetric_constant.json' },
    { name: 'gl2d - error bar horizontal', file: 'gl2d_error_bar_horizontal.json' },
    { name: 'gl2d - error bar style', file: 'gl2d_error_bar_style.json' },
    { name: 'gl2d - fonts', file: 'gl2d_fonts.json' },
    { name: 'gl2d - global font', file: 'gl2d_global_font.json' },
    { name: 'gl2d - legend inside', file: 'gl2d_legend_inside.json' },
    { name: 'gl2d - legend labels', file: 'gl2d_legend_labels.json' },
    { name: 'gl2d - legend outside', file: 'gl2d_legend_outside.json' },
    { name: 'gl2d - legend style', file: 'gl2d_legend_style.json' },
    { name: 'gl2d - line style', file: 'gl2d_line_style.json' },
    { name: 'gl2d - multiple subplots', file: 'gl2d_multiple_subplots.json' },
    { name: 'gl2d - scatter colorscale colorbar', file: 'gl2d_scatter-colorscale-colorbar.json' },
    { name: 'gl2d - scatter marker line colorscales', file: 'gl2d_scatter-marker-line-colorscales.json' },
    { name: 'gl2d - show legend', file: 'gl2d_show_legend.json' },
    { name: 'gl2d - simple inset', file: 'gl2d_simple_inset.json' },
    { name: 'gl2d - size margins', file: 'gl2d_size_margins.json' },
    { name: 'gl2d - stacked coupled_subplots', file: 'gl2d_stacked_coupled_subplots.json' },
    { name: 'gl2d - stacked subplots', file: 'gl2d_stacked_subplots.json' },

    // gl3d
    { name: 'gl3d - bunny-hull', file: 'gl3d_bunny-hull.json' },
    { name: 'gl3d - ibm-plot', file: 'gl3d_ibm-plot.json' },
    { name: 'gl3d - marker-color', file: 'gl3d_marker-color.json' },
    { name: 'gl3d - log-axis-big', file: 'gl3d_log-axis-big.json' },
    { name: 'gl3d - delaunay', file: 'gl3d_delaunay.json' },
    { name: 'gl3d - log-axis', file: 'gl3d_log-axis.json' },
    { name: 'gl3d - multi-scene', file: 'gl3d_multi-scene.json' },
    { name: 'gl3d - surface-lighting', file: 'gl3d_surface-lighting.json' },
    { name: 'gl3d - z-range', file: 'gl3d_z-range.json' },
    { name: 'gl3d - mirror-ticks', file: 'gl3d_mirror-ticks.json' },
    { name: 'gl3d - autorange-zero', file: 'gl3d_autorange-zero.json' },
    { name: 'gl3d - contour-lines', file: 'gl3d_contour-lines.json' },
    { name: 'gl3d - xy-defined-ticks', file: 'gl3d_xy-defined-ticks.json' },
    { name: 'gl3d - opacity-surface', file: 'gl3d_opacity-surface.json' },
    { name: 'gl3d - projection-traces', file: 'gl3d_projection-traces.json' },
    { name: 'gl3d - opacity-scaling-spikes', file: 'gl3d_opacity-scaling-spikes.json' },
    { name: 'gl3d - text-weirdness', file: 'gl3d_text-weirdness.json' },
    { name: 'gl3d - wire-surface', file: 'gl3d_wire-surface.json' },
    { name: 'gl3d - triangle', file: 'gl3d_triangle.json' },
    { name: 'gl3d - snowden', file: 'gl3d_snowden.json' },
    { name: 'gl3d - bunny', file: 'gl3d_bunny.json' },
    { name: 'gl3d - ribbons', file: 'gl3d_ribbons.json' },
    { name: 'gl3d - scatter-date', file: 'gl3d_scatter-date.json' },
    { name: 'gl3d - cufflinks', file: 'gl3d_cufflinks.json' },
    { name: 'gl3d - chrisp-nan-1', file: 'gl3d_chrisp-nan-1.json' },
    { name: 'gl3d - marker-arrays', file: 'gl3d_marker-arrays.json' },
    { name: 'gl3d - scatter3d-colorscale', file: 'gl3d_scatter3d-colorscale.json' },
    { name: 'gl3d - autocolorscale', file: 'gl3d_autocolorscale.json' },
    { name: 'gl3d - nan-holes', file: 'gl3d_nan-holes.json' },
    { name: 'gl3d - scatter3d-connectgaps', file: 'gl3d_scatter3d-connectgaps.json' },
    { name: 'gl3d - tet', file: 'gl3d_tet.json' },
    { name: 'gl3d - surface_intensity', file: 'gl3d_surface_intensity.json' }
];
