import styles from "./CargoProcess.module.css";

type ShipmentProcessStepsProps = {
  steps: readonly { title: string; desc: string }[];
};

export default function ShipmentProcessSteps({ steps }: ShipmentProcessStepsProps) {
  return <ol className={styles.steps}>
    {steps.map((step, index) => <li key={step.title} className={styles.step}>
      <div className={styles.marker} aria-hidden="true">
        <span className={styles.number}><span>{index + 1}</span></span>
        <span className={styles.connector} />
      </div>
      <div className={styles.copy}>
        <h3 className={styles.title}>{step.title}</h3>
        <p className={styles.description}>{step.desc}</p>
      </div>
    </li>)}
  </ol>;
}
