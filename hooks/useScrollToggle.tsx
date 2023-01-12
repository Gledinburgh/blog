import { useEffect, useState } from "react";

export default function useScrollToggle(expanded: boolean) {



  if (typeof window != 'undefined' && window.document && expanded) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.style.overflow = 'unset'
  }
  return null


};