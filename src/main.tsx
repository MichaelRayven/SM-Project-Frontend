// ** React Imports
import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"

// ** Redux Imports
import { Provider } from "react-redux/es/exports"
import { store } from "@/configs/redux/store"

// ** CALS Imports
import { AbilityContext } from "@/utility/context/Can"
import defineAbilityFor from "@/configs/casl/defineAbility"

import Spinner from "@/views/components/Spinner"

import "@/styles/styles.scss"

// ** Lazy load app
const LazyApp = lazy(() => import("./App"))

const ability = defineAbilityFor("user")

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<Spinner className="align-center" />}>
				<AbilityContext.Provider value={ability}>
					<LazyApp />
				</AbilityContext.Provider>
			</Suspense>
		</Provider>
	</React.StrictMode>
)
