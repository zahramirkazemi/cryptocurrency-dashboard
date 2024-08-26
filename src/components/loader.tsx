"use client"

import React from "react";

const Loader = React.forwardRef((props, ref) => (<div className="w-8 h-8 relative border-2 border-slate-800 border-t-sky-600 rounded-full animate-spin" ref={ref as React.ForwardedRef<HTMLDivElement>}></div>));

export default Loader;
