import { useState } from "react";
import { DayPicker } from "@daypicker/react";
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import "@daypicker/react/style.css";
import styles from "@/styles/datePicker.module.css";

export default function DatePicker({ id, name }: { id: string; name: string }) {
  const [selected, setSelected] = useState<Date>();
  const [open, setOpen] = useState(false);
  const {
    refs: { setReference, setFloating },
    floatingStyles,
    context,
  } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    strategy: "fixed",
    middleware: [offset(8), flip(), shift({ padding: 12 })],
    whileElementsMounted: autoUpdate,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);
  const value = selected
    ? `${selected.getFullYear()}-${String(selected.getMonth() + 1).padStart(2, "0")}-${String(selected.getDate()).padStart(2, "0")}`
    : "";

  return (
    <>
      <input type="hidden" name={name} value={value} />
      <button
        id={id}
        type="button"
        ref={setReference}
        className={styles.trigger}
        {...getReferenceProps()}
      >
        <span className={selected ? undefined : styles.placeholder}>
          {selected
            ? selected.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "Select a date"}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="3" />
          <path d="M16 3v4M8 3v4M3 11h18M8 15h2M14 15h2M8 18h2" />
        </svg>
      </button>
      {open && (
        <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
          <div
            ref={setFloating}
            style={floatingStyles}
            className={styles.popover}
            {...getFloatingProps({ "aria-label": "Choose next billing date" })}
          >
            <DayPicker
              mode="single"
              required
              autoFocus
              navLayout="after"
              showOutsideDays
              fixedWeeks
              defaultMonth={selected}
              selected={selected}
              onSelect={(date) => {
                setSelected(date);
                setOpen(false);
              }}
              className={styles.calendar}
            />
            <div className={styles.footer}>
              <button
                type="button"
                onClick={() => {
                  setSelected(undefined);
                  setOpen(false);
                }}
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelected(new Date());
                  setOpen(false);
                }}
              >
                Today
              </button>
            </div>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
