(ns tic-tac-toe.corejs-spec
  (:require-macros [speclj.core :refer [should= it focus-describe describe before context stub should-have-invoked with-stubs]]
                   [c3kit.wire.spec-helperc :refer [should-not-select should-select]])
  (:require [tic-tac-toe.corejs :as sut]
            [speclj.core]
            [tic-tac-toe.play-gamec :as game]))

#_(describe "corejs"
  (with-stubs)
  (context "update-state"
    (it "calls reset!"
      (with-redefs [reset! (fn [_ _] :reset!)
                    game/get-next-state (stub :get-next-state {:return {}})]
                   (sut/update-state 1 (delay {}))
                   (should-have-invoked :get-next-state))))
  )
