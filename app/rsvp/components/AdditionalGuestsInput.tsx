import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, PlusCircle } from "lucide-react";

interface AdditionalGuestsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  error?: string;
}

const AdditionalGuestsInput: React.FC<AdditionalGuestsInputProps> = ({
  value,
  onChange,
  error,
}) => {
  return (
    <div className="space-y-4">
      {value.map((guest, index) => (
        <div key={index} className="space-y-2 p-4 border rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Additional Guest {index + 1}
            </h3>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => {
                const updatedGuests = value.filter((_, i) => i !== index);
                onChange(updatedGuests);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`guest-name-${index}`}>Name</Label>
            <Input
              id={`guest-name-${index}`}
              placeholder="Enter guest's name"
              value={guest}
              onChange={(e) => {
                const updatedGuests = [...value];
                updatedGuests[index] = e.target.value;
                onChange(updatedGuests);
              }}
              required
            />
          </div>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        onClick={() => onChange([...value, ""])}
        className="w-full"
      >
        <PlusCircle className="mr-2 h-4 w-4" /> Add Additional Guest
      </Button>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default AdditionalGuestsInput;
