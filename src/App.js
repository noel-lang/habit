import React, { useEffect, useState } from "react";
import { Navbar, NavbarGroup, ButtonGroup, Alignment, NavbarHeading, Button, Classes, Card, H5, H3, H2, H1, NonIdealState, Overlay, EditableText } from "@blueprintjs/core";
import { Flex, Box } from "reflexbox";
import hotkeys from "hotkeys-js";

import "./App.css";

hotkeys("ctrl+n", (e, handler) => {
	e.preventDefault();
})

const App = () => {

	let [createOverlay, setCreateOverlay] = useState(false);

	useEffect(() => {
		hotkeys("ctrl+g", (e, handler) => {
			e.preventDefault();
			setCreateOverlay(!createOverlay);
		});

		/* hotkeys("esc", (e, handler) => {
			if (createOverlay) {
				setCreateOverlay(false);
			}
		}); */
	});

	return (
		<div>
			<Overlay
				onClose={() => setCreateOverlay(false)}
				isOpen={createOverlay}
				usePortal={true}
				enforceFocus={true}
				autoFocus={true}
				canEscapeKeyClose={true}
				canOutsideClickClose={true}
			>
				<Card className="habit-overlay">
					<H2 style={{ marginBottom: 50 }}>Neues Ziel erstellen</H2>
					<H1>
						<EditableText
							placeholder="Jeden Tag 10 Seiten lesen"
						/>
					</H1>
					<H5>
						<EditableText
							multiline={true}
							placeholder="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
						/>
					</H5>
				</Card>
			</Overlay>
			<div className="container" style={{ marginTop: 25 }}>
				<Navbar>
					<NavbarGroup align={Alignment.LEFT} style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
						<NavbarHeading><b>Habit.</b></NavbarHeading>
						<ButtonGroup>
							<Button className={Classes.MINIMAL} icon="home" text="Übersicht" />
							<Button className={Classes.MINIMAL} icon="home" text="Übersicht" />
							<Button className={Classes.MINIMAL} icon="home" text="Übersicht" />
						</ButtonGroup>
					</NavbarGroup>
				</Navbar>
			</div>
			<div className="container" style={{ marginTop: 25 }}>
				<h1>Deine Ziele</h1>
				<Flex flexWrap="wrap" mx={-3}>
					<Box width={1} px={3}>
						<div style={{ height: 300, display: "flex", alignItems: "center" }}>
							<NonIdealState
								icon={"text-highlight"}
								title={"Du hast noch keine Ziele erstellt"}
								description={"Füge dein erstes Ziel hinzu"}
							/>
						</div>
					</Box>
				</Flex>
			</div>
		</div>
	);
};

export default App;
